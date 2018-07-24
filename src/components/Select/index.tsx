import React, { ChangeEvent, KeyboardEvent, Component, RefObject, createRef } from 'react';
import Box from '../Box';
import FoldOut from '../FoldOut';
import ScrollBox from '../ScrollBox';
import Option from './Option';
import { StyledWrapper, StyledInput, StyledWindow } from './style';
import Text from '../Text';
import Spacer from '../Spacer';
import trbl from '../../utility/trbl';
import Icon from '../Icon';
import { Button } from '../../index';

type OptionBase = {
    value: string;
    label: string;
};

type StateType<GenericOption extends OptionBase> = {
    input: string;
    isOpen: boolean;
    optionPointer: number;
    filteredOption: Array<GenericOption>;
};

type PropsType<GenericOption extends OptionBase> = {
    placeholder?: string;
    value: string;
    options: Array<GenericOption>;
    emptyText: string;
    onChange(value: string): void;
    renderOption?(option: GenericOption): JSX.Element;
};

class Select<GenericOption extends OptionBase> extends Component<PropsType<GenericOption>, StateType<GenericOption>> {
    private readonly inputRef: RefObject<HTMLInputElement>;
    private wrapperRef: HTMLDivElement;

    public constructor(props: PropsType<GenericOption>) {
        super(props);
        this.inputRef = createRef();

        this.state = {
            isOpen: false,
            input: props.value,
            optionPointer: -1,
            filteredOption: props.options,
        };
    }

    private cycleUp = (): void => {
        const optionPointer =
            this.state.optionPointer < this.state.filteredOption.length - 1 ? this.state.optionPointer + 1 : 0;

        this.setState({ optionPointer });
    };

    private cycleDown = (): void => {
        const optionPointer =
            this.state.optionPointer > 0 ? this.state.optionPointer - 1 : this.state.filteredOption.length - 1;

        this.setState({ optionPointer });
    };

    private close = (): void => {
        this.setState({ isOpen: false });
    };

    private open = (): void => {
        this.setState({ isOpen: true });
    };

    public componentDidUpdate(prevProps: PropsType<GenericOption>, prevState: StateType<GenericOption>): void {
        if (this.inputRef.current !== null && !prevState.isOpen && this.state.isOpen) {
            this.inputRef.current.focus();
        }
    }

    public componentDidMount(): void {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    public componentWillUnmount(): void {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    public handleClickOutside = (event: MouseEvent): void => {
        if (this.wrapperRef !== null && !this.wrapperRef.contains(event.target as Node)) {
            this.close();
        }
    };

    public handleChange = (value: string): void => {
        this.setState({ isOpen: false, input: '', optionPointer: -1 });
        this.props.onChange(value);
    };

    public handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
        const input = event.target.value;

        const filteredOption = this.props.options.filter(
            option => option.label.toLowerCase().indexOf(input.toLowerCase()) !== -1,
        );

        this.setState({ input, filteredOption, optionPointer: -1 });
    };

    public handleMouseMove = (): void => {
        this.setState({ optionPointer: -1 });
    };

    public handleKeyPress = (event: KeyboardEvent<HTMLDivElement>): void => {
        if (!this.state.isOpen && event.key === ' ') {
            this.setState({ isOpen: true });
        }

        if (event.key === 'ArrowUp') {
            this.cycleDown();
        }

        if (event.key === 'ArrowDown') {
            this.cycleUp();
        }

        if (event.key === 'Enter') {
            this.handleChange(this.state.filteredOption[this.state.optionPointer].value);
            this.wrapperRef.focus();
        }
    };

    public render(): JSX.Element {
        const selectedOption = this.props.options.reduce<OptionBase>(
            (found, option) => {
                return option.value === this.props.value ? option : found;
            },
            { value: '', label: '' },
        );

        return (
            <StyledWrapper
                innerRef={(ref): void => {
                    this.wrapperRef = ref;
                }}
                isOpen={this.state.isOpen}
                onKeyDownCapture={this.handleKeyPress}
                tabIndex={0}
            >
                <StyledInput>
                    <Box alignItems="stretch">
                        {(this.state.isOpen && (
                            <>
                                <Box alignItems="center" margin={trbl(0, 6, 0, 0)}>
                                    <Icon icon="search" size="small" color={'#d2d7e0'} />
                                </Box>
                                <input
                                    ref={this.inputRef}
                                    type="text"
                                    placeholder={this.props.placeholder}
                                    value={this.state.input}
                                    onChange={this.handleInput}
                                />
                            </>
                        )) || (
                            <Box alignItems="center" grow={1} onClick={this.open}>
                                {(this.props.value !== '' && <Text>{selectedOption.label}</Text>) || (
                                    <Text descriptive>{this.props.placeholder}</Text>
                                )}
                            </Box>
                        )}
                        <Button
                            compact
                            title={this.state.isOpen ? 'close' : 'open'}
                            variant={'plain'}
                            action={this.state.isOpen ? this.close : this.open}
                        >
                            <Icon icon={this.state.isOpen ? 'chevronUp' : 'chevronDown'} size="small" />
                        </Button>
                    </Box>
                </StyledInput>
                <StyledWindow isOpen={this.state.isOpen} onMouseMoveCapture={this.handleMouseMove}>
                    <ScrollBox autoHideScrollBar={false} showInsetShadow={false}>
                        <FoldOut isOpen={this.state.isOpen}>
                            {this.state.filteredOption.length === 0 && (
                                <Spacer offsetType={'inner'} offset={trbl(12)}>
                                    <Text>{this.props.emptyText}</Text>
                                </Spacer>
                            )}
                            {this.state.filteredOption.length > 0 &&
                                this.state.filteredOption.map((option, index) => (
                                    <Option
                                        isTargeted={index === this.state.optionPointer}
                                        key={`${option.value}-${option.label}`}
                                        onClick={(): void => {
                                            this.handleChange(option.value);
                                        }}
                                    >
                                        <Text descriptive={option.value === this.props.value}>
                                            <Box margin={trbl(0, 6, 0, 0)} inline>
                                                {option.value === this.props.value && (
                                                    <Icon size="small" icon="checkmark" />
                                                )}
                                            </Box>
                                            <span>
                                                {(this.props.renderOption !== undefined &&
                                                    this.props.renderOption(option)) ||
                                                    option.label}
                                            </span>
                                        </Text>
                                    </Option>
                                ))}
                        </FoldOut>
                    </ScrollBox>
                </StyledWindow>
            </StyledWrapper>
        );
    }
}

export default Select;
export { PropsType, StateType, OptionBase };
