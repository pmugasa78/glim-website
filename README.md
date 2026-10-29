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

Pushing to `main` deploys automatically (`.github/workflows/deploy.yml`): it lints, type-checks and builds, applies any new D1 migrations, then runs `wrangler deploy`. Pull requests get the same checks without deploying. The workflow needs two repository secrets:

- `CLOUDFLARE_API_TOKEN`: an account API token with **Workers Scripts: Edit** and **D1: Edit**.
- `TURNSTILE_SECRET`: the secret key of the "Glim website" Turnstile widget.

Every page is prerendered to `build/` (adapter-static) and served as Workers static assets; the Worker script only runs for `/api/*`.

```sh
npm run preview:cf   # build and serve locally the way Cloudflare will
```

## Beta sign-ups

`/beta` is a form that posts to `/api/beta`, handled by `worker/index.ts`. It checks the visitor with Cloudflare Turnstile and saves the sign-up to the D1 database `glim-beta` (schema in `migrations/`). Locally, `.dev.vars` holds Turnstile's always-pass test secret.

```sh
npm run db:migrate:local   # create the table in the local database
npx wrangler d1 execute glim-beta --remote --command "SELECT email, suburb, phone, created_at FROM beta_signups"
```

Set up on Cloudflare (account `7f5e0b18…`): the D1 database `glim-beta` (id in `wrangler.jsonc`, table created), and the Turnstile widget "Glim website", whose site key is `TURNSTILE_SITE_KEY` in `src/lib/site.ts`. Its secret goes in with `npx wrangler secret put TURNSTILE_SECRET`. On localhost the form uses Cloudflare's test key instead, to match `.dev.vars`.

`WHATSAPP_GROUP_URL` in `src/lib/site.ts` is the testers' WhatsApp group shown on the thank-you page; set it to `null` to hide the button.

## Before launch

Settings live in `src/lib/site.ts`:

- `CONTACT_EMAIL`: placeholder until the real support address exists.
- `PLAY_STORE_URL`: set once Glim is on Google Play; the buttons switch from "Coming soon" to a link.
- `POLICY_UPDATED`: change whenever the privacy policy or terms change.

The privacy policy describes what the Glim app actually stores. Keep it in step with the app, and have it reviewed before launch.
