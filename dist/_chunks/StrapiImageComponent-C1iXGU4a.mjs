import { jsx, Fragment } from "react/jsx-runtime";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useLexicalEditable } from "@lexical/react/useLexicalEditable";
import { useLexicalNodeSelection } from "@lexical/react/useLexicalNodeSelection";
import { mergeRegister } from "@lexical/utils";
import { $getSelection, $isNodeSelection, $setSelection, $isRangeSelection, SELECTION_CHANGE_COMMAND, COMMAND_PRIORITY_LOW, CLICK_COMMAND, DRAGSTART_COMMAND, KEY_DELETE_COMMAND, KEY_BACKSPACE_COMMAND, KEY_ENTER_COMMAND, KEY_ESCAPE_COMMAND, createCommand } from "lexical";
import { useRef, useState, useCallback, useEffect, Suspense } from "react";
import { b as brokenImage } from "./image-broken-D4ACHRbi.mjs";
import { a as $isImageNode } from "./Input-ByV0bTrR.mjs";
import { useIntl } from "react-intl";
const imageCache = /* @__PURE__ */ new Set();
const RIGHT_CLICK_STRAPI_IMAGE_COMMAND = createCommand(
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
  const { formatMessage } = useIntl();
  useSuspenseImage(src);
  return /* @__PURE__ */ jsx(
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
  const { formatMessage } = useIntl();
  return /* @__PURE__ */ jsx(
    "img",
    {
      src: brokenImage,
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
  const imageRef = useRef(null);
  const buttonRef = useRef(null);
  const [isSelected, setSelected, clearSelection] = useLexicalNodeSelection(nodeKey);
  const [isResizing, setIsResizing] = useState(false);
  const [editor] = useLexicalComposerContext();
  const [selection, setSelection] = useState(null);
  const activeEditorRef = useRef(null);
  const [isLoadError, setIsLoadError] = useState(false);
  const isEditable = useLexicalEditable();
  const $onDelete = useCallback(
    (payload) => {
      const deleteSelection = $getSelection();
      if (isSelected && $isNodeSelection(deleteSelection)) {
        const event = payload;
        event.preventDefault();
        deleteSelection.getNodes().forEach((node) => {
          if ($isImageNode(node)) {
            node.remove();
          }
        });
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
  const $onEscape = useCallback(
    (event) => {
      if (buttonRef.current === event.target) {
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
    [editor, setSelected]
  );
  const onClick = useCallback(
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
  const onRightClick = useCallback(
    (event) => {
      editor.getEditorState().read(() => {
        const latestSelection = $getSelection();
        const domElement = event.target;
        if (domElement.tagName === "IMG" && $isRangeSelection(latestSelection) && latestSelection.getNodes().length === 1) {
          editor.dispatchCommand(RIGHT_CLICK_STRAPI_IMAGE_COMMAND, event);
        }
      });
    },
    [editor]
  );
  useEffect(() => {
    let isMounted = true;
    const rootElement = editor.getRootElement();
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
      editor.registerCommand(CLICK_COMMAND, onClick, COMMAND_PRIORITY_LOW),
      editor.registerCommand(
        RIGHT_CLICK_STRAPI_IMAGE_COMMAND,
        onClick,
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
  const draggable = isSelected && $isNodeSelection(selection) && !isResizing;
  const isFocused = (isSelected || isResizing) && isEditable;
  return /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { draggable, children: isLoadError ? /* @__PURE__ */ jsx(BrokenImage, {}) : /* @__PURE__ */ jsx(
    LazyImage,
    {
      className: isFocused ? `focused ${$isNodeSelection(selection) ? "draggable" : ""}` : null,
      src,
      imageRef,
      onError: () => setIsLoadError(true)
    }
  ) }) }) });
}
export {
  RIGHT_CLICK_STRAPI_IMAGE_COMMAND,
  StrapiImageComponent as default
};
