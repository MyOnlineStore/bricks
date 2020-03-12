import React, { ReactNode, FunctionComponent } from 'react';
import Box from '../Box';
import trbl from '../../utility/trbl';
import { StyledFormRow, StyledDisabledText } from './style';

type PropsType = {
    label: ReactNode;
    field: ReactNode;
    description?: ReactNode;
    badge?: ReactNode;
    disabled?: boolean;
};

const FormRow: FunctionComponent<PropsType> = (props): JSX.Element => {
    return (
        <StyledFormRow>
            <Box basis={'180px'} direction="row" grow={1} maxWidth="241px" margin={trbl(18, 9, 0, 0)} wrap>
                <Box grow={1} wrap={false}>
                    <Box direction={props.description ? 'column' : 'row'} grow={props.badge ? 0 : 1}>
                        <StyledDisabledText disabled={props.disabled} strong>
                            {props.label}
                        </StyledDisabledText>
                        {props.description && (
                            <StyledDisabledText disabled={props.disabled} variant="descriptive">
                                {props.description}
                            </StyledDisabledText>
                        )}
                    </Box>
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
