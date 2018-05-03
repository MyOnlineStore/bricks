import React, { Children, StatelessComponent } from 'react';
import trbl from '../../utility/trbl';
import Box from '../Box';
import BreakpointProvider from '../BreakpointProvider';

const ButtonGroup:StatelessComponent = (props):JSX.Element => {
    return (
        <BreakpointProvider
            breakpoints={{
                small: 0,
                medium: 0,
                large: 375,
            }}
        >
            {(breakpoint):JSX.Element => {
                const direction = breakpoint === 'small' ? 'column' : 'row-reverse';
                const alignItems = breakpoint === 'small' ? 'stretch' : 'center';

                return (
                    <Box
                        direction={direction}
                        justifyContent="flex-start"
                        alignItems={alignItems}
                        wrap={true}
                        margin={trbl(-6)}
                    >
                        {Children.map(props.children, (child):JSX.Element => (
                            <Box direction="column" justifyContent="stretch" margin={trbl(6)}>
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
