import React, { Component, ComponentClass } from 'react';
import { PropsType as BareButtonPropsType } from '../BareButton';
import StyledCta from './style';

type OmittedKeys = 'onChange' | 'value' | 'action';

type withCtaStylingType = ComponentClass<PropsType>;
type PropsType = Pick<BareButtonPropsType, Exclude<keyof BareButtonPropsType, OmittedKeys>> & {
    variant: 'primary' | 'secondary';
};

const withCtaStyling = (): ComponentClass<PropsType> => {
    class WithCtaStyling extends Component<PropsType> {
        public render(): JSX.Element {
            return (
                <StyledCta variant={this.props.variant} {...this.props}>
                    {this.props.children}
                </StyledCta>
            );
        }
    }

    return WithCtaStyling;
};

export default withCtaStyling;
export { withCtaStylingType, PropsType };
