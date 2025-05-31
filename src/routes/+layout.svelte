<script lang="ts">
	import '../styles/index.css';
	import LiteYoutubeEmbed from './lite-youtube-embed.svelte';

	let { children } = $props();
</script>

<LiteYoutubeEmbed />
<div>
	<h1>main layout</h1>
	{@render children()}
</div>
