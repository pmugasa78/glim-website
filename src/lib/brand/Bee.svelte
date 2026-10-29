<script lang="ts">
	// Glim the firefly, as in the app (assets/brand/bee.svg there).
	type Props = {
		size: number;
		/** On a light background the glow is a deeper yellow, so it doesn't fade into the page. */
		onLight?: boolean;
		/** Light out, as when the power is off: a dark tail and antenna tips. */
		dim?: boolean;
		/** On a navy background Glim is drawn in yellow, so its body doesn't disappear. */
		onDark?: boolean;
		class?: string;
	};

	let {
		size,
		onLight = false,
		dim = false,
		onDark = false,
		class: className = ''
	}: Props = $props();
	const body = $derived(onDark ? '#FFD21F' : '#1B2340');
	const tail = $derived(dim ? '#5A6690' : onLight ? '#FFD21F' : '#FFF3B0');
	const glint = $derived(dim ? '#7A86AE' : '#FFFFFF');
	const tip = $derived(dim ? '#5A6690' : onLight ? '#FFD21F' : '#FFFFFF');
	// White wings vanish on a white page, so there they're a soft grey.
	const wing = $derived(onLight ? '#E1E7F0' : '#FFFFFF');
</script>

<svg
	class={className}
	width={size}
	height={size}
	viewBox="0 0 160 160"
	aria-hidden="true"
	xmlns="http://www.w3.org/2000/svg"
>
	{#if !onLight && !dim && !onDark}
		<circle cx="80" cy="112" r="46" fill="#FFFFFF" opacity="0.5" />
	{/if}
	<ellipse
		cx="46"
		cy="72"
		rx="28"
		ry="15"
		transform="rotate(-35 46 72)"
		fill={wing}
		opacity="0.92"
	/>
	<ellipse
		cx="114"
		cy="72"
		rx="28"
		ry="15"
		transform="rotate(35 114 72)"
		fill={wing}
		opacity="0.92"
	/>
	<ellipse cx="80" cy="114" rx="27" ry="31" fill={tail} />
	<ellipse cx="71" cy="105" rx="9" ry="12" fill={glint} />
	<ellipse cx="80" cy="86" rx="23" ry="20" fill={body} />
	<path d="M66 30 Q58 12 46 9" stroke={body} stroke-width="5" stroke-linecap="round" fill="none" />
	<path
		d="M94 30 Q102 12 114 9"
		stroke={body}
		stroke-width="5"
		stroke-linecap="round"
		fill="none"
	/>
	<circle cx="46" cy="9" r="6" fill={tip} />
	<circle cx="114" cy="9" r="6" fill={tip} />
	<circle cx="80" cy="54" r="31" fill={body} />
	<circle cx="68" cy="52" r="10" fill="#FFFFFF" />
	<circle cx="92" cy="52" r="10" fill="#FFFFFF" />
	<circle cx="70" cy="54" r="5.5" fill="#1B2340" />
	<circle cx="94" cy="54" r="5.5" fill="#1B2340" />
	<circle cx="72" cy="52" r="1.9" fill="#FFFFFF" />
	<circle cx="96" cy="52" r="1.9" fill="#FFFFFF" />
	<circle cx="56" cy="66" r="6" fill="#FF9E7A" opacity="0.9" />
	<circle cx="104" cy="66" r="6" fill="#FF9E7A" opacity="0.9" />
	<path d="M71 66 Q80 82 89 66 Z" fill="#FF7A66" />
</svg>
