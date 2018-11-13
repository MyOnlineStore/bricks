import { AnimationStateType } from '../style';

const slide = (state: AnimationStateType): string => {
    switch (state) {
        case 'exiting':
            return `
            @keyframes slideOut {
                0% {
                    transform: translate3d(0, 0, 0);
                }
                100% {
                    visibility: hidden;
                    transform: translate3d(-100%, 0, 0);
                }
            }

            animation: slideOut .3s both;
        `;
        case 'exited':
            return `
            transform: translate3d(0, 0, 0);
        `;
        default:
            return `
            @keyframes slideIn {
                0% {
                    transform: translate3d(-100%, 0, 0);
                }
                100% {
                    transform: translate3d(0, 0, 0);
                }
            }

            animation: slideIn .3s both;
        `;
    }
};

export default slide;
