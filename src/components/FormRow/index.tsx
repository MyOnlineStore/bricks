import React, { SFC } from 'react';
import Box from '../Box';
import trbl from '../../utility/trbl';

type PropsType = {
    label: JSX.Element;
    field: JSX.Element;
};

const FormRow: SFC<PropsType> = (props): JSX.Element => {
    return (
        <Box wrap grow={1}>
            <Box basis={'180px'} grow={1} maxWidth={'241px'} margin={trbl(18, 9, 0, 0)} justifyContent="stretch" wrap>
                {props.label}
            </Box>
            <Box basis={'180px'} grow={1} maxWidth="470px" margin={trbl(9, 0)} alignItems="flex-start" wrap>
                {props.field}
            </Box>
        </Box>
    );
};

export default FormRow;
export { PropsType };
