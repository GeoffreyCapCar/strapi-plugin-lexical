import { jsx, jsxs } from "react/jsx-runtime";
import { useCollaborationContext } from "@lexical/react/LexicalCollaborationContext";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LexicalNestedComposer } from "@lexical/react/LexicalNestedComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { calculateZoomLevel } from "@lexical/utils";
import { $getNodeByKey } from "lexical";
import { useLayoutEffect, useEffect, useRef } from "react";
import { C as CAN_USE_DOM, t as theme$1, u as useSharedHistoryContext, d as LexicalContentEditable, i as $isStickyNode } from "./Input-wFPTNyMk.mjs";
import { useIntl } from "react-intl";
const useLayoutEffectImpl = CAN_USE_DOM ? useLayoutEffect : useEffect;
const theme = {
  ...theme$1,
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
  const { formatMessage } = useIntl();
  const [editor] = useLexicalComposerContext();
  const stickyContainerRef = useRef(null);
  const positioningRef = useRef({
    isDragging: false,
    offsetX: 0,
    offsetY: 0,
    rootElementRect: null,
    x: 0,
    y: 0
  });
  useCollaborationContext();
  useEffect(() => {
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
  useEffect(() => {
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
    const zoom = calculateZoomLevel(stickyContainer);
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
        const node = $getNodeByKey(nodeKey);
        if ($isStickyNode(node)) {
          node.setPosition(positioning.x, positioning.y);
        }
      });
    }
    document.removeEventListener("pointermove", handlePointerMove);
    document.removeEventListener("pointerup", handlePointerUp);
  };
  const handleDelete = () => {
    editor.update(() => {
      const node = $getNodeByKey(nodeKey);
      if ($isStickyNode(node)) {
        node.remove();
      }
    });
  };
  const handleColorChange = () => {
    editor.update(() => {
      const node = $getNodeByKey(nodeKey);
      if ($isStickyNode(node)) {
        node.toggleColor();
      }
    });
  };
  const { historyState } = useSharedHistoryContext();
  return /* @__PURE__ */ jsx("div", { ref: stickyContainerRef, className: "sticky-note-container", children: /* @__PURE__ */ jsxs(
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
          const zoom = calculateZoomLevel(stickContainer);
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
        /* @__PURE__ */ jsx(
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
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleColorChange,
            className: "color",
            "aria-label": formatMessage({
              id: "lexical.sticky.color.aria",
              defaultMessage: "Change sticky note color"
            }),
            title: formatMessage({ id: "lexical.sticky.color.title", defaultMessage: "Color" }),
            children: /* @__PURE__ */ jsx("i", { className: "bucket" })
          }
        ),
        /* @__PURE__ */ jsxs(LexicalNestedComposer, { initialEditor: caption, initialTheme: theme, children: [
          /* @__PURE__ */ jsx(HistoryPlugin, { externalHistoryState: historyState }),
          /* @__PURE__ */ jsx(
            PlainTextPlugin,
            {
              contentEditable: /* @__PURE__ */ jsx(
                LexicalContentEditable,
                {
                  placeholder: formatMessage({
                    id: "lexical.sticky.placeholder",
                    defaultMessage: "What's up?"
                  }),
                  placeholderClassName: "StickyNode__placeholder",
                  className: "StickyNode__contentEditable"
                }
              ),
              ErrorBoundary: LexicalErrorBoundary
            }
          )
        ] })
      ]
    }
  ) });
}
export {
  StickyComponent as default
};
