import React, { ChangeEvent, KeyboardEvent, Component, RefObject, createRef, MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import Box from '../Box';
import FoldOut from '../FoldOut';
import ScrollBox from '../ScrollBox';
import Option from './Option';
import { StyledWrapper, StyledInput, StyledWindow } from './style';
import Text from '../Text';
import trbl from '../../utility/trbl';
import Icon from '../Icon';
import { Button } from '../../index';

type OptionBase = {
    value: string;
    label: string;
};

type ProvidedType = {
    isSelected: boolean;
};

type StateType = {
    input: string;
    isOpen: boolean;
    optionPointer: number;
};

type PropsType<GenericOption extends OptionBase> = {
    placeholder?: string;
    value: string;
    options: Array<GenericOption>;
    emptyText: string;
    onChange(value: string): void;
    renderOption?(option: GenericOption, provided: ProvidedType): JSX.Element;
};

class Select<GenericOption extends OptionBase> extends Component<PropsType<GenericOption>, StateType> {
    private readonly inputRef: RefObject<HTMLInputElement>;
    private wrapperRef: HTMLDivElement;

    public constructor(props: PropsType<GenericOption>) {
        super(props);
        this.inputRef = createRef();

        this.state = {
            isOpen: false,
            input: props.value,
            optionPointer: -1,
        };
    }

    private cycleUp = (): void => {
        const optionPointer =
            this.state.optionPointer < this.filterOptions().length - 1 ? this.state.optionPointer + 1 : 0;

        this.setState({ optionPointer });
    };

    private cycleTo = (index: number): void => {
        this.setState({ optionPointer: index });
    };

    private cycleDown = (): void => {
        const optionPointer =
            this.state.optionPointer > 0 ? this.state.optionPointer - 1 : this.filterOptions().length - 1;

        this.setState({ optionPointer });
    };

    private close = (): void => {
        this.setState({ isOpen: false });
    };

    private open = (): void => {
        this.handleInput('');
        this.setState({ isOpen: true });
    };

    private filterOptions = (): ReadonlyArray<GenericOption> => {
        return this.props.options.filter(
            option => option.label.toLowerCase().indexOf(this.state.input.toLowerCase()) !== -1,
        );
    };

    public componentDidUpdate(_: PropsType<GenericOption>, prevState: StateType): void {
        if (this.inputRef.current !== null && !prevState.isOpen && this.state.isOpen) {
            this.inputRef.current.focus();
        }
    }

    public componentDidMount(): void {
        document.addEventListener('mousedown', this.handleClickOutside as any);
    }

    public componentWillUnmount(): void {
        document.removeEventListener('mousedown', this.handleClickOutside as any);
    }

    public handleClickOutside = (event: MouseEvent<HTMLDivElement>): void => {
        if (!this.wrapperRef.contains(event.target as Node)) {
            this.close();
        }
    };

    public handleChange = (value: string): void => {
        this.props.onChange(value);
        this.setState({ isOpen: false, optionPointer: -1 });
    };

    public handleInput = (input: string): void => {
        this.setState({ input, optionPointer: -1 });
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

        if (event.key === 'Enter' && this.state.optionPointer !== -1) {
            this.handleChange(this.filterOptions()[this.state.optionPointer].value);
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
                                    onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                                        this.handleInput(event.target.value)
                                    }
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
                            flat
                            variant="secondary"
                            title={this.state.isOpen ? 'close' : 'open'}
                            action={this.state.isOpen ? this.close : this.open}
                        >
                            <Icon icon={this.state.isOpen ? 'chevronUp' : 'chevronDown'} size="small" />
                        </Button>
                    </Box>
                </StyledInput>
                {createPortal(
                    <StyledWindow
                        isOpen={this.state.isOpen}
                        rect={
                            (this.wrapperRef as HTMLDivElement | undefined) !== undefined
                                ? this.wrapperRef.getBoundingClientRect()
                                : undefined
                        }
                    >
                        <ScrollBox autoHideScrollBar={false} showInsetShadow={false}>
                            <FoldOut isOpen={this.state.isOpen}>
                                {this.filterOptions().length === 0 && (
                                    <Box padding={trbl(12)}>
                                        <Text>{this.props.emptyText}</Text>
                                    </Box>
                                )}
                                {this.filterOptions().length > 0 &&
                                    this.filterOptions().map((option, index) => {
                                        const isSelected = option.value === this.props.value;

                                        return (
                                            <Option
                                                isTargeted={index === this.state.optionPointer}
                                                key={`${option.value}-${option.label}`}
                                                onMouseEnter={(): void => this.cycleTo(index)}
                                                onClick={(event: MouseEvent<HTMLDivElement>): void => {
                                                    event.stopPropagation();
                                                    this.handleChange(option.value);
                                                }}
                                            >
                                                {(this.props.renderOption !== undefined &&
                                                    this.props.renderOption(option, { isSelected })) || (
                                                    <Text inline descriptive={isSelected}>
                                                        {isSelected && (
                                                            <Box inline margin={trbl(0, 6, 0, 0)}>
                                                                <Icon size="small" icon="checkmark" />
                                                            </Box>
                                                        )}
                                                        {option.label}
                                                    </Text>
                                                )}
                                            </Option>
                                        );
                                    })}
                            </FoldOut>
                        </ScrollBox>
                    </StyledWindow>,
                    document.body,
                )}
            </StyledWrapper>
        );
    }
}

export default Select;
export { PropsType, StateType, OptionBase, ProvidedType };
