import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { google } from 'googleapis';
import { Resend } from 'resend';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ================== RESEND SETUP ==================
const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = process.env.FROM_EMAIL;

// ================== GOOGLE OAUTH SETUP ==================
const TOKEN_PATH = path.join(process.cwd(), 'google_tokens.json');
const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI;

const oAuth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  REDIRECT_URI
);

// Load tokens
function loadGoogleCredentials() {
  try {
    if (fs.existsSync(TOKEN_PATH)) {
      const tokens = JSON.parse(fs.readFileSync(TOKEN_PATH, 'utf8'));
      oAuth2Client.setCredentials(tokens);
      console.log('✅ Google tokens loaded from file');
      return;
    }
  } catch (err) {
    console.warn('Token load error:', err.message);
  }

  if (process.env.GOOGLE_REFRESH_TOKEN) {
    oAuth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
    });
    console.log('✅ Google refresh token loaded from env');
  }
}

loadGoogleCredentials();

const calendar = google.calendar({
  version: 'v3',
  auth: oAuth2Client,
});

// ================== GOOGLE AUTH ROUTES ==================
app.get('/api/auth/google', (req, res) => {
  const url = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: ['https://www.googleapis.com/auth/calendar'],
  });
  res.redirect(url);
});

app.get('/api/auth/google/callback', async (req, res) => {
  try {
    const { tokens } = await oAuth2Client.getToken(req.query.code);
    oAuth2Client.setCredentials(tokens);
    fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens, null, 2));
    res.send('✅ Google Calendar connected. You can close this tab.');
  } catch (err) {
    console.error(err);
    res.status(500).send('OAuth failed');
  }
});

// ================== SUBSCRIBE API ==================
app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const data = await resend.emails.send({
      from: 'support@mail.marketwise.dev',
      to: 'chowdeswari599@gmail.com', // Replace with owner's email
      subject: 'New Newsletter Subscription',
      html: `<p>A new user has subscribed to the newsletter with email: <strong>${email}</strong></p>`,
    });

    if (data.error) {
      throw new Error(data.error.message);
    }

    res.status(200).json({ message: 'Subscription successful', data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || 'Failed to send email' });
  }
});

// ================== BOOK CALL API ==================
app.post('/api/book-call', async (req, res) => {
  const { name, email, startIso } = req.body;

  if (!name || !email || !startIso) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  try {
    const start = new Date(startIso);
    const end = new Date(start.getTime() + 30 * 60000);

    const event = {
      summary: `Call with ${name}`,
      description: `Name: ${name}\nEmail: ${email}`,
      start: { dateTime: start.toISOString() },
      end: { dateTime: end.toISOString() },
      attendees: [{ email }],
      conferenceData: {
        createRequest: {
          requestId: `meet-${Date.now()}`,
          conferenceSolutionKey: { type: 'hangoutsMeet' },
        },
      },
    };

    const response = await calendar.events.insert({
      calendarId: 'primary',
      requestBody: event,
      conferenceDataVersion: 1,
    });

    res.json({
      meetLink: response.data.hangoutLink,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// ==================
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import fs from 'fs';
// import path from 'path';
// import { google } from 'googleapis';
// import { Resend } from 'resend';

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// // ================== RESEND (SUBSCRIBE) ==================
// const resend = new Resend(process.env.RESEND_API_KEY);

// // ================== GOOGLE OAUTH SETUP ==================
// const TOKEN_PATH = path.join(process.cwd(), 'google_tokens.json');
// const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI;

// const oAuth2Client = new google.auth.OAuth2(
//   process.env.GOOGLE_CLIENT_ID,
//   process.env.GOOGLE_CLIENT_SECRET,
//   REDIRECT_URI
// );

// // Load saved tokens or env refresh token
// function loadGoogleCredentials() {
//   try {
//     if (fs.existsSync(TOKEN_PATH)) {
//       const tokens = JSON.parse(fs.readFileSync(TOKEN_PATH, 'utf8'));
//       oAuth2Client.setCredentials(tokens);
//       console.log('✅ Google tokens loaded from file');
//       return;
//     }
//   } catch (err) {
//     console.warn('Token load error:', err.message);
//   }

//   if (process.env.GOOGLE_REFRESH_TOKEN) {
//     oAuth2Client.setCredentials({
//       refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
//     });
//     console.log('✅ Google refresh token loaded from env');
//   }
// }

// loadGoogleCredentials();

// const calendar = google.calendar({
//   version: 'v3',
//   auth: oAuth2Client,
// });

// // ================== GOOGLE AUTH ROUTES ==================
// app.get('/api/auth/google', (req, res) => {
//   const url = oAuth2Client.generateAuthUrl({
//     access_type: 'offline',
//     prompt: 'consent',
//     scope: ['https://www.googleapis.com/auth/calendar'],
//   });
//   res.redirect(url);
// });

// app.get('/api/auth/google/callback', async (req, res) => {
//   try {
//     const { tokens } = await oAuth2Client.getToken(req.query.code);
//     oAuth2Client.setCredentials(tokens);
//     fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens, null, 2));
//     res.send('✅ Google Calendar connected. You can close this tab.');
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('OAuth failed');
//   }
// });

// // ================== YOUR SUBSCRIBE API (OWNER EMAIL) ==================
// app.post('/api/subscribe', async (req, res) => {
//   const { email } = req.body;

//   if (!email) {
//     return res.status(400).json({ error: 'Email is required' });
//   }

//   try {
//     const data = await resend.emails.send({
//       from: 'support@mail.marketwise.dev',
//       to: 'chowdeswari599@gmail.com', // Owner email
//       subject: 'New Newsletter Subscription',
//       html: `<p>A new user has subscribed with email: <strong>${email}</strong></p>`,
//     });

//     if (data.error) {
//       throw new Error(data.error.message);
//     }

//     res.status(200).json({ message: 'Subscription successful', data });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: error.message || 'Failed to send email' });
//   }
// });

// // ================== BOOK CALL API ==================
// app.post('/api/book-call', async (req, res) => {
//   const { name, email, startIso } = req.body;

//   if (!name || !email || !startIso) {
//     return res.status(400).json({ error: 'Missing fields' });
//   }

//   try {
//     const start = new Date(startIso);
//     const end = new Date(start.getTime() + 30 * 60000);

//     const event = {
//       summary: `Call with ${name}`,
//       description: `Name: ${name}\nEmail: ${email}`,
//       start: { dateTime: start.toISOString() },
//       end: { dateTime: end.toISOString() },
//       attendees: [{ email }],
//       conferenceData: {
//         createRequest: {
//           requestId: `meet-${Date.now()}`,
//           conferenceSolutionKey: { type: 'hangoutsMeet' },
//         },
//       },
//     };

//     const response = await calendar.events.insert({
//       calendarId: 'primary',
//       requestBody: event,
//       conferenceDataVersion: 1,
//     });

//     res.json({
//       meetLink: response.data.hangoutLink,
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: err.message });
//   }
// });

// // ==================
// app.listen(port, () => {
//   console.log(`🚀 Server running on port ${port}`);
// });
