# Contact Manager

A simple Contact Management app (frontend-only) built with React + Vite.

## Features

- Add, edit, and delete contacts
- Mark contacts as favorites (star)
- Dedicated **All Contacts** page
- Login and Signup placeholder pages (no backend)
- Light / dark theme toggle
- Moving background video (configurable) and an "About us" section on the home page

## Quick start

Requirements:
- Node.js (v16+ recommended)
- npm or yarn

1. Install dependencies

```bash
cd frontend
npm install
```

2. Run the dev server

```bash
npm run dev
```

3. Open http://localhost:5173 (or the address shown in the terminal)

## Project structure

- `frontend/` — React app folder
  - `src/components` — UI components (`Header`, `ContactForm`, `ContactList`, `ContactCard`)
  - `src/pages` — Page views (`AllContacts`, `Login`, `Signup`)

## Notes

- This project is frontend-only and keeps state in memory. To persist data across reloads, consider using localStorage or adding a backend API.
- The Login/Signup pages are placeholders and do not perform real authentication.

## License

MIT
