# Glim website

Landing page, privacy policy, terms and contact page for [Glim](https://glim.co.zw), built with SvelteKit and served as static files from Cloudflare Workers.

## Develop

```sh
npm install
npm run dev          # local dev server
npm run check        # type-check
npm run lint         # prettier + eslint
```

## Deploy

Every page is prerendered to `build/` (adapter-static). `wrangler.jsonc` serves that folder as Workers static assets, with no Worker code.

```sh
npm run preview:cf   # build and serve locally the way Cloudflare will
npm run deploy       # build and deploy (needs `npx wrangler login` once)
```

## Beta sign-ups

`/beta` is a form that posts to `/api/beta`, handled by `worker/index.ts`. It checks the visitor with Cloudflare Turnstile and saves the sign-up to the D1 database `glim-beta` (schema in `migrations/`). Locally, `.dev.vars` holds Turnstile's always-pass test secret.

```sh
npm run db:migrate:local   # create the table in the local database
npx wrangler d1 execute glim-beta --remote --command "SELECT email, suburb, phone, created_at FROM beta_signups"
```

To go live, once:

1. `npx wrangler d1 create glim-beta` and put the id it prints in `wrangler.jsonc`, then `npm run db:migrate`.
2. Create a Turnstile widget in the Cloudflare dashboard for the site's domain. Put its site key in `TURNSTILE_SITE_KEY` (`src/lib/site.ts`) and its secret in `npx wrangler secret put TURNSTILE_SECRET`.
3. Set `WHATSAPP_GROUP_URL` to show the testers' group on the thank-you page.

## Before launch

Settings live in `src/lib/site.ts`:

- `CONTACT_EMAIL`: placeholder until the real support address exists.
- `PLAY_STORE_URL`: set once Glim is on Google Play; the buttons switch from "Coming soon" to a link.
- `POLICY_UPDATED`: change whenever the privacy policy or terms change.

The privacy policy describes what the Glim app actually stores. Keep it in step with the app, and have it reviewed before launch.
