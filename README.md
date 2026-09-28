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

The site works without credentials using typed local fixtures. Copy `.env.example` to `.env.local` to configure a canonical site URL or future content integrations.

## Reservations

Reservations, rates, and current availability are confirmed directly by phone. Availability calls to action open an accessible call prompt and never imply live online inventory.

## Content and photos

Room names and configurations are working fixtures pending owner confirmation. Approved display names can be updated in `src/lib/data.ts`. Property and destination photography is stored locally with the site.

## Production checklist

- Obtain owner approval for room names, bed layouts, occupancies, story copy, amenities, and all policies.
- Replace “Call for current rate” labels only after the inn supplies approved typical rates.
- Replace room placeholders with approved, optimized property photography.
- Reconstruct the logo from original straight-on sign photos; the included SVG is a provisional mark derived from the public exterior photo and documented colors.
- Set `NEXT_PUBLIC_SITE_URL` to the custom production domain.
- Confirm accessibility features at the property and update room data.
- Test phone, email, directions, call prompts, sitemap, canonical metadata, and mobile layouts.
- Add the final domain in Vercel, configure apex/`www` redirects, and verify HTTPS.
- Submit the sitemap to Google Search Console and update the Google Business Profile website URL.

## Staging noindex

Vercel preview deployments should remain protected or receive an `X-Robots-Tag: noindex` header before sharing publicly. Production currently allows indexing through `src/app/robots.ts`.
