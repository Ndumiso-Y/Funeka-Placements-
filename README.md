# FUNEKA PLACEMENTS — World-Class Recruitment Website (Starter ZIP)

This project is a **content-filled starter build** (not a skeleton) designed to:
- Run locally immediately
- Deploy to **GitHub Pages** (HashRouter)
- Deploy to **cPanel** (upload `/dist` contents)
- Serve as the long-term foundation for Funeka Placements

## Tech Stack
- React + Vite
- Tailwind CSS (npm install, not CDN)
- React Router (HashRouter for GitHub Pages safety)
- Icons: lucide-react

## Quick Start (Local)
1. Open this folder in VS Code
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run locally:
   ```bash
   npm run dev
   ```
4. Build:
   ```bash
   npm run build
   ```

## Deploy: GitHub Pages (Recommended workflow)
This build uses:
- `HashRouter` for refresh-safe routing on GitHub Pages
- `vite.config.js` has `base: "./"` to keep assets working on Pages and cPanel

Typical steps:
1. Build:
   ```bash
   npm run build
   ```
2. Commit and push to GitHub.
3. In GitHub repo settings:
   - Pages → Build and deployment → select the correct branch/folder (commonly `/docs` or GitHub Actions).
4. If using a GitHub Actions Pages workflow, point it to publish the `/dist` folder.

> Note: This ZIP ships without `node_modules` (as required). Always run `npm install` after extracting.

## Deploy: cPanel
1. Build:
   ```bash
   npm run build
   ```
2. Upload the **contents** of the `dist/` folder to your hosting public directory (e.g., `public_html/`).
3. Ensure your domain points to that folder.

Because this uses **HashRouter**, you do not need server rewrites for client-side routes.

## Routes Included (per brief)
- `/` Home  
- `/about` Company Profile  
- `/employers` Hire Talent  
- `/candidates` For Candidates  
- `/jobs` Job Listings  
- `/jobs/:id` Job Detail  
- `/apply` Submit CV  
- `/services` Services & Value Adds  
- `/process` Recruitment Process (12 Steps)  
- `/contact` Contact  
- `/privacy` POPIA & Privacy  
- `/staff/login` Staff Login  
- `/staff` Staff Dashboard (Protected)

## Staff Portal (Phase 1 Foundation)
- Admin-created accounts only (no public signup)
- Starter default credentials (for immediate testing):
  - Email: `admin@funekaplacements.co.za`
  - Password: `Funeka@123`
- Active features:
  - Dashboard overview
  - Invoices (create/view)
  - Documents upload
  - Basic activity log
- Locked previews:
  - Candidate pipeline
  - Compliance tracking (AFIS/MIE)
  - Timesheets
  - Reports

Locked items show grayscale + opacity + 🔒 and open a modal:
**“Feature preview – Coming soon / Upgrade available”**

## Assets
Paths are locked by brief:
- Images: `src/assets/images/`
- Logos: `src/assets/logos/`

This ZIP includes **placeholder image files with the correct filenames** so the project runs without broken imports.
Replace them with the real assets when available.

## Job Data Model
- `src/data/jobs.js` (6 South Africa-style roles)
- Fields:
  - `id`, `title`, `location`, `employmentType`, `summary`, `responsibilities[]`, `requirements[]`, `applyEmail`

## Asset Optimisation
See: `scripts/ffmpeg-commands.txt`
