<script>
	let { post } = $props();
</script>

<a
	href="/blog/{post.slug}"
	class="block p-6 rounded-lg hover:bg-code-bg/70 transition-colors group"
>
	<h3
		class="text-xl font-semibold text-base-heading mb-1 group-hover:text-accent-primary transition-colors"
	>
		{post.title}
	</h3>
	<p class="text-xs text-base-text/60 mb-2">
		{new Date(post.date).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})}
	</p>
	<p class="text-sm text-base-text/80 mb-3">{post.excerpt}</p>
	<div class="flex flex-wrap gap-2 mb-3">
		{#each post.tags as tag}
			<span class="text-xs bg-base-bg px-2 py-1 rounded-full text-accent-secondary">{tag}</span>
		{/each}
	</div>
	<span class="text-accent-primary text-sm group-hover:underline">Read More &rarr;</span>
</a>
