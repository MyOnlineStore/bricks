import TextField from '../../';
import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';
import { boolean } from '@storybook/addon-knobs/react';

type PropsType = {};
type StateType = { value: number };

class Demo extends Component<PropsType, StateType> {
    public constructor(props: PropsType) {
        super(props);

        this.state = {
            value: 10,
        };
    }

    public render(): JSX.Element {
        return (
            <TextField.Number
                type="number"
                name="min value"
                allowNegative={true}
                value={this.state.value}
                onChange={(value: number): void => this.setState({ value })}
            />
        );
    }
}

storiesOf('TextField', module).add('With Number formatting', () => (
    <Demo />
));
