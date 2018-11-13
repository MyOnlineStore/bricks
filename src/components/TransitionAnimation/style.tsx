import { default as _R } from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled from '../../utility/_styled';
import fade from './animations/fade';
import zoom from './animations/zoom';
import slideUp from './animations/slideUp';
import slideDown from './animations/slideDown';
import slideLeft from './animations/slideLeft';
import slideRight from './animations/slideRight';

type AnimationStateType = 'entering' | 'entered' | 'exiting' | 'exited';

type StyledPropsType = {
    animation: 'zoom' | 'fade' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight';
    state: AnimationStateType;
};

const StyledAnimation = styled.div`
    ${({ animation, state }: StyledPropsType): string => {
        switch (animation) {
            case 'zoom':
                return zoom(state);
            case 'slideUp':
                return slideUp(state);
            case 'slideDown':
                return slideDown(state);
            case 'slideLeft':
                return slideLeft(state);
            case 'slideRight':
                return slideRight(state);
            default:
                return fade(state);
        }
    }};
`;

export default StyledAnimation;
export { AnimationStateType, StyledPropsType };
