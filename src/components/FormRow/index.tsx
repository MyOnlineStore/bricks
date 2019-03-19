import React, { ReactNode, FunctionComponent } from 'react';
import Box from '../Box';
import { StyledFormRow } from './style';

type PropsType = {
    label: ReactNode;
    field: ReactNode;
    vertical?: boolean;
};

const FormRow: FunctionComponent<PropsType> = (props): JSX.Element => {
    return (
        <StyledFormRow>
            <Box
                basis={props.vertical ? '100%' : '180px'}
                grow={1}
                maxWidth={props.vertical ? '' : '241px'}
                margin={[18, 9, 0, 0]}
                justifyContent="stretch"
                wrap
            >
                {props.label}
            </Box>
            <Box
                basis={props.vertical ? '100%' : '180px'}
                grow={1}
                maxWidth={props.vertical ? '' : '470px'}
                margin={[9, 0]}
                alignItems="flex-start"
                wrap
            >
                {props.field}
            </Box>
        </StyledFormRow>
    );
};

export default FormRow;
export { PropsType };
