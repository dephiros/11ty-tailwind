const postcssPresetEnv = require("postcss-preset-env");
const purgecss = require("@fullhuman/postcss-purgecss");

const prodPlugins =
  process.env.NODE_ENV === "production"
    ? [
        purgecss({
          content: ["./_dist/**/*.html"],
          defaultExtractor: content => content.match(/[\w-/.:]+(?<!:)/g) || [],
          extensions: ["css", "html", "vue"],
        }),
      ]
    : [];

module.exports = {
  plugins: [
    "postcss-import",
    postcssPresetEnv({
      features: {
        "focus-within-pseudo-class": false,
      },
    }),
    "tailwindcss",
    ...prodPlugins,
  ],
};
