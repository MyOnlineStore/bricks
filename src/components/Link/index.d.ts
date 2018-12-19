import { FunctionComponent } from 'react';
declare type PropsType = {
    href?: string;
    title: string;
    target?: '_blank' | '_self';
    action?(): void;
};
declare const Link: FunctionComponent<PropsType>;
export default Link;
export { PropsType };
