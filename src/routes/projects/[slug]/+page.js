import { error } from '@sveltejs/kit';
import { getProjectBySlug } from '$data/projects.js';

export async function load({ params }) {
	const project = getProjectBySlug(params.slug);

	if (!project) {
		error(404, 'Project not found');
	}

	return {
		project
	};
}
