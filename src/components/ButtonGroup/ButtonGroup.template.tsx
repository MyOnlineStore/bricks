import React, { Children, StatelessComponent } from 'react';
import trbl from '../../utility/trbl';
import Box from '../Box';
import BreakpointProvider from '../BreakpointProvider';

const ButtonGroup: StatelessComponent = (props): JSX.Element => {
    return (
        <BreakpointProvider
            breakpoints={{
                small: 0,
                medium: 0,
                large: 375,
            }}
        >
            {(breakpoint): JSX.Element => {
                const direction =
                    breakpoint === 'small' ? 'column' : 'row-reverse';

                return (
                    <Box
                        direction={direction}
                        justifyContent="flex-start"
                        alignItems="stretch"
                        wrap
                        margin={trbl(-6)}
                    >
                        {Children.map(props.children, (child): JSX.Element => (
                            <Box
                                direction={
                                    breakpoint === 'small' ? 'column' : 'row'
                                }
                                alignSelf="stretch"
                                margin={trbl(6)}
                            >
                                {child}
                            </Box>
                        ))}
                    </Box>
                );
            }}
        </BreakpointProvider>
    );
};

export default ButtonGroup;
