<script lang="ts">
	import '../styles/index.css';
	import LiteYoutubeEmbed from './lite-youtube-embed.svelte';

	let { children } = $props();
</script>

<LiteYoutubeEmbed />
<div>
	<h1>June 02th, 2025</h1>
	{@render children()}
</div>
