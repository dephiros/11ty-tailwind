module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/content/**/*.{png,jpg,jpeg,ico}");
    return {
      dir: {
        input: "src/content",
        output: "dist",
      },
    };
  };
  