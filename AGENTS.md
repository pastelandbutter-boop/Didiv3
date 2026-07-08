# AGENTS.md

## Project Overview

This is a TanStack Start landing page for Didi Korean Podcast. It recreates the original Wix site as a richer branded page while preserving the original navigation destinations, YouTube channel links, and embedded featured YouTube video.

## Key Technologies

- TanStack Start with file-based routing
- React 19
- Tailwind CSS 4 entrypoint plus custom CSS in `src/styles.css`
- Lucide React icons
- Netlify deployment through `@netlify/vite-plugin-tanstack-start`

## Key Files

- `src/routes/index.tsx` contains the full landing page content, link data, and embedded YouTube iframe.
- `src/routes/__root.tsx` defines document metadata and imports global styles.
- `src/styles.css` contains the visual system: green brand palette, hand-lettered font, responsive layout, tape motifs, record motif, and link tiles.
- `public/didi-brand-art.png` is the imported brand artwork from the original site, used as a cropped portrait element rather than as the complete logo.

## Conventions

- Keep route content data close to the component when it is specific to the single landing page.
- Use semantic sections with accessible labels for major content areas.
- Preserve external URLs from the source site unless the user explicitly asks to change them.
- Do not run build or dev server commands in this environment; validation is handled by the platform pipeline.

## Non-Obvious Decisions

The original Spotify and Apple Podcast buttons appeared in the Wix page data without actual href values. They are represented as visual link tiles with local hash targets and notes instead of inventing external URLs.

The original logo image is not reused as a logo lockup. The page uses the artwork as a cropped portrait and extends its visual ingredients into the layout: moss green, cream tape labels, record-like circular forms, and handwritten typography.
