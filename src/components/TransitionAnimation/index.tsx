import React, { FunctionComponent } from 'react';
import { Transition } from 'react-transition-group';
import StyledAnimation, { StyledPropsType } from './style';

type PropsType = {
    show: boolean;
    animation: StyledPropsType['animation'];
    stayMounted?: boolean;
    onExited?(): void;
};

const TransitionAnimation: FunctionComponent<PropsType> = (props): JSX.Element => {
    const unmount = props.stayMounted !== undefined ? !props.stayMounted : true;

    const handleExit = (): void => {
        if (props.onExited) props.onExited();
    };

    return (
        <Transition in={props.show} timeout={300} mountOnEnter={unmount} unmountOnExit={unmount} onExited={handleExit}>
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
