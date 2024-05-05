const path = require('path');

const Image = require('@11ty/eleventy-img');
const markdownIt = require("markdown-it");

const setupCollections = require('./lib/collections');
const setupFeed = require('./lib/feed');

module.exports = (config) => {
  setupCollections(config);
  setupFeed(config);

  /*
    Setup passthrough file copy
    https://www.11ty.dev/docs/copy/
  */
  config.addPassthroughCopy("src/assets/img/**/*");
  config.addPassthroughCopy("src/assets/js/");
  config.addPassthroughCopy("src/assets/favicons/");
  config.addPassthroughCopy({
    "src/_content/sponsors/*.{png,jpg,jpeg,svg}": "sponsors/",
    "src/_content/places/*.{png,jpg,jpeg,webp}": "venue/",
  });
  config.addPassthroughCopy("CNAME");

  /*
    Setup watch targets
    https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets
  */
  config.addWatchTarget("src/assets/js/");

  /*
    Shortcodes
  */
  config.addLiquidShortcode("year", () => `${new Date().getFullYear()}`);

  // TODO: Accept widths or support different widths
  config.addLiquidShortcode("image", async function(
    src,
    outputDir,
    urlPath,
    alt,
    sizes,
    classes = "") {
      let metadata = await Image(src, {
        widths: [300, 600],
        formats: ["webp"],
        outputDir,
        urlPath,
        filenameFormat: function (id, src, width, format, options) {
          // Get the original filename without the extension
          const originalFilename = path.basename(src, path.extname(src));

          return `${originalFilename}-${width}.${format}`;
        },
      });

      let imageAttributes = {
        class: classes,
        alt,
        sizes,
        loading: "lazy",
        decoding: "async",
      };

    return Image.generateHTML(metadata, imageAttributes);
  });

  /*
    Filters
  */
  config.addFilter("markdown", function(content = "") {
    let markdown = markdownIt({
      html: true,
      breaks: true,
      linkify: true
    });

    return markdown.render(content);
  });

  /*
    Misc configuration
  */
  config.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!-- excerpt -->"
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      layouts:  '_layouts',
    },

    // Use Liquid for templating
    // https://www.11ty.dev/docs/languages/liquid/
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid"
  }
};
