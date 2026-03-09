"use strict";
const querystring = require("node:querystring");
const _interopDefault = (e) => e && e.__esModule ? e : { default: e };
const querystring__default = /* @__PURE__ */ _interopDefault(querystring);
const bootstrap = async ({ strapi }) => {
  const contentTypes = Object.entries(strapi.contentTypes).filter(([uid]) => uid.startsWith("api::")).map(([uid]) => uid);
  const attributes = {};
  for (const contentTypeUID of contentTypes) {
    const contentType = strapi.contentTypes[contentTypeUID];
    if (contentType) {
      attributes[contentType.collectionName] = {
        type: "relation",
        relation: "oneToMany",
        target: contentTypeUID
      };
    }
  }
  const linksComponentUID = `links.links`;
  const linksComponentSchema = {
    category: "links",
    // @ts-expect-error yes, its there, and required. types seem to be wrong
    displayName: "Links",
    uid: linksComponentUID,
    info: {
      displayName: "Links",
      description: `Component linking to all collection types by default`,
      icon: "link"
    },
    attributes
  };
  const existingComponents = Object.keys(strapi.components);
  if (!existingComponents.includes(linksComponentUID)) {
    strapi.log.info(`Lexical: Creating default links component: ${linksComponentUID}`);
    await strapi.plugin("content-type-builder").services.components.createComponent({ component: linksComponentSchema });
  }
};
const destroy = ({ strapi }) => {
};
const register = ({ strapi }) => {
  strapi.customFields.register({
    name: "lexical",
    plugin: "lexical",
    type: "json",
    inputSize: { default: 12, isResizable: true }
  });
};
const config = {
  default: {},
  validator() {
  }
};
function findCollectionUID(strapi, collectionName) {
  const realCollectionName = collectionName.replace(/[- ]/g, "_");
  const found = Object.entries(strapi.contentTypes).find(([, collectionType]) => {
    return collectionType.collectionName === realCollectionName;
  });
  if (!found) {
    throw new Error(`Collection ${realCollectionName} not found`);
  }
  return found[0];
}
function findTitleField(strapi, collectionTypeUID) {
  const contentType = strapi.contentTypes[collectionTypeUID];
  return Object.keys(contentType.attributes).find(
    (fieldName) => ["name", "title", "label", "headline"].includes(fieldName)
  );
}
const lexicalSearch = ({ strapi }) => ({
  async search(ctx) {
    const contentTypes = Object.entries(strapi.contentTypes).filter(([uid]) => uid.startsWith("api::")).map(([uid]) => uid);
    const qs = querystring__default.default.parse(ctx.url.split("?")[1]);
    const results = [];
    for (const contentType of contentTypes) {
      const fieldName = findTitleField(strapi, contentType);
      if (fieldName) {
        const query = {
          locale: qs.locale,
          filters: {
            [fieldName]: {
              $contains: qs.q
            }
          }
        };
        const res = await strapi.documents(contentType).findMany(query);
        if (res.length) {
          const { collectionName } = strapi.contentType(contentType);
          for (const entity of res) {
            results.push({
              documentId: entity.documentId,
              id: entity.id,
              label: entity[fieldName],
              collectionName
            });
          }
        }
      }
    }
    ctx.body = JSON.stringify(results, null, 2);
  },
  // get a single result so we can preview the currently selected item
  async get(ctx) {
    const { collectionName, documentId } = ctx.params;
    const collectionUID = findCollectionUID(strapi, collectionName);
    const entity = await strapi.documents(collectionUID).findOne({ documentId });
    const fieldName = findTitleField(strapi, collectionUID);
    ctx.body = JSON.stringify(
      { documentId: entity.documentId, id: entity.id, label: entity[fieldName], collectionName },
      null,
      2
    );
  },
  // Take api plural url and turn it into api identifies
  // @todo i bet strapi can do that and i am too dump?
  async identify(ctx) {
    const collectionUID = findCollectionUID(strapi, ctx.params.collectionName);
    ctx.body = JSON.stringify({ collectionUID });
  }
});
const controllers = {
  lexicalSearch
};
const policies = {};
const routes = [
  {
    method: "GET",
    path: "/search/:model/:field",
    handler: "lexicalSearch.search",
    config: {
      policies: ["admin::isAuthenticatedAdmin"]
    }
  },
  {
    method: "GET",
    path: "/get/:collectionName/:documentId",
    handler: "lexicalSearch.get",
    config: {
      policies: ["admin::isAuthenticatedAdmin"]
    }
  },
  {
    method: "GET",
    path: "/identify/:collectionName",
    handler: "lexicalSearch.identify",
    config: {
      policies: ["admin::isAuthenticatedAdmin"]
    }
  }
];
const index = {
  register,
  bootstrap,
  destroy,
  config,
  controllers,
  routes,
  policies
};
module.exports = index;
