# AVEX Frontend

React single-page application powered by Vite. It contains the AVEX home, company, team, services, solutions, projects, and contact pages. The admin inquiry view is available at `/admin/inquiries`.

## Development

Install dependencies and start Vite:

```sh
npm install
npm run dev
```

The development server proxies `/api` requests to `http://localhost:4000`. Start the Express API from `../server` in a second terminal.

## Production build

```sh
npm run build
npm run preview
```

See the [project README](../README.md) for full-stack setup and environment configuration.
