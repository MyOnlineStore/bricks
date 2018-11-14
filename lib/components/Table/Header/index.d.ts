import { SFC, ReactNode } from 'react';
declare type PropsType = {
    alignments: Array<'left' | 'center' | 'right'>;
    headers: Array<ReactNode>;
    selectable?: boolean;
    draggable?: boolean;
    checked: boolean | 'indeterminate';
    onCheck(checked: boolean): void;
};
declare const Header: SFC<PropsType>;
export default Header;
export { PropsType };
