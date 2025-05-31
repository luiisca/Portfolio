// @ts-nocheck

import { visit } from 'unist-util-visit';

export function rehypeCopyCode() {
	return (tree) => {
		visit(tree, (node, index) => {
			if (
				node.type !== 'raw' ||
				!node.value.includes('remark-code-title') ||
				node.value.includes('@html')
			) {
				return;
			}

			const titleNode = {
				type: 'element',
				tagName: 'div',
				properties: { className: ['remark-code-title'] },
				children: [
					{
						type: 'element',
						tagName: 'span',
						children: [{ type: 'raw', value: `{@html \`${node.value}\`}` }]
					},
					{
						type: 'element',
						tagName: 'button',
						properties: { className: ['copy'] },
						children: [{ type: 'text', value: `Copy` }]
					}
				]
			};
			tree.children.splice(index, 1, titleNode);
		});
	};
}
