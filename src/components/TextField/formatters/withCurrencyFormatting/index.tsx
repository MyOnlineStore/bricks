import React, { Component, ComponentClass, ComponentType } from 'react';
import { PropsType as TextFieldPropsType } from '../../';

type OmittedKeys = 'onChange' | 'value';

type PropsType = Pick<TextFieldPropsType, Exclude<keyof TextFieldPropsType, OmittedKeys>> & {
    value: number;
    locale: string;
    currency: string;
    onChange(value: number): void;
};

type StateType = {
    value: string;
    currency: string;
    currencyAlignment: 'left' | 'right';
    decimalSeperator: string;
};

type PartType = {
    type: string;
    value: string;
};

type NumberFormatter = Intl.NumberFormat & {
    formatToParts(value: number): Array<PartType>;
};

type WithCurrencyFormattingType = ComponentClass<PropsType>;

const withCurrencyFormatting = (Wrapped: ComponentType<TextFieldPropsType>): ComponentClass<PropsType> => {
    class WithCurrencyFormatting extends Component<PropsType, StateType> {
        private formatter: NumberFormatter;

        public constructor(props: PropsType) {
            super(props);
            this.setFormatter(props.locale, props.currency);

            this.state = {
                value: `${props.value}`,
                currency: '',
                currencyAlignment: 'left',
                decimalSeperator: '.',
            };
        }

        private setFormatter(locale: string, currency: string): void {
            this.formatter = new Intl.NumberFormat(locale, {
                style: 'currency',
                currency,
            }) as NumberFormatter;
        }

        private parse(direction: 'in', value: string): string;
        private parse(direction: 'out', value: string): number;
        private parse(direction: 'in' | 'out', value: string): string | number {
            const stripped = value.replace(new RegExp(`[^0-9${this.state.decimalSeperator}]`), '');

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
                    .filter((part, index, parts) => {
                        switch (part.type) {
                            case 'currency': {
                                const currencyAlignment = index === parts.length - 1 ? 'right' : 'left';

                                if (
                                    this.state.currency !== part.value ||
                                    this.state.currencyAlignment !== currencyAlignment
                                ) {
                                    this.setState({
                                        currency: part.value,
                                        currencyAlignment,
                                    });
                                }

                                return false;
                            }
                            case 'decimal': {
                                this.setState({
                                    decimalSeperator: part.value,
                                });

                                return true;
                            }
                            case 'literal':
                                return false;
                            default:
                                return true;
                        }
                    })
                    .reduce((combined: string, { value }: PartType): string => `${combined}${value}`, '');
            } catch (error) {
                return value;
            }
        }

        private handleChange = (value: string): void => {
            this.setState({ value: this.parse('in', value) });
            this.props.onChange(this.parse('out', value));
        };

        private handleBlur = (): void => {
            this.setState({ value: this.format(this.state.value) });
        };

        public componentDidUpdate(prevProps: PropsType): void {
            if (prevProps.currency !== this.props.currency || prevProps.locale !== this.props.locale) {
                this.setFormatter(this.props.locale, this.props.currency);
                this.setState({ value: this.format(this.state.value) });
            }
        }

        public componentDidMount(): void {
            this.setState({ value: this.format(this.state.value) });
        }

        public render(): JSX.Element {
            const wrappedProps = {
                ...this.props,
                type: 'text',
                value: this.state.value,
                prefix: this.state.currencyAlignment === 'left' ? this.state.currency : undefined,
                suffix: this.state.currencyAlignment === 'right' ? this.state.currency : undefined,
                onChange: this.handleChange,
                onBlur: this.handleBlur,
            };

            return <Wrapped {...wrappedProps} />;
        }
    }

    return WithCurrencyFormatting;
};

export default withCurrencyFormatting;
export { WithCurrencyFormattingType };
