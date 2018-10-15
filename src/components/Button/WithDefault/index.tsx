import React, { Component, ComponentClass } from 'react';
import { PropsType as BareButtonPropsType } from '../BareButton';
import StyledDefault from './style';

type OmittedKeys = 'onChange' | 'value' | 'action';

type withDefaultStylingType = ComponentClass<PropsType>;
type PropsType = Pick<BareButtonPropsType, Exclude<keyof BareButtonPropsType, OmittedKeys>> & {
    variant: 'primary' | 'destructive' | 'warning' | 'secondary' | 'plain';
    compact?: boolean;
};

const withDefaultStyling = (): ComponentClass<PropsType> => {
    class WithDefaultStyling extends Component<PropsType> {
        public render(): JSX.Element {
            return (
                <StyledDefault variant={this.props.variant} compact={this.props.compact} {...this.props}>
                    {this.props.children}
                </StyledDefault>
            );
        }
    }

    return WithDefaultStyling;
};

export default withDefaultStyling;
export { withDefaultStylingType, PropsType };
