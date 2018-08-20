import { button, select, text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';
import TextField from '.';
import SeverityType from '../../types/SeverityType';

type DemoPropsType = {
    withFeedback: boolean;
};

class Demo extends Component<DemoPropsType, { value: string }> {
    public ref: HTMLInputElement;

    public constructor(props: DemoPropsType) {
        super(props);

        this.state = {
            value: '',
        };
    }

    public componentDidMount(): void {
        button('trigger focus', () => {
            this.ref.focus();
        });
    }

    public render(): JSX.Element {
        return (
            <TextField
                prefix={text('Prefix', 'Username')}
                suffix={text('Suffix', '$')}
                value={this.state.value}
                name="firstname"
                onChange={(value: string): void => this.setState({ value })}
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
