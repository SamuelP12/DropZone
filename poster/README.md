# Drop Zone — Printable poster

US Letter (8.5" × 11") portrait posters for posting around Winthrop and the Methow.

Two versions:
- **`poster/index.html`** — text only, all‑typography
- **`poster/photo.html`** — same content with a Cascades photo strip across the top

Each file has a button at the top right to switch to the other version.

## How to print

1. Open either `index.html` or `photo.html` in any browser (or visit `https://samuelp12.github.io/DropZone/poster/` and `…/poster/photo.html`)
2. Click **Print poster** in the top-right, or hit `⌘P`
3. In the print dialog:
   - **Paper size:** US Letter
   - **Margins:** Default — the poster has its own internal margins
   - **Background graphics / colors:** ON (so the navy "Monthly" tile and blue tints come through)
4. Print directly, or save as PDF first if you want to send it to a copy shop

## Editing

- Each poster is a single self‑contained HTML file with embedded CSS — open in any text editor
- The QR code (`poster/qr.svg`) currently points to `https://dropzonecowork.com`. To change it:

  ```bash
  curl -sSfL "https://api.qrserver.com/v1/create-qr-code/?data=https://samuelp12.github.io/DropZone/&size=600x600&format=svg&margin=0&color=0b1f3a&bgcolor=ffffff" -o poster/qr.svg
  ```

  …replacing the `data=` URL with whichever address you want the scan to land on.
