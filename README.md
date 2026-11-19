# AVEX IT Company Website

AVEX is a responsive company website built with React and Vite. Its Express API handles contact inquiries and admin access to inquiry records.

## Project structure

- `client/` — React pages, components, styles, and public images
- `server/` — Express routes, request handlers, admin session middleware, MongoDB model, and email configuration

## Run locally

Use a current Node.js release. Install dependencies in each application folder:

```sh
cd client && npm install
cd ../server && npm install
```

Create `server/.env` from `server/.env.example` and configure the values for your environment. Keep `.env` private; it is excluded from Git. MongoDB is used to archive inquiries for the admin page. SMTP settings are needed to deliver contact form emails.

Start the API in one terminal:

```sh
cd server
npm start
```

Start the frontend in another terminal:

```sh
cd client
npm run dev
```

The Vite development server forwards `/api` requests to the local Express server.

## Website routes

- `/` — Home
- `/about` — About AVEX and company information
- `/team` — Team page
- `/services` and `/services/:serviceSlug` — Services and service details
- `/solutions` and `/solutions/:solutionSlug` — Solutions and solution details
- `/projects` and `/projects/:projectSlug` — Projects and project details
- `/contact` — Contact form
- `/admin/inquiries` — Admin sign-in and inquiry list

## Validation

```sh
cd client && npm run build
cd ../server && node --check server.js
```

The contact API requires valid form fields and SMTP configuration to deliver email. MongoDB records are available to the admin page when the database connection is configured and running.
