# EVA project page

Project page for **EVA: Editing for Versatile Alignment against Jailbreaks**, published in **IEEE TPAMI 2026**.

- [Paper](https://arxiv.org/pdf/2605.14750)
- [IEEE publication](https://ieeexplore.ieee.org/document/11523146)
- [Official code](https://github.com/wanglne/EVA)

The page follows the layout, navigation, interactive figures, and result-table design of the SaLR project page. Matisse Pro EB is used in the publication header, navigation, section headings, and headline metrics. Body text, controls, and data use Noto Sans; the citation uses a monospace font. A black-and-white publication header leads into a light reading area with red accents, neutral gray panels, and a solid background. The ASPIRE logo retains its original red. The Matisse webfont preserves the original OTF glyphs and includes Latin characters and symbols used by the page. Paper figures retain their original artwork on white canvases.

## Local development

Use Node.js 24 and npm.

```sh
npm ci
npm run dev -- --port 4323
```

Open `http://localhost:4323/`.

```sh
npm run check
npm run lint
npm run build
```

## Editing the page

| Content                                                         | File                                                            |
| --------------------------------------------------------------- | --------------------------------------------------------------- |
| Main text, authors, author links, publication links, and BibTeX | `src/paper.mdx`                                                 |
| Header layout and institution names                             | `src/components/EVAHeader.astro`                                |
| Interactive figure explanations and crop coordinates            | `src/data/figures.json`                                         |
| Main result values                                              | `src/data/results.json`                                         |
| Table headings, notes, model selectors, and tabs                | `src/components/Results.astro`                                  |
| Efficiency and visual ablation results                          | `src/components/SupportingResults.astro`                        |
| Typography, colors, spacing, and responsive layout              | `src/styles/eva.css`                                            |
| Navigation labels and anchors                                   | `src/components/SectionNav.astro`                               |
| Vector figures                                                  | `public/figures/`                                               |
| Browser icon and social preview                                 | `public/eva-titlecard-favicon.svg`, `public/social-preview.png` |

The section order is Impact → Overview → Methodology → Results → Citation. External links open in a new tab.

The main result data are transcribed from Tables 1–3 and 5–7 of the accepted manuscript. ASR ratios are displayed as percentages; utility scores retain their reported scales. Supporting results come from Tables 4, 8, and 9. SVG figures are converted from the original PDF figures, preserving vector content and embedded images. Original PDFs, LaTeX archives, and local preview screenshots are not needed in the published repository.

## GitHub Pages

In the repository's **Settings → Pages**, select **GitHub Actions** as the source. The included workflow builds and deploys pushes to `main`. It obtains the deployment URL and base path from GitHub Pages, so figures, fonts, and metadata work under the project subdirectory.

This repository does not configure a custom domain.

## Acknowledgments

Built from [Roman Hauksson-Neill's research project template](https://research-template.roman.technology/), with the layout adapted from the SaLR page. Matisse Pro EB is a Fontworks typeface, supplied separately from the page template. Noto Sans is distributed under the SIL Open Font License; see `public/fonts/OFL.txt`. The typography takes inspiration from [Evangelion’s Matisse-EB title cards](https://www.eva-all.com/news/5297/resources-evangelion-font-matisse/).
