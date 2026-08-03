# Build Plan

## Current interpretation

The project is a public, single-page Enchanted Artistry CC website on the existing Next.js 16 App Router stack. The user has authorised a GitHub update and the repository is already connected to Vercel.

The page follows the supplied client layout direction while retaining its own responsive composition. It must preserve the approved raster logo and use the real supplied founder photographs.

The client-authorised logo correction changes only the small descriptor line to `COSMETOLOGY · ARTS · MENTORSHIP AND GUIDANCE`. The original supplied logo remains archived and unchanged.

## Client-approved corrections

1. Remove the faith-based value strip.
2. Replace the four umbrella-value pills with an Our Story statement.
3. Keep five service categories, but use **Guidance** for mothers through pregnancy, post-partum and breastfeeding.
4. Content creation must not claim photography. It covers creative content, design and meaningful storytelling.
5. Use the new black-and-white Chané photograph and the new Anthea outdoor photograph.
6. Follow the final client hero correction: the large corrected logo and brand name lead, the approved introduction sits directly below it, and the separate `More than a brand / It's a calling.` panel follows. The two-founder presentation composite remains on the right on desktop and follows the copy stack on mobile.
7. Use a staggered two-stroke mobile navigation control, not a generic three-stroke hamburger.
8. Add restrained reveal motion with a reduced-motion fallback.
9. Add a favicon, web manifest and public indexing settings.

## Architecture and verification

- Next.js 16, React 19, TypeScript and local CSS.
- One static public route, no backend, analytics or invented booking flow.
- Native CSS and Intersection Observer power page entrance, navigation and hover motion. No motion dependency was added.
- The supplied business email and two client-approved WhatsApp numbers are the verified public contact routes.
- Verify with lint, production build, desktop/mobile browser renders, menu interaction, image load checks, reduced-motion review and Git remote SHA comparison after push.

## Rejected alternatives

- Recreating, tracing or changing the official logo as SVG.
- Generating people or altering supplied founder images.
- Replacing the approved two-founder hero presentation with unrelated or generated people.
- Repeating the previous faith-based strip or unverified values as live content.
- Adding photography as a content-creation claim.
- Publishing missing phone numbers, domains, social accounts, pricing or booking details.
