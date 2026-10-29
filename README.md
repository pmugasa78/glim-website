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

## Before launch

Settings live in `src/lib/site.ts`:

- `CONTACT_EMAIL`: placeholder until the real support address exists.
- `PLAY_STORE_URL`: set once Glim is on Google Play; the buttons switch from "Coming soon" to a link.
- `POLICY_UPDATED`: change whenever the privacy policy or terms change.

The privacy policy describes what the Glim app actually stores. Keep it in step with the app, and have it reviewed before launch.
