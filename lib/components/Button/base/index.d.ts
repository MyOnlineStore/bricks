import { FunctionComponent } from 'react';
declare type PropsType = {
    className?: string;
    compact?: boolean;
    title: string;
    variant?: 'primary' | 'destructive' | 'warning' | 'secondary' | 'plain';
    target?: HTMLAnchorElement['target'];
    href?: string;
    disabled?: boolean;
    id?: string;
    loading?: boolean;
    onClick?(): void;
};
declare const ButtonBase: FunctionComponent<PropsType>;
export default ButtonBase;
export { PropsType };
