# Enchanted Artistry Landing Page System

## Operating mode

Production refinement. The public repository is connected to Vercel, so a verified push to `main` is the release handoff.

## Reading order

1. `SYSTEM.md`
2. `PRODUCT.md`
3. `BRAND.md`
4. `CONTENT_PLAN.md`
5. `BUILD_PLAN.md`
6. `ASSET_MANIFEST.md`
7. `PROOF.md`

## Exact deliverable

- One responsive Next.js landing page at `/`.
- Visual direction based on the client-approved screenshot in `reference/client-approved-layout/`.
- Authentic portraits of founders Anthea Jade Feris and Chané Yvette Philander.
- Preserved client logo, one client-authorised descriptor correction, five service images and the current supplied founder photos.
- Desktop and mobile navigation, anchor links, an email enquiry action and two labelled WhatsApp actions.
- Public indexing, favicon and web manifest.

## Identity and asset rules

- The supplied raster logo is authoritative. Use only the PNG derivatives in `public/logos/` or `assets/logos/`.
- Never trace, redraw, regenerate, simplify, recolour or reinterpret the logo. The approved website derivative changes only the descriptor line to `COSMETOLOGY · ARTS · MENTORSHIP AND GUIDANCE`.
- Do not create an SVG logo. Prior vector attempts are rejected and absent.
- Founder portraits are authentic client-supplied photographs. Do not retouch faces or present generated people as founders.
- Generated supporting images may illustrate service categories only. They are not documentary evidence.
- Preserve the approved blush, rose, lavender, charcoal and gold visual language.

## Factual restrictions

- Do not invent prices, opening hours, programmes, testimonials, awards, partners, additional phone numbers, social handles or impact figures.
- Future youth mentorship and media initiatives must remain future-facing.
- `heyitschane@outlook.com` is user supplied as the business email.
- `+264 81 670 0844` is the approved public WhatsApp number for Anthea Feris.
- `+264 81 603 4637` is the approved public WhatsApp number for Chané Philander.
- No booking, shop, newsletter subscription or social integration is implemented.

## Interaction rules

- Primary conversion: email or direct WhatsApp enquiry.
- All navigation items point to real sections on this page.
- The mobile menu must remain keyboard accessible and expose `aria-expanded`.
- Respect `prefers-reduced-motion`.

## Run and verify

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Deployment restrictions

- Do not connect an unapproved custom domain, analytics, external forms or payment systems.
- Push only the audited current project to the existing `main` remote.

## Release gate

- Production build and lint pass.
- No horizontal overflow at 390 px or 1440 px.
- All images load and founder mapping is correct.
- Mobile navigation opens and closes correctly.
- Contact destination and public legal details are reconfirmed.
- Repository scope, owner, visibility and branch are confirmed before push.
