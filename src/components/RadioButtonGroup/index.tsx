import React, { Children, FunctionComponent } from 'react';
import trbl from '../../utility/trbl';
import Box from '../Box';

const RadioButtonGroup: FunctionComponent = (props): JSX.Element => (
    <Box wrap direction="column" margin={trbl(12, 0, 0, 0)} grow={1}>
        {Children.map(props.children, (child, index): JSX.Element => (
            <Box direction="row" alignSelf="stretch" grow={1} margin={index > 0 ? trbl(12, 6, 0, 0) : trbl(0, 6, 0, 0)}>
                {child}
            </Box>
        ))}
    </Box>
);

export default RadioButtonGroup;
