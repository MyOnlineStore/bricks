import { AnimationStateType } from '../style';
import { keyframes } from 'styled-components';

const zoomIn = keyframes`
    from { opacity: 0; transform: scale3d(.5, .5, .5) }
    to { opacity: 1; transform: scale3d(1, 1, 1) }
`;
const zoomOut = keyframes`
    0% { opacity: 1; transform: scale3d(1, 1, 1) }
    100% { opacity: 0; transform: scale3d(.5, .5, .5) }
`;

export default (state: AnimationStateType): string => {
    switch (state) {
        case 'exiting':
            return `animation: ${zoomOut} .3s both`;
        case 'exited':
            return 'opacity: 0; transform: scale3d(.5, .5, .5)';
        default:
            return `animation: ${zoomIn} .3s both`;
    }
};
