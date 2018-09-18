import TextField from '../../';
import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { boolean } from '@storybook/addon-knobs/react';

type PropsType = { locale: string; currency: string };
type StateType = { value: number };

class Demo extends Component<PropsType, StateType> {
    public ref: HTMLInputElement;

    public constructor(props: PropsType) {
        super(props);

        this.state = {
            value: 10.0,
        };
    }

    public render(): JSX.Element {
        return (
            <TextField.Currency
                name="first name"
                disabled={boolean('disabled', false)}
                currency={this.props.currency}
                feedback={{ severity: 'info', message: `The reported value of this field is: ${this.state.value}` }}
                locale={this.props.locale}
                value={this.state.value}
                onChange={(value: number): void => this.setState({ value })}
            />
        );
    }
}

storiesOf('TextField', module).add('With Currency formatting', () => (
    <Demo
        currency={select('currency', ['USD', 'EUR', 'JPY', 'GBP', 'AUD'], 'USD')}
        locale={select('locale', ['en-US', 'nl-NL', 'de-DE', 'jp-JP'], 'en-US')}
    />
));
