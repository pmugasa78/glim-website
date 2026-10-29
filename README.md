# Glim website

Landing page, privacy policy, terms and contact page for [Glim](https://getglim.app), built with SvelteKit and served as static files from Cloudflare Workers.

## Develop

```sh
npm install
npm run dev          # local dev server
npm run check        # type-check
npm run lint         # prettier + eslint
```

## Deploy

Pushing to `main` deploys automatically (`.github/workflows/deploy.yml`): it lints, type-checks and builds, applies any new D1 migrations, then runs `wrangler deploy`. Pull requests get the same checks without deploying. The workflow needs one repository secret, `CLOUDFLARE_API_TOKEN`: an account API token with **Workers Scripts: Edit**, **D1: Edit** and **Workers Routes: Edit**.

Every page is prerendered to `build/` (adapter-static) and served as Workers static assets; the Worker script only runs for `/api/*`.

```sh
npm run preview:cf   # build and serve locally the way Cloudflare will
```

## Beta sign-ups

`/beta` is a form that posts to `/api/beta`, handled by `worker/index.ts`, which saves the email to the D1 database `glim-beta` (schema in `migrations/`). There's no visible bot check: a hidden `website` field catches bots that fill in every field, and the `SIGNUP_LIMIT` rate limit allows 10 sign-ups a minute per connection.

```sh
npm run db:migrate:local   # create the table in the local database
npx wrangler d1 execute glim-beta --remote --command "SELECT email, suburb, phone, created_at FROM beta_signups"
```

`WHATSAPP_GROUP_URL` in `src/lib/site.ts` is the testers' WhatsApp group shown on the thank-you page; set it to `null` to hide the button.

## Before launch

Settings live in `src/lib/site.ts`:

- `CONTACT_EMAIL`: placeholder until the real support address exists.
- `PLAY_STORE_URL`: set once Glim is on Google Play; the buttons switch from "Coming soon" to a link.
- `POLICY_UPDATED`: change whenever the privacy policy or terms change.

The privacy policy describes what the Glim app actually stores. Keep it in step with the app, and have it reviewed before launch.
