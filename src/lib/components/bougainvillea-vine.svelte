<script>
	let { growDirection = 'up', classes = '' } = $props();
	// In a real scenario, this would be a more complex, potentially animated SVG
</script>

{#if growDirection === 'up'}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 50 200"
		class="w-8 h-48 {classes}"
		fill="none"
	>
		<path
			d="M25 200 V150 C 25 120, 10 130, 10 100 C 10 70, 25 80, 25 50 V0"
			stroke="currentColor"
			stroke-width="2"
		/>
		<circle cx="10" cy="100" r="3" fill="currentColor" class="text-accent-secondary" />
		<circle cx="25" cy="50" r="4" fill="currentColor" class="text-accent-primary opacity-70" />
		<circle cx="15" cy="150" r="2" fill="currentColor" class="text-accent-secondary opacity-50" />
	</svg>
{:else if growDirection === 'across'}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 200 50"
		class="w-48 h-8 {classes}"
		fill="none"
	>
		<path
			d="M0 25 H50 C 80 25, 70 10, 100 10 C 130 10, 120 25, 150 25 H200"
			stroke="currentColor"
			stroke-width="2"
		/>
		<circle cy="10" cx="100" r="3" fill="currentColor" class="text-accent-secondary" />
		<circle cy="25" cx="50" r="4" fill="currentColor" class="text-accent-primary opacity-70" />
		<circle cy="15" cx="150" r="2" fill="currentColor" class="text-accent-secondary opacity-50" />
	</svg>
{/if}

<style>
	/* currentColor will pick up text-accent-secondary or similar from parent */
</style>
