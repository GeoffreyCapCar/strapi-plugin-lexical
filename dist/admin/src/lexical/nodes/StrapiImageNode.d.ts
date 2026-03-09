/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import type { DOMExportOutput, EditorConfig, LexicalNode, LexicalUpdateJSON, NodeKey, SerializedLexicalNode, Spread } from 'lexical';
import type { JSX } from 'react';
import { DecoratorNode } from 'lexical';
export interface StrapiImagePayload {
    documentId: string;
    src: string;
}
export type SerializedStrapiImageNode = Spread<{
    documentId: string;
    src: string;
}, SerializedLexicalNode>;
export type SerializedLinkNode = Spread<{
    url: string;
}, SerializedLexicalNode>;
export declare class StrapiImageNode extends DecoratorNode<JSX.Element> {
    __documentId: string;
    __src: string;
    static getType(): string;
    static clone(node: StrapiImageNode): StrapiImageNode;
    static importJSON(serializedNode: SerializedStrapiImageNode): StrapiImageNode;
    updateFromJSON(serializedNode: LexicalUpdateJSON<SerializedStrapiImageNode>): this;
    exportDOM(): DOMExportOutput;
    constructor(documentId: string, src: string, key?: NodeKey);
    exportJSON(): SerializedStrapiImageNode;
    createDOM(config: EditorConfig): HTMLElement;
    updateDOM(): false;
    decorate(): JSX.Element;
}
export declare function $createStrapiImageNode({ documentId, src }: StrapiImagePayload): StrapiImageNode;
export declare function $isStrapiImageNode(node: LexicalNode | null | undefined): node is StrapiImageNode;
