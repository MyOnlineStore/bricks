import React, { Component, KeyboardEvent } from 'react';

type PropsType = {
    children(state:StateType):JSX.Element;
};

type StateType = {
    clicked:boolean;
    clicking:boolean;
    focussing:boolean;
    hovering:boolean;
    keypress:KeyboardEvent<HTMLSpanElement>['key'];
};

class DomBehavior extends Component<PropsType, StateType> {
    public constructor(props:PropsType) {
        super(props);

        this.state = {
            hovering: false,
            clicking: false,
            clicked: false,
            focussing: false,
            keypress: '',
        };
    }

    public handleMouseDown = ():void => {
        this.setState({
            clicking: true,
            clicked: true,
        });
    }

    public handleMouseUp = ():void => {
        this.setState({ clicking: false });
    }

    public handleMouseLeave = ():void => {
        this.setState({
            hovering: false,
            clicking: false
        });
    }

    public handleMouseEnter = ():void => {
        this.setState({
            hovering: true,
            clicked: false,
        });
    }

    public handleFocus = ():void => {
        this.setState({ focussing: true });
    }

    public handleBlur = ():void => {
        this.setState({ focussing: false });
    }

    public handleKeyDown = (event:KeyboardEvent<HTMLSpanElement>):void => {
        this.setState({ keypress: event.key });
    }

    public handleKeyUp = (event:KeyboardEvent<HTMLSpanElement>):void => {
        this.setState({ keypress: '' });
    }

    public render():JSX.Element {
        return (
            <div
                onMouseDownCapture={this.handleMouseDown}
                onMouseUpCapture={this.handleMouseUp}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                onKeyUpCapture={this.handleKeyUp}
                onKeyDownCapture={this.handleKeyDown}
                onFocusCapture={this.handleFocus}
                onBlurCapture={this.handleBlur}
            >
                {this.props.children(this.state)}
            </div>
        );
    }
}

export default DomBehavior;
