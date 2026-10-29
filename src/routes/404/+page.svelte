<script lang="ts">
	// Built as /404.html, which Cloudflare serves for paths that don't exist (see wrangler.jsonc).
	import { resolve } from '$app/paths';
	import Bee from '#lib/brand/Bee.svelte';
</script>

<svelte:head>
	<title>Page not found · Glim</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="wrap missing">
	<Bee size={140} onLight />
	<h1>This page is in the dark</h1>
	<p>We couldn’t find what you were looking for.</p>
	<a href={resolve('/')}>Back to Glim</a>
</section>

<style>
	.missing {
		display: grid;
		justify-items: center;
		gap: 12px;
		padding-top: 64px;
		padding-bottom: 96px;
		text-align: center;
	}

	h1 {
		font-size: clamp(30px, 5vw, 40px);
	}

	p {
		color: var(--ink-muted);
		font-weight: 600;
	}

	a {
		margin-top: 8px;
		font-weight: 900;
		text-underline-offset: 4px;
	}
</style>
