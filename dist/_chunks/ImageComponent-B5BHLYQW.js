"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const hashtag = require("@lexical/hashtag");
const link = require("@lexical/link");
const LexicalAutoFocusPlugin = require("@lexical/react/LexicalAutoFocusPlugin");
const LexicalCollaborationContext = require("@lexical/react/LexicalCollaborationContext");
const LexicalComposerContext = require("@lexical/react/LexicalComposerContext");
const LexicalErrorBoundary = require("@lexical/react/LexicalErrorBoundary");
const LexicalHashtagPlugin = require("@lexical/react/LexicalHashtagPlugin");
const LexicalHistoryPlugin = require("@lexical/react/LexicalHistoryPlugin");
const LexicalNestedComposer = require("@lexical/react/LexicalNestedComposer");
const LexicalRichTextPlugin = require("@lexical/react/LexicalRichTextPlugin");
const useLexicalEditable = require("@lexical/react/useLexicalEditable");
const useLexicalNodeSelection = require("@lexical/react/useLexicalNodeSelection");
const utils = require("@lexical/utils");
const lexical = require("lexical");
const React = require("react");
const reactIntl = require("react-intl");
const Input = require("./Input-BmUUodWb.js");
const imageBroken = require("./image-broken-DvpTkJDI.js");
const LexicalTreeView = require("@lexical/react/LexicalTreeView");
function TreeViewPlugin() {
  const [editor] = LexicalComposerContext.useLexicalComposerContext();
  return /* @__PURE__ */ jsxRuntime.jsx(
    LexicalTreeView.TreeView,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      editor
    }
  );
}
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
const Direction = {
  east: 1 << 0,
  north: 1 << 3,
  south: 1 << 1,
  west: 1 << 2
};
function ImageResizer({
  onResizeStart,
  onResizeEnd,
  buttonRef,
  imageRef,
  maxWidth,
  editor,
  showCaption,
  setShowCaption,
  captionsEnabled
}) {
  const { formatMessage } = reactIntl.useIntl();
  const controlWrapperRef = React.useRef(null);
  const userSelect = React.useRef({
    priority: "",
    value: "default"
  });
  const positioningRef = React.useRef({
    currentHeight: 0,
    currentWidth: 0,
    direction: 0,
    isResizing: false,
    ratio: 0,
    startHeight: 0,
    startWidth: 0,
    startX: 0,
    startY: 0
  });
  const editorRootElement = editor.getRootElement();
  const maxWidthContainer = maxWidth ? maxWidth : editorRootElement !== null ? editorRootElement.getBoundingClientRect().width - 20 : 100;
  const maxHeightContainer = editorRootElement !== null ? editorRootElement.getBoundingClientRect().height - 20 : 100;
  const minWidth = 100;
  const minHeight = 100;
  const setStartCursor = (direction) => {
    const ew = direction === Direction.east || direction === Direction.west;
    const ns = direction === Direction.north || direction === Direction.south;
    const nwse = direction & Direction.north && direction & Direction.west || direction & Direction.south && direction & Direction.east;
    const cursorDir = ew ? "ew" : ns ? "ns" : nwse ? "nwse" : "nesw";
    if (editorRootElement !== null) {
      editorRootElement.style.setProperty("cursor", `${cursorDir}-resize`, "important");
    }
    if (document.body !== null) {
      document.body.style.setProperty("cursor", `${cursorDir}-resize`, "important");
      userSelect.current.value = document.body.style.getPropertyValue("-webkit-user-select");
      userSelect.current.priority = document.body.style.getPropertyPriority("-webkit-user-select");
      document.body.style.setProperty("-webkit-user-select", `none`, "important");
    }
  };
  const setEndCursor = () => {
    if (editorRootElement !== null) {
      editorRootElement.style.setProperty("cursor", "text");
    }
    if (document.body !== null) {
      document.body.style.setProperty("cursor", "default");
      document.body.style.setProperty(
        "-webkit-user-select",
        userSelect.current.value,
        userSelect.current.priority
      );
    }
  };
  const handlePointerDown = (event, direction) => {
    if (!editor.isEditable()) {
      return;
    }
    const image = imageRef.current;
    const controlWrapper = controlWrapperRef.current;
    if (image !== null && controlWrapper !== null) {
      event.preventDefault();
      const { width, height } = image.getBoundingClientRect();
      const zoom = utils.calculateZoomLevel(image);
      const positioning = positioningRef.current;
      positioning.startWidth = width;
      positioning.startHeight = height;
      positioning.ratio = width / height;
      positioning.currentWidth = width;
      positioning.currentHeight = height;
      positioning.startX = event.clientX / zoom;
      positioning.startY = event.clientY / zoom;
      positioning.isResizing = true;
      positioning.direction = direction;
      setStartCursor(direction);
      onResizeStart();
      controlWrapper.classList.add("image-control-wrapper--resizing");
      image.style.height = `${height}px`;
      image.style.width = `${width}px`;
      document.addEventListener("pointermove", handlePointerMove);
      document.addEventListener("pointerup", handlePointerUp);
    }
  };
  const handlePointerMove = (event) => {
    const image = imageRef.current;
    const positioning = positioningRef.current;
    const isHorizontal = positioning.direction & (Direction.east | Direction.west);
    const isVertical = positioning.direction & (Direction.south | Direction.north);
    if (image !== null && positioning.isResizing) {
      const zoom = utils.calculateZoomLevel(image);
      if (isHorizontal && isVertical) {
        let diff = Math.floor(positioning.startX - event.clientX / zoom);
        diff = positioning.direction & Direction.east ? -diff : diff;
        const width = clamp(positioning.startWidth + diff, minWidth, maxWidthContainer);
        const height = width / positioning.ratio;
        image.style.width = `${width}px`;
        image.style.height = `${height}px`;
        positioning.currentHeight = height;
        positioning.currentWidth = width;
      } else if (isVertical) {
        let diff = Math.floor(positioning.startY - event.clientY / zoom);
        diff = positioning.direction & Direction.south ? -diff : diff;
        const height = clamp(positioning.startHeight + diff, minHeight, maxHeightContainer);
        image.style.height = `${height}px`;
        positioning.currentHeight = height;
      } else {
        let diff = Math.floor(positioning.startX - event.clientX / zoom);
        diff = positioning.direction & Direction.east ? -diff : diff;
        const width = clamp(positioning.startWidth + diff, minWidth, maxWidthContainer);
        image.style.width = `${width}px`;
        positioning.currentWidth = width;
      }
    }
  };
  const handlePointerUp = () => {
    const image = imageRef.current;
    const positioning = positioningRef.current;
    const controlWrapper = controlWrapperRef.current;
    if (image !== null && controlWrapper !== null && positioning.isResizing) {
      const width = positioning.currentWidth;
      const height = positioning.currentHeight;
      positioning.startWidth = 0;
      positioning.startHeight = 0;
      positioning.ratio = 0;
      positioning.startX = 0;
      positioning.startY = 0;
      positioning.currentWidth = 0;
      positioning.currentHeight = 0;
      positioning.isResizing = false;
      controlWrapper.classList.remove("image-control-wrapper--resizing");
      setEndCursor();
      onResizeEnd(width, height);
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerup", handlePointerUp);
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { ref: controlWrapperRef, children: [
    !showCaption && captionsEnabled && /* @__PURE__ */ jsxRuntime.jsx(
      "button",
      {
        className: "image-caption-button",
        ref: buttonRef,
        onClick: () => {
          setShowCaption(!showCaption);
        },
        children: formatMessage({
          id: "lexical.ui.imageresizer.caption.button",
          defaultMessage: "Add Caption"
        })
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: "image-resizer image-resizer-n",
        "aria-label": formatMessage({
          id: "lexical.ui.imageresizer.control.north",
          defaultMessage: "Resize image from top"
        }),
        onPointerDown: (event) => {
          handlePointerDown(event, Direction.north);
        }
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: "image-resizer image-resizer-ne",
        "aria-label": formatMessage({
          id: "lexical.ui.imageresizer.control.northeast",
          defaultMessage: "Resize image from top right"
        }),
        onPointerDown: (event) => {
          handlePointerDown(event, Direction.north | Direction.east);
        }
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: "image-resizer image-resizer-e",
        "aria-label": formatMessage({
          id: "lexical.ui.imageresizer.control.east",
          defaultMessage: "Resize image from right"
        }),
        onPointerDown: (event) => {
          handlePointerDown(event, Direction.east);
        }
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: "image-resizer image-resizer-se",
        "aria-label": formatMessage({
          id: "lexical.ui.imageresizer.control.southeast",
          defaultMessage: "Resize image from bottom right"
        }),
        onPointerDown: (event) => {
          handlePointerDown(event, Direction.south | Direction.east);
        }
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: "image-resizer image-resizer-s",
        "aria-label": formatMessage({
          id: "lexical.ui.imageresizer.control.south",
          defaultMessage: "Resize image from bottom"
        }),
        onPointerDown: (event) => {
          handlePointerDown(event, Direction.south);
        }
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: "image-resizer image-resizer-sw",
        "aria-label": formatMessage({
          id: "lexical.ui.imageresizer.control.southwest",
          defaultMessage: "Resize image from bottom left"
        }),
        onPointerDown: (event) => {
          handlePointerDown(event, Direction.south | Direction.west);
        }
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: "image-resizer image-resizer-w",
        "aria-label": formatMessage({
          id: "lexical.ui.imageresizer.control.west",
          defaultMessage: "Resize image from left"
        }),
        onPointerDown: (event) => {
          handlePointerDown(event, Direction.west);
        }
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: "image-resizer image-resizer-nw",
        "aria-label": formatMessage({
          id: "lexical.ui.imageresizer.control.northwest",
          defaultMessage: "Resize image from top left"
        }),
        onPointerDown: (event) => {
          handlePointerDown(event, Direction.north | Direction.west);
        }
      }
    )
  ] });
}
const imageCache = /* @__PURE__ */ new Set();
const RIGHT_CLICK_IMAGE_COMMAND = lexical.createCommand(
  "RIGHT_CLICK_IMAGE_COMMAND"
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
  altText,
  className,
  imageRef,
  src,
  width,
  height,
  maxWidth,
  onError
}) {
  useSuspenseImage(src);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "img",
    {
      className: className || void 0,
      src,
      alt: altText,
      ref: imageRef,
      style: {
        height,
        maxWidth,
        width
      },
      onError,
      draggable: "false"
    }
  );
}
function BrokenImage() {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "img",
    {
      src: imageBroken.brokenImage,
      style: {
        height: 200,
        opacity: 0.2,
        width: 200
      },
      draggable: "false"
    }
  );
}
function ImageComponent({
  src,
  altText,
  nodeKey,
  width,
  height,
  maxWidth,
  resizable,
  showCaption,
  caption,
  captionsEnabled
}) {
  const { formatMessage } = reactIntl.useIntl();
  const imageRef = React.useRef(null);
  const buttonRef = React.useRef(null);
  const [isSelected, setSelected, clearSelection] = useLexicalNodeSelection.useLexicalNodeSelection(nodeKey);
  const [isResizing, setIsResizing] = React.useState(false);
  LexicalCollaborationContext.useCollaborationContext();
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
          editor.dispatchCommand(RIGHT_CLICK_IMAGE_COMMAND, event);
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
      editor.registerCommand(RIGHT_CLICK_IMAGE_COMMAND, onClick, lexical.COMMAND_PRIORITY_LOW),
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
  const setShowCaption = () => {
    editor.update(() => {
      const node = lexical.$getNodeByKey(nodeKey);
      if (Input.$isImageNode(node)) {
        node.setShowCaption(true);
      }
    });
  };
  const onResizeEnd = (nextWidth, nextHeight) => {
    setTimeout(() => {
      setIsResizing(false);
    }, 200);
    editor.update(() => {
      const node = lexical.$getNodeByKey(nodeKey);
      if (Input.$isImageNode(node)) {
        node.setWidthAndHeight(nextWidth, nextHeight);
      }
    });
  };
  const onResizeStart = () => {
    setIsResizing(true);
  };
  const { historyState } = Input.useSharedHistoryContext();
  const draggable = isSelected && lexical.$isNodeSelection(selection) && !isResizing;
  const isFocused = (isSelected || isResizing) && isEditable;
  return /* @__PURE__ */ jsxRuntime.jsx(React.Suspense, { fallback: null, children: /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { draggable, children: isLoadError ? /* @__PURE__ */ jsxRuntime.jsx(BrokenImage, {}) : /* @__PURE__ */ jsxRuntime.jsx(
      LazyImage,
      {
        className: isFocused ? `focused ${lexical.$isNodeSelection(selection) ? "draggable" : ""}` : null,
        src,
        altText,
        imageRef,
        width,
        height,
        maxWidth,
        onError: () => setIsLoadError(true)
      }
    ) }),
    showCaption && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "image-caption-container", children: /* @__PURE__ */ jsxRuntime.jsxs(
      LexicalNestedComposer.LexicalNestedComposer,
      {
        initialEditor: caption,
        initialNodes: [
          lexical.RootNode,
          lexical.TextNode,
          lexical.LineBreakNode,
          lexical.ParagraphNode,
          link.LinkNode,
          Input.EmojiNode,
          hashtag.HashtagNode,
          Input.KeywordNode
        ],
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(LexicalAutoFocusPlugin.AutoFocusPlugin, {}),
          /* @__PURE__ */ jsxRuntime.jsx(Input.NewMentionsPlugin, {}),
          /* @__PURE__ */ jsxRuntime.jsx(Input.LinkPlugin, {}),
          /* @__PURE__ */ jsxRuntime.jsx(Input.EmojisPlugin, {}),
          /* @__PURE__ */ jsxRuntime.jsx(LexicalHashtagPlugin.HashtagPlugin, {}),
          /* @__PURE__ */ jsxRuntime.jsx(Input.KeywordsPlugin, {}),
          /* @__PURE__ */ jsxRuntime.jsx(LexicalHistoryPlugin.HistoryPlugin, { externalHistoryState: historyState }),
          /* @__PURE__ */ jsxRuntime.jsx(
            LexicalRichTextPlugin.RichTextPlugin,
            {
              contentEditable: /* @__PURE__ */ jsxRuntime.jsx(
                Input.LexicalContentEditable,
                {
                  placeholder: formatMessage({
                    id: "lexical.nodes.image-component.caption.placeholder",
                    defaultMessage: "Enter a caption..."
                  }),
                  placeholderClassName: "ImageNode__placeholder",
                  className: "ImageNode__contentEditable"
                }
              ),
              ErrorBoundary: LexicalErrorBoundary.LexicalErrorBoundary
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(TreeViewPlugin, {})
        ]
      }
    ) }),
    resizable && lexical.$isNodeSelection(selection) && isFocused && /* @__PURE__ */ jsxRuntime.jsx(
      ImageResizer,
      {
        showCaption,
        setShowCaption,
        editor,
        buttonRef,
        imageRef,
        maxWidth,
        onResizeStart,
        onResizeEnd,
        captionsEnabled: !isLoadError && captionsEnabled
      }
    )
  ] }) });
}
exports.RIGHT_CLICK_IMAGE_COMMAND = RIGHT_CLICK_IMAGE_COMMAND;
exports.default = ImageComponent;
