import React, { Component, ReactNode } from 'react';
import { StyledRowValue, StyledRowDescription } from './style';
import Text from '../Text';
import BreakpointProvider from '../BreakpointProvider';
import Box from '../Box';
import trbl from '../../utility/trbl';

type StateType = {
    focus: boolean;
};

type PropsType = {
    rowLabel: ReactNode;
    rowValue: JSX.Element;
    rowButtons?: JSX.Element;
};

class FormRow extends Component<PropsType, StateType> {
    public render(): JSX.Element {
        return (
            <BreakpointProvider
                breakpoints={{
                    small: 0,
                    medium: 375,
                    large: 800,
                }}
            >
                {(breakpoint): JSX.Element => {
                    if (typeof this.props.rowLabel === 'string') {
                        return (
                            <label>
                                <Box
                                    margin={trbl(0, 0, 12, 0)}
                                    direction={breakpoint === 'small' ? 'column' : 'row'}
                                    grow={0}
                                    justifyContent="flex-start"
                                    alignItems="stretch"
                                >
                                    <StyledRowDescription small={breakpoint === 'small'}>
                                        <Text>{this.props.rowLabel}</Text>
                                    </StyledRowDescription>

                                    <StyledRowValue>{this.props.rowValue}</StyledRowValue>
                                    {this.props.rowButtons !== undefined && <>{this.props.rowButtons}</>}
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
                            <StyledRowDescription small={breakpoint === 'small'}>
                                {this.props.rowLabel}
                            </StyledRowDescription>
                            <StyledRowValue>{this.props.rowValue}</StyledRowValue>
                            {this.props.rowButtons !== undefined && <>{this.props.rowButtons}</>}
                        </Box>
                    );
                }}
            </BreakpointProvider>
        );
    }
}
export default FormRow;
export { PropsType, StateType };
