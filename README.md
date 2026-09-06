# Portfolio — saikaungkhantzaw.com

Single-page portfolio built with Next.js (App Router), server-rendered for genuine crawlability by search engines, ATS systems, and link-preview bots.

## Stack

- Next.js / React, App Router
- next/font (Schibsted Grotesk, IBM Plex Sans, IBM Plex Mono)
- next/og for a dynamically generated Open Graph image
- Deployed on Vercel

## Structure

- `src/lib/content.js` — all site copy (metrics, projects, experience, education, bio, contact). Edit this to change content.
- `src/components/` — one component per section, each with its own CSS module.
- `src/app/` — layout, page, and route handlers for `sitemap.xml`, `robots.txt`, and the OG image.

## Before deploying

- Add the real CV file at `public/cv.pdf`.
- Confirm the contact email and add LinkedIn/GitHub URLs in `src/lib/content.js` (`site.email`, `site.links`).

## Commands

```bash
npm run dev     # local dev server
npm run build   # production build
npm run start   # serve the production build
npm run lint    # oxlint
```
