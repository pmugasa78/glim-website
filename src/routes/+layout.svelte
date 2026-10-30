<script lang="ts">
	import { resolve } from '$app/paths';
	import '@fontsource-variable/nunito';
	import '../app.css';

	import { onNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import Bee from '#lib/brand/Bee.svelte';
	import { COMPANY, COMPANY_REGISTRATION, DESCRIPTION, SITE_URL, TAGLINE } from '#lib';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	// Pages can set their own title and description through page data; the home page uses the defaults.
	const title = $derived(page.data.title ? `${page.data.title} · Glim` : `Glim · ${TAGLINE}`);
	const description = $derived(page.data.description ?? DESCRIPTION);
	const year = new Date().getFullYear();

	// Cross-fade between pages where the browser supports view transitions.
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="theme-color" content="#FFD21F" />
	<link rel="icon" type="image/png" href="/favicon.png" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
	<link rel="canonical" href="{SITE_URL}{page.url.pathname}" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Glim" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content="{SITE_URL}{page.url.pathname}" />
	<meta property="og:image" content="{SITE_URL}/og.png" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="page">
	<a class="skip" href="#main">Skip to content</a>

	<header class:on-sun={page.url.pathname === '/'}>
		<div class="wrap bar">
			<a class="brand" href={resolve('/')} aria-label="Glim home">
				<Bee size={40} />
				<span>Glim</span>
			</a>
			<nav aria-label="Main">
				<a href="{resolve('/')}#how-it-works">How it works</a>
				<a
					href={resolve('/privacy')}
					aria-current={page.url.pathname === '/privacy' ? 'page' : undefined}>Privacy</a
				>
				<a
					href={resolve('/contact')}
					aria-current={page.url.pathname === '/contact' ? 'page' : undefined}>Contact</a
				>
				<a class="beta" href={resolve('/beta')}>Join the beta</a>
			</nav>
		</div>
	</header>

	<main id="main">
		{@render children()}
	</main>

	<footer>
		<div class="wrap foot">
			<a class="brand" href={resolve('/')} aria-label="Glim home">
				<Bee size={36} />
				<span>Glim</span>
			</a>
			<nav aria-label="Footer">
				<a href={resolve('/privacy')}>Privacy policy</a>
				<a href={resolve('/terms')}>Terms of use</a>
				<a href={resolve('/contact')}>Contact</a>
			</nav>
			<p class="legal">
				© {year}
				{COMPANY} (reg. no. {COMPANY_REGISTRATION}). Glim reports come from the public and are not
				official utility notices.
			</p>
		</div>
	</footer>
</div>

<style>
	/* At least a screen tall, so the footer sits at the bottom of short pages. */
	.page {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		min-height: 100dvh;
	}

	main {
		flex: 1;
	}

	.skip {
		position: absolute;
		left: 12px;
		top: -60px;
		z-index: 10;
		padding: 10px 16px;
		border-radius: 12px;
		background: var(--ink);
		color: var(--white);
		font-weight: 800;
		text-decoration: none;
	}

	.skip:focus {
		top: 12px;
	}

	header {
		background: var(--white);
	}

	header.on-sun {
		background: var(--sun);
	}

	.bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
		min-height: 72px;
	}

	.brand {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		font-size: 24px;
		font-weight: 900;
		text-decoration: none;
	}

	nav {
		display: flex;
		flex-wrap: wrap;
		gap: 4px 20px;
	}

	nav a {
		font-weight: 800;
		text-decoration: none;
		padding: 6px 0;
		border-bottom: 2px solid transparent;
	}

	nav a:hover,
	nav a[aria-current='page'] {
		border-bottom-color: currentColor;
	}

	nav {
		align-items: center;
	}

	nav .beta {
		padding: 8px 14px;
		border: 0;
		border-radius: 999px;
		background: var(--ink);
		color: var(--white);
	}

	nav .beta:hover {
		background: var(--ink-soft);
	}

	/* "How it works" lives on the home page; on small screens keep the bar to the essentials. */
	/* On phones the header keeps Contact and the beta; Privacy is in the footer. */
	@media (max-width: 480px) {
		header nav a:first-child,
		header nav a:nth-child(2) {
			display: none;
		}

		header nav {
			gap: 4px 16px;
			font-size: 15px;
		}
	}

	footer {
		background: var(--field);
		color: var(--ink-muted);
	}

	.foot {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 16px 32px;
		padding-top: 32px;
		padding-bottom: 40px;
	}

	.foot .brand,
	.foot nav a {
		color: var(--ink);
	}

	.legal {
		flex-basis: 100%;
		font-size: 14px;
		font-weight: 600;
	}
</style>
