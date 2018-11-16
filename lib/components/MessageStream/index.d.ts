import { FunctionComponent } from 'react';
import { StyledType } from '../../utility/_styled';
export declare type MessagePropsType = StyledType & {
    severity: 'success' | 'info' | 'warning' | 'error';
    title: string;
    message: string;
    buttonLabel?: string;
    date?: string;
    read?: boolean;
    action?(): void;
};
declare type PropsType = StyledType & {
    messages: Array<MessagePropsType>;
};
declare const Message: FunctionComponent<MessagePropsType>;
declare const MessageStream: FunctionComponent<PropsType>;
export default MessageStream;
export { PropsType, Message };
