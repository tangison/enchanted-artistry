# Asset Manifest

## Authentic client assets

| Asset | Source | Processing | Use | Restriction |
| --- | --- | --- | --- | --- |
| `reference/enchanted-artistry-approved-raster.jpg` | Client supplied | Unmodified | Identity authority | Never overwrite |
| `assets/logos/enchanted-artistry-original.jpg` | Client supplied | Unmodified | Logo master | Never recreate |
| `assets/logos/enchanted-artistry-transparent.png` | Client master | Background removed; artwork retained | Website logo | Do not trace/retype/recolour |
| `assets/founders/anthea-jade-feris-original.jpg` | Client supplied image 1 | Unmodified archive | Founder authority | Anthea only |
| `assets/founders/chane-yvette-philander-original.jpg` | Client supplied image 2 | Unmodified archive | Founder authority | Chané only |
| `assets/founders/*-480/640/960.webp` | Founder originals | Resize/compression only | Responsive delivery | No face retouching |
| `reference/client-approved-layout/landing-page-reference.jpg` | Client supplied | Unmodified | Layout direction | Reference only |

## Generated supporting assets

These are category illustrations, not documentary photographs.

| Asset | Creation method | Intended use | Restrictions |
| --- | --- | --- | --- |
| `hero-floral-original.png` / `public/images/hero-floral.webp` | Generated blush floral field with lavender, rose and gold botanical detail | Hero background | No text or logo embedded |
| `service-makeup-original.png` / WebP | Generated cosmetics still life | Makeup card | Illustrative only |
| `service-hair-original.png` / WebP | Generated anonymous rear-view styled hair | Hair card | No person identity claim |
| `service-drama-original.png` / WebP | Generated theatre-mask still life | Drama card | Illustrative only |
| `service-mentorship-original.png` / WebP | Generated notebook and pen still life | Mentorship card | No programme evidence |
| `service-content-original.png` / WebP | Generated camera and microphone still life | Content card | No client-work claim |

Full PNG masters live in `assets/images-production/`; compressed delivery files live in `public/images/`.

## Fonts

| Asset | Source | Use |
| --- | --- | --- |
| `bodoni-moda-400.woff2` | Fontsource package | Display serif |
| `manrope-400.woff2` | Fontsource package | Body copy |
| `manrope-600.woff2` | Fontsource package | Labels and controls |
| `@fontsource/allura` dependency | Fontsource package | Limited script accents |

## QA assets

- `docs/qa/desktop.png` — 1440 px full-page render.
- `docs/qa/mobile.png` — 390 px full-page render.
- `docs/website-imagery-contact-sheet.jpg` — production image overview.

No SVG logo is supplied or permitted.
