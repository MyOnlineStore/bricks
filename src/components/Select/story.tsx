import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';
import Select from '.';
import { object, text, boolean } from '@storybook/addon-knobs/react';

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
            value: '',
        };
    }

    public handleChange = (value: string): void => {
        this.setState({ value });
    };

    public render(): JSX.Element {
        return (
            <Select
                placeholder={text('placeholder', 'Search a value')}
                value={this.state.value}
                emptyText={text('emptyText', 'No results')}
                onChange={this.handleChange}
                options={object('options', options)}
                disabled={boolean('disabled', true)}
            />
        );
    }
}

storiesOf('Select', module).add('Default', () => {
    return <Demo />;
});
