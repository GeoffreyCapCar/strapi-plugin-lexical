import { EditorState, SerializedEditorState, SerializedLexicalNode } from 'lexical';
declare function StrapiOnChangePlugin({ onChange, expectedEditorState, }: {
    onChange: (editorState: EditorState) => void;
    expectedEditorState?: SerializedEditorState<SerializedLexicalNode>;
}): null;
export default StrapiOnChangePlugin;
