import { FunctionComponent } from 'react';
declare type PropsType = {
    breadcrumbs: Array<BreadcrumbType>;
};
declare type BreadcrumbType = {
    url?: string;
    name: string;
};
declare const Breadcrumbs: FunctionComponent<PropsType>;
export default Breadcrumbs;
