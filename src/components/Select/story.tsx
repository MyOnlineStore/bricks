import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';
import Select from '.';
import { object, text } from '@storybook/addon-knobs';
import Text from '../Text';
import trbl from '../../utility/trbl';
import Icon from '../Icon';
import Box from '../Box';

type OptionType = {
    image: string;
    value: string;
    label: string;
    description: string;
};

type ProvidedType = {
    isSelected?: boolean;
};

const options: Array<OptionType> = [
    {
        image: 'https://picsum.photos/g/40/40/?random',
        value: 'Aaaaaaaaaaaaaaaaaaaaaaaaa',
        label: 'Bar Aaaaaaaaaaaaaaaaaaaaaaaaa',
        description: 'Lorem ipsum dolor sit amet.',
    },
    {
        image: 'https://picsum.photos/g/40/40/?random',
        value: 'B',
        label: 'Foo B',
        description: 'Lorem ipsum dolor sit amet.',
    },
    {
        image: 'https://picsum.photos/g/40/40/?random',
        value: 'C',
        label: 'Bar C',
        description: 'Lorem ipsum dolor sit amet.',
    },
    {
        image: 'https://picsum.photos/g/40/40/?random',
        value: 'D',
        label: 'Foo D',
        description: 'Lorem ipsum dolor sit amet.',
    },
    {
        image: 'https://picsum.photos/g/40/40/?random',
        value: 'E',
        label: 'Bar E',
        description: 'Lorem ipsum dolor sit amet.',
    },
    {
        image: 'https://picsum.photos/g/40/40/?random',
        value: 'F',
        label: 'Bar F',
        description: 'Lorem ipsum dolor sit amet.',
    },
];

type DemoPropsType = { renderOption?(option: OptionType, provided: ProvidedType): JSX.Element };

class Demo extends Component<DemoPropsType, { value: string }> {
    public constructor(props: DemoPropsType) {
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
                renderOption={this.props.renderOption}
            />
        );
    }
}

storiesOf('Select', module)
    .add('Default', () => {
        return <Demo />;
    })
    .add('With a custom option renderer', () => (
        <Demo
            renderOption={({ image, label, description }, { isSelected }): JSX.Element => (
                <Box>
                    <Box alignItems="center">
                        {(isSelected && (
                            <Text descriptive={isSelected}>
                                <Icon size="small" icon="checkmark" />
                            </Text>
                        )) || <img src={image} alt={label} />}
                    </Box>
                    <Box direction="column" margin={trbl(0, 0, 0, 12)}>
                        <Text descriptive={isSelected}>{label}</Text>
                        <Text descriptive variant="small">
                            {description}
                        </Text>
                    </Box>
                </Box>
            )}
        />
    ));
