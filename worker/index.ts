/**
 * Glim's website Worker. Pages are static files served straight from assets; this only runs for
 * /api/* (see run_worker_first in wrangler.jsonc), and handles the beta sign-up form.
 *
 * The form posts here directly, so it works without JavaScript: plain posts get redirected to
 * the thank-you page (or back to the form with a problem), and fetches asking for JSON get JSON.
 */

const SITEVERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
const PHONES = ['android', 'iphone'];

export type Problem = 'email' | 'suburb' | 'phone' | 'consent' | 'verify' | 'server';

export default {
	async fetch(request, env) {
		const url = new URL(request.url);
		if (url.pathname !== '/api/beta') return new Response('Not found', { status: 404 });
		if (request.method !== 'POST') {
			return new Response('Method not allowed', { status: 405, headers: { Allow: 'POST' } });
		}

		const wantsJson = request.headers.get('Accept')?.includes('application/json') ?? false;
		const reply = (problem?: Problem) => {
			if (wantsJson) {
				const status = !problem ? 200 : problem === 'server' ? 500 : 400;
				return Response.json(problem ? { ok: false, problem } : { ok: true }, { status });
			}
			const to = problem ? `/beta?problem=${problem}` : '/beta/thanks';
			return Response.redirect(new URL(to, url).toString(), 303);
		};

		let form: FormData;
		try {
			form = await request.formData();
		} catch {
			return reply('server');
		}
		const field = (name: string) => String(form.get(name) ?? '').trim();

		const email = field('email').toLowerCase();
		const suburb = field('suburb').replace(/\s+/g, ' ');
		const phone = field('phone');
		if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return reply('email');
		if (suburb.length < 2 || suburb.length > 80) return reply('suburb');
		if (!PHONES.includes(phone)) return reply('phone');
		if (field('consent') !== 'yes') return reply('consent');

		const human = await verifyTurnstile(
			field('cf-turnstile-response'),
			env.TURNSTILE_SECRET,
			request.headers.get('CF-Connecting-IP')
		);
		if (!human) return reply('verify');

		try {
			await env.DB.prepare(
				`INSERT INTO beta_signups (email, suburb, phone) VALUES (?1, ?2, ?3)
				 ON CONFLICT (email) DO UPDATE SET suburb = ?2, phone = ?3, updated_at = datetime('now')`
			)
				.bind(email, suburb, phone)
				.run();
		} catch (error) {
			console.error('Could not save beta sign-up', error);
			return reply('server');
		}
		return reply();
	}
} satisfies ExportedHandler<Env>;

/** Checks the Turnstile token with Cloudflare; each token works once, for five minutes. */
async function verifyTurnstile(token: string, secret: string, ip: string | null) {
	if (!token || token.length > 2048) return false;
	try {
		const response = await fetch(SITEVERIFY_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ secret, response: token, remoteip: ip ?? undefined }),
			signal: AbortSignal.timeout(8000)
		});
		const result: { success?: boolean } = await response.json();
		return result.success === true;
	} catch (error) {
		console.error('Turnstile check failed', error);
		return false;
	}
}
