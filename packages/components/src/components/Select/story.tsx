import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';
import Select, { OptionStateType } from '.';
import { object, text, boolean } from '@storybook/addon-knobs';
import Box from '../Box';
import Text from '../Text';
import trbl from '../../utility/trbl';
import Icon from '../Icon';
import { CheckmarkIcon } from '@myonlinestore/bricks-assets';

type DemoOptionType = {
    image: string;
    value: string;
    label: string;
    description: string;
};

const options: Array<DemoOptionType> = [
    {
        image: 'https://picsum.photos/100/100?image=988',
        value: 'A',
        label: 'Bar A',
        description: 'Lorem ipsum dolor sit amet.',
    },
    {
        image: 'https://picsum.photos/100/100?image=960',
        value: 'B',
        label: 'Foo B',
        description: 'Lorem ipsum dolor sit amet.',
    },
    {
        image: 'https://picsum.photos/100/100?image=958',
        value: 'C',
        label: 'Bar C',
        description: 'Lorem ipsum dolor sit amet.',
    },
    {
        image: 'https://picsum.photos/100/100?image=940',
        value: 'D',
        label: 'Foo D',
        description: 'Lorem ipsum dolor sit amet.',
    },
    {
        image: 'https://picsum.photos/100/100?image=924',
        value: 'E',
        label: 'Bar E',
        description: 'Lorem ipsum dolor sit amet.',
    },
    {
        image: 'https://picsum.photos/100/100?image=915',
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
                data-testid="foo"
                options={object('options', options)}
            />
        );
    }
}

const renderSelected = (option: DemoOptionType): JSX.Element => {
    if (option.label !== '') {
        return (
            <Box grow={1} width="100%" direction="row" alignItems="center">
                <Box margin={trbl(0, 9, 0, 0)}>
                    <img width="50" height="50" src={option.image} />
                </Box>
                <Box direction="column">
                    <Text>{option.label}</Text>
                    <Text variant="descriptive">{option.description}</Text>
                </Box>
            </Box>
        );
    } else {
        return (
            <Box direction="row" alignItems="center">
                <Text variant="descriptive">{'Make a selection'}</Text>
            </Box>
        );
    }
};

const renderOption = (option: DemoOptionType, optionState: OptionStateType): JSX.Element => {
    return (
        <Box grow={1} width="100%" direction="row" alignItems="center">
            <Box margin={trbl(0, 9, 0, 0)}>
                <img src={option.image} />
            </Box>
            <Box direction="column">
                <Text variant={optionState.isSelected ? 'descriptive' : undefined}>
                    {optionState.isSelected && (
                        <Text as="span" variant="descriptive">
                            <Icon size="small" icon={CheckmarkIcon} />
                            &nbsp;&nbsp;
                        </Text>
                    )}
                    {option.label}
                </Text>
                <Text variant="descriptive">{option.description}</Text>
            </Box>
        </Box>
    );
};

/*tslint:disable*/
class CustomRenderDemo extends Component<PropsType, StateType> {
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
                renderSelected={renderSelected}
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
        return <CustomRenderDemo />;
    });
