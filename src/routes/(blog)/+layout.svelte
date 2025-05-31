<script lang="ts">
	import '@wooorm/starry-night/style/dark';
	import './twoslash-demo';
	import Clipboard from './clipboard.svelte';

	let { children } = $props();
</script>

<Clipboard />
<article class="prose lg:prose-xl">
	{@render children()}
</article>
