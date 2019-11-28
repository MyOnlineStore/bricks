//tslint:disable:max-file-line-count
import React, { ChangeEvent, KeyboardEvent, Component, RefObject, createRef, FormEvent } from 'react';
import { createPortal } from 'react-dom';
import Box from '../Box';
import ScrollBox from '../ScrollBox';
import Option from './Option';
import {
    StyledWrapper,
    StyledInput,
    StyledWindowWrapper,
    StyledWindow,
    StyledPlaceholder,
    StyledSelect,
    INNER_OFFSET as windowOffset,
} from './style';
import Text from '../Text';
import trbl from '../../utility/trbl';
import Icon from '../Icon';
import IconButton from '../../components/IconButton';
import { withTheme } from 'styled-components';
import ThemeType from '../../types/ThemeType';
import search from '../../assets/icons/search.svg';
import chevronDown from '../../assets/icons/chevron-down-small.svg';
import chevronUp from '../../assets/icons/chevron-up-small.svg';

type OptionBaseType = {
    value: string;
    label: string;
};

type OptionStateType = {
    isSelected: boolean;
};

type StateType = {
    input: string;
    hasFocus: boolean;
    isOpen: boolean;
    optionPointer: number;
    inputHeight: number | undefined;
};

type PropsType<GenericOptionType extends OptionBaseType> = {
    theme: ThemeType;
    placeholder?: string;
    value: string;
    options: Array<GenericOptionType>;
    emptyText: string;
    container?: RefObject<HTMLDivElement>;
    disabled?: boolean;
    'data-testid'?: string;
    onChange(value: string): void;
    renderOption?(option: GenericOptionType, state: OptionStateType): JSX.Element;
    renderSelected?(option: GenericOptionType): JSX.Element;
};

class Select<GenericOptionType extends OptionBaseType> extends Component<PropsType<GenericOptionType>, StateType> {
    private readonly inputRef: RefObject<HTMLInputElement>;
    private selectRef: RefObject<HTMLDivElement>;
    private wrapperRef: RefObject<HTMLDivElement>;
    private windowRef: RefObject<HTMLDivElement>;
    private selectObserver: IntersectionObserver;
    private resizeTimestamp: number;

    public constructor(props: PropsType<GenericOptionType>) {
        super(props);
        this.inputRef = createRef();
        this.selectRef = createRef();
        this.wrapperRef = createRef();
        this.windowRef = createRef();
        this.resizeTimestamp = 0;

        this.state = {
            hasFocus: false,
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
            this.setTopPosition();
            this.setState({ isOpen: true });
        }
    };

    private filterOptions = (): ReadonlyArray<GenericOptionType> => {
        return this.props.options.filter(
            option => option.label.toLowerCase().indexOf(this.state.input.toLowerCase()) !== -1,
        );
    };

    private handleClickOutside = (event: MouseEvent): void => {
        if (
            this.wrapperRef.current !== null &&
            this.windowRef.current !== null &&
            !this.wrapperRef.current.contains(event.target as Node) &&
            !this.windowRef.current.contains(event.target as Node)
        ) {
            this.close();
        }
    };

    private handleChange = (value: string): void => {
        this.props.onChange(value);
        this.setState({ isOpen: false, optionPointer: -1 });
    };

    private handleChangeEvent = (event: FormEvent<HTMLDivElement>): void => {
        // tslint:disable-next-line
        this.handleChange((event as any).target.value);
    };

    private handleInput = (input: string): void => {
        this.setState({ input, optionPointer: -1 });
    };

    private handleFocus = (): void => {
        if (!this.props.disabled) {
            this.setState({ hasFocus: true });
        }
    };

    private handleBlur = (): void => {
        this.setState({ hasFocus: false });
    };

    private handleKeyPress = (event: KeyboardEvent<HTMLDivElement>): void => {
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
        }
    };

    private getTopPosition = (): number => {
        if (this.wrapperRef && this.wrapperRef.current) {
            return this.wrapperRef.current.getBoundingClientRect().top - windowOffset;
        }

        return 0;
    };

    private setTopPosition = (): void => {
        if (this.windowRef && this.windowRef.current && this.wrapperRef && this.wrapperRef.current) {
            this.windowRef.current.style.top = `${this.getTopPosition().toString()}px`;
        }
    };

    private recalculateTop = (): void => {
        if (this.state.isOpen) {
            window.requestAnimationFrame(this.setTopPosition);
        }
    };

    private checkIntersection = (entries: Array<IntersectionObserverEntry>) => {
        entries.forEach(entry => {
            if (
                entry.intersectionRatio < 1 &&
                // Check if intersection time is well after a resize to prevent mobile keyboard overlays (Android) from closing it to quickly
                !(entry.time - this.resizeTimestamp < 100 && entry.time - this.resizeTimestamp > 0)
            )
                this.close();
        });
    };

    private logResizeTime = (event: Event) => {
        this.resizeTimestamp = event.timeStamp;
    };

    private createObserver = (): void => {
        const Options = {
            root: this.props.container ? this.props.container.current : null,
            rootMargin: '0px',
            threshold: [0.9],
        };

        this.selectObserver = new IntersectionObserver(this.checkIntersection, Options);

        if (this.selectRef && this.selectRef.current) this.selectObserver.observe(this.selectRef.current);
    };

    public componentDidUpdate(_: PropsType<GenericOptionType>, prevState: StateType): void {
        if (prevState.isOpen && this.props.disabled) {
            this.setState({ isOpen: false });
        }

        if (this.inputRef.current !== null && !prevState.isOpen && this.state.isOpen) {
            this.inputRef.current.focus();
        }

        if (prevState.isOpen && !this.state.isOpen && this.wrapperRef.current !== null) {
            this.wrapperRef.current.focus();
        }
    }

    public componentDidMount(): void {
        document.addEventListener('mousedown', this.handleClickOutside);
        window.addEventListener('resize', this.recalculateTop);
        window.addEventListener('resize', this.logResizeTime);

        if (this.props.container) {
            setTimeout(() => {
                if (this.props.container && this.props.container.current)
                    this.props.container.current.addEventListener('scroll', this.recalculateTop);
            }, 100);
        } else {
            document.addEventListener('scroll', this.recalculateTop);
        }

        this.createObserver();
    }

    public componentWillUnmount(): void {
        document.removeEventListener('mousedown', this.handleClickOutside);
        window.removeEventListener('resize', this.recalculateTop);
        window.removeEventListener('resize', this.logResizeTime);

        if (this.selectObserver && this.selectRef && this.selectRef.current)
            this.selectObserver.unobserve(this.selectRef.current);

        if (this.props.container && this.props.container.current) {
            this.props.container.current.removeEventListener('scroll', this.recalculateTop);
        } else {
            document.removeEventListener('scroll', this.recalculateTop);
        }
    }

    public render(): JSX.Element {
        const selectedOption = this.props.options.reduce(
            (found, option) => {
                return option.value === this.props.value ? option : found;
            },
            { value: '', label: '' },
        );

        return (
            <StyledWrapper
                ref={this.wrapperRef}
                disabled={this.props.disabled}
                open={this.state.isOpen}
                onKeyDownCapture={this.handleKeyPress}
                onChange={this.handleChangeEvent}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                tabIndex={this.props.disabled ? -1 : 0}
                role="combobox"
                aria-label={'select'}
                aria-expanded={this.state.isOpen}
                data-testid={this.props['data-testid']}
            >
                <StyledSelect
                    open={this.state.isOpen}
                    hasFocus={this.state.hasFocus}
                    disabled={!this.props.disabled ? false : this.props.disabled}
                    ref={this.selectRef}
                    data-testid={this.props['data-testid'] ? `${this.props['data-testid']}-select` : undefined}
                    onClick={this.open}
                >
                    test
                    {(this.props.renderSelected !== undefined && (
                        <Box padding={trbl(6, 12)} alignItems="center" grow={1}>
                            {this.props.renderSelected(selectedOption as GenericOptionType)}
                        </Box>
                    )) || (
                        <Box alignItems="center" padding={trbl(6, 12)} grow={1}>
                            {(this.props.value !== '' && <Text>{selectedOption.label}</Text>) || (
                                <Text severity="info">
                                    <StyledPlaceholder
                                        data-testid={
                                            this.props['data-testid']
                                                ? `${this.props['data-testid']}-placeholder`
                                                : undefined
                                        }
                                    >
                                        {this.props.placeholder}
                                    </StyledPlaceholder>
                                </Text>
                            )}
                        </Box>
                    )}
                    <IconButton
                        icon={this.state.isOpen ? chevronUp : chevronDown}
                        iconSize="small"
                        title={this.state.isOpen ? 'close' : 'open'}
                        onClick={this.state.isOpen ? this.close : this.open}
                        disabled={this.props.disabled}
                        variant="primary"
                    />
                </StyledSelect>
                {createPortal(
                    <StyledWindowWrapper
                        id={'select-window'}
                        ref={this.windowRef}
                        open={this.state.isOpen}
                        role="listbox"
                        rect={
                            this.wrapperRef.current !== null
                                ? this.wrapperRef.current.getBoundingClientRect()
                                : undefined
                        }
                        data-testid={
                            this.props['data-testid']
                                ? `${this.props['data-testid']}-window${this.state.isOpen ? '-open' : '-closed'}`
                                : undefined
                        }
                    >
                        {this.state.isOpen && (
                            <StyledInput
                                open={this.state.isOpen}
                                hasFocus={this.state.hasFocus}
                                disabled={!this.props.disabled ? false : this.props.disabled}
                                role="searchbox"
                                aria-autocomplete="list"
                                aria-controls={this.state.isOpen ? 'select-window' : undefined}
                                data-testid={
                                    this.props['data-testid'] ? `${this.props['data-testid']}-input` : undefined
                                }
                            >
                                <Box alignItems="center" padding={trbl(6, 12)} grow={1}>
                                    <Box alignItems="center" margin={trbl(0, 6, 0, 0)}>
                                        <Icon icon={search} size="small" color={'#d2d7e0'} />
                                    </Box>
                                    <input
                                        ref={this.inputRef}
                                        type="text"
                                        placeholder={this.props.placeholder}
                                        value={this.state.input}
                                        data-testid={
                                            this.props['data-testid']
                                                ? `${this.props['data-testid']}-input-field`
                                                : undefined
                                        }
                                        style={{ width: '100%' }}
                                        onChange={(event: ChangeEvent<HTMLInputElement>): void => {
                                            event.stopPropagation();
                                            this.handleInput(event.target.value);
                                        }}
                                    />
                                </Box>
                                <IconButton
                                    icon={this.state.isOpen ? chevronUp : chevronDown}
                                    iconSize="small"
                                    title={this.state.isOpen ? 'close' : 'open'}
                                    onClick={this.state.isOpen ? this.close : this.open}
                                    disabled={this.props.disabled}
                                    variant="primary"
                                />
                            </StyledInput>
                        )}
                        <StyledWindow>
                            <ScrollBox autoHideScrollBar={false} showInsetShadow={false}>
                                <div style={{ overflow: 'hidden', display: this.state.isOpen ? 'block' : 'none' }}>
                                    {(this.filterOptions().length === 0 && (
                                        <Box padding={trbl(12, 18)}>
                                            <Text>{this.props.emptyText}</Text>
                                        </Box>
                                    )) ||
                                        this.filterOptions().map((option, index) => {
                                            const optionState = { isSelected: option.value === this.props.value };
                                            const isTargeted = index === this.state.optionPointer;

                                            return (
                                                <Option
                                                    label={option.label}
                                                    isSelected={optionState.isSelected}
                                                    isTargeted={isTargeted}
                                                    key={`${option.value}-${option.label}`}
                                                    onMouseEnter={(): void => this.cycleTo(index)}
                                                    onClick={(): void => {
                                                        this.handleChange(option.value);
                                                    }}
                                                    data-testid={
                                                        this.props['data-testid']
                                                            ? `${this.props['data-testid']}-option-${option.value}${
                                                                  isTargeted ? '-targeted' : ''
                                                              }`
                                                            : undefined
                                                    }
                                                    content={
                                                        this.props.renderOption !== undefined
                                                            ? this.props.renderOption(option, optionState)
                                                            : undefined
                                                    }
                                                />
                                            );
                                        })}
                                </div>
                            </ScrollBox>
                        </StyledWindow>
                    </StyledWindowWrapper>,
                    document.body,
                )}
            </StyledWrapper>
        );
    }
}

export default withTheme(Select);
export { PropsType, StateType, OptionBaseType, OptionStateType };
