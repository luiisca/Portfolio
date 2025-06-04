<script>
	// Placeholder for skills, contributions, etc.
	// You can fetch this from a JS file or hardcode as needed.
	let ossContributions = $state([
		{ name: 'Cal.com', link: 'https://github.com/calcom/cal.com/pulls?q=is%3Apr+author%3Aluiisca' },
		{ name: 'Hono.js', link: 'https://github.com/honojs/hono/pulls?q=is%3Apr+author%3Aluiisca' }
	]);

	let futureInterests = $state([
		'Minimal Android Markdown Editor (potential library)',
		'Rewriting Earbuds Software with Zig (great blog post potential!)'
	]);

	let skillsList = $state({
		frontend: [
			'React',
			'Next.js',
			'SvelteKit',
			'TypeScript',
			'TailwindCSS',
			'HTML5',
			'CSS3',
			'MDX'
		],
		backend: ['Node.js (basic)', 'PostgreSQL', 'Python (basic for scripting)'],
		tools: ['Git', 'GitHub', 'Docker (learning)', 'Nvim', 'Linux (Arch/Debian based)'],
		languages: ['TypeScript', 'JavaScript', 'Python', 'Shell Scripting', 'Zig (learning)'],
		concepts: ['Open Source', 'Minimalism', 'Linux Philosophy', 'Web Performance', 'API Design']
	});
</script>

<svelte:head>
	<title>About Me | Luis Cadillo</title>
	<meta
		name="description"
		content="Learn more about Luis Cadillo, his journey as a self-taught developer, skills, and philosophy."
	/>
</svelte:head>

<section class="py-8 max-w-3xl mx-auto">
	<h1 class="text-4xl font-bold text-base-heading mb-8">:: About Me</h1>

	<div
		class="prose prose-invert prose-sm md:prose-base max-w-none text-base-text/90
              prose-headings:text-base-heading prose-a:text-accent-primary
              prose-strong:text-base-heading"
	>
		<p>
			Hello! I'm Luis, a self-taught software developer from Chimbote, Peru. My journey into the
			world of code started over five years ago, driven by a fascination with building things and a
			deep appreciation for the open-source community. My experience comes from countless hours
			spent crafting web applications, websites, and tools.
		</p>

		<h2 class="text-2xl font-semibold text-base-heading mt-8 mb-4">My Philosophy</h2>
		<p>
			I'm a strong believer in the <strong class="text-accent-secondary">Linux philosophy</strong>:
			creating simple, minimal tools that do one thing well. This extends to my projects, where I
			strive for clean, efficient, and purposeful code. My digital workspace is centered around
			<strong class="text-accent-secondary">Neovim</strong>, which I've obsessively customized for
			speed and comfort, favoring soothing color schemes and nerd monofonts like Drafting* Mono.
			This pursuit of efficiency and ergonomics is something I try to reflect in my development
			work.
		</p>
		<p>
			I'm constantly motivated to learn new and challenging technologies and concepts, and I enjoy
			documenting my learning process through TIL (Today I Learned) entries and blog posts.
		</p>

		<h2 class="text-2xl font-semibold text-base-heading mt-8 mb-4">Skills</h2>
		{#each Object.entries(skillsList) as [category, skills]}
			<h3 class="text-xl font-medium text-base-heading/90 mt-4 mb-2 capitalize">
				{category.replace(/([A-Z])/g, ' $1')}
			</h3>
			<ul class="list-disc list-inside space-y-1">
				{#each skills as skill}
					<li>{skill}</li>
				{/each}
			</ul>
		{/each}

		<h2 class="text-2xl font-semibold text-base-heading mt-8 mb-4">Open Source Contributions</h2>
		<p>I've made small contributions to wonderful open-source projects, including:</p>
		<ul class="list-disc list-inside space-y-1">
			{#each ossContributions as contrib}
				<li><a href={contrib.link} target="_blank" rel="noopener noreferrer">{contrib.name}</a></li>
			{/each}
		</ul>

		<h2 class="text-2xl font-semibold text-base-heading mt-8 mb-4">Future Interests & Ideas</h2>
		<ul class="list-disc list-inside space-y-1">
			{#each futureInterests as interest}
				<li>{interest}</li>
			{/each}
		</ul>
		<p class="mt-4">
			<em
				>(The Society Building Game in Zig is a long-term dream, probably too ambitious to detail
				here yet!)</em
			>
		</p>
	</div>
</section>
