import React, { ReactNode, SFC } from 'react';
import { StyledField, StyledRowDescription } from './style';
import Text from '../Text';
import BreakpointProvider from '../BreakpointProvider';
import Box from '../Box';
import trbl from '../../utility/trbl';

type PropsType = {
    label: ReactNode;
    field: JSX.Element;
    valignLabel?: boolean;
};

const FormRow: SFC<PropsType> = (props): JSX.Element => (
    <BreakpointProvider
        breakpoints={{
            small: 0,
            medium: 421,
            large: 800,
        }}
    >
        {(breakpoint): JSX.Element => {
            if (typeof props.label === 'string') {
                return (
                    <label>
                        <Box
                            margin={trbl(0, 0, 12, 0)}
                            direction={breakpoint === 'small' ? 'column' : 'row'}
                            grow={0}
                            justifyContent="flex-start"
                            alignItems="stretch"
                        >
                            <StyledRowDescription valign={props.valignLabel} small={breakpoint === 'small'}>
                                <Text>{props.label}</Text>
                            </StyledRowDescription>

                            <StyledField>{props.field}</StyledField>
                        </Box>
                    </label>
                );
            }

            return (
                <Box
                    margin={trbl(0, 0, 12, 0)}
                    direction={breakpoint === 'small' ? 'column' : 'row'}
                    grow={0}
                    justifyContent="flex-start"
                    alignItems="stretch"
                >
                    <StyledRowDescription valign={props.valignLabel} small={breakpoint === 'small'}>
                        {props.label}
                    </StyledRowDescription>
                    <StyledField>{props.field}</StyledField>
                </Box>
            );
        }}
    </BreakpointProvider>
);

export default FormRow;
export { PropsType };
