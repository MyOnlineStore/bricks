import React, { SFC } from 'react';
import BreakpointProvider from '../BreakpointProvider';
import Box from '../Box';
import trbl from '../../utility/trbl';

type PropsType = {
    label: JSX.Element;
    field: JSX.Element;
};

const FormRow: SFC<PropsType> = (props): JSX.Element => {
    const breakpoints = {
        small: 0,
        medium: 300,
        large: 740,
    };

    return (
        <BreakpointProvider breakpoints={breakpoints}>
            {(breakpoint): JSX.Element => {
                return (
                    <Box wrap>
                        <Box
                            basis={breakpoint === 'large' ? '241px' : '180px'}
                            margin={trbl(18, 9, 0, 0)}
                            justifyContent="stretch"
                            wrap
                        >
                            {props.label}
                        </Box>
                        <Box basis="470px" maxWidth="470px" margin={trbl(9, 0, 9, 0)} alignItems="flex-start" wrap>
                            {props.field}
                        </Box>
                    </Box>
                );
            }}
        </BreakpointProvider>
    );
};

export default FormRow;
export { PropsType };
