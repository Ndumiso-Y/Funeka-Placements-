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
- `/staff/login` Staff Portal unavailable placeholder  
- `/staff` Staff Portal unavailable placeholder

## Staff Portal (Phase 1 Foundation)
- Staff portal routes are disabled for public production until real backend authentication is implemented.
- Do not ship mock staff credentials in production.
- Re-enable only after integrating a secure authentication provider and role-based access control.
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

## SEO and Google Search Console Setup
After deployment, the owner should:
1. Go to Google Search Console.
2. Add the property: `https://www.funekaplacements.co.za/`
3. Verify the domain using DNS TXT verification or HTML file verification.
4. Submit the sitemap: `https://www.funekaplacements.co.za/sitemap.xml`
5. Request indexing for the homepage.
6. Create or update the Google Business Profile for Funeka Placements, because local SEO in Rustenburg depends heavily on Google Maps and business profile visibility.

Confirmed local business details for Google Business Profile and directory listings:
- Business name: Funeka Placements
- Address: 28 Abbie Str, Rustenburg Visitors Center
- Email: rustenburg@funekaplacements.co.za
- Phone: 014 88 00 501
- WhatsApp: 078 342 6211
- Operating hours: Monday–Thursday: 07:30–15:30; Friday: 07:30–15:00

## Local SEO Notes
Winning local SEO requires more than code. Keep the following consistent and active:
- Google Business Profile setup and maintenance.
- Consistent business name, address or service area, and contact details across the website, directories, and social profiles.
- Local backlinks from trusted Rustenburg, North West, recruitment, business, and industry sources.
- Regular content updates for recruitment services, staffing support, job placement services, and hiring advice.
- Reviews from real clients and candidates.
- Clear service pages for employers and job seekers.
- Fast website performance and optimized images.
- Sitemap submitted to Google Search Console.
