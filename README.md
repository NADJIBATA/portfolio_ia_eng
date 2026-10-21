# Nadjib Atamnia — Portfolio

Personal portfolio built with **Next.js 16 (App Router)**, **TypeScript** and **Tailwind CSS v4**.
Exported as a fully static site.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Edit the content

Everything you see on the site lives in **`data/content.ts`**: profile, stats, projects, experience, skills.

- Project screenshots → `public/projects/` (`.webp`, ~1600px wide)
- Résumé → `public/cv/Nadjib_Atamnia_CV.pdf` (replace the file, keep the name)

## Deploy on Vercel (free, recommended)

1. Push this folder to a new GitHub repository (e.g. `portfolio`).
2. Go to vercel.com → **Add New Project** → import the repo → **Deploy**. No configuration needed.
3. Optional: add a custom domain (e.g. `nadjibatamnia.dev`) in *Project → Settings → Domains*,
   then update `metadataBase` in `app/layout.tsx`.

## Other hosts

`npm run build` writes the static site to `out/` — upload it to Netlify, Cloudflare Pages or GitHub Pages.

## Structure

```
app/
  layout.tsx      fonts, SEO metadata
  page.tsx        all sections (hero, projects, experience, skills, contact)
  globals.css     theme tokens (colors, fonts, animations)
components/
  Nav.tsx         sticky navigation + mobile menu
  PipelineCard.tsx  animated RAG trace in the hero
  Gallery.tsx     screenshot switcher for featured projects
data/content.ts   all text content
```
