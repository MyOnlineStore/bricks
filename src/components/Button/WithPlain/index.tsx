import React, { Component, ComponentClass } from 'react';
import { PropsType as BareButtonPropsType } from '../BareButton';
import StyledPlain from './style';

type OmittedKeys = 'onChange' | 'value' | 'action';

type withPlainStylingType = ComponentClass<PropsType>;
type PropsType = Pick<BareButtonPropsType, Exclude<keyof BareButtonPropsType, OmittedKeys>> & {
    variant?: 'default' | 'destructive';
};

const withPlainStyling = (): ComponentClass<PropsType> => {
    class WithPlainStyling extends Component<PropsType> {
        public render(): JSX.Element {
            return (
                <StyledPlain variant={this.props.variant ? this.props.variant : 'default'} {...this.props}>
                    {this.props.children}
                </StyledPlain>
            );
        }
    }

    return WithPlainStyling;
};

export default withPlainStyling;
export { withPlainStylingType, PropsType };
