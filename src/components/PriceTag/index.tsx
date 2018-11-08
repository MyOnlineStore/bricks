import React, { Component } from 'react';
import { StyledType } from '../../utility/styled';
import StyledPriceTag from './style';
import formatFraction from './formatters/formatFraction';
import formatCurrency from './formatters/formatCurrency';

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

type PartTypeType =
    | 'currency'
    | 'decimal'
    | 'fraction'
    | 'group'
    | 'infinity'
    | 'integer'
    | 'literal'
    | 'minusSign'
    | 'nan'
    | 'plusSign'
    | 'percentSign';

type StateType = {
    price: string;
    fraction: string;
    currency: string;
    currencyAlignment: 'left' | 'right';
    decimalSeperator: string;
};

type PartType = {
    type: PartTypeType;
    value: string;
};

type NumberFormatter = Intl.NumberFormat & {
    formatToParts(value: number): Array<PartType>;
};

type StatsType = {
    isRound: boolean;
    isFree: boolean;
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

    private isRound = (part: PartType): boolean => part.type === 'fraction' && parseInt(part.value, 10) === 0;

    private isFree = (part: PartType): boolean => {
        return (part.type === 'integer' || part.type === 'fraction') && parseInt(part.value, 10) !== 0;
    };

    private setFormatter(locale: string, currency: string): void {
        this.formatter = new Intl.NumberFormat(locale, { style: 'currency', currency }) as NumberFormatter;
    }

    private parse(value: string): number {
        const stripped = value.replace(new RegExp(`[^0-9${this.state.decimalSeperator}]`, 'g'), '');
        const parsed = parseFloat(stripped.replace(this.state.decimalSeperator, '.'));

        return !isNaN(parsed) ? parseFloat(parsed.toFixed(2)) : 0;
    }

    private deriveStatsFromPart = (initialStats: StatsType, part: PartType): StatsType => ({
        isRound: this.isRound(part) ? true : initialStats.isRound,
        isFree: this.isFree(part) ? false : initialStats.isFree,
    });

    private format(value: string): string {
        this.setState({ fraction: '' });

        return this.formatter
            .formatToParts(this.parse(value))
            .filter((part, index, parts) => {
                const { value } = part;
                const stats = parts.reduce(this.deriveStatsFromPart, { isRound: false });

                switch (part.type) {
                    case 'currency': {
                        const currencyAlignment = index === parts.length - 1 ? 'right' : 'left';
                        if (this.state.currencyAlignment !== currencyAlignment || this.state.currency !== part.value) {
                            this.setState({ currency: value, currencyAlignment });
                        }

                        return false;
                    }
                    case 'decimal': {
                        if (this.props.fractionFormat === 'none' && stats.isRound) return false;

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

    private renderFreeLabel = (isFree: boolean, label?: string): string => (isFree && label !== undefined ? label : '');

    private renderPrice(isRound: boolean): JSX.Element | string {
        const fraction = formatFraction(this.state.fraction, this.props, isRound);

        const price = (
            <>
                {this.state.price}
                {fraction}
            </>
        );

        const priceElement = formatCurrency(
            this.props.hideCurrency !== undefined ? this.props.hideCurrency : false,
            this.state.currencyAlignment,
            this.state.currency,
            price,
        );

        return priceElement;
    }

    public componentDidUpdate(prevProps: PropsType): void {
        if (prevProps !== this.props) {
            this.setFormatter(this.props.locale, this.props.currency);
            this.setState({ price: this.format(this.props.value) });
        }
    }

    public render(): JSX.Element {
        const formatter = new Intl.NumberFormat(this.props.locale, {
            style: 'currency',
            currency: this.props.currency,
        }) as NumberFormatter;

        const parts = formatter.formatToParts(this.parse(this.props.value));

        const stats = parts.reduce(this.deriveStatsFromPart, {
            isRound: false,
            isFree: true,
        });

        return (
            <StyledPriceTag strikethrough={this.props.strikethrough}>
                {this.renderFreeLabel(stats.isFree, this.props.freeLabel) || this.renderPrice(stats.isRound)}
            </StyledPriceTag>
        );
    }
}

export default PriceTag;
export { PropsType, PartType, StateType };
