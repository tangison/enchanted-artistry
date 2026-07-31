# Build Plan

## Architecture

- Next.js 16 App Router.
- React 19 and TypeScript.
- Local CSS and self-hosted Bodoni Moda/Manrope; packaged Allura script font.
- Next Image for logo, service and founder assets.
- One static route with no backend or third-party scripts.

## Implemented sequence

1. Responsive header with preserved logo, section anchors and enquiry CTA.
2. Floral hero with brand lockup, tagline and calling statement.
3. Four-value strip: faith, purpose, creative inspiration and love.
4. Five service cards: makeup, hair, drama coaching, mentorship and content creation.
5. Umbrella-brand vision section with four core values.
6. Founder profiles using authentic client portraits.
7. Email enquiry banner.
8. Footer with legal name, Windhoek location, email and Matthew 5:16 reference.

## Verification criteria

| Outcome | Verification |
| --- | --- |
| Logo preserved | Only approved PNG displayed; no SVG or retyped mark |
| Founder mapping correct | Chané uses supplied image 2; Anthea uses supplied image 1 |
| Responsive layout | Browser render at 1440 × 1000 and 390 × 844 |
| No overflow | `scrollWidth === clientWidth` at both tested widths |
| Images valid | All ten rendered images load with non-zero natural width |
| Mobile interaction | Menu opens and exposes real section links |
| Code quality | `npm run lint` and `npm run build` exit successfully |
| Demo protection | Metadata sets `noindex, nofollow` |

## Rejected alternatives

- Recreating or tracing the logo as SVG.
- Presenting generated women as the founders.
- Copying low-resolution service crops out of the screenshot.
- Adding fake shop, portfolio, academy, journal, booking or newsletter functionality.
- Publishing the unverified phone number and domain shown in the concept screenshot.

## Remaining authorised step

Prepare the existing local repository for a GitHub push after the user supplies the target repository and confirms ownership, visibility and branch. Deployment is still not authorised.
