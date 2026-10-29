<script lang="ts">
	// The app's skyline (components/brand/buildings.tsx there), repeated to fill wide screens.
	type Building = {
		x: number;
		y: number;
		width: number;
		height: number;
		windows: [number, number, boolean][];
	};

	const BUILDINGS: Building[] = [
		{
			x: 10,
			y: 30,
			width: 44,
			height: 50,
			windows: [
				[18, 38, true],
				[37, 38, false],
				[18, 54, false],
				[37, 54, true]
			]
		},
		{
			x: 60,
			y: 14,
			width: 36,
			height: 66,
			windows: [
				[67, 22, false],
				[81, 22, true],
				[67, 38, true],
				[81, 38, false],
				[67, 54, true]
			]
		},
		{
			x: 104,
			y: 40,
			width: 50,
			height: 40,
			windows: [
				[112, 48, false],
				[130, 48, true]
			]
		},
		{
			x: 162,
			y: 8,
			width: 40,
			height: 72,
			windows: [
				[169, 16, true],
				[186, 16, false],
				[169, 32, false],
				[186, 32, true],
				[169, 48, true]
			]
		},
		{
			x: 212,
			y: 32,
			width: 48,
			height: 48,
			windows: [
				[220, 40, true],
				[240, 40, false]
			]
		},
		{
			x: 268,
			y: 12,
			width: 36,
			height: 68,
			windows: [
				[275, 20, false],
				[289, 20, true],
				[275, 36, true],
				[289, 52, false]
			]
		},
		{
			x: 312,
			y: 36,
			width: 44,
			height: 44,
			windows: [
				[320, 44, true],
				[338, 44, false]
			]
		},
		{
			x: 364,
			y: 20,
			width: 30,
			height: 60,
			windows: [
				[370, 28, false],
				[370, 44, true]
			]
		}
	];

	/** Enough copies of the 390-wide strip to cover a very wide screen. */
	const COPIES = 7;
</script>

<div class="skyline" aria-hidden="true">
	<svg
		viewBox="0 8 {390 * COPIES} 72"
		preserveAspectRatio="xMidYMax slice"
		xmlns="http://www.w3.org/2000/svg"
	>
		{#each { length: COPIES }, copy (copy)}
			<g transform="translate({copy * 390} 0)">
				{#each BUILDINGS as building (building.x)}
					<rect
						x={building.x}
						y={building.y}
						width={building.width}
						height={building.height}
						rx="4"
						fill="#1B2340"
					/>
					{#each building.windows as [x, y, lit] (`${x},${y}`)}
						<rect {x} {y} width="9" height="9" rx="2" fill={lit ? '#FFD21F' : '#3C4770'} />
					{/each}
				{/each}
			</g>
		{/each}
	</svg>
</div>

<style>
	.skyline {
		width: 100%;
		height: 72px;
		overflow: hidden;
	}

	svg {
		display: block;
		width: 100%;
		height: 100%;
	}
</style>
