import { button, select, text, boolean } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';
import TextField from '.';
import SeverityType from '../../types/SeverityType';

type DemoPropsType = {
    withFeedback: boolean;
    hoc?: string;
    currency?: string;
    locale?: string;
};
type DemoStateType = {
    numVal: number;
    strVal: string;
};

class Demo extends Component<DemoPropsType, DemoStateType> {
    public ref: HTMLInputElement;

    public constructor(props: DemoPropsType) {
        super(props);

        this.state = { numVal: 10.0, strVal: '' };
    }

    public componentDidMount(): void {
        button('trigger focus', () => {
            this.ref.focus();
        });
    }

    public render(): JSX.Element {
        if (this.props.hoc === 'withCurrency') {
            return (
                <TextField.Currency
                    name="first name"
                    disabled={boolean('disabled', false)}
                    currency={this.props.currency ? this.props.currency : 'USD'}
                    feedback={{
                        severity: 'info',
                        message: `The reported value of this field is: ${this.state.numVal}`,
                    }}
                    locale={this.props.locale ? this.props.locale : 'en-US'}
                    value={this.state.numVal}
                    onChange={(value: number): void => this.setState({ numVal: value })}
                />
            );
        } else if (this.props.hoc === 'withNumber') {
            return (
                <TextField.Number
                    name="min value"
                    disableNegative={boolean('disable negative numbers', false)}
                    value={this.state.numVal}
                    onChange={(value: number): void => this.setState({ numVal: value })}
                />
            );
        }

        return (
            <TextField
                prefix={text('Prefix', 'Username')}
                suffix={text('Suffix', '$')}
                value={this.state.strVal}
                disabled={boolean('disabled', false)}
                name="firstname"
                onChange={(value: string): void => this.setState({ strVal: value })}
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
storiesOf('TextField', module).add('With Number formatting', () => <Demo withFeedback={false} hoc="withNumber" />);
storiesOf('TextField', module).add('With Currency formatting', () => (
    <Demo
        hoc="withCurrency"
        withFeedback={false}
        currency={select('currency', ['USD', 'EUR', 'JPY', 'GBP', 'AUD'], 'USD')}
        locale={select('locale', ['en-US', 'nl-NL', 'de-DE', 'jp-JP'], 'en-US')}
    />
));
