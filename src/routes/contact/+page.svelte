<script>
	import BougainvilleaVine from '$lib/components/bougainvillea-vine.svelte';
</script>

<svelte:head>
	<title>Contact | Luis Cadillo</title>
	<meta name="description" content="Get in touch with Luis Cadillo." />
</svelte:head>

<section class="py-8 max-w-xl mx-auto text-center">
	<h1 class="text-4xl font-bold text-base-heading mb-8">:: Get In Touch</h1>
	<p class="text-base-text/80 mb-6">
		I'm always open to new opportunities, collaborations, or just a friendly chat about tech. Feel
		free to reach out!
	</p>

	<div class="space-y-4">
		<p>
			<strong class="text-base-heading">Email:</strong>
			<a href="mailto:your.email@example.com" class="text-accent-primary hover:underline"
				>your.email@example.com</a
			>
			<!-- Replace with your actual email -->
		</p>
		<p>
			<strong class="text-base-heading">GitHub:</strong>
			<a
				href="https://github.com/luiisca"
				target="_blank"
				rel="noopener noreferrer"
				class="text-accent-primary hover:underline">@luiisca</a
			>
		</p>
		<p>
			<strong class="text-base-heading">LinkedIn:</strong>
			<a
				href="https://linkedin.com/in/your-linkedin-profile"
				target="_blank"
				rel="noopener noreferrer"
				class="text-accent-primary hover:underline">Your LinkedIn Profile</a
			>
			<!-- Create and link your LinkedIn profile -->
		</p>
		<!-- Add other relevant links, e.g., Twitter, Dev.to -->
	</div>

	<div class="mt-12">
		<BougainvilleaVine growDirection="up" classes="mx-auto text-accent-secondary opacity-40" />
	</div>
</section>
