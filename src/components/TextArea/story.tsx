import React, { Component } from 'react';
import SeverityType from '../../types/SeverityType';
import { select, text, boolean, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import TextArea from '.';

type DemoPropsType = {
    withFeedback?: boolean;
    withCharacterLimit?: boolean;
};

class Demo extends Component<DemoPropsType, { value: string }> {
    public ref: HTMLInputElement;

    public constructor(props: DemoPropsType) {
        super(props);

        this.state = { value: '' };
    }

    public render(): JSX.Element {
        return (
            <TextArea
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
                characterLimit={this.props.withCharacterLimit ? number('Character Limit', 140) : undefined}
            />
        );
    }
}

storiesOf('TextArea', module).add('Default', () => <Demo />);
storiesOf('TextArea', module).add('With Feedback', () => <Demo withFeedback />);
storiesOf('TextArea', module).add('With Character Limit', () => <Demo withCharacterLimit />);
