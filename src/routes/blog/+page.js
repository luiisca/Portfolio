import { posts } from '$lib/data/posts.js';

export async function load() {
	// Sort posts by date, newest first
	const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
	return {
		posts: sortedPosts
	};
}
