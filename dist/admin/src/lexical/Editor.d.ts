/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import type { JSX } from 'react';
import { SerializedEditorState, SerializedLexicalNode } from 'lexical';
import './styles.css';
interface LexicalEditorProps {
    onChange: (newValue: SerializedEditorState<SerializedLexicalNode>) => void;
    ref: React.ForwardedRef<HTMLDivElement>;
    fieldName: string;
    expectedEditorState?: SerializedEditorState<SerializedLexicalNode>;
}
export default function Editor(props: LexicalEditorProps): JSX.Element;
export {};
