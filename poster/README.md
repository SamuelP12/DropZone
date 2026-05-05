# Drop Zone — Printable poster

US Letter (8.5" × 11") portrait poster for posting around Winthrop and the Methow.

## How to print

1. Open `poster/index.html` in any browser (or visit `https://samuelp12.github.io/DropZone/poster/`)
2. Click **Print poster** in the top-right, or hit `⌘P`
3. In the print dialog:
   - **Paper size:** US Letter
   - **Margins:** Default (the file already has its own internal margins)
   - **Background graphics / colors:** ON (so the navy "Monthly" tile and blue tints come through)
4. Print directly, or save as PDF first if you want to send it somewhere

## Editing

- All copy and design lives in `poster/index.html` — open it in a text editor
- The QR code (`poster/qr.svg`) currently points to `https://dropzonecowork.com`. If that domain doesn't yet point to the new site, regenerate by running:

  ```bash
  curl -sSfL "https://api.qrserver.com/v1/create-qr-code/?data=https://samuelp12.github.io/DropZone/&size=600x600&format=svg&margin=0&color=0b1f3a&bgcolor=ffffff" -o poster/qr.svg
  ```

  …replacing the `data=` URL with whichever address you want the scan to land on.
