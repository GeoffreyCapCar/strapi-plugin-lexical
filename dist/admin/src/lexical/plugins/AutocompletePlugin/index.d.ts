/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import type { JSX } from 'react';
declare global {
    interface Navigator {
        userAgentData?: {
            mobile: boolean;
        };
    }
}
export declare const uuid: string;
export default function AutocompletePlugin(): JSX.Element | null;
