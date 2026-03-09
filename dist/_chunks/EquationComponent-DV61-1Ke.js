"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const LexicalComposerContext = require("@lexical/react/LexicalComposerContext");
const useLexicalEditable = require("@lexical/react/useLexicalEditable");
const utils = require("@lexical/utils");
const lexical = require("lexical");
const React = require("react");
const reactErrorBoundary = require("react-error-boundary");
const Input = require("./Input-dL_Efx4f.js");
function EquationEditor({ equation, setEquation, inline }, forwardedRef) {
  const onChange = (event) => {
    setEquation(event.target.value);
  };
  return inline && lexical.isHTMLElement(forwardedRef) ? /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "EquationEditor_inputBackground", children: [
    /* @__PURE__ */ jsxRuntime.jsx("span", { className: "EquationEditor_dollarSign", children: "$" }),
    /* @__PURE__ */ jsxRuntime.jsx(
      "input",
      {
        className: "EquationEditor_inlineEditor",
        value: equation,
        onChange,
        autoFocus: true,
        ref: forwardedRef
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx("span", { className: "EquationEditor_dollarSign", children: "$" })
  ] }) : /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "EquationEditor_inputBackground", children: [
    /* @__PURE__ */ jsxRuntime.jsx("span", { className: "EquationEditor_dollarSign", children: "$$\n" }),
    /* @__PURE__ */ jsxRuntime.jsx(
      "textarea",
      {
        className: "EquationEditor_blockEditor",
        value: equation,
        onChange,
        ref: forwardedRef
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx("span", { className: "EquationEditor_dollarSign", children: "\n$$" })
  ] });
}
const EquationEditor$1 = React.forwardRef(EquationEditor);
function EquationComponent({
  equation,
  inline,
  nodeKey
}) {
  const [editor] = LexicalComposerContext.useLexicalComposerContext();
  const isEditable = useLexicalEditable.useLexicalEditable();
  const [equationValue, setEquationValue] = React.useState(equation);
  const [showEquationEditor, setShowEquationEditor] = React.useState(false);
  const inputRef = React.useRef(null);
  const onHide = React.useCallback(
    (restoreSelection) => {
      setShowEquationEditor(false);
      editor.update(() => {
        const node = lexical.$getNodeByKey(nodeKey);
        if (Input.$isEquationNode(node)) {
          node.setEquation(equationValue);
          if (restoreSelection) {
            node.selectNext(0, 0);
          }
        }
      });
    },
    [editor, equationValue, nodeKey]
  );
  React.useEffect(() => {
    if (!showEquationEditor && equationValue !== equation) {
      setEquationValue(equation);
    }
  }, [showEquationEditor, equation, equationValue]);
  React.useEffect(() => {
    if (!isEditable) {
      return;
    }
    if (showEquationEditor) {
      return utils.mergeRegister(
        editor.registerCommand(
          lexical.SELECTION_CHANGE_COMMAND,
          (payload) => {
            const activeElement = document.activeElement;
            const inputElem = inputRef.current;
            if (inputElem !== activeElement) {
              onHide();
            }
            return false;
          },
          lexical.COMMAND_PRIORITY_HIGH
        ),
        editor.registerCommand(
          lexical.KEY_ESCAPE_COMMAND,
          (payload) => {
            const activeElement = document.activeElement;
            const inputElem = inputRef.current;
            if (inputElem === activeElement) {
              onHide(true);
              return true;
            }
            return false;
          },
          lexical.COMMAND_PRIORITY_HIGH
        )
      );
    } else {
      return editor.registerUpdateListener(({ editorState }) => {
        const isSelected = editorState.read(() => {
          const selection = lexical.$getSelection();
          return lexical.$isNodeSelection(selection) && selection.has(nodeKey) && selection.getNodes().length === 1;
        });
        if (isSelected) {
          setShowEquationEditor(true);
        }
      });
    }
  }, [editor, nodeKey, onHide, showEquationEditor, isEditable]);
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: showEquationEditor && isEditable ? /* @__PURE__ */ jsxRuntime.jsx(
    EquationEditor$1,
    {
      equation: equationValue,
      setEquation: setEquationValue,
      inline,
      ref: inputRef
    }
  ) : /* @__PURE__ */ jsxRuntime.jsx(reactErrorBoundary.ErrorBoundary, { onError: (e) => editor._onError(e), fallback: null, children: /* @__PURE__ */ jsxRuntime.jsx(
    Input.KatexRenderer,
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
exports.default = EquationComponent;
