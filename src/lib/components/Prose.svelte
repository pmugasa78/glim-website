<script lang="ts">
	import type { Snippet } from 'svelte';

	// A readable column for the privacy policy, terms and contact page.
	type Props = { title: string; intro?: string; updated?: string; children: Snippet };

	let { title, intro, updated, children }: Props = $props();
</script>

<article class="wrap prose">
	<h1>{title}</h1>
	{#if updated}<p class="updated">Last updated {updated}</p>{/if}
	{#if intro}<p class="intro">{intro}</p>{/if}
	{@render children()}
</article>

<style>
	.prose {
		max-width: 720px;
		padding-top: 40px;
		padding-bottom: 72px;
	}

	h1 {
		font-size: clamp(34px, 6vw, 48px);
	}

	.updated {
		margin-top: 8px;
		font-size: 15px;
		font-weight: 700;
		color: var(--ink-faint);
	}

	.intro {
		margin-top: 16px;
		font-size: 19px;
		font-weight: 700;
		color: var(--ink-soft);
	}

	.prose :global(h2) {
		margin-top: 40px;
		font-size: 24px;
	}

	.prose :global(h3) {
		margin-top: 22px;
		font-size: 18px;
	}

	.prose :global(p),
	.prose :global(ul) {
		margin-top: 10px;
		color: var(--ink-muted);
		font-weight: 600;
	}

	.prose :global(ul) {
		padding-left: 22px;
	}

	.prose :global(li + li) {
		margin-top: 6px;
	}

	.prose :global(strong) {
		color: var(--ink);
		font-weight: 800;
	}

	.prose :global(a) {
		color: var(--ink);
		font-weight: 800;
		text-underline-offset: 3px;
	}
</style>
