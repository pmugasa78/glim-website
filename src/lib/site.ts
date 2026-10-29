/** Who publishes Glim and how to reach them: used in the footer, privacy policy, terms and contact page. */
export const COMPANY = 'Allison Labs Pty Ltd';
export const COMPANY_COUNTRY = 'South Africa';

/** Support address. Placeholder until the real one is chosen; it must work before launch. */
export const CONTACT_EMAIL = 'hello@glim.co.zw';

/** Glim's store listings. Null until it's published there, which shows "Coming soon". */
export const PLAY_STORE_URL: string | null = null;
export const APP_STORE_URL: string | null = null;

/** Beta testers' WhatsApp group invite. Null hides the button on the thank-you page. */
export const WHATSAPP_GROUP_URL: string | null = null;

/**
 * Turnstile (Cloudflare's bot check) on the beta form. This is Cloudflare's always-pass test key;
 * swap in the real site key from the Cloudflare dashboard before going live.
 */
export const TURNSTILE_SITE_KEY = '1x00000000000000000000AA';

/** When the privacy policy and terms last changed. */
export const POLICY_UPDATED = '29 October 2026';

export const SITE_URL = 'https://glim.co.zw';
export const TAGLINE = 'Know before the lights go.';
export const DESCRIPTION =
	'See if the power, water or internet is on in your suburb, right now. Reported by your neighbours, free, and no account needed.';
