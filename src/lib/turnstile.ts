import type { Attachment } from 'svelte/attachments';

type Turnstile = {
	render(
		container: HTMLElement,
		options: { sitekey: string; theme?: 'light' | 'dark' | 'auto' }
	): string;
	reset(widgetId: string): void;
	remove(widgetId: string): void;
};

declare global {
	interface Window {
		turnstile?: Turnstile;
	}
}

const SCRIPT_URL = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
/** Cloudflare's always-pass test key, for previews on this computer (matches .dev.vars). */
const LOCAL_TEST_KEY = '1x00000000000000000000AA';
let loading: Promise<Turnstile> | undefined;

/** Loads Cloudflare's Turnstile script once, the first time a form needs it. */
function loadTurnstile() {
	loading ??= new Promise<Turnstile>((resolve, reject) => {
		const script = document.createElement('script');
		script.src = SCRIPT_URL;
		script.async = true;
		script.onload = () => (window.turnstile ? resolve(window.turnstile) : reject());
		script.onerror = () => {
			loading = undefined;
			reject(new Error('Turnstile did not load'));
		};
		document.head.append(script);
	});
	return loading;
}

/**
 * Renders the bot check into an element: `{@attach turnstile(siteKey, widget)}`. The widget adds a
 * hidden `cf-turnstile-response` field to the surrounding form. `widget.reset()` gets a fresh token
 * after a failed submission, since each token works only once.
 */
export function turnstile(
	sitekey: string,
	widget: { reset?: () => void }
): Attachment<HTMLElement> {
	return (node) => {
		let id: string | undefined;
		let removed = false;
		loadTurnstile()
			.then((api) => {
				if (removed) return;
				const local = ['localhost', '127.0.0.1'].includes(location.hostname);
				id = api.render(node, { sitekey: local ? LOCAL_TEST_KEY : sitekey, theme: 'light' });
				widget.reset = () => id && api.reset(id);
			})
			.catch((error: unknown) => console.warn(error));
		return () => {
			removed = true;
			if (id) window.turnstile?.remove(id);
		};
	};
}
