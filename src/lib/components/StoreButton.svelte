<script lang="ts">
	import { APP_STORE_URL, PLAY_STORE_URL } from '#lib';

	type Props = { store: 'google' | 'apple'; tone?: 'ink' | 'sun' };

	let { store, tone = 'ink' }: Props = $props();

	const STORES = {
		google: { name: 'Google Play', url: PLAY_STORE_URL },
		apple: { name: 'App Store', url: APP_STORE_URL }
	};
	const { name, url } = $derived(STORES[store]);
</script>

{#snippet badge(prefix: string)}
	{#if store === 'google'}
		<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
			<path
				d="M4 2.8v18.4c0 .6.7 1 1.2.7l15.4-9.2c.5-.3.5-1.1 0-1.4L5.2 2.1C4.7 1.8 4 2.2 4 2.8z"
				fill="currentColor"
			/>
		</svg>
	{:else}
		<!-- A plain "A" made of strokes, like the App Store's mark, without using Apple's logo. -->
		<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
			<path
				d="M9.5 4.5 3.8 15M14.5 4.5 20.2 15M7 11.5h10M2.5 19h6M15.5 19h6"
				stroke="currentColor"
				stroke-width="2.6"
				stroke-linecap="round"
				fill="none"
			/>
		</svg>
	{/if}
	<span class="label">
		<small>{prefix}</small>
		<strong>{name}</strong>
	</span>
{/snippet}

{#if url}
	<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- an app store, not a page of ours -->
	<a class="store {tone}" href={url} rel="noopener">{@render badge('Get it on')}</a>
{:else}
	<span class="store {tone} soon">{@render badge('Coming soon to')}</span>
{/if}

<style>
	.store {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		min-height: 58px;
		padding: 0 20px 0 16px;
		border-radius: 18px;
		text-decoration: none;
		white-space: nowrap;
		/* The app's push buttons: a darker edge underneath. */
		box-shadow: 0 5px 0 var(--edge);
		transition:
			transform 0.12s ease,
			box-shadow 0.12s ease;
	}

	.label {
		display: grid;
		line-height: 1.1;
	}

	small {
		font-size: 12px;
		font-weight: 800;
		opacity: 0.8;
	}

	strong {
		font-size: 19px;
		font-weight: 900;
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

	a.store:hover {
		transform: translateY(2px);
		box-shadow: 0 3px 0 var(--edge);
	}

	a.store:active {
		transform: translateY(4px);
		box-shadow: 0 1px 0 var(--edge);
	}

	.soon {
		cursor: default;
	}
</style>
