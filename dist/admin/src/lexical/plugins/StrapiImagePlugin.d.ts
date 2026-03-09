/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import type { JSX } from 'react';
import { LexicalCommand, LexicalEditor } from 'lexical';
import * as React from 'react';
import { StrapiImagePayload } from '../nodes/StrapiImageNode';
export type InsertStrapiImagePayload = Readonly<StrapiImagePayload>;
export declare const INSERT_STRAPI_IMAGE_COMMAND: LexicalCommand<InsertStrapiImagePayload>;
export declare function InsertStrapiImageDialog({ activeEditor, onClose, MediaLibraryDialog, }: {
    activeEditor: LexicalEditor;
    onClose: () => void;
    MediaLibraryDialog: React.ComponentType<{
        allowedTypes: string[];
        onClose: () => void;
        onSelectAssets: (assets: any[]) => void;
    }>;
}): import("react/jsx-runtime").JSX.Element;
export default function StrapiImagePlugin(): JSX.Element | null;
declare global {
    interface DragEvent {
        rangeOffset?: number;
        rangeParent?: Node;
    }
}
