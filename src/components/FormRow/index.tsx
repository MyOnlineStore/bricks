import React, { ReactNode, FunctionComponent } from 'react';
import Box from '../Box';
import trbl from '../../utility/_trbl';
import { StyledFormRow } from './style';

type PropsType = {
    label: ReactNode;
    badge?: ReactNode;
    field: ReactNode;
};

const FormRow: FunctionComponent<PropsType> = (props): JSX.Element => {
    return (
        <StyledFormRow>
            <Box basis={'180px'} direction="row" grow={1} maxWidth="241px" margin={trbl(18, 9, 0, 0)} wrap>
                <Box wrap={false}>
                    <Box>{props.label}</Box>
                    <Box margin={[-9, 3]}>{props.badge !== undefined && props.badge}</Box>
                </Box>
            </Box>
            <Box basis={'180px'} grow={1} maxWidth="470px" margin={trbl(9, 0)} alignItems="flex-start" wrap>
                {props.field}
            </Box>
        </StyledFormRow>
    );
};

export default FormRow;
export { PropsType };
