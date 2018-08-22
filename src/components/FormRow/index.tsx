import React, { ReactNode, SFC } from 'react';
import BreakpointProvider from '../BreakpointProvider';
import Box from '../Box';
import trbl from '../../utility/trbl';

type PropsType = {
    label: JSX.Element;
    field: JSX.Element;
};

const FormRow: SFC<PropsType> = (props): JSX.Element => (
    <Box margin={trbl(0, 0, 12, 0)} wrap>
        <Box basis="420px" grow={1} margin={trbl(0, 18, 12, 0)} wrap justifyContent="stretch">
            {props.label}
        </Box>
        <Box grow={1} basis="420px" margin={trbl(0, 0, 12, 0)}>
            {props.field}
        </Box>
    </Box>
);

export default FormRow;
export { PropsType };
