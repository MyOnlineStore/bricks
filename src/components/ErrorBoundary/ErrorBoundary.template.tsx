import React, { Component, ErrorInfo } from 'react';
import Notification from '../Notification';

type PropsType = {
    hasError?:boolean;
    message:string;
    reportError(error:Error, errorInfo:ErrorInfo):void;
};

type StateType = {
    hasError:boolean;
};

class ErrorBoundary extends Component<PropsType, StateType> {
    public constructor(props:PropsType) {
        super(props);

        this.state = {
            hasError: this.props.hasError !== undefined
                ? this.props.hasError
                : false,
        };
    }

    public componentDidCatch(error:Error, errorInfo:ErrorInfo):void {
        this.setState({
            hasError: true,
        });

        this.props.reportError(error, errorInfo);
    }

    public render():JSX.Element {
        return this.state.hasError || (this.props.hasError !== undefined && this.props.hasError)
            ? <Notification severity="error" message={this.props.message} />
            : <div>{this.props.children}</div>;
    }
}

export default ErrorBoundary;
export {
    PropsType,
    StateType
};
