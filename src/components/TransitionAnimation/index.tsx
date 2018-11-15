import React, { FunctionComponent } from 'react';
import { Transition } from 'react-transition-group';
import StyledAnimation, { StyledPropsType } from './style';

type PropsType = {
    show: boolean;
    animation: StyledPropsType['animation'];
    stayMounted?: boolean;
};

const TransitionAnimation: FunctionComponent<PropsType> = (props): JSX.Element => {
    const unmount = props.stayMounted !== undefined ? !props.stayMounted : true;

    return (
        <Transition in={props.show} timeout={300} mountOnEnter={unmount} unmountOnExit={unmount}>
            {(state: StyledPropsType['state']): JSX.Element => (
                <StyledAnimation animation={props.animation} state={state}>
                    {props.children}
                </StyledAnimation>
            )}
        </Transition>
    );
};

export default TransitionAnimation;
export { PropsType };
