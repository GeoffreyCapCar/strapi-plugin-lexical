import React__default, { useRef, useEffect } from "react";
import { jsxs, jsx } from "react/jsx-runtime";
const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};
const PLUGIN_ID = "lexical";
const Initializer = ({ setPlugin }) => {
  const ref = useRef(setPlugin);
  useEffect(() => {
    ref.current(PLUGIN_ID);
  }, []);
  return null;
};
const LexicalIcon = React__default.forwardRef(
  ({ width = "30", height = "23", color = "currentColor", className, ...props }, forwardedRef) => /* @__PURE__ */ jsxs(
    "svg",
    {
      ref: forwardedRef,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      width: "16",
      height: "16",
      className,
      ...props,
      children: [
        /* @__PURE__ */ jsx("rect", { width, height, x: ".5", y: "4.5", fill: "#EAF5FF", stroke: "#B8E1FF", rx: "2.5" }),
        /* @__PURE__ */ jsx("path", { fill: "#76b6ff", d: "M13.204 14.77H9.476V13.56h3.728z" }),
        /* @__PURE__ */ jsx("path", { d: "M17.78 14.77h-3.728V13.56h3.728z" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#76b6ff",
            d: "M20.153 14.77h-1.525V13.56h1.525zM15.577 16.709H9.476v-1.212h6.101zM20.153 16.709h-3.729v-1.212h3.73z"
          }
        ),
        /* @__PURE__ */ jsx("path", { d: "M13.204 18.648H9.476v-1.212h3.728z" }),
        /* @__PURE__ */ jsx("path", { fill: "#76b6ff", d: "M17.78 18.648h-3.728v-1.212h3.728z" }),
        /* @__PURE__ */ jsx("path", { d: "M20.153 18.648h-1.525v-1.212h1.525z" }),
        /* @__PURE__ */ jsx("path", { d: "M24.56 9.318v1.211h-1.865v11.148h1.865v1.212h-5.254v-1.212H21V10.529h-1.695V9.318Zm-4.407 1.817v1.212H7.781v7.512h12.372v1.212H6.086v-9.936Zm5.932 0v9.936h-2.542V19.86h.847v-7.512h-.847v-1.212Z" })
      ]
    }
  )
);
LexicalIcon.displayName = "LexicalIcon";
const index = {
  register(app) {
    app.registerPlugin({
      id: PLUGIN_ID,
      initializer: Initializer,
      isReady: false,
      name: PLUGIN_ID
    });
    app.customFields.register({
      name: "lexical",
      pluginId: "lexical",
      type: "json",
      intlLabel: {
        id: "lexical.plugin.label",
        defaultMessage: "Lexical Editor"
      },
      intlDescription: {
        id: "lexical.plugin.description",
        defaultMessage: "Lexical advanced WYSIWYG editor"
      },
      icon: LexicalIcon,
      components: {
        Input: async () => (
          // @ts-expect-error its fine and works, the typing of the props seems to be wrong at the moment
          import(
            /* webpackChunkName: "lexical-input-component" */
            "../_chunks/Input-C8GCKr3A.mjs"
          ).then((n) => n.I)
        )
      },
      options: {
        // declare options here
      }
    });
  },
  async registerTrads({ locales }) {
    return Promise.all(
      locales.map(async (locale) => {
        try {
          const { default: data } = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./translations/de.json": () => import("../_chunks/de-DO2XYqyp.mjs"), "./translations/en.json": () => import("../_chunks/en-CeXJTkyn.mjs"), "./translations/es.json": () => import("../_chunks/es-C8KZCmN0.mjs"), "./translations/fr.json": () => import("../_chunks/fr-4zI_kVmA.mjs"), "./translations/tr.json": () => import("../_chunks/tr-27UapVE7.mjs") }), `./translations/${locale}.json`, 3);
          return { data, locale };
        } catch {
          return { data: {}, locale };
        }
      })
    );
  }
};
export {
  index as default
};
