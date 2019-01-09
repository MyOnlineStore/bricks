import { button, select, text, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';
import TextField from '.';
import SeverityType from '../../types/_SeverityType';

type DemoPropsType = {
    withFeedback: boolean;
    formatter?: string;
    currency?: string;
    locale?: string;
};
type DemoStateType = {
    numberValue: number;
    stringValue: string;
};

class Demo extends Component<DemoPropsType, DemoStateType> {
    public ref: HTMLInputElement;

    public constructor(props: DemoPropsType) {
        super(props);

        this.state = { numberValue: 10.0, stringValue: '' };
    }

    public render(): JSX.Element {
        if (this.props.formatter === 'withCurrency') {
            return (
                <TextField.Currency
                    name="first name"
                    disabled={boolean('disabled', false)}
                    disableNegative={boolean('disableNegative', false)}
                    currency={this.props.currency ? this.props.currency : 'USD'}
                    feedback={{
                        severity: 'info',
                        message: `The reported value of this field is: ${this.state.numberValue}`,
                    }}
                    locale={this.props.locale ? this.props.locale : 'en-US'}
                    value={this.state.numberValue}
                    onChange={(value: number): void => this.setState({ numberValue: value })}
                    minor={boolean('minor', false)}
                />
            );
        } else if (this.props.formatter === 'withNumber') {
            return (
                <TextField.Number
                    name="min value"
                    disableNegative={boolean('disable negative numbers', false)}
                    disabled={boolean('disabled', false)}
                    value={this.state.numberValue}
                    onChange={(value: number): void => this.setState({ numberValue: value })}
                />
            );
        }

        return (
            <TextField
                prefix={text('Prefix', 'Username')}
                suffix={text('Suffix', '$')}
                value={this.state.stringValue}
                disabled={boolean('disabled', false)}
                name="firstname"
                onChange={(value: string): void => this.setState({ stringValue: value })}
                extractRef={(ref: HTMLInputElement): void => {
                    this.ref = ref;
                }}
                feedback={
                    this.props.withFeedback
                        ? {
                              message: text('feedback message', 'This is a feedback message'),
                              severity: select(
                                  'feedback type',
                                  ['success', 'warning', 'error', 'info'],
                                  'error',
                              ) as SeverityType,
                          }
                        : undefined
                }
            />
        );
    }
}

storiesOf('TextField', module).add('Default', () => <Demo withFeedback={false} />);
storiesOf('TextField', module).add('With Feedback', () => <Demo withFeedback />);
storiesOf('TextField', module).add('With Number formatting', () => (
    <Demo withFeedback={false} formatter="withNumber" />
));
storiesOf('TextField', module).add('With Currency formatting', () => (
    <Demo
        formatter="withCurrency"
        withFeedback={false}
        currency={select('currency', ['USD', 'EUR', 'JPY', 'GBP', 'AUD'], 'USD')}
        locale={select('locale', ['en-US', 'nl-NL', 'de-DE', 'jp-JP'], 'en-US')}
    />
));
