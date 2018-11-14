import { SFC } from 'react';
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
declare const Message: SFC<MessagePropsType>;
declare const MessageStream: SFC<PropsType>;
export default MessageStream;
export { PropsType, Message };
