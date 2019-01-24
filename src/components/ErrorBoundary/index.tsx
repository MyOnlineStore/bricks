import React, { Component, ErrorInfo } from 'react';
import Notification from '../Notification';

type PropsType = {
    error?: boolean;
    message: string;
    reportError(error: Error, errorInfo: ErrorInfo): void;
};

type StateType = {
    hasError: boolean;
};

class ErrorBoundary extends Component<PropsType, StateType> {
    public constructor(props: PropsType) {
        super(props);

        this.state = {
            hasError: this.props.error !== undefined ? this.props.error : false,
        };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        this.setState({
            hasError: true,
        });

        this.props.reportError(error, errorInfo);
    }

    public render(): JSX.Element {
        return this.state.hasError || (this.props.error !== undefined && this.props.error) ? (
            <Notification severity="error" message={this.props.message} />
        ) : (
            <div>{this.props.children}</div>
        );
    }
}

export default ErrorBoundary;
export { PropsType, StateType };
