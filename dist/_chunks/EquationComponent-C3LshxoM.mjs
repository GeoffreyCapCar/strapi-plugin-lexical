import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useLexicalEditable } from "@lexical/react/useLexicalEditable";
import { mergeRegister } from "@lexical/utils";
import { isHTMLElement, $getNodeByKey, SELECTION_CHANGE_COMMAND, COMMAND_PRIORITY_HIGH, KEY_ESCAPE_COMMAND, $getSelection, $isNodeSelection } from "lexical";
import { forwardRef, useState, useRef, useCallback, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { $ as $isEquationNode, K as KatexRenderer } from "./Input-ChDt0ozq.mjs";
function EquationEditor({ equation, setEquation, inline }, forwardedRef) {
  const onChange = (event) => {
    setEquation(event.target.value);
  };
  return inline && isHTMLElement(forwardedRef) ? /* @__PURE__ */ jsxs("span", { className: "EquationEditor_inputBackground", children: [
    /* @__PURE__ */ jsx("span", { className: "EquationEditor_dollarSign", children: "$" }),
    /* @__PURE__ */ jsx(
      "input",
      {
        className: "EquationEditor_inlineEditor",
        value: equation,
        onChange,
        autoFocus: true,
        ref: forwardedRef
      }
    ),
    /* @__PURE__ */ jsx("span", { className: "EquationEditor_dollarSign", children: "$" })
  ] }) : /* @__PURE__ */ jsxs("div", { className: "EquationEditor_inputBackground", children: [
    /* @__PURE__ */ jsx("span", { className: "EquationEditor_dollarSign", children: "$$\n" }),
    /* @__PURE__ */ jsx(
      "textarea",
      {
        className: "EquationEditor_blockEditor",
        value: equation,
        onChange,
        ref: forwardedRef
      }
    ),
    /* @__PURE__ */ jsx("span", { className: "EquationEditor_dollarSign", children: "\n$$" })
  ] });
}
const EquationEditor$1 = forwardRef(EquationEditor);
function EquationComponent({
  equation,
  inline,
  nodeKey
}) {
  const [editor] = useLexicalComposerContext();
  const isEditable = useLexicalEditable();
  const [equationValue, setEquationValue] = useState(equation);
  const [showEquationEditor, setShowEquationEditor] = useState(false);
  const inputRef = useRef(null);
  const onHide = useCallback(
    (restoreSelection) => {
      setShowEquationEditor(false);
      editor.update(() => {
        const node = $getNodeByKey(nodeKey);
        if ($isEquationNode(node)) {
          node.setEquation(equationValue);
          if (restoreSelection) {
            node.selectNext(0, 0);
          }
        }
      });
    },
    [editor, equationValue, nodeKey]
  );
  useEffect(() => {
    if (!showEquationEditor && equationValue !== equation) {
      setEquationValue(equation);
    }
  }, [showEquationEditor, equation, equationValue]);
  useEffect(() => {
    if (!isEditable) {
      return;
    }
    if (showEquationEditor) {
      return mergeRegister(
        editor.registerCommand(
          SELECTION_CHANGE_COMMAND,
          (payload) => {
            const activeElement = document.activeElement;
            const inputElem = inputRef.current;
            if (inputElem !== activeElement) {
              onHide();
            }
            return false;
          },
          COMMAND_PRIORITY_HIGH
        ),
        editor.registerCommand(
          KEY_ESCAPE_COMMAND,
          (payload) => {
            const activeElement = document.activeElement;
            const inputElem = inputRef.current;
            if (inputElem === activeElement) {
              onHide(true);
              return true;
            }
            return false;
          },
          COMMAND_PRIORITY_HIGH
        )
      );
    } else {
      return editor.registerUpdateListener(({ editorState }) => {
        const isSelected = editorState.read(() => {
          const selection = $getSelection();
          return $isNodeSelection(selection) && selection.has(nodeKey) && selection.getNodes().length === 1;
        });
        if (isSelected) {
          setShowEquationEditor(true);
        }
      });
    }
  }, [editor, nodeKey, onHide, showEquationEditor, isEditable]);
  return /* @__PURE__ */ jsx(Fragment, { children: showEquationEditor && isEditable ? /* @__PURE__ */ jsx(
    EquationEditor$1,
    {
      equation: equationValue,
      setEquation: setEquationValue,
      inline,
      ref: inputRef
    }
  ) : /* @__PURE__ */ jsx(ErrorBoundary, { onError: (e) => editor._onError(e), fallback: null, children: /* @__PURE__ */ jsx(
    KatexRenderer,
    {
      equation: equationValue,
      inline,
      onDoubleClick: () => {
        if (isEditable) {
          setShowEquationEditor(true);
        }
      }
    }
  ) }) });
}
export {
  EquationComponent as default
};
