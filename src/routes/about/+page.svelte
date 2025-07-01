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
		backend: ['Node.js', 'PostgreSQL', 'Python'],
		tools: ['Git', 'GitHub', 'Docker', 'Nvim', 'Linux'],
		languages: ['TypeScript', 'JavaScript', 'Python', 'Shell Scripting', 'Zig']
		// concepts: ['Open Source', 'Minimalism', 'Linux Philosophy', 'Web Performance', 'API Design']
	});
</script>

<svelte:head>
	<title>About Me | Luis Cadillo</title>
	<meta
		name="description"
		content="A bit about me, Luis Cadillo. My approach to building effective software, the technologies I use, and what drives my work."
	/>
</svelte:head>

<section class="py-8 max-w-3xl mx-auto">
	<h1 class="text-4xl font-bold text-base-heading mb-10 text-center">:: About Me</h1>

	<div
		class="prose prose-invert prose-sm md:prose-base max-w-none text-base-text/90
              prose-headings:text-base-heading prose-a:text-accent-primary
              prose-strong:text-base-heading prose-p:mb-4 prose-li:my-1"
	>
		<p>
			Hey, I'm Luis. I’m a software developer with over five years of hands-on experience building
			effective solutions for the web, Android, and the command line. My approach is pragmatic,
			direct, and always focused on the problem at hand.
		</p>

		<h2 class="text-2xl font-semibold text-base-heading mt-8 mb-3">My Philosophy on Building</h2>
		<p>
			<b
				>I believe software should be straightforward and efficient. My goal is to build things that
				solve a user's problem cleanly, without adding a lot of unnecessary features</b
			>. If a piece of code or a UI element doesn’t serve a clear purpose, it probably doesn’t
			belong. It's a principle I'm always striving for.
		</p>
		<p>
			That way of thinking is definitely influenced by the time I've spent in the Linux world and
			tinkering with tools like Neovim. There's a real satisfaction in crafting a development space
			that's fast, keyboard-driven, and just feels good to use.
		</p>

		<h2 class="text-2xl font-semibold text-base-heading mt-8 mb-3">How I Work & Learn</h2>
		<p>
			My setup (Arch Linux with AwesomeWM, and a Neovim config that's never truly finished) is all
			about creating a focused, distraction-free environment. It helps me build effectively, but
			honestly, it’s also just plain fun to have that level of control over my machine.
		</p>
		<p>
			<b
				>I've found my most effective work comes from building a concrete project, usually one that
				solves a personal need</b
			>. That's exactly how FlowFit, my current workout app project, came to be. It has become the
			perfect catalyst for me to dive deeper into native Android development with Kotlin, applying a
			philosophy of minimal, user-driven design and exploring concepts like LLM context engineering
			along the way.
		</p>

		<h2 class="text-2xl font-semibold text-base-heading mt-8 mb-3">Staying Focused & Productive</h2>
		<p>
			Working for yourself teaches you a lot about managing your own time and energy. One of the
			most useful things I've learned is that <b
				>action often comes before motivation, not the other way around. Just starting a task, even
				a small one, is usually enough to build momentum for the day</b
			>. I use Obsidian to organize my thoughts and plan my work, which helps keep that momentum
			going and turns complex projects into a series of steady, satisfying steps forward.
		</p>

		<h2 class="text-2xl font-semibold text-base-heading mt-8 mb-3">My Technical Skills</h2>
		<p class="text-base-text/80 mb-6">
			Here is a summary of the primary technologies and tools I work with:
		</p>

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

		<h2 class="text-2xl font-semibold text-base-heading mt-8 mb-3">Open Source</h2>
		<p class="mb-4">
			I also contribute to open-source projects when I can. It's a great way to learn and give back.
			My contributions include work on:
		</p>
		<ul class="list-disc list-inside space-y-1">
			{#each ossContributions as contrib}
				<li><a href={contrib.link} target="_blank" rel="noopener noreferrer">{contrib.name}</a></li>
			{/each}
		</ul>

		<h2 class="text-2xl font-semibold text-base-heading mt-8 mb-3">What I'm Exploring Next</h2>
		<!-- TODO: will have to keep this up to date -->
		<p>
			My learning is always driven by specific goals. Right now, that means getting a deeper
			understanding of low-level systems by building a Git clone from scratch in Zig. I’m also
			genuinely curious about what it would take to rewrite the software for a pair of old earbuds.
			I'm not sure if it’s even possible, but tackling that kind of problem is what gets me excited.
		</p>
		<p>
			These projects are stepping stones. <b
				>My long-term "north star" project is a society-building game where politics directly impact
				the urban landscape and social outcomes. It's a passion project where I plan to explore
				complex systems, from economics to urban planning, and emergent narratives through code</b
			>. It’s that kind of complex, motivating challenge that really fuels my desire to explore new
			frontiers in programming.
		</p>

		<h2 class="text-2xl font-semibold text-base-heading mt-8 mb-3">What Drives Me</h2>
		<p>
			My real motivation comes from the challenge of building things from the ground up, and the
			chance to create something genuinely useful. <b
				>These complex, motivating challenges, like that long-term idea for a society-building game,
				are what truly fuel my desire to explore new frontiers in programming.</b
			>
		</p>

		<hr class="my-8 border-base-text/20" />

		<p>
			If you're building something interesting and think my approach is a good fit, I'm always open
			to a conversation. Let's <a href="/contact">connect</a>.
		</p>
	</div>
</section>
