import { storiesOf } from '@storybook/react';
import React, { Component, useState } from 'react';
import Select, { OptionStateType } from '.';
import { object, text, boolean } from '@storybook/addon-knobs';
import Box from '../Box';
import Text from '../Text';
import trbl from '../../utility/trbl';
import Icon from '../Icon';
import { CheckmarkIcon, ImageIcon } from '@myonlinestore/bricks-assets';
import colors from '../../themes/MosTheme/colors';

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

type PropsType = {
    showContent?: boolean;
};

type StateType = {
    value: string;
};

const Content = () => (
    <div style={{ margin: '24px 0' }}>
        <Text>
            Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Curabitur
            blandit tempus porttitor. Donec ullamcorper nulla non metus auctor fringilla. Curabitur blandit tempus
            porttitor. Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum.
        </Text>
        <Box
            height="33vw"
            alignItems="center"
            justifyContent="center"
            margin={[24, 0]}
            style={{ background: colors.grey100 }}
        >
            <Icon size="large" icon={<ImageIcon />} color={colors.grey300} />
        </Box>
        <Text>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
            risus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Fusce dapibus, tellus ac cursus
            commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Curabitur blandit tempus
            porttitor.
        </Text>
    </div>
);

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
            <div>
                {this.props.showContent && <Content />}
                <Select
                    placeholder={text('placeholder', 'Search a value')}
                    value={this.state.value}
                    emptyText={text('emptyText', 'No results')}
                    onChange={this.handleChange}
                    disabled={boolean('disabled', false)}
                    data-testid="foo"
                    options={object('options', options)}
                />
                {this.props.showContent && <Content />}
            </div>
        );
    }
}

const renderSelected = (option: DemoOptionType): JSX.Element => {
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
                            <Icon size="small" icon={<CheckmarkIcon />} />
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
            <div>
                {this.props.showContent && <Content />}
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
                {this.props.showContent && <Content />}
            </div>
        );
    }
}
/*tslint:enable*/

storiesOf('Select', module)
    .add('Default', () => {
        return <Demo showContent={boolean('Show content', false)} />;
    })
    .add('Custom rendering', () => {
        return <CustomRenderDemo showContent={boolean('Show content', false)} />;
    })
    .add('With options as children', () => {
        const [value, setValue] = useState('a');

        return (
            <Select
                value={value}
                emptyText="No results"
                placeholder="Select a value"
                onChange={value => {
                    setValue(value);
                }}
            >
                {options.map(option => (
                    <Select.Option key={option.value} value={option.value} label={option.label} />
                ))}
            </Select>
        );
    })
    .add('With a big list of options', () => {
        const bigList = [];

        for (let i = 0; i < 1000; i++) {
            bigList.push({
                value: `${i}`,
                label: `Option ${i}`,
            });
        }

        const [value, setValue] = useState(bigList[0].value);

        return (
            <Select
                value={value}
                emptyText="No results"
                placeholder="Select a value"
                onChange={value => {
                    setValue(value);
                }}
            >
                {bigList.map(option => (
                    <Select.Option key={option.value} value={option.value} label={option.label} />
                ))}
            </Select>
        );
    })
    .add('With option groups', () => {
        const [value, setValue] = useState('');

        return (
            <Select
                value={value}
                emptyText="No results"
                placeholder="Select a value"
                onChange={value => {
                    setValue(value);
                }}
            >
                <Select.Option label="Option A" value="a" />
                <Select.Option label="Option B" value="b" />
                <Select.Option label="Option C" value="c" />
                <Select.OptionGroup>
                    <Select.Option label="Option D" value="d" />
                    <Select.Option label="Option E" value="e" />
                    <Select.Option label="Option F" value="f" />
                    <Select.OptionGroup>
                        <Select.Option label="Option G" value="g" />
                        <Select.Option label="Option H" value="h" />
                        <Select.Option label="Option I" value="i" />
                    </Select.OptionGroup>
                </Select.OptionGroup>
                <Select.Option label="Option J" value="j" />
                <Select.Option label="Option K" value="k" />
                <Select.Option label="Option L" value="l" />
            </Select>
        );
    })
    .add('With search', () => {
        const [value, setValue] = useState('');

        return (
            <Select
                value={value}
                emptyText="No results"
                placeholder="Select a value"
                search={<Select.Search placeholder="Search a value" />}
                onChange={value => {
                    setValue(value);
                }}
            >
                <Select.Option label="Option A" value="a" />
                <Select.Option label="Option B" value="b" />
                <Select.Option label="Option C" value="c" />
                <Select.Option label="Option D" value="d" />
                <Select.Option label="Option E" value="e" />
                <Select.Option label="Option F" value="f" />
            </Select>
        );
    });
