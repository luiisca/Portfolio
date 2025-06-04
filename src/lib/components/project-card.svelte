<script>
	let { project } = $props();
</script>

<a
	href={project.liveLink || `/projects/${project.slug}`}
	target={project.liveLink ? '_blank' : '_self'}
	rel={project.liveLink ? 'noopener noreferrer' : ''}
	class="block bg-code-bg p-6 rounded-lg shadow-lg hover:shadow-accent-primary/20 transition-all duration-300 group border border-transparent hover:border-accent-primary/30"
>
	{#if project.imageUrl}
		<img
			src={project.imageUrl}
			alt="{project.title} thumbnail"
			class="rounded-md mb-4 w-full h-48 object-cover group-hover:opacity-90 transition-opacity"
		/>
	{/if}
	<h3
		class="text-xl font-semibold text-base-heading mb-2 group-hover:text-accent-primary transition-colors"
	>
		{project.title}
	</h3>
	<p class="text-sm text-base-text/70 mb-3 h-16 overflow-hidden">{project.shortDescription}</p>
	<div class="flex flex-wrap gap-2 mb-4">
		{#each project.tags.slice(0, 4) as tag}
			<span class="text-xs bg-base-bg px-2 py-1 rounded-full text-accent-secondary">{tag}</span>
		{/each}
	</div>
	<div class="flex justify-between items-center text-xs">
		<span class="text-accent-primary group-hover:underline">
			{project.liveLink ? 'View Live' : 'View Details'} &rarr;
		</span>
		{#if project.githubLink}
			<a
				href={project.githubLink}
				target="_blank"
				rel="noopener noreferrer"
				class="text-base-text/60 hover:text-accent-primary transition-colors"
				onclick={(e) => e.stopPropagation()}
			>
				GitHub
			</a>
		{/if}
	</div>
</a>
