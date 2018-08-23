import { storiesOf } from '@storybook/react';
import { object, text } from '@storybook/addon-knobs';
import React, { Component } from 'react';
import MultiButton from '.';

const options = [
    {
        value: 'Option 1',
        label: 'Option 1',
        description: `Unparalleled step-changes dynamically enable senior industry leaders for our market foci.`,
    },
    {
        value: 'Option 2',
        label: 'Option 2',
        description: `In the deliverable space, industry is virtually impacting its holistic verticals.`,
    },
    {
        value: 'Option 3',
        label: 'Option 3',
        description: `Key players will take ownership of their big datas by iteratively integrating long-term capabilities.`,
    },
];

class Demo extends Component<{}, { value: string }> {
    public constructor(props: {}) {
        super(props);

        this.state = {
            value: '',
        };
    }

    public handleChange = (value: string): void => {
        this.setState({ value });
    };

    public render(): JSX.Element {
        return (
            <MultiButton
                options={object('options', options)}
                title="MultiButton"
                value={this.state.value}
                onChange={this.handleChange}
            />
        );
    }
}

storiesOf('MultiButton', module).add('Default', () => <Demo />);
