# EVA page repository guide

This is a single-page Astro 6 + MDX research website. Use Node.js 24 and npm. Preserve the existing SaLR-derived layout, local Matisse Pro EB typography for the header, navigation, section headings, and headline metrics, and Noto Sans for body text, controls, and tables. The citation uses a monospace font. Keep the black-and-white publication header, light reading area with red accents and neutral gray panels, and five-section navigation. Keep the ASPIRE logo red. Use a solid page background and preserve the reading margins and card/table borders. Keep the paper's original artwork on white canvases.

## Content and components

- `src/paper.mdx`: page metadata, author links, main text, and citation.
- `src/components/EVAHeader.astro`: authors, institution layout, and publication buttons.
- `src/components/SectionNav.astro`: sticky navigation.
- `src/components/PaperFigure.astro` and `src/data/figures.json`: accessible, progressive-enhancement figure walkthroughs. Preserve reduced-motion handling and pause playback when off-screen.
- `src/components/Results.astro` and `src/data/results.json`: model-family/model selectors and evaluation tabs. Do not fabricate unavailable model/evaluation combinations.
- `src/components/SupportingResults.astro`: efficiency and visual ablation evidence.
- `src/styles/eva.css`: project typography and layout.
- `public/figures/`: vector artwork converted from the paper's PDF figures.

Main ASRs are converted from the manuscript's ratios to percentages. Utility scores retain the original scales. Keep reported values and source table references accurate.

## Checks and deployment

Run `npm run check`, `npm run lint`, and `npm run build` after relevant changes. Review desktop and mobile layouts when changing presentation.

GitHub Pages deployment uses `.github/workflows/astro.yml`, Node 24, and the `--site` / `--base` values supplied by the Pages action. Prefix public assets with `import.meta.env.BASE_URL`. External links open in a new tab; section anchors stay on the page.

Do not add original PDF/ZIP research inputs or local visual QA screenshots to the page repository.
