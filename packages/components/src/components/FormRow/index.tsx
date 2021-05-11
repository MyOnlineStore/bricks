import React, { ReactNode, FunctionComponent } from 'react';
import Box from '../Box';
import Measure from 'react-measure';
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
        <Measure client>
            {({ measureRef, contentRect }) => {
                return (
                    <StyledFormRow ref={measureRef}>
                        <Box basis={'180px'} direction="row" grow={1} maxWidth="241px" margin={[15, 9, 0, 0]} wrap>
                            <Box grow={1} wrap={false}>
                                <Box direction={props.description ? 'column' : 'row'} grow={props.badge ? 0 : 1}>
                                    <StyledDisabledText as="div" disabled={props.disabled} strong>
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
                        <Box
                            basis={'180px'}
                            grow={1}
                            maxWidth="470px"
                            margin={[contentRect.client && contentRect.client.width < 369 ? 6 : 9, 0]}
                            alignItems="flex-start"
                            wrap
                        >
                            {props.field}
                        </Box>
                    </StyledFormRow>
                );
            }}
        </Measure>
    );
};

export default FormRow;
export { PropsType };
