import { default as _R } from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled from '../../utility/styled';
import fade from './animations/fade';
import zoom from './animations/zoom';
import slide from './animations/slide';

type AnimationStateType = 'entering' | 'entered' | 'exiting' | 'exited';

type StyledPropsType = {
    animation: 'zoom' | 'fade' | 'slide';
    state: AnimationStateType;
};

const StyledAnimation = styled.div`
    ${({ animation, state }: StyledPropsType): string => {
        switch (animation) {
            case 'zoom':
                return zoom(state);
            case 'slide':
                return slide(state);
            default:
                return fade(state);
        }
    }};
`;

export default StyledAnimation;
export { AnimationStateType, StyledPropsType };
