# BUP Economics Club website

The Next.js project is in [`website/`](website/). Run these commands from this folder:

```powershell
npm run setup
npm start
```

Open http://localhost:3000. Keep the terminal open while you use the site. Press Ctrl+C to stop it.

You need Node.js and npm installed. `npm run setup` installs the packages from `website/package-lock.json` and requires an internet connection. You only need to run it again when dependencies change.

To use a different port, run `npm run dev -- --port 3001` from inside `website/` (or `npm --prefix website run dev -- --port 3001` from here).

For a static build, run `npm run build`. The exported files go to `website/out/`; `npm run preview` serves those files locally. See [`website/README.md`](website/README.md) for content and deployment details.

The supplied 2026 panel cards are stored locally in `website/public/panel/`. Event photos and partner logos currently use their credited source URLs. To save reachable image assets into `website/public/media/` and switch the site to local copies, run `npm run cache-images` on a machine with access to those sources, then rebuild. The script reports any images that could not be downloaded; LinkedIn image links can expire and may need fresh URLs.
