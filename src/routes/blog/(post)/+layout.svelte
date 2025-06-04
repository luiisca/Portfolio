<script lang="ts">
	import '@wooorm/starry-night/style/dark';
	import './twoslash-demo';
	import Clipboard from './clipboard.svelte';

	let { children } = $props();
</script>

<Clipboard />
<!-- <svelte:head> -->
<!--   <title>{post.title} | Blog | Luis Cadillo</title> -->
<!--   <meta name="description" content={post.excerpt} /> -->
<!-- </svelte:head> -->
<article class="py-8 max-w-3xl mx-auto">
	<header class="mb-8">
		<!-- <h1 class="text-4xl font-bold text-base-heading mb-3">{post.title}</h1> -->
		<p class="text-sm text-base-text/60">
			<!-- Published on {new Date(post.date).toLocaleDateString('en-US', { -->
			Published on {new Date().toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			})}
		</p>
		<div class="flex flex-wrap gap-2 mt-3">
			<!-- {#each post.tags as tag} -->
			<!-- 	<span class="text-xs bg-code-bg px-2 py-1 rounded-full text-accent-secondary">{tag}</span> -->
			<!-- {/each} -->
		</div>
	</header>
	<div
		class="prose prose-invert prose-sm md:prose-base max-w-none text-base-text/90
              prose-headings:text-base-heading prose-a:text-accent-primary
              prose-strong:text-base-heading prose-code:bg-base-bg prose-code:p-1 prose-code:rounded-sm
              prose-pre:bg-code-bg prose-pre:p-4 prose-pre:rounded-md
              prose-blockquote:border-l-accent-secondary prose-blockquote:text-base-text/80"
	>
		{@render children()}
	</div>
	<a href="/blog" class="inline-block mt-12 text-accent-primary hover:underline"
		>&larr; Back to Blog</a
	>
</article>
