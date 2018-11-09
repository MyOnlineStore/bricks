import { AnimationStateType } from '../style';
import { keyframes } from 'styled-components';

const slideOut = keyframes`
    from {transform: translate3d(0, 0, 0)}
    to {transform: translate3d(-100%, 0, 0)}
`;

const slideIn = keyframes`
    from {transform: translate3d(-100%, 0, 0)}
    to {transform: translate3d(0, 0, 0)}
`;

export default (state: AnimationStateType): string => {
    switch (state) {
        case 'exiting':
            return `animation: ${slideOut} .3s both`;
        case 'exited':
            return 'transform: translate3d(0, 0, 0)';
        default:
            return `animation: ${slideIn} .3s both`;
    }
};
