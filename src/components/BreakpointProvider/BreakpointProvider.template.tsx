import React, { Component } from 'react';

type PropsType = {
    breakpoints:BreakpointType;
    children(breakpoint:keyof BreakpointType):JSX.Element;
};

type StateType = {
    offsetWidth:number;
};

type BreakpointType = {
    large:number;
    small:number;
    medium:number;
};

class BreakpointProvider extends Component<PropsType, StateType> {
    private element:HTMLDivElement;

    public constructor(props:PropsType) {
        super(props);
        this.state = { offsetWidth: 0 };
    }

    private readonly getBreakpoint = (breakpoints:BreakpointType, offsetWidth:number):keyof BreakpointType => Object.keys(this.props.breakpoints)
        .reduce<keyof BreakpointType>(
            (smallestKey, key:keyof BreakpointType):keyof BreakpointType => {
                if (
                    breakpoints[key] > breakpoints[smallestKey] &&
                    offsetWidth >= breakpoints[key]
                ) {
                    return key;
                }

                return smallestKey;
            },
            'small',
        )

    private readonly setBreakpoint = ():void => {
            this.setState({ offsetWidth: this.element.offsetWidth });
    }

    public componentDidMount():void {
        this.setBreakpoint();
        window.addEventListener('resize', this.setBreakpoint);
    }

    public componentWillUnmount():void {
        window.removeEventListener('resize', this.setBreakpoint);
    }

    public render():JSX.Element {
        return (
            <div ref={(element:HTMLDivElement):void => { this.element = element; }}>
                {this.props.children(this.getBreakpoint(this.props.breakpoints, this.state.offsetWidth))}
            </div>
        );
    }
}

export { PropsType, StateType, BreakpointType };
export default BreakpointProvider;
