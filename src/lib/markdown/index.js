/**
 * @import {Root} from 'hast'
 * @import {PackageJson} from 'type-fest'
 * @import { Processor } from 'unified'
 */
import { common } from '@wooorm/starry-night';
import etc from '@wooorm/starry-night/etc';
import sourceGitignore from '@wooorm/starry-night/source.gitignore';
import sourceRegexp from '@wooorm/starry-night/source.regexp';
import sourceRegexpExtended from '@wooorm/starry-night/source.regexp.extended';
import sourceRegexpPosix from '@wooorm/starry-night/source.regexp.posix';
import sourceSy from '@wooorm/starry-night/source.sy';
import sourceTsx from '@wooorm/starry-night/source.tsx';
import sourceSvelte from '@wooorm/starry-night/source.svelte';
import matter from 'gray-matter';
// import assert from "node:assert/strict";
// import { fileURLToPath } from "node:url";
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeInferReadingTimeMeta from 'rehype-infer-reading-time-meta';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import toHtmlString from 'rehype-stringify';
import rehypeTwoslash from './plugins/rehype-twoslash/index.js';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import { default as remarkRehype } from 'remark-rehype';
import remarkSmartypants from 'remark-smartypants';
import remarkTableofContents from 'remark-toc';
// import typescript from 'typescript';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';
import { rehypeCopyCode } from './plugins/rehype-copy-code.js';
import { mdsvex_parser } from './parsers/index.js';
import { s } from 'hastscript';
import rehypeStarryNight from './plugins/starry-night.js';
import remarkCodeTitles from './plugins/remark-code-titles.js';
import hast_to_html from '@starptech/prettyhtml-hast-to-html';
import rehypeExternalLinks from 'rehype-external-links';
import {
	parse_frontmatter,
	escape_code,
	transform_hast,
	smartypants_transformer,
	highlight_blocks,
	code_highlight
} from './transformers/index.js';

function link() {
	return s(
		'svg.icon',
		{
			ariaHidden: 'true',
			height: 18,
			role: 'img',
			viewBox: [0, 0, 16, 16],
			width: 18
		},
		s('path', {
			d: 'M7.775 3.275C7.64252 3.41717 7.57039 3.60522 7.57382 3.79952C7.57725 3.99382 7.65596 4.1792 7.79337 4.31662C7.93079 4.45403 8.11617 4.53274 8.31047 4.53617C8.50477 4.5396 8.69282 4.46748 8.835 4.335L10.085 3.085C10.2708 2.89918 10.4914 2.75177 10.7342 2.65121C10.977 2.55064 11.2372 2.49888 11.5 2.49888C11.7628 2.49888 12.023 2.55064 12.2658 2.65121C12.5086 2.75177 12.7292 2.89918 12.915 3.085C13.1008 3.27082 13.2482 3.49142 13.3488 3.7342C13.4493 3.97699 13.5011 4.23721 13.5011 4.5C13.5011 4.76279 13.4493 5.023 13.3488 5.26579C13.2482 5.50857 13.1008 5.72917 12.915 5.915L10.415 8.415C10.2292 8.60095 10.0087 8.74847 9.76588 8.84911C9.52308 8.94976 9.26283 9.00157 9 9.00157C8.73716 9.00157 8.47691 8.94976 8.23411 8.84911C7.99132 8.74847 7.77074 8.60095 7.585 8.415C7.44282 8.28252 7.25477 8.21039 7.06047 8.21382C6.86617 8.21725 6.68079 8.29596 6.54337 8.43337C6.40596 8.57079 6.32725 8.75617 6.32382 8.95047C6.32039 9.14477 6.39252 9.33282 6.525 9.475C6.85001 9.80004 7.23586 10.0579 7.66052 10.2338C8.08518 10.4097 8.54034 10.5002 9 10.5002C9.45965 10.5002 9.91481 10.4097 10.3395 10.2338C10.7641 10.0579 11.15 9.80004 11.475 9.475L13.975 6.975C14.6314 6.31858 15.0002 5.4283 15.0002 4.5C15.0002 3.57169 14.6314 2.68141 13.975 2.025C13.3186 1.36858 12.4283 0.999817 11.5 0.999817C10.5717 0.999817 9.68141 1.36858 9.02499 2.025L7.775 3.275ZM3.085 12.915C2.89904 12.7292 2.75152 12.5087 2.65088 12.2659C2.55023 12.0231 2.49842 11.7628 2.49842 11.5C2.49842 11.2372 2.55023 10.9769 2.65088 10.7341C2.75152 10.4913 2.89904 10.2707 3.085 10.085L5.585 7.585C5.77074 7.39904 5.99132 7.25152 6.23411 7.15088C6.47691 7.05023 6.73716 6.99842 7 6.99842C7.26283 6.99842 7.52308 7.05023 7.76588 7.15088C8.00867 7.25152 8.22925 7.39904 8.415 7.585C8.55717 7.71748 8.74522 7.7896 8.93952 7.78617C9.13382 7.78274 9.3192 7.70403 9.45662 7.56662C9.59403 7.4292 9.67274 7.24382 9.67617 7.04952C9.6796 6.85522 9.60748 6.66717 9.475 6.525C9.14999 6.19995 8.76413 5.94211 8.33947 5.7662C7.91481 5.59029 7.45965 5.49974 7 5.49974C6.54034 5.49974 6.08518 5.59029 5.66052 5.7662C5.23586 5.94211 4.85001 6.19995 4.525 6.525L2.025 9.02499C1.36858 9.68141 0.999817 10.5717 0.999817 11.5C0.999817 12.4283 1.36858 13.3186 2.025 13.975C2.68141 14.6314 3.57169 15.0002 4.5 15.0002C5.4283 15.0002 6.31858 14.6314 6.975 13.975L8.225 12.725C8.35748 12.5828 8.4296 12.3948 8.42617 12.2005C8.42274 12.0062 8.34403 11.8208 8.20662 11.6834C8.0692 11.546 7.88382 11.4672 7.68952 11.4638C7.49522 11.4604 7.30717 11.5325 7.165 11.665L5.915 12.915C5.72925 13.1009 5.50867 13.2485 5.26588 13.3491C5.02308 13.4498 4.76283 13.5016 4.5 13.5016C4.23716 13.5016 3.97691 13.4498 3.73411 13.3491C3.49132 13.2485 3.27074 13.1009 3.085 12.915Z',
			fill: 'currentcolor'
		})
	);
}

// const configPath = typescript.findConfigFile(
//   fileURLToPath(import.meta.url),
//   typescript.sys.fileExists,
//   "tsconfig.json",
// );
// assert(configPath);
// const commandLine = typescript.getParsedCommandLineOfConfigFile(
//   configPath,
//   undefined,
//   {
//     fileExists: typescript.sys.fileExists,
//     getCurrentDirectory: typescript.sys.getCurrentDirectory,
//     onUnRecoverableConfigFileDiagnostic(x) {
//       console.warn("Unrecoverable diagnostic", x);
//     },
//     readDirectory: typescript.sys.readDirectory,
//     readFile: typescript.sys.readFile,
//     useCaseSensitiveFileNames: typescript.sys.useCaseSensitiveFileNames,
//   },
// );
// assert(commandLine);

const fm_opts = { type: 'yaml', marker: '-' };

export const markdownProcessor = unified()
	.use(remarkParse)
	// allows svelte tags and blocks to be recognized as part of the mdast to allow for richer manipulation.
	// keeping it disabled for now since it breaks and it doesn't seem to bring much value atm
	// .use(mdsvex_parser)
	.use(escape_code, { blocks: true })
	.use(remarkFrontmatter, [{ type: fm_opts.type, marker: fm_opts.marker }])
	// can only handle yaml frontmatter atm
	.use(parse_frontmatter, { type: fm_opts.type })
	// processes nodes with retext (adds support for latin/romance languages) and smartypants (transforms ASCII puntuation characters into typographic puntuation HTML entities)
	.use(smartypants_transformer)
	.use([remarkGfm, [remarkTableofContents, { tight: true }]])
	// .use(function () {
	// 	return function (tree) {
	// 		visit(tree, function (node) {
	// 			console.log('💖 remark node', node);
	// 		});
	// 	};
	// })
	.use(remarkCodeTitles)
	.use(remarkRehype, {
		allowDangerousHtml: true,
		allowDangerousCharacters: true
	})
	.use(rehypeExternalLinks)
	// .use(rehypeRaw)
	.use(rehypeInferReadingTimeMeta)
	.use(rehypeStarryNight, {
		grammars: [
			...common,
			etc,
			sourceGitignore,
			sourceRegexpExtended,
			sourceRegexpPosix,
			sourceRegexp,
			sourceSy,
			sourceSvelte,
			sourceTsx
		],
		// processing js, ts and tsx snippets twice (here and in rehypeTwoslash plugin) breaks compilation
		plainText: ['txt', 'js', 'ts', 'tsx']
	})
	.use(rehypeTwoslash)
	.use([
		rehypeSlug,
		[
			rehypeAutolinkHeadings,
			{
				behavior: 'wrap',
				properties: { ariaLabel: 'Link to self', className: ['anchor'] }
			}
		]
	])
	.use(rehypeCopyCode)
	// .use(function () {
	// 	return function (tree) {
	// 		visit(tree, function (node) {
	// 			console.log('🏳️‍🌈 rehype node', node);
	// 		});
	// 	};
	// })
	.use(toHtmlString, { allowDangerousHtml: true });

const images = `https://raw.githubusercontent.com/mattcroat/joy-of-code/main/posts`;

/**
 * Returns post slug.
 * @param {string} filename
 */
function getSlug(filename) {
	return filename.split('/').at(-1)?.replace('.md', '') ?? '';
}

/**
 * Search and replace Markdown.
 * @param {string} content
 * @param {string} slug
 */
function searchAndReplace(content, slug) {
	const embed = /{% embed src="(.*?)" title="(.*?)" %}/g;
	const video = /{% video src="(.*?)" %}/g;
	const image = /{% img src="(.*?)" alt="(.*?)" %}/g;
	const youtube = /{% youtube id="(.*?)" title="(.*?)" %}/g;

	return content
		.replace(embed, (_, src, title) => {
			return `
        <iframe
          title="${title}"
          src="${src}"
          loading="lazy"
        ></iframe>
      `.trim();
		})
		.replace(video, (_, src) => {
			return `
        <video controls>
          <source
            src="${images}/${slug}/images/${src}"
            type="video/mp4"
          />
        </video>
      `.trim();
		})
		.replace(image, (_, src, alt) => {
			return `
      <img
        src="${images}/${slug}/images/${src}"
        alt="${alt}"
        loading="lazy"
      />
  `.trim();
		})
		.replace(youtube, (_, id, title) => {
			return `
				<lite-youtube videoid="${id}" playlabel="${title}"></lite-youtube>
			`.trim();
		});
}

/**
 * Markdown preprocessor.
 * @param {string} content
 * @param {string} slug
 */
async function parseMarkdown(content, slug) {
	// const replacedContent = searchAndReplace(content, slug)
	const parsedMarkdown = await markdownProcessor.process(content);
	// console.log("🤯 2.1)".repeat(20));
	// console.log(parsedMarkdown);
	// console.log("🤯 2.1)".repeat(20));
	return parsedMarkdown.toString();
}

/**
 * Replace special Svelte characters.
 * @param {string} content
 */
function escapeHtml(content) {
	content = content.replace(/{/g, '&#123;').replace(/}/g, '&#125;');

	const componentRegex = /<[A-Z].*/g;
	const components = content.match(componentRegex);
	components?.forEach((component) => {
		const replaced = component.replace('&#123;', '{').replace('&#125;', '}');
		content = content.replace(component, replaced);
	});

	return content;
}

/**
 * Exports post metadata.
 * @param {string} content
 */
function frontmatter(content) {
	const { content: markdown, data } = matter(content);
	const meta = `
		<script module>
			export const metadata = ${JSON.stringify(data)}
		</script>
	`;
	return { markdown, meta };
}

/**
 * Preprocessor for Markdown files which converts
 * Markdown to HTML before it's compiled by Svelte
 * so we can use Svelte components inside Markdown.
 */
function markdown() {
	return {
		name: 'markdown',
		/**
		 * Convert Markdown to HTML.
		 * @param {Object} params
		 * @param {string} params.content
		 * @param {string} params.filename
		 */
		async markup({ content, filename }) {
			if (filename.endsWith('.md')) {
				const slug = getSlug(filename);
				const replacedContent = searchAndReplace(content, slug);
				const parsedMarkdown = await markdownProcessor.process(replacedContent);

				return { code: parsedMarkdown.value };
			}
		}
	};
}

export default markdown;
