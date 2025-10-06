# space-mern-portfolio

This repo is a small space-themed MERN portfolio starter. It includes:

- backend: Express + Mongoose API for projects
- frontend: Vite + React app with a space-themed UI

Quick start (Windows PowerShell):

1. Install backend deps and start server

   cd backend; npm install; npm run dev

2. (Optional) Seed sample projects

   node scripts/seed.js

3. Run frontend

   cd ../frontend; npm install; npm run dev

Frontend dev server proxies /api to the backend on port 5000 by default.

Env variables

- Create a `.env` in `backend/` with `MONGO_URI` if you want a custom MongoDB connection.

Notes

- Replace placeholder images in `frontend/public/images/` with real images.
- The frontend expects the backend at `http://localhost:5000` (the proxy in `vite.config.js` forwards `/api`).

If you want, I can:
- Add authentication, a contact form, or deploy scripts next.

