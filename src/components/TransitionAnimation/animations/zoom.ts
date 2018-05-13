import { AnimationStateType } from '../TransitionAnimation.style';

const zoom = (state:AnimationStateType):string => {
    switch (state) {
        case 'exiting': return `
            @keyframes zoomOut {
                0% { opacity: 1; transform: scale3d(1, 1, 1); }
                100% { opacity: 0; transform: scale3d(.5, .5, .5); }
            }

            animation: zoomOut .3s;
        `;
        default: return `
            @keyframes zoomIn {
                0% { opacity: 0; transform: scale3d(.5, .5, .5); }
                100% { opacity: 1; transform: scale3d(1, 1, 1); }
            }

            animation: zoomIn .3s;
        `;
    }
};

export default zoom;
