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
	<title>Luis Cadillo | Self-Taught Developer</title>
	<meta
		name="description"
		content="Portfolio and blog of Luis Cadillo, a self-taught software developer specializing in minimal and efficient web solutions."
	/>
</svelte:head>

<section class="text-center py-16 md:py-24">
	<h1 class="text-4xl md:text-6xl font-bold text-base-heading mb-4">
		Luis <span class="text-accent-primary">Cadillo</span>
	</h1>
	<p class="text-lg md:text-xl text-base-text/80 mb-8 max-w-2xl mx-auto">
		// Self-Taught Software Developer & Open Source Enthusiast <br />
		[@TODO: I strive for Crafting minimal & efficient solutions with a Linux & Nvim philosophy].
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
		{#each featuredProjects as project}
			<ProjectCard {project} />
		{/each}
	</div>
	<div class="text-center mt-8">
		<a href="/projects" class="text-accent-primary hover:underline">View All Projects &rarr;</a>
	</div>
</section>

<section class="py-12 md:py-16 bg-base-bg/50 rounded-lg my-8">
	<h2 class="text-3xl font-bold text-base-heading mb-8 text-center">:: My Toolkit</h2>
	<div class="flex flex-wrap justify-center items-center gap-4 md:gap-6 max-w-3xl mx-auto">
		{#each skills as skill}
			<div
				class="bg-code-bg px-4 py-2 rounded-md text-base-text/90 text-sm flex items-center space-x-2"
			>
				<!-- <span class="iconify" data-icon={skill.icon} data-inline="false"></span> Find an icon solution you like -->
				<span>{skill.name}</span>
			</div>
		{/each}
	</div>
	<p class="text-center text-base-text/70 mt-6 text-sm">
		Driven by the Linux philosophy: simple, modular tools that do one thing well.
	</p>
</section>

<section class="py-12 md:py-16">
	<h2 class="text-3xl font-bold text-base-heading mb-8 text-center">:: Latest Learnings & TILs</h2>
	<div class="space-y-8 max-w-2xl mx-auto">
		{#each recentPosts as post}
			<BlogPostSnippet {post} />
		{/each}
	</div>
	<div class="text-center mt-8">
		<a href="/blog" class="text-accent-primary hover:underline">Explore All Posts &rarr;</a>
	</div>
</section>
