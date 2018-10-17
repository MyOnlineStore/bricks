import React, { Component } from 'react';
import SeverityType from '../../types/SeverityType';
import { select, text, boolean, number } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import Textarea from '.';

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

    public render(): JSX.Element {
        return (
            <Textarea
                disabled={boolean('disabled', false)}
                value={this.state.value}
                rows={number('rows', 3)}
                resizeable={boolean('resizeable', false)}
                name="description"
                onChange={(value: string): void => this.setState({ value })}
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

storiesOf('TextArea', module).add('Default', () => <Demo withFeedback={false} />);
storiesOf('TextArea', module).add('With Feedback', () => <Demo withFeedback />);
