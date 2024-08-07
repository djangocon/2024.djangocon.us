# DjangoCon.us Conference Website

## Installation

This project requires Node v20 or greater.

1. Run `npm install` to install Node packages.

## Building & Development

This project uses Liquid for templating (except dates, see below). As such, you may wish to install syntax highlighting for Liquid in your text editor.

* VS Code: [Liquid Language Support](https://marketplace.visualstudio.com/items?itemName=neilding.language-liquid)
* [Liquid documentation](https://liquidjs.com/)

Build and watch for local changes by running:

`npm run serve`

This opens a local server at `http://localhost:8080/` and watches for changes to the source files.

### Date Formatting

Dates are formatted with [date-fns](https://date-fns.org/), due to some wonkiness with Eleventy's date formatting. You can use the `formatDateTime` shortcode in your templates to format dates. Note, that this will take into consideration the timezone defined in `site.json`, under `timezone`. Example:

```liquid
{{ post.data.published_datetime | formatDateTime: "MMMM d, yyyy" }}
```

# Social Media Images

1. Presenter images are created at `/presenters/{{ slug }}/`
2. Session images are created at `/{{ talks,tutorials }}/{{ slug }}/social/`
