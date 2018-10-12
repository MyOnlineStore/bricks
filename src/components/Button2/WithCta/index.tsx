import React, { Component, ComponentClass } from 'react';
import { PropsType as BareButtonPropsType } from '../BareButton';
import { MediumPropsType } from '../../Icon';
import StyledCta from './style';

type OmittedKeys = 'onChange' | 'value' | 'action';

type PropsType = Pick<BareButtonPropsType, Exclude<keyof BareButtonPropsType, OmittedKeys>> & {
    variant: 'primary' | 'secondary';
    icon?: MediumPropsType['icon'];
    iconAlign?: 'right' | 'left';
};

type withCtaStylingType = ComponentClass<PropsType>;

const withCtaStyling = (): ComponentClass<PropsType> => {
    class WithCtaStyling extends Component<PropsType> {
        public render(): JSX.Element {
            const wrappedProps = { ...this.props };

            return (
                <StyledCta variant={this.props.variant} {...wrappedProps}>
                    {this.props.children}
                </StyledCta>
            );
        }
    }

    return WithCtaStyling;
};

export default withCtaStyling;
export { withCtaStylingType, PropsType };
