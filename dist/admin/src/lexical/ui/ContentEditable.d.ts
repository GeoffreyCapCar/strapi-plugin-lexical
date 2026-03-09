/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import type { JSX } from 'react';
import './ContentEditable.css';
import * as React from 'react';
type Props = {
    className?: string;
    placeholderClassName?: string;
    placeholder: string;
    ref?: React.ForwardedRef<HTMLDivElement>;
};
export default function LexicalContentEditable({ className, placeholder, placeholderClassName, ref, }: Props): JSX.Element;
export {};
