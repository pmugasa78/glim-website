<script lang="ts">
	import { resolve } from '$app/paths';
	import Bee from '#lib/brand/Bee.svelte';
</script>

<svelte:head>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="wrap thanks">
	<Bee size={140} onLight />
	<h1>You’re on the list!</h1>
	<p>
		Thanks for helping test Glim. We’ll email you when your invite is ready. Glim works best when
		neighbours join together, so tell a friend in your suburb.
	</p>

	<a class="home" href={resolve('/')}>Back to Glim</a>
</section>

<style>
	.thanks {
		display: grid;
		justify-items: center;
		gap: 14px;
		max-width: 640px;
		padding-top: 56px;
		padding-bottom: 96px;
		text-align: center;
	}

	h1 {
		font-size: clamp(34px, 6vw, 48px);
	}

	p {
		font-size: 18px;
		font-weight: 600;
		color: var(--ink-muted);
	}

	.home {
		margin-top: 8px;
		font-weight: 900;
		text-underline-offset: 4px;
	}
</style>
