import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { LexicalNestedComposer } from "@lexical/react/LexicalNestedComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { useLexicalEditable } from "@lexical/react/useLexicalEditable";
import { useLexicalNodeSelection } from "@lexical/react/useLexicalNodeSelection";
import { mergeRegister } from "@lexical/utils";
import { $getSelection, $isNodeSelection, $setSelection, SELECTION_CHANGE_COMMAND, COMMAND_PRIORITY_LOW, CLICK_COMMAND, DRAGSTART_COMMAND, KEY_DELETE_COMMAND, KEY_BACKSPACE_COMMAND, KEY_ENTER_COMMAND, KEY_ESCAPE_COMMAND, $getNodeByKey } from "lexical";
import { useRef, useState, useCallback, useEffect, Suspense } from "react";
import { useIntl } from "react-intl";
import { e as useModal, f as $isInlineImageNode, L as LinkPlugin, d as LexicalContentEditable, B as Button } from "./Input-wFPTNyMk.mjs";
function DialogActions({ "data-test-id": dataTestId, children }) {
  return /* @__PURE__ */ jsx("div", { className: "DialogActions", "data-test-id": dataTestId, children });
}
function TextInput({
  label,
  value,
  onChange,
  placeholder = "",
  "data-test-id": dataTestId,
  type = "text"
}) {
  return /* @__PURE__ */ jsxs("div", { className: "Input__wrapper", children: [
    /* @__PURE__ */ jsx("label", { className: "Input__label", children: label }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: "Input__input",
        placeholder,
        value,
        onChange: (e) => {
          onChange(e.target.value);
        },
        "data-test-id": dataTestId
      }
    )
  ] });
}
function Select({ children, label, className, ...other }) {
  return /* @__PURE__ */ jsxs("div", { className: "Input__wrapper", children: [
    /* @__PURE__ */ jsx("label", { style: { marginTop: "-1em" }, className: "Input__label", children: label }),
    /* @__PURE__ */ jsx("select", { ...other, className: className || "select", children })
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
  return /* @__PURE__ */ jsx(
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
  const { formatMessage } = useIntl();
  const editorState = activeEditor.getEditorState();
  const node = editorState.read(() => $getNodeByKey(nodeKey));
  const [altText, setAltText] = useState(node.getAltText());
  const [showCaption, setShowCaption] = useState(node.getShowCaption());
  const [position, setPosition] = useState(node.getPosition());
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
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { style: { marginBottom: "1em" }, children: /* @__PURE__ */ jsx(
      TextInput,
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
    /* @__PURE__ */ jsxs(
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
          /* @__PURE__ */ jsx("option", { value: "left", children: formatMessage({
            id: "lexical.nodes.inline-image-dialog.position.left",
            defaultMessage: "Left"
          }) }),
          /* @__PURE__ */ jsx("option", { value: "right", children: formatMessage({
            id: "lexical.nodes.inline-image-dialog.position.right",
            defaultMessage: "Right"
          }) }),
          /* @__PURE__ */ jsx("option", { value: "full", children: formatMessage({
            id: "lexical.nodes.inline-image-dialog.position.full",
            defaultMessage: "Full Width"
          }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "Input__wrapper", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          id: "caption",
          type: "checkbox",
          checked: showCaption,
          onChange: handleShowCaptionChange
        }
      ),
      /* @__PURE__ */ jsx("label", { htmlFor: "caption", children: formatMessage({
        id: "lexical.nodes.inline-image-dialog.caption.label",
        defaultMessage: "Show Caption"
      }) })
    ] }),
    /* @__PURE__ */ jsx(DialogActions, { children: /* @__PURE__ */ jsx(Button, { "data-test-id": "image-modal-file-upload-btn", onClick: () => handleOnConfirm(), children: formatMessage({
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
  const { formatMessage } = useIntl();
  const [modal, showModal] = useModal();
  const imageRef = useRef(null);
  const buttonRef = useRef(null);
  const [isSelected, setSelected, clearSelection] = useLexicalNodeSelection(nodeKey);
  const [editor] = useLexicalComposerContext();
  const [selection, setSelection] = useState(null);
  const activeEditorRef = useRef(null);
  const isEditable = useLexicalEditable();
  const $onDelete = useCallback(
    (payload) => {
      const deleteSelection = $getSelection();
      if (isSelected && $isNodeSelection(deleteSelection)) {
        const event = payload;
        event.preventDefault();
        if (isSelected && $isNodeSelection(deleteSelection)) {
          deleteSelection.getNodes().forEach((node) => {
            if ($isInlineImageNode(node)) {
              node.remove();
            }
          });
        }
      }
      return false;
    },
    [isSelected]
  );
  const $onEnter = useCallback(
    (event) => {
      const latestSelection = $getSelection();
      const buttonElem = buttonRef.current;
      if (isSelected && $isNodeSelection(latestSelection) && latestSelection.getNodes().length === 1) {
        if (showCaption) {
          $setSelection(null);
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
  const $onEscape = useCallback(
    (event) => {
      if (activeEditorRef.current === caption || buttonRef.current === event.target) {
        $setSelection(null);
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
  useEffect(() => {
    let isMounted = true;
    const unregister = mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        if (isMounted) {
          setSelection(editorState.read(() => $getSelection()));
        }
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        (_, activeEditor) => {
          activeEditorRef.current = activeEditor;
          return false;
        },
        COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(
        CLICK_COMMAND,
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
        COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(
        DRAGSTART_COMMAND,
        (event) => {
          if (event.target === imageRef.current) {
            event.preventDefault();
            return true;
          }
          return false;
        },
        COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(KEY_DELETE_COMMAND, $onDelete, COMMAND_PRIORITY_LOW),
      editor.registerCommand(KEY_BACKSPACE_COMMAND, $onDelete, COMMAND_PRIORITY_LOW),
      editor.registerCommand(KEY_ENTER_COMMAND, $onEnter, COMMAND_PRIORITY_LOW),
      editor.registerCommand(KEY_ESCAPE_COMMAND, $onEscape, COMMAND_PRIORITY_LOW)
    );
    return () => {
      isMounted = false;
      unregister();
    };
  }, [clearSelection, editor, isSelected, nodeKey, $onDelete, $onEnter, $onEscape, setSelected]);
  const draggable = isSelected && $isNodeSelection(selection);
  const isFocused = isSelected && isEditable;
  return /* @__PURE__ */ jsxs(Suspense, { fallback: null, children: [
    /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("span", { draggable, children: [
        isEditable && /* @__PURE__ */ jsx(
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
                (onClose) => /* @__PURE__ */ jsx(
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
        /* @__PURE__ */ jsx(
          LazyImage,
          {
            className: isFocused ? `focused ${$isNodeSelection(selection) ? "draggable" : ""}` : null,
            src,
            altText,
            imageRef,
            width,
            height,
            position
          }
        )
      ] }),
      showCaption && /* @__PURE__ */ jsx("span", { className: "image-caption-container", children: /* @__PURE__ */ jsxs(LexicalNestedComposer, { initialEditor: caption, children: [
        /* @__PURE__ */ jsx(AutoFocusPlugin, {}),
        /* @__PURE__ */ jsx(LinkPlugin, {}),
        /* @__PURE__ */ jsx(
          RichTextPlugin,
          {
            contentEditable: /* @__PURE__ */ jsx(
              LexicalContentEditable,
              {
                placeholder: formatMessage({
                  id: "lexical.nodes.inline-image-component.enter-caption",
                  defaultMessage: "Enter a caption..."
                }),
                placeholderClassName: "InlineImageNode__placeholder",
                className: "InlineImageNode__contentEditable"
              }
            ),
            ErrorBoundary: LexicalErrorBoundary
          }
        )
      ] }) })
    ] }),
    modal
  ] });
}
export {
  UpdateInlineImageDialog,
  InlineImageComponent as default
};
