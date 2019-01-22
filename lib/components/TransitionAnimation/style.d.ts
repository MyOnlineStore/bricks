declare type AnimationStateType = 'entering' | 'entered' | 'exiting' | 'exited';
declare type StyledPropsType = {
    animation: 'zoom' | 'fade' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight';
    state: AnimationStateType;
};
declare const StyledAnimation: import("styled-components").StyledComponent<"div", import("../../types/ThemeType").default, StyledPropsType, never>;
export default StyledAnimation;
export { AnimationStateType, StyledPropsType };
