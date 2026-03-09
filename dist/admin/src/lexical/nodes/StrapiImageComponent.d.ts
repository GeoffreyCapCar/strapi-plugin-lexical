/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import type { LexicalCommand, NodeKey } from 'lexical';
import type { JSX } from 'react';
import './StrapiImageNode.css';
export declare const RIGHT_CLICK_STRAPI_IMAGE_COMMAND: LexicalCommand<MouseEvent>;
export default function StrapiImageComponent({ documentId, src, nodeKey, }: {
    documentId: string;
    nodeKey: NodeKey;
    src: string;
}): JSX.Element;
