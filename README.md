# Somana Debnath · Portfolio

Next.js + TypeScript + Tailwind CSS + Framer Motion. Deploys to Vercel with zero config.

- All copy lives in `src/data/content.ts`.
- Dev server: `npm run dev` (http://localhost:3010). Production: `npm run build && npm start`.
- Replace `public/resume.pdf` with your real resume.
- Regenerate project screenshots, favicon and og:image: `node scripts/generate-assets.mjs --screenshots --brand`.
- Optional: set `NEXT_PUBLIC_SITE_URL` (e.g. a custom domain) so og:image URLs are absolute; on Vercel the production URL is used automatically.
