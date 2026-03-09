import * as React from 'react';
import { MessageDescriptor } from 'react-intl';
import { SerializedEditorState, SerializedLexicalNode } from 'lexical';
import { InputProps } from '@strapi/strapi/admin';
interface CustomFieldsComponentProps {
    attribute: {
        type: string;
        customField: string;
    };
    description: MessageDescriptor;
    placeholder: MessageDescriptor;
    onChange: (event: {
        target: {
            name: string;
            value: unknown;
            type: string;
        };
    }) => void;
    value: SerializedEditorState<SerializedLexicalNode>;
    error: MessageDescriptor;
}
declare const Input: React.ForwardRefExoticComponent<(CustomFieldsComponentProps & InputProps) & React.RefAttributes<HTMLDivElement>>;
export default Input;
