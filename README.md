# Zilola Medical — Premium Website

A completely new, world-class marketing & catalog website for **Zilola Medical LLC**, a supplier and service partner of medical & laboratory technology in Tashkent, Uzbekistan.

Built from scratch with an original design system — **not** a redesign of the existing site. Only the business information (products, manufacturers, services, contacts) was reused as a content source.

## ✨ Design language

- **Identity:** "Clinical ink" surfaces + an *electric aurora* signature gradient (teal → cyan → indigo).
- **Type:** Space Grotesk (display) + Inter (body), optically tuned tracking.
- **Motion:** Framer Motion reveals, animated counters, magnetic/parallax hero, Lenis smooth scroll, floating aurora orbs, marquee, live-vitals hero console.
- **Feel:** Apple / Stripe / Linear / Siemens Healthineers-grade minimalism, glass, soft gradients, generous whitespace.

## 🧱 Tech stack

| | |
|---|---|
| Framework | Next.js 15 (App Router) + React 19 |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 (custom `@theme` design tokens) |
| Animation | Framer Motion · Lenis (smooth scroll) |
| Forms | React Hook Form + Zod |
| Icons | Lucide |
| SEO | Metadata API, JSON-LD (MedicalBusiness + Product), sitemap, robots |

## 📄 Pages

- `/` — Home: hero console, stats, why-us, categories, featured products, services, manufacturers, industries, certificates, testimonials, FAQ, CTA
- `/catalog` — searchable, filterable catalog (category · manufacturer · stock)
- `/products/[slug]` — 27 statically-generated product pages: gallery, specs, applications, downloads, sticky inquiry, related
- `/manufacturers` — 8 authorized partners
- `/services` — 8 engineering services + lifecycle process
- `/about` — mission, vision, timeline, projects, credentials
- `/contact` — validated inquiry form, contact channels, live map

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (39 static routes)
npm start        # serve production build
```

## 🗂️ Structure

```
app/                    # routes, layout, sitemap, robots, icon
components/
  home/                 # homepage sections
  catalog/ product/     # catalog + product detail
  contact/              # inquiry form
  layout/               # navbar, footer, contact dock
  ui/                   # design-system primitives (Button, Reveal, Counter, …)
  providers/            # Lenis smooth-scroll provider
lib/data/               # single source of truth: company, products,
                        # manufacturers, categories, services, content
```

## 🔧 Notes for going live

- **Product media:** the catalog uses a bespoke generated SVG visual system (`components/ui/product-visual.tsx`). Swap in real photography by adding an `images` field to each product and rendering it in `ProductVisual` / `ProductGallery`.
- **Contact form:** `components/contact/contact-form.tsx` currently simulates submission. Wire `onSubmit` to an API route, email service or CRM/Telegram bot.
- **Downloads:** datasheet/manual links point to `/contact` as placeholders — replace with real PDF assets.
- **Analytics / domain:** update the canonical URL in `app/layout.tsx` and `app/sitemap.ts` when the domain is finalized.
