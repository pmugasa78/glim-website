<script lang="ts">
	import { resolve } from '$app/paths';
	import Bee from '#lib/brand/Bee.svelte';
	import Skyline from '#lib/brand/Skyline.svelte';
	import StoreButton from '#lib/components/StoreButton.svelte';
	import { reveal } from '#lib';

	const PROMISES = [
		{
			title: 'No account',
			text: 'No sign-up, no password, no phone number. Open Glim and pick your suburb.'
		},
		{
			title: 'Only your suburb',
			text: 'Reports say which suburb they’re for. Never your location, and never who you are.'
		},
		{
			title: 'Free',
			text: 'Nothing to pay, ever. Glim works because neighbours help each other.'
		}
	];
</script>

<section class="hero">
	<div class="wrap hero-inner">
		<div class="hero-copy">
			<h1>Power back yet? Glim knows.</h1>
			<p class="lead">
				Live reports from your neighbours on power, water and internet, and an alert as soon as it’s
				back.
			</p>
			<div class="actions stores">
				<StoreButton store="google" />
				<StoreButton store="apple" />
			</div>
		</div>

		<div class="hero-art" aria-hidden="true">
			<div class="rings"></div>
			<div class="bee"><Bee size={220} /></div>
			<div class="status-card">
				<span class="place">Avondale · Harare</span>
				<strong>Power is on</strong>
				<span class="meta">Since 06:12 · 9 reports</span>
			</div>
		</div>
	</div>
	<Skyline />
</section>

<section id="how-it-works" class="how">
	<div class="wrap">
		<h2 {@attach reveal()}>How Glim works</h2>
		<ol class="steps">
			<li class="step" {@attach reveal(80)}>
				<div class="art art-status" aria-hidden="true">
					<div class="mini-hero">
						<Bee size={84} dim />
						<span>Power is off</span>
						<small>Since 18:40 · 6 reports</small>
					</div>
				</div>
				<h3>Know before the lights go</h3>
				<p>Open Glim and see what’s on and off in your suburb, from people who live there.</p>
			</li>
			<li class="step" {@attach reveal(160)}>
				<div class="art art-report" aria-hidden="true">
					<span class="chip power">Power off</span>
					<span class="chip water">Water cut</span>
					<span class="chip internet">Internet down</span>
					<span class="report-button">
						<svg viewBox="0 0 36 36" width="34" height="34"
							><path
								d="M18 5 L32 30 H4 Z"
								fill="#FFD21F"
								stroke="#FFD21F"
								stroke-width="3"
								stroke-linejoin="round"
							/><path
								d="M18 14 v10 M13 19 h10"
								stroke="#1B2340"
								stroke-width="3.2"
								stroke-linecap="round"
							/></svg
						>
					</span>
				</div>
				<h3>One tap tells your neighbours</h3>
				<p>Power off? Water cut? Internet down? Report it in a second. No typing.</p>
			</li>
			<li class="step" {@attach reveal(240)}>
				<div class="art art-alert" aria-hidden="true">
					<div class="notice">
						<Bee size={40} />
						<div>
							<small>GLIM · NOW</small>
							<strong>Power’s back in Avondale</strong>
							<span>3 neighbours reported it</span>
						</div>
					</div>
				</div>
				<h3>We’ll tell you when it’s back</h3>
				<p>Stop checking. Glim alerts you when things change in the places you care about.</p>
			</li>
		</ol>
	</div>
</section>

<section class="promises">
	<div class="wrap">
		<h2 {@attach reveal()}>Simple, and private by design</h2>
		<ul>
			{#each PROMISES as promise, index (promise.title)}
				<li {@attach reveal(80 * (index + 1))}>
					<h3>{promise.title}</h3>
					<p>{promise.text}</p>
				</li>
			{/each}
		</ul>
		<a class="text-link" href={resolve('/privacy')}>Read our privacy policy</a>
	</div>
</section>

<section class="cta">
	<div class="wrap cta-inner" {@attach reveal()}>
		<Bee size={120} onDark />
		<div class="cta-copy">
			<h2>Be the first in your suburb</h2>
			<p>
				The more neighbours report, the better everyone knows. Glim is free and needs no account.
			</p>
		</div>
		<div class="cta-action">
			<a class="join" href={resolve('/beta')}>Join the beta</a>
			<small>Coming soon to Google Play and the App Store</small>
		</div>
	</div>
</section>

<style>
	/* Hero: the app's yellow sky, with Glim in the sun over the skyline. */
	.hero {
		background: var(--sun);
		overflow: hidden;
	}

	.hero-copy > * {
		animation: rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
	}

	.hero-copy > :nth-child(2) {
		animation-delay: 0.08s;
	}

	.hero-copy > :nth-child(3) {
		animation-delay: 0.16s;
	}

	.hero-art {
		animation: settle 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.15s both;
	}

	.status-card {
		animation: rise 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.65s both;
	}

	/* Individual translate/scale, so they don't fight the transforms used for layout and floating. */
	@keyframes rise {
		from {
			opacity: 0;
			translate: 0 14px;
		}
	}

	@keyframes settle {
		from {
			opacity: 0;
			scale: 0.94;
		}
	}

	.hero-inner {
		display: grid;
		grid-template-columns: 1.1fr 1fr;
		align-items: center;
		gap: 24px;
		padding-top: 32px;
		padding-bottom: 8px;
	}

	h1 {
		font-size: clamp(40px, 7vw, 68px);
	}

	.lead {
		margin-top: 18px;
		max-width: 30em;
		font-size: clamp(18px, 2.2vw, 21px);
		font-weight: 700;
		color: var(--ink-soft);
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 16px 24px;
		margin-top: 28px;
	}

	.stores {
		display: flex;
		flex-wrap: wrap;
		gap: 14px;
	}

	.text-link {
		font-weight: 900;
		text-decoration: underline;
		text-underline-offset: 4px;
	}

	.hero-art {
		position: relative;
		height: 400px;
	}

	.rings {
		position: absolute;
		left: 50%;
		top: 50%;
		width: 380px;
		height: 380px;
		transform: translate(-50%, -50%);
		border-radius: 50%;
		background: radial-gradient(circle, var(--sun-100) 0 46%, var(--sun-200) 46% 100%);
	}

	.bee {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -58%);
		animation: float 3.6s ease-in-out infinite;
	}

	.status-card {
		position: absolute;
		right: 0;
		bottom: 28px;
		display: grid;
		gap: 2px;
		padding: 14px 18px;
		border-radius: 20px;
		background: var(--white);
		box-shadow: 0 10px 30px rgba(27, 35, 64, 0.16);
	}

	.status-card .place,
	.status-card .meta {
		font-size: 14px;
		font-weight: 700;
		color: var(--ink-muted);
	}

	.status-card strong {
		font-size: 22px;
		font-weight: 900;
	}

	@keyframes float {
		50% {
			transform: translate(-50%, -64%);
		}
	}

	/* How it works: the three onboarding slides, side by side. */
	.how {
		padding: 72px 0 80px;
	}

	h2 {
		font-size: clamp(30px, 4.5vw, 42px);
	}

	.steps {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 24px;
		margin: 36px 0 0;
		padding: 0;
		list-style: none;
	}

	.art {
		transition:
			translate 0.25s ease,
			box-shadow 0.25s ease;
	}

	.step:hover .art {
		translate: 0 -4px;
		box-shadow: 0 12px 28px rgba(27, 35, 64, 0.1);
	}

	.step h3 {
		margin-top: 20px;
		font-size: 22px;
	}

	.step p {
		margin-top: 6px;
		color: var(--ink-muted);
		font-weight: 600;
	}

	.art {
		position: relative;
		display: grid;
		place-items: center;
		height: 220px;
		border-radius: 28px;
		overflow: hidden;
	}

	.art-status {
		background: #e6eef7;
	}

	.mini-hero {
		display: grid;
		justify-items: center;
		gap: 2px;
	}

	.mini-hero span {
		font-size: 22px;
		font-weight: 900;
	}

	.mini-hero small {
		font-size: 13px;
		font-weight: 700;
		color: var(--ink-muted);
	}

	.art-report {
		background: var(--field);
	}

	.chip {
		position: absolute;
		padding: 7px 12px;
		border-radius: 999px;
		background: var(--white);
		font-size: 14px;
		font-weight: 800;
		box-shadow: 0 4px 12px rgba(27, 35, 64, 0.08);
	}

	.chip.power {
		left: 9%;
		top: 18%;
		color: var(--power);
	}

	.chip.water {
		right: 8%;
		top: 30%;
		color: var(--water);
	}

	.chip.internet {
		left: 14%;
		bottom: 16%;
		color: var(--internet);
	}

	.report-button {
		display: grid;
		place-items: center;
		width: 64px;
		height: 64px;
		border-radius: 20px;
		background: var(--ink);
		box-shadow: 0 5px 0 var(--ink-edge);
	}

	.art-alert {
		background: var(--sun-50);
	}

	.notice {
		display: flex;
		align-items: center;
		gap: 10px;
		width: 86%;
		padding: 12px 14px;
		border-radius: 20px;
		background: var(--white);
		box-shadow: 0 8px 24px rgba(27, 35, 64, 0.12);
	}

	.notice div {
		display: grid;
		line-height: 1.3;
	}

	.notice small {
		font-size: 11px;
		font-weight: 900;
		letter-spacing: 0.06em;
		color: var(--ink-faint);
	}

	.notice strong {
		font-size: 15px;
		font-weight: 900;
	}

	.notice span {
		font-size: 13px;
		font-weight: 600;
		color: var(--ink-muted);
	}

	/* Promises */
	.promises {
		padding: 64px 0 72px;
		background: var(--field);
	}

	.promises ul {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
		margin: 28px 0;
		padding: 0;
		list-style: none;
	}

	.promises li {
		padding: 22px;
		border-radius: 24px;
		background: var(--white);
	}

	.promises h3 {
		font-size: 20px;
	}

	.promises p {
		margin-top: 6px;
		color: var(--ink-muted);
		font-weight: 600;
	}

	/* Closing call to action */
	.cta {
		padding: 56px 0;
		background: var(--ink);
		color: var(--white);
	}

	.cta-inner {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 20px 32px;
	}

	.cta-copy {
		flex: 1 1 320px;
	}

	.cta-action {
		display: grid;
		justify-items: center;
		gap: 10px;
	}

	.join {
		display: inline-grid;
		place-items: center;
		min-height: 58px;
		padding: 0 34px;
		border-radius: 18px;
		background: var(--sun);
		box-shadow: 0 5px 0 var(--sun-edge);
		color: var(--ink);
		font-size: 19px;
		font-weight: 900;
		text-decoration: none;
		transition:
			translate 0.12s ease,
			box-shadow 0.12s ease;
	}

	.join:hover {
		translate: 0 2px;
		box-shadow: 0 3px 0 var(--sun-edge);
	}

	.cta-action small {
		color: #c9cfe3;
		font-size: 13px;
		font-weight: 700;
	}

	.cta p {
		margin-top: 8px;
		color: #c9cfe3;
		font-weight: 600;
	}

	@media (max-width: 860px) {
		.hero-inner {
			grid-template-columns: 1fr;
			padding-top: 16px;
		}

		.hero-art {
			height: 340px;
		}

		.rings {
			width: 300px;
			height: 300px;
		}

		.bee :global(svg) {
			width: 180px;
			height: 180px;
		}

		.status-card {
			right: auto;
			left: 50%;
			bottom: 12px;
			transform: translateX(-50%);
			white-space: nowrap;
		}

		.steps,
		.promises ul {
			grid-template-columns: 1fr;
		}
	}
</style>
