import React, { Component, ComponentClass, ComponentType, ChangeEvent } from 'react';
import { PropsType as TextFieldPropsType } from '../../';

type OmittedKeys = 'onChange' | 'value' | 'type';

type PropsType = Pick<TextFieldPropsType, Exclude<keyof TextFieldPropsType, OmittedKeys>> & {
    value: number;
    disableNegative?: boolean;
    onChange(value: number): void;
};

type StateType = {
    value: string;
};

type WithNumberFormattingType = ComponentClass<PropsType>;

const withNumberFormatting = (Wrapped: ComponentType<TextFieldPropsType>): ComponentClass<PropsType> => {
    class WithNumberFormatting extends Component<PropsType, StateType> {
        public constructor(props: PropsType) {
            super(props);

            this.state = {
                value: `${this.props.value}`,
            };
        }

        public static getDerivedStateFromProps(nextProps: PropsType, prevState: StateType): StateType {
            return {
                value: `${nextProps.value}`,
            };
        }

        private handleChange = (value: string): void => {
            const parsedValue = parseInt(value, 10);

            if (isNaN(parsedValue)) {
                this.setState({ value: '' });
            } else if (parsedValue < 0 && this.props.disableNegative) {
                this.props.onChange(0);
            } else {
                this.props.onChange(parsedValue);
            }
        };

        private handleBlur = (): void => {
            if (this.state.value.length === 0) {
                this.setState({ value: '0' });
            }
            if (this.props.onBlur !== undefined) {
                this.props.onBlur();
            }
        };

        public render(): JSX.Element {
            const wrappedProps = {
                ...this.props,
                type: 'number' as 'number',
                value: this.state.value,
                onChange: this.handleChange,
                onBlur: this.handleBlur,
            };

            return <Wrapped {...wrappedProps} />;
        }
    }

    return WithNumberFormatting;
};

export default withNumberFormatting;
export { WithNumberFormattingType };
