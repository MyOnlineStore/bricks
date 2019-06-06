import React, { Component } from 'react';
import { boolean, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import Range from '.';
import { Range as RangeType } from 'react-input-range';

class Demo extends Component<{}, { value: RangeType }> {
    public constructor(props: {}) {
        super(props);

        this.state = { value: { min: 5, max: 12 } };
    }

    public render(): JSX.Element {
        return (
            <Range
                value={this.state.value}
                label="cm"
                disabled={boolean('disabled', false)}
                minLimit={number('minValue', 1.75)}
                maxLimit={number('maxValue', 15.13)}
                onChange={(value: RangeType): void => this.setState({ value })}
            />
        );
    }
}

storiesOf('Range', module)
    .add('Default', () => <Demo />)
    .add(
        'Props',
        withInfo({ inline: true })(() => {
            return <Range value={{ min: 0, max: 100 }} label="range" minLimit={0} maxLimit={100} />;
        }),
    );
