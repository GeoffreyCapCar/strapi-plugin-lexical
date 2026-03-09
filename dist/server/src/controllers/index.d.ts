declare const _default: {
    lexicalSearch: ({ strapi }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => {
        search(ctx: any): Promise<void>;
        get(ctx: any): Promise<void>;
        identify(ctx: any): Promise<void>;
    };
};
export default _default;
