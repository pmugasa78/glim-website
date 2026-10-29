/**
 * Glim's website Worker. Pages are static files served straight from assets; this only runs for
 * /api/* (see run_worker_first in wrangler.jsonc), and handles the beta sign-up form.
 *
 * The form posts here directly, so it works without JavaScript: plain posts get redirected to
 * the thank-you page (or back to the form with a problem), and fetches asking for JSON get JSON.
 *
 * Bots are kept out without bothering people: a hidden "website" field that only bots fill in,
 * and a per-connection limit on how often the form can be sent.
 */

export type Problem = 'email' | 'busy' | 'server';

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
				const status = !problem ? 200 : problem === 'server' ? 500 : problem === 'busy' ? 429 : 400;
				return Response.json(problem ? { ok: false, problem } : { ok: true }, { status });
			}
			const to = problem ? `/beta?problem=${problem}` : '/beta/thanks';
			return Response.redirect(new URL(to, url).toString(), 303);
		};

		// Generous, since mobile networks put many people behind one address.
		const ip = request.headers.get('CF-Connecting-IP') ?? 'unknown';
		const { success } = await env.SIGNUP_LIMIT.limit({ key: ip });
		if (!success) return reply('busy');

		let form: FormData;
		try {
			form = await request.formData();
		} catch {
			return reply('server');
		}
		const field = (name: string) => String(form.get(name) ?? '').trim();

		// A bot filled in the hidden field: look like it worked, but keep nothing.
		if (field('website')) return reply();

		const email = field('email').toLowerCase();
		if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return reply('email');

		// Signing up again with the same email just counts as joining again.
		try {
			await env.DB.prepare(
				`INSERT INTO beta_signups (email) VALUES (?1)
				 ON CONFLICT (email) DO UPDATE SET updated_at = datetime('now')`
			)
				.bind(email)
				.run();
		} catch (error) {
			console.error('Could not save beta sign-up', error);
			return reply('server');
		}
		return reply();
	}
} satisfies ExportedHandler<Env>;
