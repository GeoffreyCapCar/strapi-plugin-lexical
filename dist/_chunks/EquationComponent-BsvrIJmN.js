"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const LexicalComposerContext = require("@lexical/react/LexicalComposerContext");
const useLexicalEditable = require("@lexical/react/useLexicalEditable");
const utils = require("@lexical/utils");
const lexical = require("lexical");
const React = require("react");
const reactErrorBoundary = require("react-error-boundary");
const katex = require("katex");
const Input = require("./Input-Nn-YBgU7.js");
const _interopDefault = (e) => e && e.__esModule ? e : { default: e };
const katex__default = /* @__PURE__ */ _interopDefault(katex);
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
function KatexRenderer({
  equation,
  inline,
  onDoubleClick
}) {
  const katexElementRef = React.useRef(null);
  React.useEffect(() => {
    const katexElement = katexElementRef.current;
    if (katexElement !== null) {
      katex__default.default.render(equation, katexElement, {
        displayMode: !inline,
        // true === block display //
        errorColor: "#cc0000",
        output: "html",
        strict: "warn",
        throwOnError: false,
        trust: false
      });
    }
  }, [equation, inline]);
  return (
    // We use an empty image tag either side to ensure Android doesn't try and compose from the
    // inner text from Katex. There didn't seem to be any other way of making this work,
    // without having a physical space.
    /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsx("img", { src: "#", alt: "" }),
      /* @__PURE__ */ jsxRuntime.jsx("span", { role: "button", tabIndex: -1, onDoubleClick, ref: katexElementRef }),
      /* @__PURE__ */ jsxRuntime.jsx("img", { src: "#", alt: "" })
    ] })
  );
}
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
exports.default = EquationComponent;
