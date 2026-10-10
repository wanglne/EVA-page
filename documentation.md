# Content guide

See [README.md](README.md#editing-the-page) for the files controlling each part of the EVA page.

The interactive figures use the original vector artwork and animate the viewport between selected regions. Edit their titles, descriptions, and regions in `src/data/figures.json`. Coordinates are expressed in the original SVG view box.

The results explorer switches between language and vision-language models, individual models, and three evaluation categories. Only combinations reported in the paper are available. Adaptive visual attacks are reported for LLaVA-1.5-7B only.

Keep public asset links prefixed with `import.meta.env.BASE_URL` so GitHub Pages project paths remain valid. Keep external links set to `target="_blank"` and `rel="noopener noreferrer"`.
