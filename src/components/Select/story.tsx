import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';
import Search from '.';
import Box from '../Box';
import { text } from '@storybook/addon-knobs';

const options = [
    {
        image: 'http://via.placeholder.com/40x40',
        value: 'A',
        label: 'Bar A',
        description: 'Lorem ipsum dolor sit amet.',
    },
    {
        image: 'http://via.placeholder.com/40x40',
        value: 'B',
        label: 'Foo B',
        description: 'Lorem ipsum dolor sit amet.',
    },
    {
        image: 'http://via.placeholder.com/40x40',
        value: 'C',
        label: 'Bar C',
        description: 'Lorem ipsum dolor sit amet.',
    },
    {
        image: 'http://via.placeholder.com/40x40',
        value: 'D',
        label: 'Foo D',
        description: 'Lorem ipsum dolor sit amet.',
    },
    {
        image: 'http://via.placeholder.com/40x40',
        value: 'E',
        label: 'Bar E',
        description: 'Lorem ipsum dolor sit amet.',
    },
    {
        image: 'http://via.placeholder.com/40x40',
        value: 'F',
        label: 'Bar F',
        description: 'Lorem ipsum dolor sit amet.',
    },
];

class Demo extends Component<{}, { value: string }> {
    public constructor(props: {}) {
        super(props);

        this.state = {
            value: 'F',
        };
    }

    public handleChange = (value: string): void => {
        this.setState({ value });
    };

    public render(): JSX.Element {
        return (
            <Box>
                <Box basis="300px" grow={0} direction="column">
                    <Search
                        placeholder="Search a thing"
                        value={text('value', this.state.value)}
                        emptyText={'No results'}
                        onChange={this.handleChange}
                        options={options}
                    />
                </Box>
            </Box>
        );
    }
}

storiesOf('Select', module).add('Default', () => {
    return <Demo />;
});
