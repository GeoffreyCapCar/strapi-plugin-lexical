import type { Core } from '@strapi/strapi';
declare const lexicalSearch: ({ strapi }: {
    strapi: Core.Strapi;
}) => {
    search(ctx: any): Promise<void>;
    get(ctx: any): Promise<void>;
    identify(ctx: any): Promise<void>;
};
export default lexicalSearch;
