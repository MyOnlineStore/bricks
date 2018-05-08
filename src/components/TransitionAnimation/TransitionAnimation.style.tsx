import { default as _R } from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import styled from '../../utility/styled';
import fade from './animations/fade';
import zoom from './animations/zoom';

type AnimationStateType = 'entering'|'entered'|'exiting'|'exited';

type StyledPropsType = {
    animation:'zoom'|'fade';
    state:AnimationStateType;
};

const StyledAnimation = styled.div`
    ${({ animation, state }:StyledPropsType):string => {
        switch (animation) {
            case 'zoom': return zoom(state);
            default: return fade(state);
        }
    }}
`;

export default StyledAnimation;
export {
    AnimationStateType,
    StyledPropsType,
};
