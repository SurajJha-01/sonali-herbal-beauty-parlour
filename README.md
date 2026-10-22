# Sonali Herbal Beauty Parlour

A responsive Hindi/English beauty parlour website built with React and Vite.
The site includes service, bridal, gallery, about, and contact pages, with
business details managed centrally in `src/config/business.js`.

## Requirements

- Node.js compatible with the installed Vite version
- npm

## Install and run locally

```sh
npm ci
npm run dev
```

Vite prints the local development URL when the server starts.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local Vite development server |
| `npm run build` | Create the production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

There is currently no automated test suite configured.

## Pages

- `/` — Home
- `/services` — Confirmed services and category filters
- `/bridal` — Bridal information and local bridal imagery
- `/gallery` — Filterable image gallery and lightbox
- `/about` — Parlour and location information
- `/contact` — Contact details and an appointment enquiry form
- Other paths show the 404 page

## Project structure

- `src/components/` — Shared layout, contact, and UI components
- `src/config/business.js` — Business identity, contact information, hours, and feature flags
- `src/context/` — Language and theme providers and translations
- `src/data/` — Service catalogue
- `src/pages/` — Route pages and page-specific styles/data
- `src/styles/` — Global design tokens and theme styles
- `src/utils/` — Contact-link helpers
- `public/images/` — Local website imagery and icons

## Business configuration

Update verified business details in `src/config/business.js`. Keep the
WhatsApp verification flag `WHATSAPP_VERIFIED` set to `false` until the owner
confirms the configured number. Offers, statistics, and testimonials should
remain disabled until accurate business information is available.

## Deployment preparation

1. Confirm business contact details and the WhatsApp number with the owner.
2. Run `npm run lint` and `npm run build`.
3. Deploy the contents of `dist/` to a static host configured to serve
   `index.html` for client-side routes.
4. Set the final public domain in the hosting provider and verify direct
   navigation to each route.
5. The production domain is not configured in this project. Add a sitemap
   containing the final absolute public URLs and its absolute URL to
   `public/robots.txt` once that domain is known; no sitemap is included yet.
