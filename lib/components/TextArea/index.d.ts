import React, { Component, ChangeEvent } from 'react';
import StyledTextArea from './style';
import SeverityType from '../../types/_SeverityType';
declare type PropsType = {
    rows?: number;
    value: string;
    name: string;
    id?: string;
    resizeable?: boolean;
    disabled?: boolean;
    feedback?: {
        severity: SeverityType;
        message: string;
    };
    onChange(value: string, event: ChangeEvent<HTMLTextAreaElement>): void;
};
declare class TextArea extends Component<PropsType> {
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    render(): JSX.Element;
}
export default TextArea;
export { PropsType, StyledTextArea };
