import { storiesOf } from '@storybook/react';
import React, { Component, createRef, RefObject, useState } from 'react';
import Select, { OptionStateType } from '.';
import { object, text, boolean } from '@storybook/addon-knobs';
import Box from '../Box';
import Text from '../Text';
import trbl from '../../utility/trbl';
import Icon from '../Icon';
import checkmarkIcon from '../../assets/icons/checkmark.svg';
import Modal from '../Modal';
import Button from '../Button';
import { Heading } from '../..';

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
    scrollTop?: number;
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
                    <Text severity="info">{option.description}</Text>
                </Box>
            </Box>
        );
    } else {
        return (
            <Box direction="row" alignItems="center">
                <Text severity="info">{'Make a selection'}</Text>
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
                <Text severity={optionState.isSelected ? 'info' : undefined}>
                    {optionState.isSelected && (
                        <Text as="span" severity="info">
                            <Icon size="small" icon={checkmarkIcon} />
                            &nbsp;&nbsp;
                        </Text>
                    )}
                    {option.label}
                </Text>
                <Text severity="info">{option.description}</Text>
            </Box>
        </Box>
    );
};

const Filler = () => (
    <Box height="50vw" width="100%" padding={[24]} margin={[24, 0]} style={{ background: '#eee' }}>
        Filler
    </Box>
);

const CustomDemo = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectValue, setSelectValue] = useState<{ value: string }>({ value: '' });
    const containerRef: RefObject<HTMLDivElement> = createRef();
    const modalRef: RefObject<HTMLDivElement> = createRef();

    return (
        <Box padding={[24]} width="100%" direction="column" justifyContent="stretch">
            <div ref={containerRef}>
                <Box alignItems="center" justifyContent="space-between">
                    <Heading>Select test</Heading>
                    <Button
                        variant="primary"
                        title="Open modal"
                        onClick={() => {
                            setModalIsOpen(!modalIsOpen);
                        }}
                    />
                </Box>
                <Filler />
                <Select
                    placeholder={text('placeholder', 'Select a value')}
                    value={selectValue.value}
                    emptyText={text('emptyText', 'No results')}
                    onChange={value => {
                        setSelectValue({ value });
                    }}
                    disabled={boolean('disabled', false)}
                    options={object('options', options)}
                    renderSelected={renderSelected}
                    renderOption={renderOption}
                    container={containerRef}
                />
                <Filler />
                <Select
                    disabled={false}
                    placeholder="Choose wisely..."
                    onChange={() => {}}
                    value=""
                    options={options}
                    emptyText="None"
                    container={containerRef}
                />
            </div>
            <Modal
                show={modalIsOpen}
                title="Select in Modal test"
                onClose={() => {
                    setModalIsOpen(false);
                }}
                scrollRef={modalRef}
            >
                <div style={{ width: '100%' }}>
                    <Filler />
                    <Select
                        disabled={false}
                        placeholder="Choose wisely..."
                        onChange={() => {}}
                        value=""
                        options={options}
                        emptyText="None"
                        container={modalRef}
                    />
                    <Filler />
                    <Select
                        disabled={false}
                        placeholder="Choose wisely..."
                        onChange={() => {}}
                        value=""
                        options={options}
                        emptyText="None"
                        container={modalRef}
                    />
                    <Filler />
                </div>
            </Modal>
        </Box>
    );
};

storiesOf('Select', module)
    .add('Default', () => {
        return <Demo />;
    })
    .add('Custom rendering', () => {
        return <CustomDemo />;
    });
