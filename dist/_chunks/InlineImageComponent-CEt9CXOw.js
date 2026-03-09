"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const Input = require("./Input-DIDxTLmb.js");
const LexicalAutoFocusPlugin = require("@lexical/react/LexicalAutoFocusPlugin");
const LexicalComposerContext = require("@lexical/react/LexicalComposerContext");
const LexicalErrorBoundary = require("@lexical/react/LexicalErrorBoundary");
const LexicalNestedComposer = require("@lexical/react/LexicalNestedComposer");
const LexicalRichTextPlugin = require("@lexical/react/LexicalRichTextPlugin");
const useLexicalEditable = require("@lexical/react/useLexicalEditable");
const useLexicalNodeSelection = require("@lexical/react/useLexicalNodeSelection");
const utils = require("@lexical/utils");
const lexical = require("lexical");
const React = require("react");
const reactIntl = require("react-intl");
function Select({ children, label, className, ...other }) {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "Input__wrapper", children: [
    /* @__PURE__ */ jsxRuntime.jsx("label", { style: { marginTop: "-1em" }, className: "Input__label", children: label }),
    /* @__PURE__ */ jsxRuntime.jsx("select", { ...other, className: className || "select", children })
  ] });
}
const imageCache = /* @__PURE__ */ new Set();
function useSuspenseImage(src) {
  if (!imageCache.has(src)) {
    throw new Promise((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        imageCache.add(src);
        resolve(null);
      };
    });
  }
}
function LazyImage({
  altText,
  className,
  imageRef,
  src,
  width,
  height,
  position
}) {
  useSuspenseImage(src);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "img",
    {
      className: className || void 0,
      src,
      alt: altText,
      ref: imageRef,
      "data-position": position,
      style: {
        display: "block",
        height,
        width
      },
      draggable: "false"
    }
  );
}
function UpdateInlineImageDialog({
  activeEditor,
  nodeKey,
  onClose
}) {
  const { formatMessage } = reactIntl.useIntl();
  const editorState = activeEditor.getEditorState();
  const node = editorState.read(() => lexical.$getNodeByKey(nodeKey));
  const [altText, setAltText] = React.useState(node.getAltText());
  const [showCaption, setShowCaption] = React.useState(node.getShowCaption());
  const [position, setPosition] = React.useState(node.getPosition());
  const handleShowCaptionChange = (e) => {
    setShowCaption(e.target.checked);
  };
  const handlePositionChange = (e) => {
    setPosition(e.target.value);
  };
  const handleOnConfirm = () => {
    const payload = { altText, position, showCaption };
    if (node) {
      activeEditor.update(() => {
        node.update(payload);
      });
    }
    onClose();
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { style: { marginBottom: "1em" }, children: /* @__PURE__ */ jsxRuntime.jsx(
      Input.TextInput,
      {
        label: formatMessage({
          id: "lexical.nodes.inline-image-dialog.alt-text.label",
          defaultMessage: "Alt Text"
        }),
        placeholder: formatMessage({
          id: "lexical.nodes.inline-image-dialog.alt-text.placeholder",
          defaultMessage: "Descriptive alternative text"
        }),
        onChange: setAltText,
        value: altText,
        "data-test-id": "image-modal-alt-text-input"
      }
    ) }),
    /* @__PURE__ */ jsxRuntime.jsxs(
      Select,
      {
        style: { marginBottom: "1em", width: "208px" },
        value: position,
        label: formatMessage({
          id: "lexical.nodes.inline-image-dialog.position.label",
          defaultMessage: "Position"
        }),
        name: "position",
        id: "position-select",
        onChange: handlePositionChange,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("option", { value: "left", children: formatMessage({
            id: "lexical.nodes.inline-image-dialog.position.left",
            defaultMessage: "Left"
          }) }),
          /* @__PURE__ */ jsxRuntime.jsx("option", { value: "right", children: formatMessage({
            id: "lexical.nodes.inline-image-dialog.position.right",
            defaultMessage: "Right"
          }) }),
          /* @__PURE__ */ jsxRuntime.jsx("option", { value: "full", children: formatMessage({
            id: "lexical.nodes.inline-image-dialog.position.full",
            defaultMessage: "Full Width"
          }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "Input__wrapper", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "input",
        {
          id: "caption",
          type: "checkbox",
          checked: showCaption,
          onChange: handleShowCaptionChange
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx("label", { htmlFor: "caption", children: formatMessage({
        id: "lexical.nodes.inline-image-dialog.caption.label",
        defaultMessage: "Show Caption"
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(Input.DialogActions, { children: /* @__PURE__ */ jsxRuntime.jsx(Input.Button, { "data-test-id": "image-modal-file-upload-btn", onClick: () => handleOnConfirm(), children: formatMessage({
      id: "lexical.nodes.inline-image-dialog.confirm",
      defaultMessage: "Confirm"
    }) }) })
  ] });
}
function InlineImageComponent({
  src,
  altText,
  nodeKey,
  width,
  height,
  showCaption,
  caption,
  position
}) {
  const { formatMessage } = reactIntl.useIntl();
  const [modal, showModal] = Input.useModal();
  const imageRef = React.useRef(null);
  const buttonRef = React.useRef(null);
  const [isSelected, setSelected, clearSelection] = useLexicalNodeSelection.useLexicalNodeSelection(nodeKey);
  const [editor] = LexicalComposerContext.useLexicalComposerContext();
  const [selection, setSelection] = React.useState(null);
  const activeEditorRef = React.useRef(null);
  const isEditable = useLexicalEditable.useLexicalEditable();
  const $onDelete = React.useCallback(
    (payload) => {
      const deleteSelection = lexical.$getSelection();
      if (isSelected && lexical.$isNodeSelection(deleteSelection)) {
        const event = payload;
        event.preventDefault();
        if (isSelected && lexical.$isNodeSelection(deleteSelection)) {
          deleteSelection.getNodes().forEach((node) => {
            if (Input.$isInlineImageNode(node)) {
              node.remove();
            }
          });
        }
      }
      return false;
    },
    [isSelected]
  );
  const $onEnter = React.useCallback(
    (event) => {
      const latestSelection = lexical.$getSelection();
      const buttonElem = buttonRef.current;
      if (isSelected && lexical.$isNodeSelection(latestSelection) && latestSelection.getNodes().length === 1) {
        if (showCaption) {
          lexical.$setSelection(null);
          event.preventDefault();
          caption.focus();
          return true;
        } else if (buttonElem !== null && buttonElem !== document.activeElement) {
          event.preventDefault();
          buttonElem.focus();
          return true;
        }
      }
      return false;
    },
    [caption, isSelected, showCaption]
  );
  const $onEscape = React.useCallback(
    (event) => {
      if (activeEditorRef.current === caption || buttonRef.current === event.target) {
        lexical.$setSelection(null);
        editor.update(() => {
          setSelected(true);
          const parentRootElement = editor.getRootElement();
          if (parentRootElement !== null) {
            parentRootElement.focus();
          }
        });
        return true;
      }
      return false;
    },
    [caption, editor, setSelected]
  );
  React.useEffect(() => {
    let isMounted = true;
    const unregister = utils.mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        if (isMounted) {
          setSelection(editorState.read(() => lexical.$getSelection()));
        }
      }),
      editor.registerCommand(
        lexical.SELECTION_CHANGE_COMMAND,
        (_, activeEditor) => {
          activeEditorRef.current = activeEditor;
          return false;
        },
        lexical.COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(
        lexical.CLICK_COMMAND,
        (payload) => {
          const event = payload;
          if (event.target === imageRef.current) {
            if (event.shiftKey) {
              setSelected(!isSelected);
            } else {
              clearSelection();
              setSelected(true);
            }
            return true;
          }
          return false;
        },
        lexical.COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(
        lexical.DRAGSTART_COMMAND,
        (event) => {
          if (event.target === imageRef.current) {
            event.preventDefault();
            return true;
          }
          return false;
        },
        lexical.COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(lexical.KEY_DELETE_COMMAND, $onDelete, lexical.COMMAND_PRIORITY_LOW),
      editor.registerCommand(lexical.KEY_BACKSPACE_COMMAND, $onDelete, lexical.COMMAND_PRIORITY_LOW),
      editor.registerCommand(lexical.KEY_ENTER_COMMAND, $onEnter, lexical.COMMAND_PRIORITY_LOW),
      editor.registerCommand(lexical.KEY_ESCAPE_COMMAND, $onEscape, lexical.COMMAND_PRIORITY_LOW)
    );
    return () => {
      isMounted = false;
      unregister();
    };
  }, [clearSelection, editor, isSelected, nodeKey, $onDelete, $onEnter, $onEscape, setSelected]);
  const draggable = isSelected && lexical.$isNodeSelection(selection);
  const isFocused = isSelected && isEditable;
  return /* @__PURE__ */ jsxRuntime.jsxs(React.Suspense, { fallback: null, children: [
    /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsxs("span", { draggable, children: [
        isEditable && /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            className: "image-edit-button",
            ref: buttonRef,
            onClick: () => {
              showModal(
                formatMessage({
                  id: "lexical.nodes.inline-image-component.update-inline-image",
                  defaultMessage: "Update Inline Image"
                }),
                (onClose) => /* @__PURE__ */ jsxRuntime.jsx(
                  UpdateInlineImageDialog,
                  {
                    activeEditor: editor,
                    nodeKey,
                    onClose
                  }
                )
              );
            },
            children: formatMessage({
              id: "lexical.nodes.inline-image-component.edit-button",
              defaultMessage: "Edit"
            })
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          LazyImage,
          {
            className: isFocused ? `focused ${lexical.$isNodeSelection(selection) ? "draggable" : ""}` : null,
            src,
            altText,
            imageRef,
            width,
            height,
            position
          }
        )
      ] }),
      showCaption && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "image-caption-container", children: /* @__PURE__ */ jsxRuntime.jsxs(LexicalNestedComposer.LexicalNestedComposer, { initialEditor: caption, children: [
        /* @__PURE__ */ jsxRuntime.jsx(LexicalAutoFocusPlugin.AutoFocusPlugin, {}),
        /* @__PURE__ */ jsxRuntime.jsx(Input.LinkPlugin, {}),
        /* @__PURE__ */ jsxRuntime.jsx(
          LexicalRichTextPlugin.RichTextPlugin,
          {
            contentEditable: /* @__PURE__ */ jsxRuntime.jsx(
              Input.LexicalContentEditable,
              {
                placeholder: formatMessage({
                  id: "lexical.nodes.inline-image-component.enter-caption",
                  defaultMessage: "Enter a caption..."
                }),
                placeholderClassName: "InlineImageNode__placeholder",
                className: "InlineImageNode__contentEditable"
              }
            ),
            ErrorBoundary: LexicalErrorBoundary.LexicalErrorBoundary
          }
        )
      ] }) })
    ] }),
    modal
  ] });
}
exports.UpdateInlineImageDialog = UpdateInlineImageDialog;
exports.default = InlineImageComponent;
