import React, { ComponentClass } from 'react';
import { PropsType as TextFieldPropsType } from '../../';
declare type OmittedKeys = 'onChange' | 'value' | 'type';
declare type PropsType = Pick<TextFieldPropsType, Exclude<keyof TextFieldPropsType, OmittedKeys>> & {
    value: number;
    disableNegative?: boolean;
    onChange(value: number): void;
};
declare type WithNumberFormattingType = ComponentClass<PropsType>;
declare const withNumberFormatting: (Wrapped: React.ComponentType<TextFieldPropsType>) => React.ComponentClass<PropsType>;
export default withNumberFormatting;
export { WithNumberFormattingType };
