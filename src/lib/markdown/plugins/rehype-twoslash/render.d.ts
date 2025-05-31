/**
 * @param {State} state
 * @param {NodeCompletion} annotation
 * @param {Array<ElementContent>} between
 * @returns {RenderResult}
 * @satisfies {Render<NodeCompletion>}
 */
export function completion(state: State, annotation: NodeCompletion, between: Array<ElementContent>): RenderResult;
/**
 * @param {State} state
 * @param {NodeError} annotation
 * @param {Array<ElementContent>} between
 * @returns {RenderResult}
 * @satisfies {Render<NodeError>}
 */
export function error(state: State, annotation: NodeError, between: Array<ElementContent>): RenderResult;
/**
 * @param {State} state
 * @param {NodeHighlight} annotation
 * @param {Array<ElementContent>} between
 * @returns {Array<ElementContent>}
 * @satisfies {Render<NodeHighlight>}
 */
export function highlight(state: State, annotation: NodeHighlight, between: Array<ElementContent>): Array<ElementContent>;
/**
 * @param {State} state
 * @param {NodeHover} annotation
 * @param {Array<ElementContent>} between
 * @returns {RenderResult}
 * @satisfies {Render<NodeHover>}
 */
export function hover(state: State, annotation: NodeHover, between: Array<ElementContent>): RenderResult;
/**
 * @param {State} state
 * @param {NodeQuery} annotation
 * @param {Array<ElementContent>} between
 * @returns {RenderResult}
 * @satisfies {Render<NodeQuery>}
 */
export function query(state: State, annotation: NodeQuery, between: Array<ElementContent>): RenderResult;
import type { State } from './types.js';
import type { NodeCompletion } from 'twoslash';
import type { ElementContent } from 'hast';
import type { RenderResult } from './types.js';
import type { NodeError } from 'twoslash';
import type { NodeHighlight } from 'twoslash';
import type { NodeHover } from 'twoslash';
import type { NodeQuery } from 'twoslash';
//# sourceMappingURL=render.d.ts.map