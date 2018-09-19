import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';
import Select, { OptionBase } from '.';
import { object, text, boolean } from '@storybook/addon-knobs/react';
import Box from '../Box';
import Text from '../Text';
import trbl from '../../utility/trbl';

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

type PropsType = {};

type StateType = {
    value: string;
};
class Demo extends Component<PropsType, StateType> {
    public constructor(props: PropsType) {
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
                disabled={boolean('disabled', false)}
                options={object('options', options)}
            />
        );
    }
}

const renderInput = (inputOption: OptionBase, placeholder?: string): JSX.Element => {
    if (inputOption.label !== '') {
        return (
            <Box margin={trbl(6)} direction="row" alignItems="center">
                <Box margin={trbl(0, 9, 0, 0)}>
                    <img src="http://via.placeholder.com/100x100" />
                </Box>
                <Text variant="large"> {inputOption.label}</Text>
            </Box>
        );
    } else {
        return (
            <Box margin={trbl(6)} direction="row" alignItems="center">
                <Text descriptive>{placeholder ? placeholder : 'Make a selection'}</Text>
            </Box>
        );
    }
};

const renderOption = (option: OptionBase): JSX.Element => {
    return (
        <Box margin={trbl(6)} grow={1} width="100%" direction="row" alignItems="center">
            <Box margin={trbl(0, 9, 0, 0)}>
                <img src="http://via.placeholder.com/100x100" />
            </Box>
            <Text variant="large">{option.label}</Text>
        </Box>
    );
};

/*tslint:disable*/
class RenderInputDemo extends Component<PropsType, StateType> {
    public constructor(props: PropsType) {
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
                placeholder={text('placeholder', 'Select a value')}
                value={this.state.value}
                emptyText={text('emptyText', 'No results')}
                onChange={this.handleChange}
                disabled={boolean('disabled', false)}
                options={object('options', options)}
                renderInput={renderInput}
                renderOption={renderOption}
            />
        );
    }
}
/*tslint:enable*/

storiesOf('Select', module)
    .add('Default', () => {
        return <Demo />;
    })
    .add('Custom rendering', () => {
        return <RenderInputDemo />;
    });
