<script>
	import BlogPostSnippet from '$lib/components/blogpost-snippet.svelte';
	let { data } = $props();
</script>

<svelte:head>
	<title>Blog | Luis Cadillo</title>
	<meta name="description" content="Thoughts, learnings, and TILs from Luis Cadillo." />
</svelte:head>

<section class="py-8">
	<h1 class="text-4xl font-bold text-base-heading mb-10 text-center">:: Blog & TILs</h1>
	<div class="space-y-10 max-w-3xl mx-auto">
		{#if data.posts.length > 0}
			{#each data.posts as post}
				<BlogPostSnippet {post} />
			{/each}
		{:else}
			<p class="text-center text-base-text/70">No posts yet. Check back soon!</p>
		{/if}
	</div>
</section>
