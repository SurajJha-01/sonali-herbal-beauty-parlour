# Sonali Herbal Beauty Parlour 🌸

Sonali Herbal Beauty Parlour is a local beauty parlour based in **Madhubani, Bihar, India**, dedicated to helping customers explore beauty care, skincare, makeup, and bridal beauty services. This responsive, bilingual (Hindi and English) website is built with **React and Vite** to give the parlour a professional online presence. Visitors can explore available services, discover bridal beauty inspiration, browse the image gallery, learn about the parlour, and contact the business for appointment enquiries through convenient calling and WhatsApp options.

## ✨ Features

- **Responsive Design** — Designed for mobile, tablet, and desktop screens.
- **Hindi & English** — Language switching for supported website content.
- **Light & Dark Themes** — Theme switching for a comfortable browsing experience.
- **Services Page** — Browse beauty services and available categories.
- **Bridal Page** — Explore bridal beauty information and inspiration.
- **Gallery** — Browse images using category filters and a lightbox.
- **About Page** — Learn about the parlour and its location.
- **Contact Page** — View business contact information and submit appointment enquiries.
- **Quick Contact** — Calling and WhatsApp links for convenient communication.
- **Centralized Business Details** — Manage business information in one configuration file.
- **Custom 404 Page** — Helpful page for unavailable routes.

## 🛠️ Technology Stack

- **React** — User interface
- **Vite** — Development server and production build
- **JavaScript** — Application logic
- **CSS** — Styling and responsive layouts
- **React Router** — Client-side navigation
- **npm** — Dependency management

## 📋 Prerequisites

Install the following before running the project:

- Node.js version compatible with the installed Vite version
- npm (included with Node.js)

Check your installed versions:

```bash
node --version
npm --version
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/SurajJha-01/sonali-herbal-beauty-parlour.git
cd sonali-herbal-beauty-parlour
```

### 2. Install dependencies

```bash
npm ci
```

### 3. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal to view the website.

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the local development server |
| `npm run build` | Creates the production build in `dist/` |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs Oxlint to check for code issues |

## 📄 Website Pages

| Route | Description |
|---|---|
| `/` | Home page |
| `/services` | Beauty services and category filters |
| `/bridal` | Bridal beauty information and imagery |
| `/gallery` | Filterable image gallery with lightbox |
| `/about` | Parlour information and location |
| `/contact` | Contact details and appointment enquiries |
| Other paths | Custom 404 page |

## 📁 Project Structure

```text
sonali-herbal-beauty-parlour/
├── public/
│   ├── images/          # Website images and public assets
│   └── favicon.svg      # Website favicon
├── src/
│   ├── components/      # Shared UI and layout components
│   ├── config/
│   │   └── business.js  # Business details and configuration
│   ├── context/         # Language and theme providers
│   ├── data/            # Service catalogue
│   ├── pages/           # Website pages
│   ├── styles/          # Global styles and design tokens
│   └── utils/           # Contact-link helpers
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## 🏪 Business Configuration

Business details are maintained in:

```text
src/config/business.js
```

Update the contact number, WhatsApp number, email, address, opening hours, and other business settings there.

**Important:** Verify all contact details with the business owner before publishing. Keep WhatsApp verification disabled until the owner confirms the configured number. Only publish verified offers, statistics, and testimonials.

## 📬 Appointment Enquiries

The contact form is frontend-only. It prepares an enquiry through the configured WhatsApp or email flow; it does not store submissions in a database or send them to a custom backend.

Visitors should review the prepared message and send it through their selected contact app.

## 🏗️ Production Build

Run the following commands before deployment:

```bash
npm run lint
npm run build
```

Vite generates the production-ready files in:

```text
dist/
```

You can test the production build locally with:

```bash
npm run preview
```

## ☁️ Deployment

This project can be deployed to a static hosting provider that supports Vite applications.

Typical deployment settings:

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Framework:** Vite
- **Environment variables:** None required for the current frontend configuration, unless the project is changed later.

Because the website uses client-side routing, configure the hosting provider to serve `index.html` for supported application routes.

Before publishing:

1. Confirm business details and the WhatsApp number with the owner.
2. Run lint and build checks.
3. Test the website on mobile and desktop.
4. Verify navigation, contact links, images, and direct access to each route.
5. Connect the approved production domain.
6. Configure a sitemap and update `robots.txt` after the final public domain is known.

## 🔒 Security & Privacy

- Do not commit `.env` files, credentials, API keys, or other secrets.
- Keep local dependencies and generated build files out of Git.
- Confirm repository visibility with the business owner before publishing source code publicly.
- Collect or store customer information only if an appropriate backend and privacy safeguards are implemented.

## 📌 Project Status

The frontend includes the main website pages, bilingual interface, theme switching, image gallery, and contact enquiry flow. Hosting and the final production domain should be confirmed separately.

---

**Built with React and Vite for Sonali Herbal Beauty Parlour.**
