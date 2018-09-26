import React, { ChangeEvent, KeyboardEvent, Component, RefObject, createRef } from 'react';
import { createPortal } from 'react-dom';
import Box from '../Box';
import ScrollBox from '../ScrollBox';
import Option from './Option';
import { StyledWrapper, StyledInput, StyledWindow, StyledPlaceholder } from './style';
import Text from '../Text';
import trbl from '../../utility/trbl';
import Icon from '../Icon';
import { Button } from '../../index';
import { withTheme } from 'styled-components';
import ThemeType from '../../types/ThemeType';

type OptionBase = {
    value: string;
    label: string;
};

type OptionStateType = {
    isSelected: boolean;
};

type StateType = {
    input: string;
    isOpen: boolean;
    optionPointer: number;
    inputHeight: number | undefined;
};

type PropsType<GenericOption extends OptionBase> = {
    theme: ThemeType;
    placeholder?: string;
    value: string;
    options: Array<GenericOption>;
    emptyText: string;
    disabled?: boolean;
    onChange(value: string): void;
    renderOption?(option: GenericOption, state: OptionStateType): JSX.Element;
    renderSelected?(option: GenericOption): JSX.Element;
};

class Select<GenericOption extends OptionBase> extends Component<PropsType<GenericOption>, StateType> {
    private readonly inputRef: RefObject<HTMLInputElement>;
    private inputWrapperRef: HTMLDivElement;
    private wrapperRef: HTMLDivElement;
    private windowRef: HTMLDivElement;

    public constructor(props: PropsType<GenericOption>) {
        super(props);
        this.inputRef = createRef();

        this.state = {
            isOpen: false,
            input: props.value,
            optionPointer: -1,
            inputHeight: undefined,
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
        if (!this.props.disabled) {
            this.handleInput('');
            this.setState({ isOpen: true });
        }
    };

    private filterOptions = (): ReadonlyArray<GenericOption> => {
        return this.props.options.filter(
            option => option.label.toLowerCase().indexOf(this.state.input.toLowerCase()) !== -1,
        );
    };

    public componentDidUpdate(_: PropsType<GenericOption>, prevState: StateType): void {
        if (prevState.isOpen && this.props.disabled) {
            this.setState({ isOpen: false });
        }

        if (this.inputRef.current !== null && !prevState.isOpen && this.state.isOpen) {
            this.inputRef.current.focus();
        }

        const inputHeight = this.inputWrapperRef.getBoundingClientRect().height;

        if (inputHeight !== prevState.inputHeight) {
            this.setState({ inputHeight });
        }
    }

    public componentDidMount(): void {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    public componentWillUnmount(): void {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    public handleClickOutside = (event: MouseEvent): void => {
        if (!this.wrapperRef.contains(event.target as Node) && !this.windowRef.contains(event.target as Node)) {
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
        if (!this.state.isOpen && (event.key === ' ' || event.key === 'ArrowDown' || event.key === 'ArrowUp')) {
            this.open();
        }

        if (this.state.isOpen) {
            if (event.key === 'Escape') this.close();
            if (event.key === 'ArrowUp') this.cycleDown();
            if (event.key === 'ArrowDown') this.cycleUp();
            if (event.key === 'Tab') event.preventDefault();
        }

        if (this.state.isOpen && (event.key === 'Enter' || event.key === ' ') && this.state.optionPointer !== -1) {
            this.handleChange(this.filterOptions()[this.state.optionPointer].value);
            this.wrapperRef.focus();
        }
    };

    public render(): JSX.Element {
        const selectedOption = this.props.options.reduce(
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
                <StyledInput
                    disabled={!this.props.disabled ? false : this.props.disabled}
                    innerRef={(ref): void => (this.inputWrapperRef = ref)}
                >
                    <Box alignItems="stretch">
                        {(this.state.isOpen && (
                            <Box alignItems="center" padding={trbl(6, 12)} grow={1} onClick={this.open}>
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
                            </Box>
                        )) ||
                            (this.props.renderSelected === undefined && (
                                <Box alignItems="center" padding={trbl(6, 12)} grow={1} onClick={this.open}>
                                    {(this.props.value !== '' && <Text>{selectedOption.label}</Text>) || (
                                        <Text descriptive>
                                            <StyledPlaceholder>{this.props.placeholder}</StyledPlaceholder>
                                        </Text>
                                    )}
                                </Box>
                            )) ||
                            (this.props.renderSelected !== undefined && (
                                <Box padding={trbl(6, 12)} alignItems="center" grow={1} onClick={this.open}>
                                    {this.props.renderSelected(selectedOption as GenericOption)}
                                </Box>
                            ))}
                        <Button
                            compact
                            flat
                            variant="secondary"
                            title={this.state.isOpen ? 'close' : 'open'}
                            action={this.state.isOpen ? this.close : this.open}
                            disabled={this.props.disabled}
                        >
                            <Icon
                                icon={this.state.isOpen ? 'chevronUp' : 'chevronDown'}
                                size="small"
                                color={this.props.disabled ? this.props.theme.Select.disabled.chevron : undefined}
                            />
                        </Button>
                    </Box>
                </StyledInput>
                {createPortal(
                    <StyledWindow
                        innerRef={(ref): void => {
                            this.windowRef = ref;
                        }}
                        isOpen={this.state.isOpen}
                        rect={
                            (this.wrapperRef as HTMLDivElement | undefined) !== undefined
                                ? this.wrapperRef.getBoundingClientRect()
                                : undefined
                        }
                        inputHeight={this.state.inputHeight}
                    >
                        <ScrollBox autoHideScrollBar={false} showInsetShadow={false}>
                            <div
                                data-test="bricks-select-collapse"
                                style={{ overflow: 'hidden', display: this.state.isOpen ? 'block' : 'none' }}
                            >
                                {this.filterOptions().length === 0 && (
                                    <Box padding={trbl(12)}>
                                        <Text>{this.props.emptyText}</Text>
                                    </Box>
                                )}
                                {this.filterOptions().length > 0 &&
                                    this.filterOptions().map((option, index) => {
                                        const optionsState = {
                                            isSelected: option.value === this.props.value,
                                        };

                                        return (
                                            <Option
                                                isTargeted={index === this.state.optionPointer}
                                                key={`${option.value}-${option.label}`}
                                                onMouseEnter={(): void => this.cycleTo(index)}
                                                onClick={(): void => {
                                                    this.handleChange(option.value);
                                                }}
                                            >
                                                {(this.props.renderOption !== undefined &&
                                                    this.props.renderOption(option, optionsState)) || (
                                                    <Box padding={trbl(6, 18)} alignItems="center" inline>
                                                        {optionsState.isSelected && (
                                                            <Box margin={trbl(0, 6, 0, 0)} inline>
                                                                <Text descriptive={option.value === this.props.value}>
                                                                    <Icon size="small" icon="checkmark" />
                                                                </Text>
                                                            </Box>
                                                        )}
                                                        <Text descriptive={option.value === this.props.value} inline>
                                                            {option.label}
                                                        </Text>
                                                    </Box>
                                                )}
                                            </Option>
                                        );
                                    })}
                            </div>
                        </ScrollBox>
                    </StyledWindow>,
                    document.body,
                )}
            </StyledWrapper>
        );
    }
}

export default withTheme(Select);
export { PropsType, StateType, OptionBase, OptionStateType };
