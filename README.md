# OptiGuard Monitoring — Website

Production-ready marketing site for OptiGuard Monitoring, a 24/7 remote CCTV monitoring company. Built with Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, React Icons and `next/image`.

Tagline: **We Keep You Ahead.**

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build && npm run start   # production build
npm run lint                     # eslint
```

Requires Node.js 18.17+ (Next.js 15).

## Tech stack

- **Next.js 15** App Router, React 18, TypeScript (strict)
- **Tailwind CSS 3.4** — brand tokens are the single source of truth in `tailwind.config.ts`
- **Framer Motion** — scroll reveals (respects `prefers-reduced-motion`)
- **next/font** — Space Grotesk (display), Inter (body), IBM Plex Mono (labels/stats)
- **react-icons** — Feather + brand glyphs

## Structure

```
src/
  app/            layout, page, globals.css, sitemap, robots, not-found, metadata
  components/
    ui/           Reveal, Section, Button, GlowCard, CamFrame, AnimatedCounter, ...
    common/       Logo, StructuredData (JSON-LD), ContactDock
    layout/       Navbar, Footer
    sections/     Hero, TrustStats, Services, HowItWorks, Platform, Industries,
                  Operators, WhyOptiGuard, Testimonials, FAQ, FreeTrialCTA, Contact
  lib/
    site.ts       contact details, nav, SITE metadata  ← edit contact/URL here
    content.ts    services, steps, industries, FAQs, stats, testimonials
    utils.ts      cn() class merge helper
public/
  images/         all photography + dashboard mockup
  favicon.svg, site.webmanifest
```

Design system: dark glassmorphism + cyan neon. The signature element is the
**CamFrame** — cyan corner brackets, a monospaced `CAM ##` label and a pulsing
LIVE dot — mirroring the overlays in OptiGuard's real footage. Reuse it anywhere
an image should read as a live operator feed.

## Editing content

- **Contact info / domain:** `src/lib/site.ts`. Phone, email and WhatsApp are
  already set from COMPANY_INFO.md. `SITE.url` is a **placeholder**
  (`https://optiguardmonitoring.com`) — set it to the real domain before deploy
  so canonical URLs, sitemap, robots and Open Graph tags are correct.
- **Sections content:** `src/lib/content.ts`.
- **Images:** drop into `public/images/` and reference by path.

## The contact form

The form has two actions, both validating name + (phone or email):

- **Request free trial** → opens WhatsApp with the details pre-filled (works with
  no setup; also fires on Enter).
- **Send my details** → POSTs to `/api/lead`, which forwards the lead to a Google
  Sheet and emails you a notification.

### Setting up "Send my details" (Google Sheet + email)

1. Create a Google Sheet (your leads database).
2. In it: **Extensions → Apps Script**. Paste `google-apps-script/Code.gs`,
   set `NOTIFY_EMAIL` if needed.
3. **Deploy → New deployment → Web app** — Execute as *Me*, access *Anyone*.
   Authorize, then copy the Web app URL.
4. Copy `.env.local.example` to `.env.local` and set:
   ```
   LEAD_WEBHOOK_URL=https://script.google.com/macros/s/XXXX/exec
   ```
   On Vercel, add the same key under **Settings → Environment Variables**, then redeploy.
5. Submit the form once — you'll see a new row in the Sheet and an email arrive.

Until `LEAD_WEBHOOK_URL` is set, "Send my details" shows a friendly error and
asks the visitor to use WhatsApp or email. The WhatsApp button needs no setup.

## Notes before you ship

- **Testimonials are clearly marked "Sample."** PROJECT_RULES.md forbids
  fabricated client quotes — swap in verified testimonials (and remove the
  sample badges/disclaimer in `Testimonials.tsx`) once you have them.
- **Stats are definitional, not invented.** Figures like "24/7" and the service
  area are factual; no performance percentages were fabricated.
- **Logo** is a clean inline SVG mark (shield + aperture) derived from the
  brand's visual language, since no vector logo file was provided. Replace
  `src/components/common/Logo.tsx` if you have an official asset.
- **SEO** is wired: per-page metadata, Open Graph + Twitter cards, JSON-LD
  `SecurityService` schema, sitemap and robots. Update `SITE.url` first.
- **Accessibility:** skip link, focus-visible rings, semantic landmarks, alt
  text, reduced-motion handling.

## Replacing placeholder assets

Search for `optiguardmonitoring.com` to find the deploy-time URL placeholder.
Everything else (contact details, copy, images) is real and sourced from the
uploaded brief.
