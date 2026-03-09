/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import type { DOMExportOutput, EditorConfig, LexicalEditor, NodeKey, SerializedTextNode, Spread } from 'lexical';
import { TextNode } from 'lexical';
export type SerializedAutocompleteNode = Spread<{
    uuid: string;
}, SerializedTextNode>;
export declare class AutocompleteNode extends TextNode {
    /**
     * A unique uuid is generated for each session and assigned to the instance.
     * This helps to:
     * - Ensures max one Autocomplete node per session.
     * - Ensure that when collaboration is enabled, this node is not shown in
     *   other sessions.
     * See https://github.com/facebook/lexical/blob/master/packages/lexical-playground/src/plugins/AutocompletePlugin/index.tsx#L39
     */
    __uuid: string;
    static clone(node: AutocompleteNode): AutocompleteNode;
    static getType(): 'autocomplete';
    static importJSON(serializedNode: SerializedAutocompleteNode): AutocompleteNode;
    exportJSON(): SerializedAutocompleteNode;
    constructor(text: string, uuid: string, key?: NodeKey);
    updateDOM(prevNode: this, dom: HTMLElement, config: EditorConfig): boolean;
    exportDOM(_: LexicalEditor): DOMExportOutput;
    excludeFromCopy(): boolean;
    createDOM(config: EditorConfig): HTMLElement;
}
export declare function $createAutocompleteNode(text: string, uuid: string): AutocompleteNode;
