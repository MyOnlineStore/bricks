import React, { Component } from 'react';
import { boolean, number } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import Range from '.';
import { Range as RangeType } from 'react-input-range';

class Demo extends Component<{}, { value: RangeType }> {
    public constructor(props: {}) {
        super(props);

        this.state = { value: { min: 5, max: 15 } };
    }

    public render(): JSX.Element {
        return (
            <Range
                value={this.state.value}
                label="cm"
                disabled={boolean('disabled', false)}
                minLimit={number('minValue', 2)}
                maxLimit={number('maxValue', 25)}
                onChange={(value: RangeType): void => this.setState({ value })}
            />
        );
    }
}

storiesOf('Range', module).add('Default', () => <Demo />);
