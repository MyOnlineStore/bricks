import React, { ReactNode, FunctionComponent } from 'react';
import Box from '../Box';
import trbl from '../../utility/trbl';
import { StyledFormRow } from './style';

type PropsType = {
    label: ReactNode;
    field: ReactNode;
};

const FormRow: FunctionComponent<PropsType> = (props): JSX.Element => {
    return (
        <StyledFormRow>
            <Box basis={'180px'} grow={1} maxWidth="241px" margin={trbl(18, 9, 0, 0)} justifyContent="stretch" wrap>
                {props.label}
            </Box>
            <Box basis={'180px'} grow={1} maxWidth="470px" margin={trbl(9, 0)} alignItems="flex-start" wrap>
                {props.field}
            </Box>
        </StyledFormRow>
    );
};

export default FormRow;
export { PropsType };
