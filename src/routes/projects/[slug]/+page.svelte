<script>
	let { data } = $props();
	let project = $derived(data.project);
</script>

<svelte:head>
	<title>{project.title} | Projects | Luis Cadillo</title>
	<meta name="description" content={project.shortDescription} />
</svelte:head>

<article class="py-8 max-w-3xl mx-auto">
	{#if project.imageUrl}
		<img
			src={project.imageUrl}
			alt={project.title}
			class="rounded-lg mb-8 w-full max-h-[400px] object-cover"
		/>
	{/if}
	<h1 class="text-4xl font-bold text-base-heading mb-4">{project.title}</h1>
	<p class="text-sm text-base-text/70 mb-2">Status: {project.status}</p>
	<div class="flex flex-wrap gap-2 mb-6">
		{#each project.tags as tag}
			<span class="text-xs bg-code-bg px-2 py-1 rounded-full text-accent-secondary">{tag}</span>
		{/each}
	</div>

	<div
		class="prose prose-invert prose-sm md:prose-base max-w-none text-base-text/90
              prose-headings:text-base-heading prose-a:text-accent-primary
              prose-strong:text-base-heading prose-code:bg-base-bg prose-code:p-1 prose-code:rounded-sm
              prose-blockquote:border-l-accent-secondary prose-blockquote:text-base-text/80"
	>
		{@html project.readmeContent}
	</div>

	<div class="mt-10 space-x-4">
		{#if project.liveLink}
			<a
				href={project.liveLink}
				target="_blank"
				rel="noopener noreferrer"
				class="bg-accent-primary text-base-bg hover:bg-accent-primary-hover px-6 py-2 rounded-md font-semibold transition-colors"
			>
				View Live Demo
			</a>
		{/if}
		{#if project.githubLink}
			<a
				href={project.githubLink}
				target="_blank"
				rel="noopener noreferrer"
				class="border border-accent-secondary text-accent-secondary hover:bg-accent-secondary hover:text-base-bg px-6 py-2 rounded-md font-semibold transition-colors"
			>
				View on GitHub
			</a>
		{/if}
	</div>

	<a href="/projects" class="inline-block mt-12 text-accent-primary hover:underline"
		>&larr; Back to Projects</a
	>
</article>
