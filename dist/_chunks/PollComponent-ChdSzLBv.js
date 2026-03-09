"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const LexicalCollaborationContext = require("@lexical/react/LexicalCollaborationContext");
const LexicalComposerContext = require("@lexical/react/LexicalComposerContext");
const useLexicalNodeSelection = require("@lexical/react/useLexicalNodeSelection");
const utils = require("@lexical/utils");
const lexical = require("lexical");
const React = require("react");
const reactIntl = require("react-intl");
const Input = require("./Input-dL_Efx4f.js");
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
  const { clientID } = LexicalCollaborationContext.useCollaborationContext();
  const checkboxRef = React.useRef(null);
  const votesArray = option.votes;
  const checkedIndex = votesArray.indexOf(clientID);
  const checked = checkedIndex !== -1;
  const votes = votesArray.length;
  const text = option.text;
  const { formatMessage } = reactIntl.useIntl();
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "PollNode__optionContainer", children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: Input.joinClasses(
          "PollNode__optionCheckboxWrapper",
          checked && "PollNode__optionCheckboxChecked"
        ),
        children: /* @__PURE__ */ jsxRuntime.jsx(
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
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "PollNode__optionInputWrapper", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: "PollNode__optionInputVotes",
          style: { width: `${votes === 0 ? 0 : votes / totalVotes * 100}%` }
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "PollNode__optionInputVotesCount", children: votes > 0 && formatMessage(
        {
          id: "lexical.nodes.poll.votes",
          defaultMessage: "{count} {count, plural, one {vote} other {votes}}"
        },
        { count: votes }
      ) }),
      /* @__PURE__ */ jsxRuntime.jsx(
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
    /* @__PURE__ */ jsxRuntime.jsx(
      "button",
      {
        disabled: options.length < 3,
        className: Input.joinClasses(
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
  const { formatMessage } = reactIntl.useIntl();
  const [editor] = LexicalComposerContext.useLexicalComposerContext();
  const totalVotes = React.useMemo(() => getTotalVotes(options), [options]);
  const [isSelected, setSelected, clearSelection] = useLexicalNodeSelection.useLexicalNodeSelection(nodeKey);
  const [selection, setSelection] = React.useState(null);
  const ref = React.useRef(null);
  const $onDelete = React.useCallback(
    (payload) => {
      const deleteSelection = lexical.$getSelection();
      if (isSelected && lexical.$isNodeSelection(deleteSelection)) {
        const event = payload;
        event.preventDefault();
        deleteSelection.getNodes().forEach((node) => {
          if (Input.$isPollNode(node)) {
            node.remove();
          }
        });
      }
      return false;
    },
    [isSelected]
  );
  React.useEffect(() => {
    return utils.mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        setSelection(editorState.read(() => lexical.$getSelection()));
      }),
      editor.registerCommand(
        lexical.CLICK_COMMAND,
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
        lexical.COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(lexical.KEY_DELETE_COMMAND, $onDelete, lexical.COMMAND_PRIORITY_LOW),
      editor.registerCommand(lexical.KEY_BACKSPACE_COMMAND, $onDelete, lexical.COMMAND_PRIORITY_LOW)
    );
  }, [clearSelection, editor, isSelected, nodeKey, $onDelete, setSelected]);
  const withPollNode = (cb, onUpdate) => {
    editor.update(
      () => {
        const node = lexical.$getNodeByKey(nodeKey);
        if (Input.$isPollNode(node)) {
          cb(node);
        }
      },
      { onUpdate }
    );
  };
  const addOption = () => {
    withPollNode((node) => {
      node.addOption(Input.createPollOption());
    });
  };
  const isFocused = lexical.$isNodeSelection(selection) && isSelected;
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: `PollNode__container ${isFocused ? "focused" : ""}`, ref, children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "PollNode__inner", children: [
    /* @__PURE__ */ jsxRuntime.jsx("h2", { className: "PollNode__heading", children: question }),
    options.map((option, index) => {
      const key = option.uid;
      return /* @__PURE__ */ jsxRuntime.jsx(
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
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "PollNode__footer", children: /* @__PURE__ */ jsxRuntime.jsx(Input.Button, { onClick: addOption, small: true, children: formatMessage({ id: "lexical.nodes.poll.option.add", defaultMessage: "Add Option" }) }) })
  ] }) });
}
exports.default = PollComponent;
