# French Companion

A static website for French learners: tenses explained simply, spoken French
vocabulary, speaking tricks, a deep dive on the core verbs, and the subjunctive
(including how to avoid it).

## How it works

There is no framework and no build step — just files:

- `index.html`, `tenses.html`, `spoken-french.html`, `speaking-tricks.html`,
  `core-verbs.html`, `moods.html` — one file per page. Edit the HTML directly;
  refresh the browser to see changes.
- `style.css` — one shared stylesheet. All colours/sizes are CSS variables in
  the `:root` block at the top, so you can retheme everything from one place.

## Viewing it

Just double-click `index.html` — it opens in your browser and everything works
(all links are relative). Or serve it properly with:

```
python -m http.server 8137
```

then open http://localhost:8137.

## Adding a page

1. Copy an existing page (e.g. `moods.html`) and edit the content.
2. Add a link to it in the `<nav>` block — note the nav is duplicated in every
   page (the price of having no build step), so add the link in each file.

## Hosting it (free)

The simplest route is GitHub Pages: create a repository, push these files, and
enable Pages in the repo settings (Settings → Pages → deploy from branch).
Netlify and Cloudflare Pages work the same way — drag and drop the folder.
