import React, { StatelessComponent } from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';
import StyledAnimation, { StyledPropsType } from './TransitionAnimation.style';

type PropsType = {
    show:boolean;
    key:string|number;
    animation:StyledPropsType['animation'];
};

const TransitionAnimation:StatelessComponent<PropsType> = (props):JSX.Element => (
    <Transition
        in={props.show}
        timeout={300}
        key={0}
        mountOnEnter
        unmountOnExit
    >
        {(state:StyledPropsType['state']):JSX.Element => (
            <StyledAnimation animation={props.animation} state={state}>
                {props.children}
            </StyledAnimation>
        )}
    </Transition>
);

export default TransitionAnimation;
export {
    PropsType,
};
