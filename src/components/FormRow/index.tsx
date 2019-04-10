import React, { ReactNode, FC } from 'react';
import Box from '../Box';
import { StyledFormRow } from './style';

type PropsType = {
    label: ReactNode;
    field: ReactNode;
};

const FormRow: FC<PropsType> = props => (
    <StyledFormRow>
        <Box basis={'180px'} grow={1} maxWidth="241px" margin={[18, 9, 0, 0]} justifyContent="stretch" wrap>
            {props.label}
        </Box>
        <Box basis={'180px'} grow={1} maxWidth="470px" margin={[9, 0]} alignItems="flex-start" wrap>
            {props.field}
        </Box>
    </StyledFormRow>
);

export default FormRow;
export { PropsType };
