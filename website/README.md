# BUP Economics Club website

Next.js App Router, TypeScript, and Tailwind CSS. The site can run as a local development server or be exported as static files.

## Run on your machine

From the parent folder (`ec website/`):

```powershell
npm run setup
npm start
```

Open http://localhost:3000. Press Ctrl+C in the terminal to stop the server. Node.js 20.9 or newer and npm are required. Package installation needs an internet connection.

Alternatively, from this `website/` folder:

```powershell
npm ci
npm run dev
```

## Static build

```powershell
npm run build
npm run preview
```

The build writes a static site to `out/`. You can serve that folder from any static web server. `npm run preview` uses `serve` through `npx` and may download it on first use.

## Edit the site

| Location | Content |
| --- | --- |
| `data/site.ts` | Club details, navigation, stats, partners, FAQ, and social links |
| `data/events.ts` | Events and their detail pages |
| `data/insights.ts` | Articles and their detail pages |
| `data/team.ts` | Executive panel roles and names |
| `data/achievements.ts` | Past milestones, photo URLs, and source links |
| `app/globals.css` | Colours and styles |
| `lib/seo.ts` | Canonical website URL and shared metadata |

The favicon is `app/icon.png`. Copies in `public/logo.png` and `public/og.png` supply the navbar logo and social preview. Replace those files with approved artwork if available. If you change the preview image's size, update its width and height in `app/layout.tsx`, `lib/seo.ts`, and the event and insight detail pages.

Event photographs and partner marks are linked to public BUP, press, and partner image URLs, with source links alongside achievements. They require internet access when viewing the site. For an offline copy, download approved originals into `public/` and change the URLs in `data/achievements.ts` and `data/site.ts`.

The `/join` form prepares an email in the visitor's mail app. It does not store form submissions on the server.

Before publishing, confirm the canonical domain in `lib/seo.ts`, social links and phone number in `data/site.ts`, and current panel names in `data/team.ts`.
