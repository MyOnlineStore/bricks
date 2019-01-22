import { FunctionComponent } from 'react';
export declare type MessagePropsType = {
    severity: 'success' | 'info' | 'warning' | 'error';
    title: string;
    message: string;
    buttonLabel?: string;
    date?: string;
    read?: boolean;
    onClick?(): void;
};
declare type PropsType = {
    messages: Array<MessagePropsType>;
};
declare const Message: FunctionComponent<MessagePropsType>;
declare const MessageStream: FunctionComponent<PropsType>;
export default MessageStream;
export { PropsType, Message };
