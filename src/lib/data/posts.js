// Placeholder blog post data
export const posts = [
	{
		slug: 'my-nvim-journey',
		title: 'My Journey into Neovim: Customization for Peak Productivity',
		date: '2024-03-10',
		tags: ['nvim', 'productivity', 'tools'],
		excerpt:
			'Discover how I configured Neovim from scratch to create a lightning-fast and deeply personalized development environment...',
		content: `
      <p>Neovim, for me, wasn't just about choosing a text editor. It was about embracing a philosophy of speed, customization, and control...</p>
      <p>My key plugins include Telescope for fuzzy finding, LSP Zero for language server integration, and Treesitter for robust syntax highlighting.</p>
      <pre><code>lua
      -- Example nvim config snippet
      require('telescope').setup{
        defaults = {
          layout_strategy = 'flex',
          layout_config = {
            horizontal = { width = 0.9, height = 0.8 }
          }
        }
      }
      </code></pre>
      <p>The journey has been challenging but incredibly rewarding, leading to a significant boost in my daily workflow.</p>
    `
	},
	{
		slug: 'linux-philosophy-pomlock',
		title: 'Building Pomlock',
		date: '2024-02-20',
		tags: ['linux', 'open-source', 'pomlock'],
		excerpt:
			'Pomlock, my break-enforcing utility, is a small testament to the power of the Linux philosophy: simple tools, doing one thing well...',
		content: `
      <p>The Linux philosophy, often summarized as "do one thing and do it well," deeply influences my approach to software development. Pomlock is an example of this...</p>
    `
	}
	// Add more posts...
];

export function getPostBySlug(slug) {
	return posts.find((p) => p.slug === slug);
}
