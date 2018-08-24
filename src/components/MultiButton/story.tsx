import { storiesOf } from '@storybook/react';
import { object, text } from '@storybook/addon-knobs';
import React, { Component } from 'react';
import MultiButton from '.';
import Text from '../Text';
import Box from '../Box';
import trbl from '../../utility/trbl';

const options = [
    {
        value: 'Option 1',
        label: 'Brooklyn green juice small batch af.',
        description: `Unparalleled step-changes dynamically enable senior industry leaders for our market foci.`,
    },
    {
        value: 'Option 2',
        label: 'Fashion axe fixie irony poke shaman.',
        description: `In the deliverable space, industry is virtually impacting its holistic verticals.`,
    },
    {
        value: 'Option 3',
        label: 'Disrupt crucifix bicycle rights mumblecore.',
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
            <>
                <Box margin={trbl(0, 6)}>
                    <MultiButton
                        title={text('title', 'Yuccie gentrify fam swag')}
                        options={object('options', options)}
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </Box>
                <Box margin={trbl(6)}>
                    <Text>You selected: {this.state.value}</Text>
                </Box>
            </>
        );
    }
}

storiesOf('MultiButton', module).add('Default', () => <Demo />);
