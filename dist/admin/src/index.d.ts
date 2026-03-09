import { StrapiApp } from '@strapi/strapi/admin';
declare const _default: {
    register(app: StrapiApp): void;
    registerTrads({ locales }: {
        locales: string[];
    }): Promise<{
        data: any;
        locale: string;
    }[]>;
};
export default _default;
