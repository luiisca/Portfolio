<script>
	import ProjectCard from '$lib/components/project-card.svelte';
	let { data } = $props();
</script>

<svelte:head>
	<title>Projects | Luis Cadillo</title>
	<meta name="description" content="A showcase of projects by Luis Cadillo." />
</svelte:head>

<section class="py-8">
	<h1 class="text-4xl font-bold text-base-heading mb-10 text-center">:: My Projects</h1>
	<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each data.projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</section>
