import { AnimationStateType } from '../TransitionAnimation.style';

const fade = (state:AnimationStateType):string => {
    switch (state) {
        case 'exiting': return `
            @keyframes fadeOut {
                0% { opacity: 1; }
                100% { opacity: 0; }
            }

            animation: fadeOut .3s;
        `;
        default: return `
            @keyframes fadeIn {
                0% { opacity: 0; }
                100% { opacity: 1; }
            }

            animation: fadeIn .3s;
        `;
    }
};

export default fade;
