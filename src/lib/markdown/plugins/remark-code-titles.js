/**
 * @import {Root} from 'hast'
 */
import { visit } from 'unist-util-visit';

export default function remarkCodeTitles() {
	/**
	 * Transform.
	 *
	 * @param {Root} tree
	 *   Tree.
	 */
	return (tree) =>
		visit(tree, 'code', (node, index) => {
			// @ts-ignore
			const nodeLang = node.lang || '';
			let language = '',
				title = '';

			if (nodeLang.includes(':')) {
				language = nodeLang.slice(0, nodeLang.search(':'));
				title = nodeLang.slice(nodeLang.search(':') + 1, nodeLang.length);
			}

			if (!title) {
				return;
			}

			const className = 'remark-code-title';

			const titleNode = {
				type: 'html',
				value: `<div class="${className}">${title}</div>`.trim()
			};

			// @ts-ignore
			tree.children.splice(index, 0, titleNode);
			// @ts-ignore
			node.lang = language;
		});
}
