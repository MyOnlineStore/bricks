import { SFC, ReactNode } from 'react';
declare type PropsType = {
    condition: boolean;
    ifTrue(children: ReactNode): JSX.Element;
    ifFalse?(children: ReactNode): JSX.Element;
};
declare const Branch: SFC<PropsType>;
export default Branch;
export { PropsType };
