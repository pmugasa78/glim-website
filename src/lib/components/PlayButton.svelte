<script lang="ts">
	import { PLAY_STORE_URL } from '#lib';

	let { tone = 'ink' }: { tone?: 'ink' | 'sun' } = $props();
</script>

{#if PLAY_STORE_URL}
	<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- the Play Store, not a page of ours -->
	<a class="play {tone}" href={PLAY_STORE_URL} rel="noopener">
		<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"
			><path
				d="M4 2.8v18.4c0 .6.7 1 1.2.7l15.4-9.2c.5-.3.5-1.1 0-1.4L5.2 2.1C4.7 1.8 4 2.2 4 2.8z"
				fill="currentColor"
			/></svg
		>
		Get it on Google Play
	</a>
{:else}
	<span class="play {tone} soon">
		<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"
			><path
				d="M4 2.8v18.4c0 .6.7 1 1.2.7l15.4-9.2c.5-.3.5-1.1 0-1.4L5.2 2.1C4.7 1.8 4 2.2 4 2.8z"
				fill="currentColor"
			/></svg
		>
		Coming soon to Google Play
	</span>
{/if}

<style>
	.play {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		min-height: 56px;
		padding: 0 24px;
		border-radius: 18px;
		font-size: 18px;
		font-weight: 900;
		white-space: nowrap;
		text-decoration: none;
		/* The app's push buttons: a darker edge underneath. */
		box-shadow: 0 5px 0 var(--edge);
		transition:
			transform 0.12s ease,
			box-shadow 0.12s ease;
	}

	.ink {
		--edge: var(--ink-edge);
		background: var(--ink);
		color: var(--white);
	}

	.sun {
		--edge: var(--sun-edge);
		background: var(--sun);
		color: var(--ink);
	}

	a.play:hover {
		transform: translateY(2px);
		box-shadow: 0 3px 0 var(--edge);
	}

	a.play:active {
		transform: translateY(4px);
		box-shadow: 0 1px 0 var(--edge);
	}

	.soon {
		cursor: default;
	}

	@media (max-width: 400px) {
		.play {
			gap: 8px;
			padding: 0 18px;
			font-size: 16px;
		}
	}
</style>
