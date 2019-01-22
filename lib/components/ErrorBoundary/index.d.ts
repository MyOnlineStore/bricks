import { Component, ErrorInfo } from 'react';
declare type PropsType = {
    hasError?: boolean;
    message: string;
    reportError(error: Error, errorInfo: ErrorInfo): void;
};
declare type StateType = {
    hasError: boolean;
};
declare class ErrorBoundary extends Component<PropsType, StateType> {
    constructor(props: PropsType);
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    render(): JSX.Element;
}
export default ErrorBoundary;
export { PropsType, StateType };
