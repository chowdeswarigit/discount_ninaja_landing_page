import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});