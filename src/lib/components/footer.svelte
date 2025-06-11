<script>
	import BougainvilleaVine from '$lib/components/bougainvillea-vine.svelte';
</script>

<footer
	class="py-8 px-6 md:px-10 border-t border-base-text/10 text-center text-xs text-base-text/70 relative"
>
	<div class="container mx-auto">
		<p class="mt-1">
			Built with <a href="https://kit.svelte.dev" target="_blank" rel="noopener noreferrer"
				>SvelteKit</a
			>
			&
			<a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">Tailwind CSS</a>.
			Inspired by the focused elegance and efficient design of text-centric systems.
		</p>
		<div
			class="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-30 text-accent-secondary pointer-events-none"
		>
			<BougainvilleaVine growDirection="across" classes="w-64 h-12" />
		</div>
	</div>
</footer>
