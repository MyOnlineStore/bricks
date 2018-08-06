import React, { SFC, ReactNode, Children } from 'react';

type PropsType = {
    condition: boolean;
    ifTrue(children: ReactNode): JSX.Element;
    ifFalse?(children: ReactNode): JSX.Element;
};

const Branch: SFC<PropsType> = ({ condition, ifTrue, ifFalse, children }): JSX.Element | null => {
    if (condition) {
        return ifTrue(children);
    }

    if (ifFalse !== undefined) {
        return ifFalse(children);
    }

    if (Children.count(children) > 0) {
        return children as JSX.Element;
    }

    /* tslint:disable */
    return null;
    /* tslint:enable */
};

export default Branch;
export { PropsType };
