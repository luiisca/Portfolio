<script lang="ts">
	import { page } from '$app/state';
	import BougainvilleaVine from '$lib/components/bougainvillea-vine.svelte';

	let navItems = $state([
		{ href: '/', label: 'Home' },
		{ href: '/projects', label: 'Projects' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/about', label: 'About' },
		{ href: '/contact', label: 'Contact' }
	]);

	function isActive(href: string) {
		if (href === '/') return page.url.pathname === '/';
		return page.url.pathname.startsWith(href);
	}
</script>

<header
	class="py-4 px-6 md:px-10 sticky top-0 z-50 bg-base-bg/80 backdrop-blur-md border-b border-base-text/10"
>
	<div class="container mx-auto flex justify-between items-center">
		<a
			href="/"
			class="text-xl font-bold text-base-heading hover:text-accent-primary transition-colors"
		>
			Luis Cadillo <span class="text-accent-primary text-2xl">.</span>
		</a>
		<nav class="hidden md:flex items-center space-x-6">
			{#each navItems as item}
				<a
					href={item.href}
					class="text-sm hover:text-accent-primary transition-colors"
					class:text-accent-primary={isActive(item.href)}
					class:font-semibold={isActive(item.href)}
				>
					{item.label}
				</a>
			{/each}
		</nav>
		<div class="md:hidden">
			<!-- Mobile menu button - implementation TBD -->
			<button class="text-base-heading focus:outline-none">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
		</div>
	</div>
</header>
