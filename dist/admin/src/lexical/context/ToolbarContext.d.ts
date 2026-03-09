/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import type { JSX } from 'react';
import { ElementFormatType } from 'lexical';
import { ReactNode } from 'react';
export declare const MIN_ALLOWED_FONT_SIZE = 8;
export declare const MAX_ALLOWED_FONT_SIZE = 72;
export declare const DEFAULT_FONT_SIZE = 15;
export declare const blockTypeToBlockName: {
    bullet: string;
    check: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
    number: string;
    paragraph: string;
    quote: string;
};
declare const INITIAL_TOOLBAR_STATE: {
    bgColor: string;
    blockType: "number" | "h3" | "h4" | "h5" | "h6" | "paragraph" | "bullet" | "check" | "quote";
    canRedo: boolean;
    canUndo: boolean;
    elementFormat: ElementFormatType;
    fontColor: string;
    fontFamily: string;
    fontSize: string;
    fontSizeInputValue: string;
    isBold: boolean;
    isImageCaption: boolean;
    isItalic: boolean;
    isLink: boolean;
    isRTL: boolean;
    isStrikethrough: boolean;
    isUnderline: boolean;
    isLowercase: boolean;
    isUppercase: boolean;
    isCapitalize: boolean;
    rootType: "table" | "root";
};
type ToolbarState = typeof INITIAL_TOOLBAR_STATE;
type ToolbarStateKey = keyof ToolbarState;
type ToolbarStateValue<Key extends ToolbarStateKey> = ToolbarState[Key];
type ContextShape = {
    toolbarState: ToolbarState;
    updateToolbarState<Key extends ToolbarStateKey>(key: Key, value: ToolbarStateValue<Key>): void;
};
export declare const ToolbarContext: ({ children }: {
    children: ReactNode;
}) => JSX.Element;
export declare const useToolbarState: () => ContextShape;
export {};
