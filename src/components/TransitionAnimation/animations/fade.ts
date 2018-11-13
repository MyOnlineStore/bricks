import { AnimationStateType } from '../style';
import { keyframes } from 'styled-components';

const fadeIn = keyframes`
    100% {opacity: 1}
    0% {opacity: 0}
`;

const fadeOut = keyframes`
    from { opacity: 1 }
    to { opacity: 0 }
`;

export default (state: AnimationStateType): string => {
    switch (state) {
        case 'exiting':
            return `animation: ${fadeOut} .3s both`;
        case 'exited':
            return 'opacity: 0';
        default:
            return `animation: ${fadeIn} .3s both`;
    }
};

export { fadeIn };
