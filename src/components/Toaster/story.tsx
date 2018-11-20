import { boolean, select, text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';
import Toaster, { PropsType } from '.';

storiesOf('Toaster', module).add('Default', () => (
    <Toaster
        isOpen={boolean('show', true)}
        severity={select('severity', ['success', 'warning', 'error', 'info'], 'info') as PropsType['severity']}
        closeAction={(): boolean => confirm('Do you want to close the toaster? \nYou must choose, but choose wisely')}
        title={text('title', 'Thought provoking we must stand.')}
        message={text(
            'description',
            'Game-changer problem-solvers; state of play invest, synergy uplift we must stand up ideate social intrapreneurship.',
        )}
    />
));

storiesOf('Toaster', module).add('With action button', () => (
    <Toaster
        icon="cash"
        action={(): boolean => confirm('I love pressing F5, its so refreshing')}
        isOpen={boolean('show', true)}
        severity={select('severity', ['success', 'warning', 'error', 'info'], 'error') as PropsType['severity']}
        closeAction={(): boolean => confirm('Do you want to close the toaster? \nYou must choose, but choose wisely')}
        buttonTitle={text('Button title', 'Hello')}
        title={text('title', 'Overcome injustice.')}
        message={text(
            'description',
            'Global low-hanging fruit, collaborative consumption segmentation mobilize support. Problem-solvers cultivate, best practices, shared unit of.',
        )}
    />
));

class Demo extends Component<{}, { isOpen: boolean }> {
    public constructor(props: PropsType) {
        super(props);

        this.state = { isOpen: true };
    }

    private closeHandler = (): void => this.setState({ isOpen: false });

    public render(): JSX.Element {
        return (
            <Toaster
                autoDismiss
                severity="success"
                isOpen={this.state.isOpen}
                closeAction={(): void => this.closeHandler()}
                title="Thought provoking we must stand."
                message="You can read this now, but soon you won't."
            />
        );
    }
}

storiesOf('Toaster', module).add('With auto dismiss', () => <Demo />);
