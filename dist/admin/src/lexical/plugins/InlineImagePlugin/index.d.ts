/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import type { JSX } from 'react';
import '../../nodes/InlineImageNode/InlineImageNode.css';
import { LexicalCommand, LexicalEditor } from 'lexical';
import { InlineImagePayload } from '../../nodes/InlineImageNode/InlineImageNode';
export type InsertInlineImagePayload = Readonly<InlineImagePayload>;
export declare const INSERT_INLINE_IMAGE_COMMAND: LexicalCommand<InlineImagePayload>;
export declare function InsertInlineImageDialog({ activeEditor, onClose, }: {
    activeEditor: LexicalEditor;
    onClose: () => void;
}): JSX.Element;
export default function InlineImagePlugin(): JSX.Element | null;
declare global {
    interface DragEvent {
        rangeOffset?: number;
        rangeParent?: Node;
    }
}
