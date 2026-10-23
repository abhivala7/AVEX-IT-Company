Server (backend)

Quick start:

1. cd server
2. npm install
3. Copy `.env.example` to `.env` and configure the SMTP settings, inquiry inbox, and private admin credentials.
4. npm start

Contact email notifications:
- Configure the Gmail SMTP and email values in `server/.env`: `SMTP_HOST=smtp.gmail.com`, `SMTP_PORT=587`, `SMTP_SECURE=false`, `SMTP_USER` (the sending Gmail account), `SMTP_PASS` (its Google App Password), `SMTP_FROM` (an authorized sender address), and `INQUIRY_TO=thymevala@gmail.com`.
- `SMTP_FROM` should use the sending Gmail account or another sender address authorized by Google. Create and use an App Password for `SMTP_PASS`; do not use the normal Google account password.
- Restart the server after editing `.env`. The Contact API returns success only after SMTP accepts the message. On SMTP failure it returns an error for the visitor to see. MongoDB is an optional archive for the admin dashboard; email delivery still works while MongoDB is unavailable.
- To verify delivery, run `npm start` from `server/`, submit the Contact form with a test name, your email, a subject, and a message, then confirm the full inquiry arrives at `INQUIRY_TO`. You can also POST the same fields as JSON to `/api/contact`.

Admin inquiries:
- Open `/admin/inquiries` in the frontend.
- Set `ADMIN_USERNAME` and an `ADMIN_PASSWORD` with at least 12 characters in the server `.env` file. Replace the example values with private credentials.
- Contact records are read from MongoDB's `avex` database. Set `MONGODB_URI` to override the local development URI.
- Admin sessions use an HttpOnly, SameSite=Strict cookie and expire after eight hours.

Minimal files:
- `server.js` — Express app entry
- `routes/contact.js` — Contact route (POST /api/contact)
- `controllers/contactController.js` — Handles requests
- `models/Contact.js` — Mongoose contact schema
- `config/db.js` — MongoDB connection helper
