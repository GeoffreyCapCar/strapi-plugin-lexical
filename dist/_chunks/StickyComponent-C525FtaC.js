"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const LexicalCollaborationContext = require("@lexical/react/LexicalCollaborationContext");
const LexicalComposerContext = require("@lexical/react/LexicalComposerContext");
const LexicalErrorBoundary = require("@lexical/react/LexicalErrorBoundary");
const LexicalHistoryPlugin = require("@lexical/react/LexicalHistoryPlugin");
const LexicalNestedComposer = require("@lexical/react/LexicalNestedComposer");
const LexicalPlainTextPlugin = require("@lexical/react/LexicalPlainTextPlugin");
const utils = require("@lexical/utils");
const lexical = require("lexical");
const React = require("react");
const Input = require("./Input-DIDxTLmb.js");
const reactIntl = require("react-intl");
const useLayoutEffectImpl = Input.CAN_USE_DOM ? React.useLayoutEffect : React.useEffect;
const theme = {
  ...Input.theme,
  paragraph: "StickyEditorTheme__paragraph"
};
function positionSticky(stickyElem, positioning) {
  const style = stickyElem.style;
  const rootElementRect = positioning.rootElementRect;
  const rectLeft = rootElementRect !== null ? rootElementRect.left : 0;
  const rectTop = rootElementRect !== null ? rootElementRect.top : 0;
  style.top = rectTop + positioning.y + "px";
  style.left = rectLeft + positioning.x + "px";
}
function StickyComponent({
  x,
  y,
  nodeKey,
  color,
  caption
}) {
  const { formatMessage } = reactIntl.useIntl();
  const [editor] = LexicalComposerContext.useLexicalComposerContext();
  const stickyContainerRef = React.useRef(null);
  const positioningRef = React.useRef({
    isDragging: false,
    offsetX: 0,
    offsetY: 0,
    rootElementRect: null,
    x: 0,
    y: 0
  });
  LexicalCollaborationContext.useCollaborationContext();
  React.useEffect(() => {
    const position = positioningRef.current;
    position.x = x;
    position.y = y;
    const stickyContainer = stickyContainerRef.current;
    if (stickyContainer !== null) {
      positionSticky(stickyContainer, position);
    }
  }, [x, y]);
  useLayoutEffectImpl(() => {
    const position = positioningRef.current;
    const resizeObserver = new ResizeObserver((entries) => {
      for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        const { target } = entry;
        position.rootElementRect = target.getBoundingClientRect();
        const stickyContainer = stickyContainerRef.current;
        if (stickyContainer !== null) {
          positionSticky(stickyContainer, position);
        }
      }
    });
    const removeRootListener = editor.registerRootListener((nextRootElem, prevRootElem) => {
      if (prevRootElem !== null) {
        resizeObserver.unobserve(prevRootElem);
      }
      if (nextRootElem !== null) {
        resizeObserver.observe(nextRootElem);
      }
    });
    const handleWindowResize = () => {
      const rootElement = editor.getRootElement();
      const stickyContainer = stickyContainerRef.current;
      if (rootElement !== null && stickyContainer !== null) {
        position.rootElementRect = rootElement.getBoundingClientRect();
        positionSticky(stickyContainer, position);
      }
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
      removeRootListener();
    };
  }, [editor]);
  React.useEffect(() => {
    const stickyContainer = stickyContainerRef.current;
    if (stickyContainer !== null) {
      setTimeout(() => {
        stickyContainer.style.setProperty("transition", "top 0.3s ease 0s, left 0.3s ease 0s");
      }, 500);
    }
  }, []);
  const handlePointerMove = (event) => {
    const stickyContainer = stickyContainerRef.current;
    const positioning = positioningRef.current;
    const rootElementRect = positioning.rootElementRect;
    const zoom = utils.calculateZoomLevel(stickyContainer);
    if (stickyContainer !== null && positioning.isDragging && rootElementRect !== null) {
      positioning.x = event.pageX / zoom - positioning.offsetX - rootElementRect.left;
      positioning.y = event.pageY / zoom - positioning.offsetY - rootElementRect.top;
      positionSticky(stickyContainer, positioning);
    }
  };
  const handlePointerUp = (event) => {
    const stickyContainer = stickyContainerRef.current;
    const positioning = positioningRef.current;
    if (stickyContainer !== null) {
      positioning.isDragging = false;
      stickyContainer.classList.remove("dragging");
      editor.update(() => {
        const node = lexical.$getNodeByKey(nodeKey);
        if (Input.$isStickyNode(node)) {
          node.setPosition(positioning.x, positioning.y);
        }
      });
    }
    document.removeEventListener("pointermove", handlePointerMove);
    document.removeEventListener("pointerup", handlePointerUp);
  };
  const handleDelete = () => {
    editor.update(() => {
      const node = lexical.$getNodeByKey(nodeKey);
      if (Input.$isStickyNode(node)) {
        node.remove();
      }
    });
  };
  const handleColorChange = () => {
    editor.update(() => {
      const node = lexical.$getNodeByKey(nodeKey);
      if (Input.$isStickyNode(node)) {
        node.toggleColor();
      }
    });
  };
  const { historyState } = Input.useSharedHistoryContext();
  return /* @__PURE__ */ jsxRuntime.jsx("div", { ref: stickyContainerRef, className: "sticky-note-container", children: /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: `sticky-note ${color}`,
      onPointerDown: (event) => {
        const stickyContainer = stickyContainerRef.current;
        if (stickyContainer == null || event.button === 2 || event.target !== stickyContainer.firstChild) {
          return;
        }
        const stickContainer = stickyContainer;
        const positioning = positioningRef.current;
        if (stickContainer !== null) {
          const { top, left } = stickContainer.getBoundingClientRect();
          const zoom = utils.calculateZoomLevel(stickContainer);
          positioning.offsetX = event.clientX / zoom - left;
          positioning.offsetY = event.clientY / zoom - top;
          positioning.isDragging = true;
          stickContainer.classList.add("dragging");
          document.addEventListener("pointermove", handlePointerMove);
          document.addEventListener("pointerup", handlePointerUp);
          event.preventDefault();
        }
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            onClick: handleDelete,
            className: "delete",
            "aria-label": formatMessage({
              id: "lexical.sticky.delete.aria",
              defaultMessage: "Delete sticky note"
            }),
            title: formatMessage({ id: "lexical.sticky.delete.title", defaultMessage: "Delete" }),
            children: "X"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            onClick: handleColorChange,
            className: "color",
            "aria-label": formatMessage({
              id: "lexical.sticky.color.aria",
              defaultMessage: "Change sticky note color"
            }),
            title: formatMessage({ id: "lexical.sticky.color.title", defaultMessage: "Color" }),
            children: /* @__PURE__ */ jsxRuntime.jsx("i", { className: "bucket" })
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(LexicalNestedComposer.LexicalNestedComposer, { initialEditor: caption, initialTheme: theme, children: [
          /* @__PURE__ */ jsxRuntime.jsx(LexicalHistoryPlugin.HistoryPlugin, { externalHistoryState: historyState }),
          /* @__PURE__ */ jsxRuntime.jsx(
            LexicalPlainTextPlugin.PlainTextPlugin,
            {
              contentEditable: /* @__PURE__ */ jsxRuntime.jsx(
                Input.LexicalContentEditable,
                {
                  placeholder: formatMessage({
                    id: "lexical.sticky.placeholder",
                    defaultMessage: "What's up?"
                  }),
                  placeholderClassName: "StickyNode__placeholder",
                  className: "StickyNode__contentEditable"
                }
              ),
              ErrorBoundary: LexicalErrorBoundary.LexicalErrorBoundary
            }
          )
        ] })
      ]
    }
  ) });
}
exports.default = StickyComponent;
