/**
 * Plugin to process JavaScript and TypeScript code with `twoslash`
 * and highlight it with `starry-night`.
 *
 * @param {Readonly<Options> | null | undefined} [options]
 *   Configuration (optional).
 * @returns
 *   Transform.
 */
export default function rehypeTwoslash(options?: Readonly<Options> | null | undefined): (tree: Root, file: VFile) => Promise<Root>;
import type { Options } from 'rehype-twoslash';
import type { Root } from 'hast';
import type { VFile } from 'vfile';
//# sourceMappingURL=index.d.ts.map