# Drop Zone Cowork

Marketing site for Drop Zone Cowork in Winthrop, WA.

## Local preview

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Stack

- Plain HTML/CSS/JS — no build step.
- [Lenis](https://github.com/darkroomengineering/lenis) for smooth scroll (CDN).
- [Inter](https://rsms.me/inter/) for typography.
- Hosted via GitHub Pages from `main`.

## Editing

- All content lives in `index.html`.
- Visual styles in `css/styles.css`.
- Interactions in `js/main.js`.
- Photos in `images/` — currently Unsplash placeholders, to be replaced with originals.

## Payment links

In `js/main.js` there is a `linkMap` with keys `day-pass`, `individual`, `couple`, `conference`.
Set each to its real URL when ready; until then, links display "Payment link coming soon" on click.
