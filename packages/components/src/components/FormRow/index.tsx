import React, { ReactNode, FunctionComponent } from 'react';
import Box from '../Box';
import Measure from 'react-measure';
import { StyledFormRow, StyledDisabledText } from './style';
import { flex, box, flexProps, boxProps } from '../../utility/box';

export type PropsType = typeof flex.props &
    typeof box.props & {
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
                    <StyledFormRow ref={measureRef} {...flexProps(props)} {...boxProps(props)} $wrap $maxWidth="720px">
                        <Box width="100%" minWidth="180px" direction="row" grow={1} maxWidth="241px" margin={[15, 12, 0, 0]} wrap>
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
                                {props.badge && <Box margin={[-9, 3]}>{props.badge}</Box>}
                            </Box>
                        </Box>
                        <Box
                            grow={1}
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
