<script lang="ts">
	import '../styles/index.css';
	import LiteYoutubeEmbed from './lite-youtube-embed.svelte';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';

	let { children } = $props();
</script>

<LiteYoutubeEmbed />
<div class="min-h-screen flex flex-col bg-base-bg text-base-text">
	<Header />

	<main class="flex-grow container mx-auto px-6 md:px-10 py-8">
		{@render children()}
	</main>

	<Footer />
</div>
