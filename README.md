# Faulkton Inn

Production-ready marketing site for Faulkton Inn, a family-run hotel at 700 Main Street in Faulkton, South Dakota.

## Local development

```bash
pnpm install
pnpm dev
pnpm lint
pnpm typecheck
pnpm build
```

The site works without credentials using typed local fixtures. Copy `.env.example` to `.env.local` to configure a canonical site URL or future content/booking integrations.

## Booking modes

The first release uses a redirect provider: the availability form validates and preserves guest intent, then clearly hands off to the current Expedia property page. It never treats the website or a CMS as the inventory source of truth. Replace this handoff with a documented PMS or booking-engine adapter after the inn confirms its system.

## Content and photos

Room names and configurations are provisional OTA-derived fixtures. Owner-edited display names can be changed independently of future provider IDs in `src/lib/data.ts`. Room photography intentionally uses labeled placeholders until approved property photos are supplied. The exterior photo comes from Faulkton Area Economic Development.

## Production checklist

- Obtain owner approval for room names, bed layouts, occupancies, story copy, amenities, and all policies.
- Confirm the authoritative booking engine and update the booking adapter.
- Replace room placeholders with approved, optimized property photography.
- Reconstruct the logo from original straight-on sign photos; the included SVG is a provisional mark derived from the public exterior photo and documented colors.
- Set `NEXT_PUBLIC_SITE_URL` to the custom production domain.
- Confirm accessibility features at the property and update room data.
- Test phone, email, directions, booking handoff, sitemap, canonical metadata, and mobile layouts.
- Add the final domain in Vercel, configure apex/`www` redirects, and verify HTTPS.
- Submit the sitemap to Google Search Console and update the Google Business Profile website URL.

## Staging noindex

Vercel preview deployments should remain protected or receive an `X-Robots-Tag: noindex` header before sharing publicly. Production currently allows indexing through `src/app/robots.ts`.
