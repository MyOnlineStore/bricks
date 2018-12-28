import React, { Children, FunctionComponent } from 'react';
import trbl from '../../utility/trbl';
import Box from '../Box';
import BreakpointProvider from '../BreakpointProvider';

type PropsType = {
    stacked?: boolean;
};

const ButtonGroup: FunctionComponent<PropsType> = (props): JSX.Element => {
    if (props.stacked === undefined) {
        return (
            <BreakpointProvider
                breakpoints={{
                    small: 0,
                    medium: 0,
                    large: 375,
                }}
            >
                {(breakpoint): JSX.Element => {
                    const direction = breakpoint === 'small' ? 'column' : 'row-reverse';

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
                                    direction={direction === 'row-reverse' ? 'row' : 'column'}
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
    }

    const direction = props.stacked ? 'column' : 'row-reverse';

    return (
        <Box direction={direction} justifyContent="flex-start" alignItems="stretch" wrap margin={trbl(-6)}>
            {Children.map(props.children, (child): JSX.Element => (
                <Box direction={direction === 'row-reverse' ? 'row' : 'column'} alignSelf="stretch" margin={trbl(6)}>
                    {child}
                </Box>
            ))}
        </Box>
    );
};

export default ButtonGroup;
