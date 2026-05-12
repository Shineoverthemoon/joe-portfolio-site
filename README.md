# Joseph Quinn — Portfolio (v1)

Proof hub built as a single-page React + Vite app with Tailwind. Target: **Netlify**.

---

## Run locally

```powershell
cd D:\Projects\joe-portfolio-site
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Build

```powershell
npm run build
```

Output goes to `dist/`. Preview the production build with:

```powershell
npm run preview
```

---

## What to edit before going live

All content lives in **one file**: `src/data.js`.

### 1. Replace contact placeholders

In `src/data.js`, swap the placeholders in the `contact` object:

```js
email:    "[YOUR_EMAIL_HERE]"     →  "joseph@yourdomain.com"
linkedin: "[YOUR_LINKEDIN_HERE]"  →  "https://linkedin.com/in/yourhandle"
github:   "[YOUR_GITHUB_HERE]"    →  "https://github.com/yourhandle"
```

Gumroad link is already filled in.

### 2. (Optional) Enable the Resume download

By default the Resume button is **hidden** because `contact.resume` is `""`. To enable it:

1. Drop your PDF into `/public` (e.g. `public/joseph-quinn-resume.pdf`)
2. Set `contact.resume` in `data.js` to its path: `"/joseph-quinn-resume.pdf"`

The Resume button will then appear in the hero and nav automatically.

### 3. Optional polish

- Tweak project descriptions, tags, or status labels in `data.js`
- Adjust the headline/role copy in the `identity` object
- Add or remove projects — the filter chips update automatically from the `category` field

---

## Deploy to Netlify

### Option A — drag and drop

1. Run `npm run build`
2. Drag the `dist` folder onto [app.netlify.com/drop](https://app.netlify.com/drop)
3. Done. You'll get a `*.netlify.app` URL immediately.

### Option B — connect Git (recommended)

1. Push this folder to a new GitHub repo
2. Netlify → "Add new site" → "Import an existing project" → pick the repo
3. Build settings auto-detected via `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Every push to `main` auto-deploys

### Custom domain (later)

In Netlify: **Site settings → Domain management → Add custom domain**. Point your registrar's DNS to Netlify per their instructions.

---

## File map

```
src/
├── App.jsx              ← composes the page
├── main.jsx             ← entry
├── index.css            ← Tailwind + base styles
├── data.js              ← ALL content lives here
└── components/
    ├── Nav.jsx
    ├── Hero.jsx
    ├── WhatIBuild.jsx
    ├── Projects.jsx     ← filterable grid
    ├── Lab.jsx
    ├── Services.jsx
    ├── Proof.jsx
    ├── Contact.jsx      ← form UI, not yet wired
    └── Footer.jsx
public/
├── favicon.svg
└── (drop your resume PDF here when ready)
```

---

## Wiring the contact form later

Easiest path on Netlify is to add `data-netlify="true"` to the form and convert the inputs to a real `<form>` — but per the v1 spec we're leaving it as UI-only. When ready, ping Claude and have it wire it up.

---

## Stack

- React 18 + Vite 5
- Tailwind CSS 3
- framer-motion (subtle scroll/load reveals only)
- lucide-react (icons)
- Fonts: Fraunces (display), Inter Tight (body), JetBrains Mono (accents)
