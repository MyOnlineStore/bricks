import React, { Component } from 'react';
import { StyledType } from '../../utility/styled';
import StyledPriceTag from './style';

type PropsType = StyledType & {
    hideCurrency?: boolean;
    superScriptFraction?: boolean;
    value: string;
    freeLabel?: string;
    strikethrough?: boolean;
    fractionFormat?: 'none' | 'dash';
    locale: string;
    currency: string;
};

type StateType = {
    price: string;
    fraction: string;
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

class PriceTag extends Component<PropsType, StateType> {
    private formatter: NumberFormatter;

    public constructor(props: PropsType) {
        super(props);
        this.setFormatter(props.locale, props.currency);
        this.state = {
            price: '',
            fraction: '',
            currency: '',
            currencyAlignment: 'left',
            decimalSeperator: '.',
        };
    }

    private setFormatter(locale: string, currency: string): void {
        this.formatter = new Intl.NumberFormat(locale, { style: 'currency', currency }) as NumberFormatter;
    }

    private parse(value: string): number {
        const stripped = value.replace(new RegExp(`[^0-9${this.state.decimalSeperator}]`, 'g'), '');
        const parsed = parseFloat(stripped.replace(this.state.decimalSeperator, '.'));

        return !isNaN(parsed) ? parseFloat(parsed.toFixed(2)) : 0;
    }

    private format(value: string): string {
        this.setState({ fraction: '' });

        return this.formatter
            .formatToParts(this.parse(value))
            .filter((part, index, parts) => {
                const { value } = part;
                switch (part.type) {
                    case 'currency': {
                        const currencyAlignment = index === parts.length - 1 ? 'right' : 'left';
                        if (this.state.currencyAlignment !== currencyAlignment || this.state.currency !== part.value)
                            this.setState({ currency: value, currencyAlignment });

                        return false;
                    }
                    case 'decimal': {
                        if (this.props.fractionFormat === 'none') return false;

                        this.setState({ decimalSeperator: value });

                        return true;
                    }
                    case 'literal':
                        return false;

                    case 'fraction':
                        this.setState({ fraction: value });

                        return false;
                    default:
                        return true;
                }
            })
            .reduce((combined: string, { value }: PartType): string => `${combined}${value}`, '');
    }

    private renderFreeLabel(): string {
        const isFree = Math.ceil(parseInt(this.state.price, 0) + parseInt(this.state.fraction, 0)) === 0;

        return isFree && this.props.freeLabel !== undefined ? this.props.freeLabel : '';
    }

    private renderPrice(): JSX.Element | string {
        const isRound = new RegExp('^[0]*$').test(this.state.fraction);

        const fraction = (): JSX.Element => {
            if (isRound && this.props.fractionFormat === 'none') return <span />;
            if (isRound && this.props.fractionFormat === 'dash') return <span>-</span>;
            if (this.props.superScriptFraction) return <sup>{this.state.fraction}</sup>;

            return <span>{this.state.fraction}</span>;
        };

        const priceElement = (): JSX.Element => {
            if (!this.props.hideCurrency) {
                return (
                    <>
                        {this.state.currencyAlignment === 'left'
                            ? `${this.state.currency} ${this.state.price}${fraction()}`
                            : `${this.state.price}${fraction()} ${this.state.currency}`}
                    </>
                );
            }

            return (
                <>
                    {this.state.price}
                    {fraction()}
                </>
            );
        };

        return priceElement();
    }

    public componentDidMount(): void {
        this.setState({ price: this.format(this.props.value) });
    }

    public componentDidUpdate(prevProps: PropsType): void {
        if (prevProps !== this.props) {
            this.setFormatter(this.props.locale, this.props.currency);
            this.setState({ price: this.format(this.props.value) });
        }
    }

    public render(): JSX.Element {
        return (
            <StyledPriceTag strikethrough={this.props.strikethrough}>
                {this.renderFreeLabel() || this.renderPrice()}
            </StyledPriceTag>
        );
    }
}

export default PriceTag;
export { PropsType, PartType };
