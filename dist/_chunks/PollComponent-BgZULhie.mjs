import { jsx, jsxs } from "react/jsx-runtime";
import { useCollaborationContext } from "@lexical/react/LexicalCollaborationContext";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useLexicalNodeSelection } from "@lexical/react/useLexicalNodeSelection";
import { mergeRegister } from "@lexical/utils";
import { $getSelection, $isNodeSelection, CLICK_COMMAND, COMMAND_PRIORITY_LOW, KEY_DELETE_COMMAND, KEY_BACKSPACE_COMMAND, $getNodeByKey } from "lexical";
import { useMemo, useState, useRef, useCallback, useEffect } from "react";
import { useIntl } from "react-intl";
import { h as $isPollNode, B as Button, j as joinClasses, i as createPollOption } from "./Input-ChDt0ozq.mjs";
function getTotalVotes(options) {
  return options.reduce((totalVotes, next) => {
    return totalVotes + next.votes.length;
  }, 0);
}
function PollOptionComponent({
  option,
  index,
  options,
  totalVotes,
  withPollNode
}) {
  const { clientID } = useCollaborationContext();
  const checkboxRef = useRef(null);
  const votesArray = option.votes;
  const checkedIndex = votesArray.indexOf(clientID);
  const checked = checkedIndex !== -1;
  const votes = votesArray.length;
  const text = option.text;
  const { formatMessage } = useIntl();
  return /* @__PURE__ */ jsxs("div", { className: "PollNode__optionContainer", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: joinClasses(
          "PollNode__optionCheckboxWrapper",
          checked && "PollNode__optionCheckboxChecked"
        ),
        children: /* @__PURE__ */ jsx(
          "input",
          {
            ref: checkboxRef,
            className: "PollNode__optionCheckbox",
            type: "checkbox",
            onChange: (e) => {
              withPollNode((node) => {
                node.toggleVote(option, clientID);
              });
            },
            checked
          }
        )
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "PollNode__optionInputWrapper", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "PollNode__optionInputVotes",
          style: { width: `${votes === 0 ? 0 : votes / totalVotes * 100}%` }
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "PollNode__optionInputVotesCount", children: votes > 0 && formatMessage(
        {
          id: "lexical.nodes.poll.votes",
          defaultMessage: "{count} {count, plural, one {vote} other {votes}}"
        },
        { count: votes }
      ) }),
      /* @__PURE__ */ jsx(
        "input",
        {
          className: "PollNode__optionInput",
          type: "text",
          value: text,
          onChange: (e) => {
            const target = e.target;
            const value = target.value;
            const selectionStart = target.selectionStart;
            const selectionEnd = target.selectionEnd;
            withPollNode(
              (node) => {
                node.setOptionText(option, value);
              },
              () => {
                target.selectionStart = selectionStart;
                target.selectionEnd = selectionEnd;
              }
            );
          },
          placeholder: formatMessage(
            { id: "lexical.nodes.poll.option.placeholder", defaultMessage: "Option {number}" },
            { number: index + 1 }
          )
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        disabled: options.length < 3,
        className: joinClasses(
          "PollNode__optionDelete",
          options.length < 3 && "PollNode__optionDeleteDisabled"
        ),
        "aria-label": formatMessage({
          id: "lexical.nodes.poll.option.remove",
          defaultMessage: "Remove"
        }),
        onClick: () => {
          withPollNode((node) => {
            node.deleteOption(option);
          });
        }
      }
    )
  ] });
}
function PollComponent({
  question,
  options,
  nodeKey
}) {
  const { formatMessage } = useIntl();
  const [editor] = useLexicalComposerContext();
  const totalVotes = useMemo(() => getTotalVotes(options), [options]);
  const [isSelected, setSelected, clearSelection] = useLexicalNodeSelection(nodeKey);
  const [selection, setSelection] = useState(null);
  const ref = useRef(null);
  const $onDelete = useCallback(
    (payload) => {
      const deleteSelection = $getSelection();
      if (isSelected && $isNodeSelection(deleteSelection)) {
        const event = payload;
        event.preventDefault();
        deleteSelection.getNodes().forEach((node) => {
          if ($isPollNode(node)) {
            node.remove();
          }
        });
      }
      return false;
    },
    [isSelected]
  );
  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        setSelection(editorState.read(() => $getSelection()));
      }),
      editor.registerCommand(
        CLICK_COMMAND,
        (payload) => {
          const event = payload;
          if (event.target === ref.current) {
            if (!event.shiftKey) {
              clearSelection();
            }
            setSelected(!isSelected);
            return true;
          }
          return false;
        },
        COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(KEY_DELETE_COMMAND, $onDelete, COMMAND_PRIORITY_LOW),
      editor.registerCommand(KEY_BACKSPACE_COMMAND, $onDelete, COMMAND_PRIORITY_LOW)
    );
  }, [clearSelection, editor, isSelected, nodeKey, $onDelete, setSelected]);
  const withPollNode = (cb, onUpdate) => {
    editor.update(
      () => {
        const node = $getNodeByKey(nodeKey);
        if ($isPollNode(node)) {
          cb(node);
        }
      },
      { onUpdate }
    );
  };
  const addOption = () => {
    withPollNode((node) => {
      node.addOption(createPollOption());
    });
  };
  const isFocused = $isNodeSelection(selection) && isSelected;
  return /* @__PURE__ */ jsx("div", { className: `PollNode__container ${isFocused ? "focused" : ""}`, ref, children: /* @__PURE__ */ jsxs("div", { className: "PollNode__inner", children: [
    /* @__PURE__ */ jsx("h2", { className: "PollNode__heading", children: question }),
    options.map((option, index) => {
      const key = option.uid;
      return /* @__PURE__ */ jsx(
        PollOptionComponent,
        {
          withPollNode,
          option,
          index,
          options,
          totalVotes
        },
        key
      );
    }),
    /* @__PURE__ */ jsx("div", { className: "PollNode__footer", children: /* @__PURE__ */ jsx(Button, { onClick: addOption, small: true, children: formatMessage({ id: "lexical.nodes.poll.option.add", defaultMessage: "Add Option" }) }) })
  ] }) });
}
export {
  PollComponent as default
};
