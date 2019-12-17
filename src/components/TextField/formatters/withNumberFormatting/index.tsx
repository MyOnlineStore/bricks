import React, { Component, ComponentClass, ComponentType } from 'react';
import { PropsType as TextFieldPropsType } from '../../';

type OmittedKeys = 'onChange' | 'value' | 'type';

type PropsType = Pick<TextFieldPropsType, Exclude<keyof TextFieldPropsType, OmittedKeys>> & {
    value: number;
    disableNegative?: boolean;
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
            this.setFormatter(
                props.locale ? props.locale : 'en_GB',
                props.minimumFractionDigits ? props.minimumFractionDigits : 0,
                props.maximumFractionDigits ? props.maximumFractionDigits : 2,
            );

            this.state = {
                value: `${this.props.value}`,
                savedValue: this.props.value,
                decimalSeperator: '.',
            };
        }

        private setFormatter(locale: string, minimumFractionDigits: number, maximumFractionDigits: number): void {
            this.formatter = new Intl.NumberFormat(locale.replace('_', '-'), {
                style: 'decimal',
                minimumFractionDigits,
                maximumFractionDigits,
                useGrouping: false,
            });
        }

        private parse(direction: 'in', value: string): string;
        private parse(direction: 'out', value: string): number;
        private parse(direction: 'in' | 'out', value: string): string | number {
            const negatedValues = this.props.disableNegative
                ? `[^0-9${this.state.decimalSeperator}]`
                : `[^\-0-9${this.state.decimalSeperator}]`;

            const stripped = value.replace(new RegExp(negatedValues, 'g'), '');

            if (direction === 'out') {
                const parsed = parseFloat(stripped.replace(this.state.decimalSeperator, '.'));

                return !isNaN(parsed) ? parseFloat(parsed.toFixed(2)) : this.props.value;
            }

            return stripped;
        }

        private format(value: string): string {
            try {
                return this.formatter
                    .formatToParts(this.parse('out', value))
                    .filter(part => {
                        switch (part.type) {
                            case 'decimal': {
                                this.setState({ decimalSeperator: part.value });

                                return true;
                            }
                            case 'literal':
                                return false;
                            default:
                                return true;
                        }
                    })
                    .reduce((combined: string, { value }: Intl.PartType): string => `${combined}${value}`, '');
            } catch (error) {
                return value;
            }
        }

        // public static getDerivedStateFromProps(nextProps: PropsType, prevState: StateType): StateType {
        //     if (nextProps.value === prevState.savedValue) {
        //         return { ...prevState, value: prevState.value === '' ? '' : prevState.savedValue.toString() };
        //     }

        //     return {
        //         ...prevState,
        //         value: `${nextProps.value}`,
        //     };
        // }

        private handleChange = (value: string): void => {
            const parsedValue = this.parse('out', value);
            console.debug('STRING', value);
            console.debug('PARSED', parsedValue);

            if (isNaN(parsedValue)) {
                this.setState({ value: '' });
                this.props.onChange(this.state.savedValue);
            } else if (parsedValue < 0 && this.props.disableNegative) {
                this.setState({ savedValue: 0 });
                this.props.onChange(0);
            } else {
                // if (parsedValue !== this.state.savedValue || this.state.value.length === 0) {
                //     this.setState({ value: '0', savedValue: parsedValue });
                // } else {
                this.setState({ savedValue: parsedValue });
                // }

                this.props.onChange(parsedValue);
            }
        };

        private handleBlur = (): void => {
            // if (this.state.value.length === 0) {
            //     this.setState({ value: '0' });
            // } else {
            this.setState({ value: this.format(this.state.value) });
            // }

            if (this.props.onBlur !== undefined) {
                this.props.onBlur();
            }
        };

        public render(): JSX.Element {
            const wrappedProps = {
                ...this.props,
                type:
                    this.props.minimumFractionDigits ||
                    (this.props.maximumFractionDigits && this.props.maximumFractionDigits > 0)
                        ? 'text'
                        : 'number',
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
