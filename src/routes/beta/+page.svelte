<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { onMount } from 'svelte';
	import Bee from '#lib/brand/Bee.svelte';

	const PROBLEMS: Record<string, string> = {
		email: 'Please check your email address.',
		suburb: 'Please tell us your suburb.',
		phone: 'Please choose Android or iPhone.',
		consent: 'Please tick the box so we can contact you.',
		busy: 'Lots of sign-ups from your connection just now. Please try again in a minute.',
		server: 'Something went wrong on our side. Please try again in a moment.'
	};

	let problem = $state<string | null>(null);
	let sending = $state(false);

	// Without JavaScript the form posts straight to the server, which sends people back here with
	// ?problem=… if something was wrong.
	onMount(() => {
		const code = new URLSearchParams(location.search).get('problem');
		if (code && code in PROBLEMS) problem = PROBLEMS[code];
	});

	async function submit(event: SubmitEvent) {
		event.preventDefault();
		const form = event.currentTarget as HTMLFormElement;
		sending = true;
		problem = null;
		try {
			const response = await fetch(form.action, {
				method: 'POST',
				body: new FormData(form),
				headers: { Accept: 'application/json' }
			});
			const result: { ok: boolean; problem?: string } = await response.json();
			if (result.ok) {
				await goto(resolve('/beta/thanks'));
				return;
			}
			problem = PROBLEMS[result.problem ?? 'server'] ?? PROBLEMS.server;
		} catch {
			problem = 'You seem to be offline. Please check your connection and try again.';
		}
		sending = false;
	}
</script>

<section class="wrap beta">
	<div class="intro">
		<Bee size={96} onLight />
		<h1>Join the Glim beta</h1>
		<p>
			Be one of the first to try Glim, before it’s on the Play Store. We’ll send you an invite, and
			your feedback shapes the app.
		</p>
	</div>

	<form method="post" action="/api/beta" onsubmit={submit}>
		<label class="field">
			<span class="label">Email</span>
			<input name="email" type="email" autocomplete="email" required maxlength="254" />
			<span class="hint">On Android, use the Google account you use on the Play Store.</span>
		</label>

		<label class="field">
			<span class="label">Your suburb</span>
			<input
				name="suburb"
				type="text"
				required
				minlength="2"
				maxlength="80"
				placeholder="e.g. Avondale, Harare"
			/>
			<span class="hint">So we can open Glim suburb by suburb.</span>
		</label>

		<fieldset class="field">
			<legend class="label">Your phone</legend>
			<div class="choices">
				<label class="choice">
					<input type="radio" name="phone" value="android" required />
					<span>Android</span>
				</label>
				<label class="choice">
					<input type="radio" name="phone" value="iphone" />
					<span>iPhone</span>
				</label>
			</div>
		</fieldset>

		<label class="consent">
			<input type="checkbox" name="consent" value="yes" required />
			<span>
				Glim can use these details to invite me to test the app and send me beta updates. See our
				<a href={resolve('/privacy')}>privacy policy</a>.
			</span>
		</label>

		<!-- Left empty by people (it's hidden); bots that fill every field give themselves away. -->
		<label class="trap" aria-hidden="true">
			Website
			<input name="website" type="text" tabindex="-1" autocomplete="off" />
		</label>

		{#if problem}
			<p class="problem" role="alert">{problem}</p>
		{/if}

		<button type="submit" disabled={sending}>{sending ? 'Joining…' : 'Join the beta'}</button>
	</form>
</section>

<style>
	.beta {
		display: grid;
		grid-template-columns: 1fr 1.1fr;
		gap: 40px;
		align-items: start;
		padding-top: 48px;
		padding-bottom: 80px;
	}

	.intro h1 {
		margin-top: 12px;
		font-size: clamp(34px, 6vw, 48px);
	}

	.intro p {
		margin-top: 12px;
		max-width: 26em;
		font-size: 18px;
		font-weight: 700;
		color: var(--ink-soft);
	}

	form {
		display: grid;
		gap: 22px;
		padding: 28px;
		border-radius: 28px;
		background: var(--field);
	}

	.field {
		display: grid;
		gap: 6px;
		margin: 0;
		padding: 0;
		border: 0;
	}

	.label {
		padding: 0;
		font-size: 15px;
		font-weight: 900;
	}

	.hint {
		font-size: 14px;
		font-weight: 600;
		color: var(--ink-muted);
	}

	input[type='email'],
	input[type='text'] {
		width: 100%;
		height: 54px;
		padding: 0 16px;
		border: 2px solid var(--field-border);
		border-radius: 16px;
		background: var(--white);
		color: var(--ink);
		font: inherit;
		font-weight: 700;
	}

	input[type='email']:focus,
	input[type='text']:focus {
		border-color: var(--ink);
		outline: none;
	}

	input::placeholder {
		color: var(--ink-faint);
		font-weight: 600;
	}

	.choices {
		display: flex;
		gap: 10px;
		margin-top: 2px;
	}

	.choice {
		position: relative;
		flex: 1;
	}

	/* Hidden visually but still focusable and announced; the pill shows the choice. */
	.choice input {
		position: absolute;
		opacity: 0;
		inset: 0;
		margin: 0;
	}

	.choice span {
		display: grid;
		place-items: center;
		height: 50px;
		border: 2px solid var(--ink);
		border-radius: 999px;
		background: var(--white);
		font-weight: 900;
		transition:
			background 0.15s ease,
			color 0.15s ease;
	}

	.choice input:checked + span {
		background: var(--ink);
		color: var(--white);
	}

	.choice input:focus-visible + span {
		outline: 3px solid var(--ink);
		outline-offset: 3px;
	}

	.consent {
		display: flex;
		gap: 12px;
		align-items: flex-start;
		font-size: 15px;
		font-weight: 600;
		color: var(--ink-muted);
	}

	.consent input {
		flex: none;
		width: 22px;
		height: 22px;
		margin-top: 1px;
		accent-color: var(--ink);
	}

	.consent a {
		color: var(--ink);
		font-weight: 800;
	}

	.trap {
		position: absolute;
		left: -10000px;
		width: 1px;
		height: 1px;
		overflow: hidden;
	}

	.problem {
		padding: 12px 16px;
		border-radius: 14px;
		background: #fde3e0;
		color: #c0281a;
		font-weight: 800;
	}

	button {
		height: 58px;
		border: 0;
		border-radius: 18px;
		background: var(--sun);
		box-shadow: 0 5px 0 var(--sun-edge);
		color: var(--ink);
		font: inherit;
		font-size: 19px;
		font-weight: 900;
		cursor: pointer;
		transition:
			translate 0.12s ease,
			box-shadow 0.12s ease;
	}

	button:hover {
		translate: 0 2px;
		box-shadow: 0 3px 0 var(--sun-edge);
	}

	button:disabled {
		opacity: 0.6;
		cursor: default;
		translate: none;
		box-shadow: 0 5px 0 var(--sun-edge);
	}

	@media (max-width: 860px) {
		.beta {
			grid-template-columns: 1fr;
			gap: 24px;
			padding-top: 32px;
		}

		form {
			padding: 20px;
		}
	}
</style>
