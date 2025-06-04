import { projects } from '$lib/data/projects.js';

export async function load() {
	return {
		projects
	};
}
