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

        this.state = { value: '' };
    }

    public render(): JSX.Element {
        return (
            <Textarea
                name="description"
                rows={number('rows', 3)}
                value={this.state.value}
                disabled={boolean('disabled', false)}
                resizeable={boolean('resizeable', false)}
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

storiesOf('Textarea', module).add('Default', () => <Demo withFeedback={false} />);
storiesOf('Textarea', module).add('With Feedback', () => <Demo withFeedback />);
