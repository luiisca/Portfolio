<script>
	import ProjectCard from '$lib/components/project-card.svelte';
	import BlogPostSnippet from '$lib/components/blogpost-snippet.svelte';
	import { projects } from '$lib/data/projects.js';
	import { posts } from '$lib/data/posts.js';

	let featuredProjects = $state(projects.slice(0, 2)); // Show first 2 projects
	let recentPosts = $state(posts.slice(0, 2)); // Show first 2 posts

	let skills = $state([
		{ name: 'TypeScript', icon: 'logos:typescript-icon' }, // Placeholder for icons, e.g., from Iconify
		{ name: 'React', icon: 'logos:react' },
		{ name: 'Next.js', icon: 'logos:nextjs-icon' },
		{ name: 'SvelteKit', icon: 'logos:svelte-icon' },
		{ name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
		{ name: 'PostgreSQL', icon: 'logos:postgresql' },
		{ name: 'Python', icon: 'logos:python' },
		{ name: 'Shell Scripting', icon: 'mdi:bash' },
		{ name: 'Git', icon: 'logos:git-icon' },
		{ name: 'Linux', icon: 'flat-color-icons:linux' },
		{ name: 'Nvim', icon: 'simple-icons:neovim' }
	]);
</script>

<svelte:head>
	<meta
		name="description"
		content="Portfolio and blog of Luis Cadillo. Driven by a passion for learning, I build software with purposeful minimalism, focusing on excellent user experience and effective problem-solving."
	/>
</svelte:head>

<section class="text-center py-16 md:py-24">
	<h1 class="text-4xl md:text-6xl font-bold text-base-heading mb-4">
		Luis <span class="text-accent-primary">Cadillo</span>
	</h1>
	<p class="text-lg md:text-xl text-base-text/80 mb-8 max-w-3xl mx-auto">
		// I transform challenges into focused, efficient digital solutions. <br />
		// Building with simplicity and intentional design for impactful user experiences.
	</p>
	<div class="space-x-4">
		<a
			href="/projects"
			class="bg-accent-primary text-base-bg hover:bg-accent-primary-hover px-8 py-3 rounded-md text-lg font-semibold transition-colors duration-200"
		>
			View My Work
		</a>
		<a
			href="/blog"
			class="border border-accent-secondary text-accent-secondary hover:bg-accent-secondary hover:text-base-bg px-8 py-3 rounded-md text-lg font-semibold transition-colors duration-200"
		>
			Read My Thoughts
		</a>
	</div>
</section>

<section class="py-12 md:py-16">
	<h2 class="text-3xl font-bold text-base-heading mb-8 text-center">:: Featured Projects</h2>
	<div class="grid md:grid-cols-2 gap-8">
		{#if featuredProjects.length > 0}
			{#each featuredProjects as project}
				<ProjectCard {project} />
			{/each}
		{:else}
			<p class="text-center text-base-text/70 md:col-span-2">Featured projects coming soon...</p>
		{/if}
	</div>
	<div class="text-center mt-8">
		<a href="/projects" class="text-accent-primary hover:underline">View All Projects →</a>
	</div>
</section>

<section class="py-12 md:py-16 bg-base-bg/50 rounded-lg my-8">
	<h2 class="text-3xl font-bold text-base-heading mb-10 text-center">:: My Toolkit</h2>

	<div
		class="flex flex-wrap justify-center items-center gap-x-4 gap-y-3 md:gap-x-6 md:gap-y-4 max-w-3xl mx-auto"
	>
		{#each skills as skill}
			<div
				class="bg-code-bg px-4 py-2 rounded-md text-base-text/90 text-sm flex items-center space-x-2 shadow-sm hover:shadow-md hover:shadow-accent-primary/10 transition-shadow"
			>
				<!-- <span class="iconify text-accent-secondary" data-icon={skill.icon} data-inline="false"></span> -->
				<span>{skill.name}</span>
			</div>
		{/each}
	</div>

	<div class="mt-8 text-center">
		<p class="text-base-text/80 text-sm md:text-base max-w-xl lg:max-w-2xl mx-auto leading-relaxed">
			My varied toolkit enables a pragmatic approach to challenges, always aiming for software
			that's straightforward, intentionally built, and impactful.
		</p>
	</div>
</section>

<section class="py-12 md:py-16">
	<h2 class="text-3xl font-bold text-base-heading mb-8 text-center">:: Latest Learnings & TILs</h2>
	<div class="space-y-8 max-w-2xl mx-auto">
		{#if recentPosts.length > 0}
			{#each recentPosts as post}
				<BlogPostSnippet {post} />
			{/each}
		{:else}
			<p class="text-center text-base-text/70">Latest learnings and TILs will appear here soon!</p>
		{/if}
	</div>
	<div class="text-center mt-8">
		<a href="/blog" class="text-accent-primary hover:underline">Explore All Posts →</a>
	</div>
</section>
