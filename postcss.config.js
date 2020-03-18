const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: ['./dist/**/*.html'],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    extensions: ['css', 'html', 'vue'],
  },
];
module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
    // "cssnano",
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
};
