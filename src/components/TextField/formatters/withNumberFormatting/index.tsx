import React, { Component, ComponentClass, ComponentType } from 'react';
import { PropsType as TextFieldPropsType } from '../../';

type OmittedKeys = 'onChange' | 'value' | 'type';

type PropsType = Pick<TextFieldPropsType, Exclude<keyof TextFieldPropsType, OmittedKeys>> & {
    value: number;
    disableNegative?: boolean;
    allowFloats?: boolean;
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
    locale?: string;
    onChange(value: number): void;
};

type StateType = {
    value: string;
    savedValue: number;
    decimalSeperator: string;
};

type WithNumberFormattingType = ComponentClass<PropsType>;

const withNumberFormatting = (Wrapped: ComponentType<TextFieldPropsType>): ComponentClass<PropsType> => {
    class WithNumberFormatting extends Component<PropsType, StateType> {
        private formatter: Intl.NumberFormat;
        public constructor(props: PropsType) {
            super(props);
            this.setFormatter();

            this.state = {
                value: this.formatter.format(props.value),
                savedValue: this.props.value,
                decimalSeperator: this.getSeperator(),
            };
        }

        private setFormatter(): void {
            const locale = this.props.locale ? this.props.locale.replace('_', '-') : 'nl-NL';
            const defaultMaximumFractionDigits = this.props.allowFloats ? 2 : 0;

            const minimumFractionDigits =
                this.props.minimumFractionDigits && this.props.allowFloats && this.props.minimumFractionDigits > 0
                    ? this.props.minimumFractionDigits
                    : 0;

            let maximumFractionDigits =
                this.props.maximumFractionDigits && this.props.allowFloats && this.props.maximumFractionDigits >= 0
                    ? this.props.maximumFractionDigits
                    : defaultMaximumFractionDigits;

            if (minimumFractionDigits > maximumFractionDigits) maximumFractionDigits = minimumFractionDigits;

            this.formatter = new Intl.NumberFormat(locale, {
                style: 'decimal',
                minimumFractionDigits,
                maximumFractionDigits,
                useGrouping: false,
            });
        }

        private getSeperator(): string {
            const seperator = this.formatter.formatToParts(1.1).find(part => {
                return part.type === 'decimal';
            });

            return seperator ? seperator.value : '.';
        }

        private parse(value: string): number {
            if (this.props.allowFloats) {
                const stripped = value.replace(new RegExp(`[^\-0-9${this.state.decimalSeperator}]`, 'g'), '');

                return parseFloat(stripped.replace(this.state.decimalSeperator, '.'));
            }

            return parseFloat(value);
        }

        private handleChange = (value: string): void => {
            const parsedValue = this.parse(value);

            if (isNaN(parsedValue)) {
                this.setState({ value: '' });
                this.props.onChange(this.state.savedValue);
            } else if (parsedValue < 0 && this.props.disableNegative) {
                this.setState({ savedValue: 0, value: '0' });
                this.props.onChange(0);
            } else {
                this.setState({ savedValue: parsedValue, value });
                this.props.onChange(parsedValue);
            }
        };

        private handleBlur = (): void => {
            this.setState({ value: this.formatter.format(this.state.savedValue) });

            if (this.props.onBlur !== undefined) {
                this.props.onBlur();
            }
        };

        public componentDidUpdate(prevProps: PropsType) {
            if (
                this.props.allowFloats !== prevProps.allowFloats ||
                this.props.locale !== prevProps.locale ||
                this.props.minimumFractionDigits !== prevProps.minimumFractionDigits ||
                this.props.maximumFractionDigits !== prevProps.maximumFractionDigits
            ) {
                this.setFormatter();

                this.setState({
                    value: this.formatter.format(this.state.savedValue),
                    decimalSeperator: this.getSeperator(),
                });
            }

            if (this.props.value !== prevProps.value && this.props.value !== this.state.savedValue) {
                this.setState({ value: this.formatter.format(this.props.value), savedValue: this.props.value });
            }
        }

        public render(): JSX.Element {
            const wrappedProps = {
                ...this.props,
                type: this.props.allowFloats ? 'text' : 'number',
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
