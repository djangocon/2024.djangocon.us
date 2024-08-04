# DjangoCon.us Conference Website

## Installation

This project requires Node v20 or greater.

1. Run `npm install` to install Node packages.

## Building & Development

This project uses Liquid for templating. As such, you may wish to install syntax highlighting for Liquid in your text editor.

* VS Code: [Liquid Language Support](https://marketplace.visualstudio.com/items?itemName=neilding.language-liquid)
* [Liquid documentation](https://liquidjs.com/)

Build and watch for local changes by running:

`npm run serve`

This opens a local server at `http://localhost:8080/` and watches for changes to the source files.

## Conference Phases

The conference can be in 3 separate phases, controlled under `site.json`:

* `landing`: The conference site consists of a landing page.
* `active`: The conference site is live and registration may occur.
* `archived`: The conference is over.

This impacts the rendering of the homepage and display of content in various locations.

Reference:

* `src/index.html`
* `src/_includes/home/`

## Social Media Images

1. Presenter images are created at `/presenters/{{ slug }}/`
2. Session images are created at `/{{ talks,tutorials }}/{{ slug }}/social/`
