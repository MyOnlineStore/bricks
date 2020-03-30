import React, { FunctionComponent, Children } from 'react';
import Box from '../Box';
import trbl, { TrblType } from '../../utility/trbl';

type PropsType = {
    by?: 'margin';
    before?: boolean;
    after?: boolean;
};

const calculateMargin = (count: number, index: number, before?: boolean, after?: boolean): TrblType => {
    const isFirst = index === 0;
    const isLast = index === count - 1;
    const isSingle = count === 1;
    const margin = 6;

    if (isSingle) return trbl(before ? margin : 0, 0, after ? margin : 0, 0);
    if (isFirst) return trbl(before ? margin : 0, 0, margin, 0);
    if (isLast) return trbl(0, 0, after ? margin : 0, 0);

    return trbl(0, 0, margin, 0);
};

const Separated: FunctionComponent<PropsType> = ({ children, before, after }): JSX.Element => {
    const count = Children.count(children);

    return (
        <Box wrap direction="column" alignItems="stretch" grow={1}>
            {Children.map(children, (child, index) => (
                <Box direction="row" grow={1} margin={calculateMargin(count, index, before, after)}>
                    {child}
                </Box>
            ))}
        </Box>
    );
};

export default Separated;
