# Loading performance

## Changes

- Render the hero, section wrappers, doctor cards and statistics as visible HTML.
  They no longer wait for hydration and entrance animations to reveal content.
- Load the booking modal and its validation libraries on first use. Keep it
  mounted afterwards so closing animations and subsequent openings still work.
- Use native browser scrolling instead of a continuous Lenis animation loop.
- Resize the logo to 620 pixels and compress selected photographs without
  changing their URLs. Combined image savings: 564,522 bytes.
- Update Next.js within 15.5, React within 19.1 and vulnerable transitive packages.
  The Next.js PostCSS override shares the patched root PostCSS version; retain
  it until Next.js itself uses a patched version. Verify with `npm audit`,
  `npm ls postcss` and a clean production build after dependency updates.

## Verification (2026-10-07)

Initial controlled comparison using the static exports of commit `67e35b7` and
the optimized version, served locally by Python's HTTP server. Chromium mobile
viewport 390 x 844, fresh context, cache disabled, 150 ms network latency,
200,000 bytes/s download, 93,750 bytes/s upload and 4x CPU slowdown:

| Measurement | Original | Optimized |
| --- | ---: | ---: |
| Largest Contentful Paint | 9,440 ms | 2,612 ms |
| First Contentful Paint | 4,456 ms | 2,612 ms |
| Initial JS (Next.js build estimate) | 215 kB | 169 kB |
| Logo | 242,928 bytes | 27,910 bytes |

These are single-run local laboratory results, not field measurements or a
guarantee for every visitor. Both exports used the same local server settings
without transfer compression or production analytics environment variables.
GitHub Pages compression, network conditions, cache state and analytics change
production timings.

Browser checks cover mobile navigation, doctor prefill, lazy modal opening,
reopening and Escape closing, required-field validation and a successful booking
with the API response mocked (no real patient request sent). The hero remains
visible with JavaScript disabled, and the mobile layout has no horizontal overflow.

The production frontend is a static GitHub Pages export. Its initial render does
not depend on a Render process or the booking API waking up.
