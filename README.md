# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## Google Calendar booking (server-side)

This project includes a server endpoint to create Google Calendar events on the owner's calendar: `POST /api/book-call`.

Required environment variables (add to your `.env`):

- `GOOGLE_CLIENT_ID` – OAuth client ID from Google Cloud Console
- `GOOGLE_CLIENT_SECRET` – OAuth client secret
- `GOOGLE_REFRESH_TOKEN` – a refresh token for the owner's account (see notes below)
- `CALENDAR_ID` – optional, defaults to `primary`

Notes:
- The server uses the OAuth2 refresh token to obtain access tokens and create events using the Google Calendar API. To obtain a refresh token for your account you can use the OAuth 2.0 Playground or a one-off script that requests the `https://www.googleapis.com/auth/calendar` scope with `access_type=offline`.
- Ensure the Google Calendar API is enabled in your Google Cloud project and the OAuth consent screen is configured.

Quick test (after setting env and installing dependencies):

```bash
# install server dependency
npm install googleapis

# run the server
node server.js
```

Then from the client (the header booking dialog) you can submit a booking which will call `/api/book-call` and create the event on the configured calendar.

Interactive connect flow:

- To let the owner connect their Google account interactively, visit:

	- `GET /api/auth/google` — redirects to Google's OAuth consent screen. After consenting, Google will redirect back to `/api/auth/google/callback` which stores the returned tokens in `google_tokens.json` in the project root.

- After connecting, check status at `GET /api/auth/google/status` which returns JSON `{ connected: true }` when tokens are present.

- Notes: The server persists tokens to `google_tokens.json`. Ensure the server process has write permission to the project directory.
