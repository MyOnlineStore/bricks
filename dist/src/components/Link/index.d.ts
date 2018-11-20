import { SFC } from 'react';
declare type PropsType = {
    href?: string;
    title: string;
    target?: '_blank' | '_self';
    onClick?(): void;
};
declare const Link: SFC<PropsType>;
export default Link;
export { PropsType };
