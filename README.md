# Prakash Magar — Personal Portfolio

A personal portfolio site built with React and Vite. Showcases about me, education, experience, and projects sections, plus a working contact form powered by EmailJS.

## Tech stack

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/) for dev server and bundling
- CSS Modules for component-scoped styling
- [EmailJS](https://www.emailjs.com/) for the contact form
- [Fontsource](https://fontsource.org/) (Outfit, Roboto) for self-hosted fonts

## Getting started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Environment variables

The contact form needs an [EmailJS](https://www.emailjs.com/) account. Copy the example env file and fill in your own credentials:

```bash
cp .env.example .env
```

```
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

`.env` is gitignored — never commit real credentials.

### Run the dev server

```bash
npm run dev
```

Vite will print a local URL (defaults to `http://localhost:5173`).

### Other scripts

```bash
npm run build    # production build to dist/
npm run preview  # preview the production build locally
npm run lint     # run ESLint
```

## Project structure

```
src/
  Components/       # one folder per section (About, Contact, Education, Experience, Navbar, Profile, Projects)
  data/             # history.json (experience) and project.json (projects) content
  utils.js          # getImageUrl() helper for resolving files under assets/
assets/             # images used across sections
```

Each component folder contains its `.jsx` file and a matching `.module.css` file for scoped styles. Content for the Experience and Projects sections is data-driven from the JSON files in `src/data/`, so adding a new role or project doesn't require touching component code.
