import React, { SFC } from 'react';

import Box from '../Box';
import trbl from '../../utility/trbl';

type PropsType = {
    label: JSX.Element;
    field: JSX.Element;
};

const FormRow: SFC<PropsType> = (props): JSX.Element => (
    <Box wrap margin={trbl(0, 0, 12, 0)}>
        <Box basis="233px" grow={1} margin={trbl(18, 18, 0, 0)} wrap justifyContent="stretch">
            {props.label}
        </Box>
        <Box grow={1} basis="420px" margin={trbl(9, 0)} alignItems="flex-start">
            {props.field}
        </Box>
    </Box>
);

export default FormRow;
export { PropsType };
