import React, { ChangeEvent, Component } from 'react';
import SeverityType from '../../types/_SeverityType';
import { WithCurrencyFormattingType } from './formatters/withCurrencyFormatting';
import { WithNumberFormattingType } from './formatters/withNumberFormatting';
declare type PropsType = {
    value: string;
    name: string;
    type?: string;
    id?: string;
    feedback?: {
        severity: SeverityType;
        message: string;
    };
    prefix?: string;
    suffix?: string;
    disabled?: boolean;
    extractRef?(ref: HTMLInputElement): void;
    onChange(value: string, event: ChangeEvent<HTMLInputElement>): void;
    onBlur?(): void;
    onFocus?(): void;
};
declare type StateType = {
    focus: boolean;
};
declare class TextField extends Component<PropsType, StateType> {
    static Currency: WithCurrencyFormattingType;
    static Number: WithNumberFormattingType;
    private inputRef;
    constructor(props: PropsType);
    handleFocus: () => void;
    handleBlur: () => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
export default TextField;
export { PropsType, StateType };
