# Personal site — crumpled paper & ink

A cute, nerdy, interactive personal site with a **crumpled paper** look and **pen/pencil** vibes. Features a **growing tree** that gains a leaf for each new visitor (by favorite season) and a **total visitor count**.

## What’s in here

- **Paper theme** — Off-white “paper” sheet with subtle texture and shadow so it feels like a single crumpled page.
- **Ink typography** — Handwriting-style fonts (Caveat + Kalam) so it reads like pen on paper.
- **Custom cursor** — Replaces the default cursor and changes by context and by your choice:
  - **By zone**: Sections use `data-cursor="pen"`, `"pencil"`, `"highlighter"` so the cursor changes as you move (e.g. pen over “about”, pencil over “stuff I’ve done”, highlighter over “say hi”).
  - **By keyboard**: Press **P** (pencil), **E** (pen), **H** (highlighter), **R** (eraser) to force a cursor “mode” and keep it until you hover a zone or press another key.
- **Doodles** — Hover over the words “coffee”, “keyboards”, “weird CSS” in the about section to spawn little scribbles.
- **Growing tree** — A tree in the sidebar. The site now runs in static mode by default: it starts each hour with a seeded total between 150–500 and updates live in-browser when someone clicks a season.
- **Ink blots** — Click anywhere on the paper to leave a small ink blot.
- **Easter eggs**:
  - Click the asterisk (*) in the footer once for a footnote, three times for a second message.
  - **Konami code**: ↑ ↑ ↓ ↓ ← → ← → B A to switch the title to “↑↑↓↓←→←→BA” and lock the cursor to eraser.

## Static hosting mode (default)

This project is currently configured for simple static hosting (GitHub Pages / basic GoDaddy):

- No backend is required for the main site.
- Open `index.html` directly, or host the files as static assets.
- Tree totals are deterministic per hour (150–500), then increase locally on click.
- Local demo values reset hourly.

## Optional Node server mode

If you run **`npm start`**, the Express server still works and serves:

- `http://localhost:3000/` (main site)
- `http://localhost:3000/tree-demo.html` (demo page)
- `/api/stats` and `/api/visit` from `server.js`

Run locally with Node:

```bash
cd /Users/harnoordhingra/Desktop/Projects/Website
npm install
npm start
```

## Customize

- **Content**: Edit `index.html` — change headings, copy, links, and add/remove sections.
- **Cursor**: The cursor is the season you picked when adding a leaf (spring = sapling, summer = leaf, fall = fall leaf, winter = branch, fashion = your pic). For fashion, add your image as `assets/cursor-fashion.jpg`; if missing, a pink circle is shown.
- **Colors**: Adjust `--paper`, `--ink`, `--accent` in `:root` in `styles.css`.
- **Fonts**: Swap the Google Fonts link in `index.html` and the `--font-scribble` / `--font-ink` variables in `styles.css`.

Enjoy the weird, geeky vibes.
