import React, { Component, ComponentClass, ComponentType, ChangeEvent } from 'react';
import { PropsType as TextFieldPropsType } from '../../';

type OmittedKeys = 'onChange' | 'value';

type PropsType = Pick<TextFieldPropsType, Exclude<keyof TextFieldPropsType, OmittedKeys>> & {
    value: number;
    allowNegative?: boolean;
    onChange(value: number): void;
};

type WithNumberFormattingType = ComponentClass<PropsType>;

const withNumberFormatting = (Wrapped: ComponentType<TextFieldPropsType>): ComponentClass<PropsType> => {
    class WithNumberFormatting extends Component<PropsType> {
        private handleChange = (value: string, event: ChangeEvent<HTMLInputElement>): void => {
            const parsedValue = parseInt(value, 10);

            if (parsedValue < 0 && !this.props.allowNegative) {
                this.props.onChange(0);
            } else {
                this.props.onChange(parsedValue);
            }
        };

        public render(): JSX.Element {
            const wrappedProps = {
                ...this.props,
                type: this.props.type,
                value: `${this.props.value}`,
                onChange: this.handleChange,
            };

            return <Wrapped {...wrappedProps} />;
        }
    }

    return WithNumberFormatting;
};

export default withNumberFormatting;
export { WithNumberFormattingType };
