import { Component } from 'react';
declare type PropsType = {
    breakpoints: BreakpointType;
    children(breakpoint: keyof BreakpointType): JSX.Element;
};
declare type StateType = {
    offsetWidth: number;
};
declare type BreakpointType = {
    large: number;
    small: number;
    medium: number;
};
declare class BreakpointProvider extends Component<PropsType, StateType> {
    private element;
    constructor(props: PropsType);
    private readonly getBreakpoint;
    private readonly setBreakpoint;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export { PropsType, StateType, BreakpointType };
export default BreakpointProvider;
