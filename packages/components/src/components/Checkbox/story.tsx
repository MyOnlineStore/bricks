import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';
import Checkbox from '.';

type StateType = { checked: boolean };
type PropsType = {};

class Demo extends Component<PropsType, StateType> {
    public constructor(props: PropsType) {
        super(props);

        this.state = {
            checked: false,
        };
    }

    public render(): JSX.Element {
        return (
            <Checkbox
                onChange={({ checked }): void => this.setState({ checked: checked as boolean })}
                value="bar"
                checked={this.state.checked}
                disabled={boolean('disabled', false)}
                error={boolean('error', false)}
                name="foo"
                label={text('label', 'Label')}
            />
        );
    }
}

storiesOf('Checkbox', module).add('Default', () => <Demo />);
