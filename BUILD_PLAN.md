# Build Plan

## Current interpretation

The project is a public, single-page Enchanted Artistry CC website on the existing Next.js 16 App Router stack. The user has authorised a GitHub update and the repository is already connected to Vercel.

The page follows the supplied client layout direction while retaining its own responsive composition. It must preserve the approved raster logo and use the real supplied founder photographs.

## Client-approved corrections

1. Remove the faith-based value strip.
2. Replace the four umbrella-value pills with an Our Story statement.
3. Keep five service categories, but use **Guidance** for mothers through pregnancy, post-partum and breastfeeding.
4. Content creation must not claim photography. It covers creative content, design and meaningful storytelling.
5. Use the new black-and-white Chané photograph and the new Anthea outdoor photograph.
6. Present the founders as an overlapping, face-to-face hero composition. Chané is mirrored in the hero only to create the requested direction.
7. Use a two-stroke mobile navigation control, not a generic three-stroke hamburger.
8. Add restrained CSS motion with a reduced-motion fallback.
9. Add a favicon, web manifest and public indexing settings.

## Architecture and verification

- Next.js 16, React 19, TypeScript and local CSS.
- One static public route, no backend, analytics or invented booking flow.
- Native CSS powers page entrance, navigation and hover motion. No unnecessary motion dependency was added.
- Email is the only verified public contact route. Public phone numbers remain missing and are not inferred from private registration material.
- Verify with lint, production build, desktop/mobile browser renders, menu interaction, image load checks, reduced-motion review and Git remote SHA comparison after push.

## Rejected alternatives

- Recreating, tracing or changing the official logo as SVG.
- Generating people or altering supplied founder images.
- Repeating the previous faith-based strip or unverified values as live content.
- Adding photography as a content-creation claim.
- Publishing missing phone numbers, domains, social accounts, pricing or booking details.
