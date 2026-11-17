# Sensation Infracon - Official Corporate Website

A modern, fast, mobile-first website for **Sensation Infracon Pvt. Ltd.**, real estate developer and capital partner headquartered in Hyderabad, India. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

---

## 1. Design Direction & Aesthetic

- **Theme:** A Land Survey Map. Uses plot grids, thin measured lines (`1px border-mist`), coordinate stamps, and architectural structure.
- **Color Tokens:**
  - `ink`: `#13284A` (Primary brand navy)
  - `brass`: `#B38B2E` (Plot fill accent, badges, deliberate highlights)
  - `paper`: `#F5F6F2` (Tactile vellum background)
  - `mist`: `#DCE2DE` (Fine hairline survey grid rules)
  - `text`: `#1E2A36` (High-contrast body text)
- **Typography:**
  - Headings: `Bricolage Grotesque`
  - Body: `Instrument Sans`
  - Sentence case strictly enforced across all UI labels and components.
- **Micro-Interactions & Animation:**
  - Exactly one CSS animation: on the first screen of the home page, where 5 surveyed parcels fill sequentially with brass color (`@keyframes plotFill`).
  - Full support for `prefers-reduced-motion: reduce`.
- **Content Separation:** All site copy, projects, offices, partner details, and testimonials reside in `/content/` as JSON or Markdown. No text is hardcoded in React components.

---

## 2. Tech Stack

- **Framework:** Next.js (App Router) with TypeScript
- **Styling:** Tailwind CSS (configured with custom design tokens)
- **Export Mode:** Static HTML export (`output: "export"` with `trailingSlash: true`)
- **Images:** `next/image` with WebP format and explicit dimensions
- **Markdown Parser:** `gray-matter` and `remark`
- **Forms:** Formspree integration (`YOUR_FORM_ID`) with honeypot spam protection and client-side validation
- **Database:** None (Fully static, zero-database architecture)

---

## 3. Getting Started (Local Development)

### Prerequisites
- Node.js (v18.17.0 or higher recommended; verified on Node v24)
- npm (v9 or higher)

### Installation
```bash
# Clone or navigate to the repository directory
cd sensationinfracon

# Install project dependencies
npm install
```

### Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to explore the website.

---

## 4. Production Build & Static Export

To create the production-ready static export:

```bash
npm run build
```

This compiles all routes, renders Markdown blog posts, generates `sitemap.xml` and `robots.txt`, and outputs static HTML/CSS/JS into the `/out` directory.

---

## 5. Deployment Instructions

### Deploying to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. In the Vercel dashboard, click **Add New Project** and select the repository.
3. Configure the Project Settings:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** `out`
4. Click **Deploy**. Vercel will deploy the static site globally across its Edge Network.

### Deploying to Netlify

1. In the Netlify dashboard, click **Add new site** > **Import an existing project**.
2. Connect your Git repository.
3. Configure Build Settings:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `out`
4. Click **Deploy Site**. Netlify will host the static assets directly.

---

## 6. Project Structure

```
sensationinfracon/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx            # Global layout with schema.org JSON-LD & fonts
│   ├── page.tsx              # Home page (Hero, metrics, project types, video, journal)
│   ├── about/page.tsx        # About page (Overview, model, Sensation Capital)
│   ├── projects/             # Projects directory & detail
│   │   ├── page.tsx          # Filterable listing (by city & type)
│   │   └── [slug]/page.tsx   # Project detail sheet (specs table, map, gallery)
│   ├── hospitality-partners/ # Hospitality partner portal
│   ├── project-consultants/  # Project consultants portal
│   ├── visionary-investments/# Visionary investments / Sensation Capital
│   ├── channel-partners/     # Channel partner portal & ECRP link
│   ├── testimonials/         # Investor and partner testimonials
│   ├── blog/                 # Research journal index & detail
│   │   ├── page.tsx          # 10 legacy articles index
│   │   └── [slug]/page.tsx   # Markdown-rendered article reading view
│   ├── contact/page.tsx      # All 7 offices, Google Maps links, and enquiry form
│   ├── not-found.tsx         # Cadastral boundary 404 page
│   ├── sitemap.ts            # Dynamic sitemap generator
│   └── robots.ts             # Robots.txt generator
├── components/               # Reusable UI components
│   ├── Header.tsx            # Floating pill navigation & mobile menu
│   ├── Footer.tsx            # All 7 offices directory, legal, & contact desk
│   ├── EnquiryForm.tsx       # Formspree submission, client-side validation, honeypot
│   ├── PlotSurveyHero.tsx    # SVG land cadastre with sequential CSS plot fill
│   ├── ProjectCard.tsx       # Cadastral project specification card
│   ├── ProjectsDirectory.tsx # Interactive city & type filter
│   ├── VideoFacade.tsx       # Click-to-load YouTube presentation facade
│   ├── PlaceholderImage.tsx  # Architectural grey box with dimensional labels
│   └── SkipLink.tsx          # Accessible keyboard skip link
├── content/                  # Pure static data store (No database)
│   ├── site.json             # Corporate facts, numbers, home page copy
│   ├── offices.json          # All 7 regional & international offices
│   ├── projects.json         # Plotted & serviced living parcels (with TODOs)
│   ├── partners.json         # All 4 partner programs & models
│   ├── testimonials.json     # Client testimonial records (with TODOs)
│   └── blog/                 # 10 Markdown articles with frontmatter
├── public/                   # Static assets
│   └── images/               # Converted WebP legacy images & logo
├── CLAIMS_TO_CONFIRM.md      # Numerical & marketing claims needing client sign-off
├── TODO.md                   # List of missing client assets and content
├── next.config.mjs           # Next.js export & unoptimized image config
├── tailwind.config.ts        # Custom design tokens (ink, brass, paper, mist, text)
└── package.json
```

---

## 7. Formspree Configuration

In production, replace the placeholder `YOUR_FORM_ID` in `content/site.json` and `components/EnquiryForm.tsx` with your registered Formspree form ID:
```
https://formspree.io/f/<YOUR_ACTUAL_FORM_ID>
```
The form includes:
- Client-side validation for Name, Email, Phone, City, and Message
- Hidden antispam honeypot field (`_gotcha`)
- Role routing (Investor, Landowner, Buyer, Channel partner)
- Accessible error and success message banners
