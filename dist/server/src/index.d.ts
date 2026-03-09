declare const _default: {
    register: ({ strapi }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => void;
    bootstrap: ({ strapi }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => Promise<void>;
    destroy: ({ strapi }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => void;
    config: {
        default: {};
        validator(): void;
    };
    controllers: {
        lexicalSearch: ({ strapi }: {
            strapi: import("@strapi/types/dist/core").Strapi;
        }) => {
            search(ctx: any): Promise<void>;
            get(ctx: any): Promise<void>;
            identify(ctx: any): Promise<void>;
        };
    };
    routes: {
        method: string;
        path: string;
        handler: string;
        config: {
            policies: string[];
        };
    }[];
    policies: {};
};
export default _default;
