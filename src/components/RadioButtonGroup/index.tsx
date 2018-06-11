import React, { Children, StatelessComponent } from 'react';
import trbl from '../../utility/trbl';
import Box from '../Box';
import BreakpointProvider from '../BreakpointProvider';

const RadioButtonGroup: StatelessComponent = (props): JSX.Element => {
    return (
        <BreakpointProvider
            breakpoints={{
                small: 0,
                medium: 375,
                large: 800,
            }}
        >
            {(breakpoint): JSX.Element => {
                const direction = breakpoint === 'small' ? 'column' : 'row';

                return (
                    <Box direction={direction} justifyContent="flex-start" alignItems="stretch" wrap margin={trbl(-6)}>
                        {Children.map(props.children, (child): JSX.Element => (
                            <Box direction="row" alignSelf="stretch" margin={trbl(6)}>
                                {child}
                            </Box>
                        ))}
                    </Box>
                );
            }}
        </BreakpointProvider>
    );
};

export default RadioButtonGroup;
