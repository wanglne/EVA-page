import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeCitation from "rehype-citation";

import react from "@astrojs/react";

import astroExpressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      rehypeKatex,
      [
        rehypeCitation,
        {
          bibliography: "bibliography.bib",
          linkCitations: true,
        },
      ],
    ],
  },
  integrations: [
    icon(),
    astroExpressiveCode({
      defaultProps: { wrap: true },
      styleOverrides: {
        codeFontSize: "1rem",
        codeLineHeight: "1.5",
        borderRadius: "0.5rem",
        borderWidth: "0",
        codeBackground: "var(--page-panel)",
        frames: {
          shadowColor: "transparent",
        },
      },
      themeCssSelector: (theme) =>
        theme.type === "dark" ? `[data-theme="dark"]` : `[data-theme="light"]`,
    }),
    mdx(),
    react(),
  ],
  fonts: [
    {
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/matisse-pro-eb-latin.woff"],
            weight: "800",
            style: "normal",
          },
        ],
      },
      name: "Matisse Pro EB",
      cssVariable: "--font-matisse-pro-eb",
      weights: [800],
    },
    {
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/noto-sans-latin.woff2"],
            weight: "100 900",
            style: "normal",
          },
        ],
      },
      name: "Noto Sans",
      cssVariable: "--font-noto-sans",
      weights: ["100 900"],
    },
  ],
  image: {
    responsiveStyles: true,
  },
});
