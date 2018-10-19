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
                    transform: translate3d(0, 150%, 0);
                    visibility: hidden;
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
                    transform: translate3d(0, 150%, 0);
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
