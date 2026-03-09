"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const LexicalComposerContext = require("@lexical/react/LexicalComposerContext");
const useLexicalEditable = require("@lexical/react/useLexicalEditable");
const useLexicalNodeSelection = require("@lexical/react/useLexicalNodeSelection");
const utils = require("@lexical/utils");
const lexical = require("lexical");
const React = require("react");
const imageBroken = require("./image-broken-DvpTkJDI.js");
const Input = require("./Input-DLZ4QxYJ.js");
const reactIntl = require("react-intl");
const imageCache = /* @__PURE__ */ new Set();
const RIGHT_CLICK_STRAPI_IMAGE_COMMAND = lexical.createCommand(
  "RIGHT_CLICK_STRAPI_IMAGE_COMMAND"
);
function useSuspenseImage(src) {
  if (!imageCache.has(src)) {
    throw new Promise((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        imageCache.add(src);
        resolve(null);
      };
      img.onerror = () => {
        imageCache.add(src);
      };
    });
  }
}
function LazyImage({
  className,
  src,
  onError
}) {
  const { formatMessage } = reactIntl.useIntl();
  useSuspenseImage(src);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "img",
    {
      className: className || void 0,
      src,
      onError,
      draggable: "false",
      alt: formatMessage({
        id: "lexical.nodes.image.strapi.alt",
        defaultMessage: "Strapi media library image"
      })
    }
  );
}
function BrokenImage() {
  const { formatMessage } = reactIntl.useIntl();
  return /* @__PURE__ */ jsxRuntime.jsx(
    "img",
    {
      src: imageBroken.brokenImage,
      style: {
        height: 200,
        opacity: 0.2,
        width: 200
      },
      draggable: "false",
      alt: formatMessage({ id: "lexical.nodes.image.broken.alt", defaultMessage: "Broken image" })
    }
  );
}
function StrapiImageComponent({
  documentId,
  src,
  nodeKey
}) {
  const imageRef = React.useRef(null);
  const buttonRef = React.useRef(null);
  const [isSelected, setSelected, clearSelection] = useLexicalNodeSelection.useLexicalNodeSelection(nodeKey);
  const [isResizing, setIsResizing] = React.useState(false);
  const [editor] = LexicalComposerContext.useLexicalComposerContext();
  const [selection, setSelection] = React.useState(null);
  const activeEditorRef = React.useRef(null);
  const [isLoadError, setIsLoadError] = React.useState(false);
  const isEditable = useLexicalEditable.useLexicalEditable();
  const $onDelete = React.useCallback(
    (payload) => {
      const deleteSelection = lexical.$getSelection();
      if (isSelected && lexical.$isNodeSelection(deleteSelection)) {
        const event = payload;
        event.preventDefault();
        deleteSelection.getNodes().forEach((node) => {
          if (Input.$isImageNode(node)) {
            node.remove();
          }
        });
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
        if (buttonElem !== null && buttonElem !== document.activeElement) {
          event.preventDefault();
          buttonElem.focus();
          return true;
        }
      }
      return false;
    },
    [isSelected]
  );
  const $onEscape = React.useCallback(
    (event) => {
      if (buttonRef.current === event.target) {
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
    [editor, setSelected]
  );
  const onClick = React.useCallback(
    (payload) => {
      const event = payload;
      if (isResizing) {
        return true;
      }
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
    [isResizing, isSelected, setSelected, clearSelection]
  );
  const onRightClick = React.useCallback(
    (event) => {
      editor.getEditorState().read(() => {
        const latestSelection = lexical.$getSelection();
        const domElement = event.target;
        if (domElement.tagName === "IMG" && lexical.$isRangeSelection(latestSelection) && latestSelection.getNodes().length === 1) {
          editor.dispatchCommand(RIGHT_CLICK_STRAPI_IMAGE_COMMAND, event);
        }
      });
    },
    [editor]
  );
  React.useEffect(() => {
    let isMounted = true;
    const rootElement = editor.getRootElement();
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
      editor.registerCommand(lexical.CLICK_COMMAND, onClick, lexical.COMMAND_PRIORITY_LOW),
      editor.registerCommand(
        RIGHT_CLICK_STRAPI_IMAGE_COMMAND,
        onClick,
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
    rootElement?.addEventListener("contextmenu", onRightClick);
    return () => {
      isMounted = false;
      unregister();
      rootElement?.removeEventListener("contextmenu", onRightClick);
    };
  }, [
    clearSelection,
    editor,
    isResizing,
    isSelected,
    nodeKey,
    $onDelete,
    $onEnter,
    $onEscape,
    onClick,
    onRightClick,
    setSelected
  ]);
  const draggable = isSelected && lexical.$isNodeSelection(selection) && !isResizing;
  const isFocused = (isSelected || isResizing) && isEditable;
  return /* @__PURE__ */ jsxRuntime.jsx(React.Suspense, { fallback: null, children: /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: /* @__PURE__ */ jsxRuntime.jsx("div", { draggable, children: isLoadError ? /* @__PURE__ */ jsxRuntime.jsx(BrokenImage, {}) : /* @__PURE__ */ jsxRuntime.jsx(
    LazyImage,
    {
      className: isFocused ? `focused ${lexical.$isNodeSelection(selection) ? "draggable" : ""}` : null,
      src,
      imageRef,
      onError: () => setIsLoadError(true)
    }
  ) }) }) });
}
exports.RIGHT_CLICK_STRAPI_IMAGE_COMMAND = RIGHT_CLICK_STRAPI_IMAGE_COMMAND;
exports.default = StrapiImageComponent;
