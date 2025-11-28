# Netlify setup (safe usage of auth token and site id)

This project expects two environment variables when using the Netlify CLI or automated scripts:

- `NETLIFY_AUTH_TOKEN` — your personal Netlify token (keep secret)
- `NETLIFY_SITE_ID` — the Netlify Site ID (UUID) for your project

Do NOT commit real tokens or `.env` files with secrets to version control.

Local usage (PowerShell temporary session):

1. Open PowerShell in `apps/web/scripts` and run:

```powershell
.\set-netlify-env.ps1 -Token '<your-netlify-token-here>' -SiteId '<your-site-id-here>'
```

This sets `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID` only for the current PowerShell session.

After that you can run Netlify CLI commands in the same session, for example:

```powershell
npx netlify deploy --prod --dir=build/client --site $env:NETLIFY_SITE_ID
```

CI / Netlify UI:

- In Netlify web UI: Site dashboard → Site settings → Build & deploy → Environment → "Add variable"
- Add `NETLIFY_AUTH_TOKEN` (if you use the token in automation) and `NETLIFY_SITE_ID` as needed.

If you prefer a `.env` file for local development, copy `.env.example` to `.env` and fill the values, but do NOT commit `.env` to git.

After making changes to Tailwind or PostCSS (for example to reduce CSS size), rebuild the app in a Linux environment or CI to avoid Windows native dependency issues:

```bash
# use WSL or a Linux CI runner
cd apps/web
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps --unsafe-perm=true
npm run build
```

This ensures Tailwind's purge/content scanner removes unused utilities and cssnano (PostCSS) minifies the final CSS.
