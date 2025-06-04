// Placeholder project data
// You should replace this with your actual project details
// For image paths, assume they are in /static/images/projects/ or similar
// and then use a path like '/images/projects/nexaprep-thumbnail.png'

export const projects = [
	{
		slug: 'hiperbarica-clinic',
		title: 'Hiperbarica Clinic Website',
		shortDescription:
			'SEO-performant clinic website with blog, AI chatbot, and online appointments.',
		tags: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'MDX', 'Freelance'],
		imageUrl: '/images/projects/hiperbarica-thumbnail.webp', // Placeholder
		status: 'Live',
		liveLink: 'https://hiperbaricadelsurperu.com/',
		githubLink: 'https://github.com/luiisca/hiperbarica-clinic',
		readmeContent: `
      <p>This was a freelance project to build a website for a hyperbaric clinic.</p>
      <p><strong>Key Features:</strong> SEO optimized (top 10 on Google for relevant keywords), integrated Cal.com for appointments, AI chatbot, blog with MDX, server-side search.</p>
      <p><strong>Challenges:</strong> Achieving high SEO performance, integrating multiple third-party services seamlessly.</p>
      <p><strong>Learnings:</strong> Advanced Next.js features like SSR/ISR, MDX content management, client communication.</p>
    ` // In reality, you'd fetch or parse a full README.
	},
	{
		slug: 'nexaprep',
		title: 'NexaPrep',
		shortDescription: 'Community-driven test prep SaaS platform (under construction).',
		tags: ['React', 'TypeScript', 'TailwindCSS', 'PostgreSQL', 'Gemini LLM'],
		imageUrl: '/images/projects/nexaprep-thumbnail.webp', // Placeholder
		status: 'In Development',
		liveLink: null,
		githubLink: null, // Closed source
		readmeContent: `
      <p>NexaPrep aims to be a community-driven platform for test preparation, focusing on Peruvian university admission exams.</p>
      <p><strong>Core Idea:</strong> Solve personal frustration with finding and verifying old admission tests. Enable community collaboration.</p>
      <p><strong>Tech Stack:</strong> React Router v7, TypeScript, TailwindCSS, PostgreSQL, Auth, Gemini LLM API.</p>
      <p><strong>Planned Features:</strong> Test uploading/sharing, collaborative editing, analytics, tutor marketplace.</p>
    `
	},
	{
		slug: 'obsidian-periodic-notes',
		title: 'Obsidian Periodic Notes Calendar',
		shortDescription: 'Obsidian plugin for organizing periodic notes with a calendar UI.',
		tags: ['Obsidian API', 'TypeScript', 'Svelte (UI parts)', 'Open Source'],
		imageUrl: '/images/projects/obsidian-pnc-thumbnail.webp', // Placeholder
		status: 'Live',
		liveLink: 'https://pnc-landing.pages.dev/',
		githubLink: 'https://github.com/luiisca/obsidian-periodic-notes-calendar',
		readmeContent: `
      <p>An Obsidian plugin that enhances the periodic notes workflow with a visual calendar interface, emoji summaries, and robust customization.</p>
      <p><strong>Unique Aspects:</strong> Dual access (calendar/command), floating mode, emoji summaries, extensive customization, bulk management, timeline quickview.</p>
      <p>This project has gained some traction in the Obsidian community (11 stars).</p>
    `
	},
	// Add more projects...
	{
		slug: 'pomlock',
		title: 'Pomlock',
		shortDescription: 'Linux utility to enforce breaks by blocking input devices.',
		tags: ['Shell Script', 'Python', 'Linux Philosophy', 'Open Source'],
		imageUrl: '/images/projects/pomlock-thumbnail.webp', // Placeholder
		status: 'Released',
		liveLink: null,
		githubLink: 'https://github.com/luiisca/pomlock',
		readmeContent: `
      <p>Pomlock embodies the Linux philosophy of simple, effective tools. It enforces breaks by physically blocking input devices on Linux systems.</p>
      <p><strong>Features:</strong> Physical input blocking (mouse/keyboard), customizable timers, activity logging.</p>
    `
	}
];

export function getProjectBySlug(slug) {
	return projects.find((p) => p.slug === slug);
}
