import React, { ChangeEvent, KeyboardEvent, useRef, FormEvent, useState, useEffect, ReactElement } from 'react';
import { createPortal } from 'react-dom';
import Box from '../Box';
import ScrollBox from '../ScrollBox';
import Option from './Option';
import { StyledWrapper, StyledInput, StyledWindow, StyledPlaceholder, StyledSelection, StyledCaret } from './style';
import Text from '../Text';
import trbl from '../../utility/trbl';
import Icon from '../Icon';
import { withTheme } from 'styled-components';
import ThemeType from '../../types/ThemeType';
import { SearchIcon, CaretDownIcon, CaretUpIcon } from '@myonlinestore/bricks-assets';
import colors from '../../themes/MosTheme/colors';
import { OffsetType } from '../../types/OffsetType';

type OptionBaseType = {
    value: string;
    label: string;
};

type OptionStateType = {
    isSelected: boolean;
};

type PropsType<GenericOptionType extends OptionBaseType> = {
    theme: ThemeType;
    placeholder?: string;
    value: string;
    options: Array<GenericOptionType>;
    emptyText: string;
    disabled?: boolean;
    'data-testid'?: string;
    onChange(value: string): void;
    renderOption?(option: GenericOptionType, state: OptionStateType): JSX.Element;
    renderSelected?(option: GenericOptionType): JSX.Element;
};

const Select = <GenericOptionType extends OptionBaseType>(props: PropsType<GenericOptionType>): ReactElement => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const inputWrapperRef = useRef<HTMLDivElement | null>(null);
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const windowRef = useRef<HTMLDivElement | null>(null);
    const [hasFocus, setFocus] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const [optionPointer, setPointer] = useState(-1);
    const [input, setInput] = useState(props.value);
    const inputHeight = inputWrapperRef.current?.getBoundingClientRect().height || 0;

    const filterOptions = (): ReadonlyArray<GenericOptionType> => {
        return props.options.filter(option => option.label.toLowerCase().indexOf(input.toLowerCase()) !== -1);
    };

    const handleChange = (value: string): void => {
        props.onChange(value);
        setOpen(false);
        setPointer(-1);
    };

    const handleChangeEvent = (event: FormEvent<HTMLDivElement>): void => {
        // tslint:disable-next-line
        handleChange((event as any).target.value);
    };

    const handleInput = (input: string): void => {
        setInput(input);
        setPointer(-1);
    };

    const handleFocus = (): void => {
        if (!props.disabled) {
            setFocus(true);
        }
    };

    const handleBlur = (): void => {
        setFocus(false);
    };

    const cycleUp = () => {
        const newPointer = optionPointer < filterOptions().length - 1 ? optionPointer + 1 : 0;

        setPointer(newPointer);
    };

    const cycleTo = (index: number) => {
        setPointer(index);
    };

    const cycleDown = () => {
        const newPointer = optionPointer > 0 ? optionPointer - 1 : filterOptions().length - 1;

        setPointer(newPointer);
    };

    const close = (): void => {
        setOpen(false);
    };

    const open = (): void => {
        if (!props.disabled) {
            handleInput('');
            setOpen(true);
        }
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (!wrapperRef.current?.contains(event.target as Node) && !windowRef.current?.contains(event.target as Node)) {
            close();
        }
    };

    const handleKeyPress = (event: KeyboardEvent<HTMLDivElement>): void => {
        if (!isOpen && (event.key === ' ' || event.key === 'ArrowDown' || event.key === 'ArrowUp')) {
            open();
        }

        if (isOpen) {
            if (event.key === 'Escape') close();
            if (event.key === 'ArrowUp') cycleDown();
            if (event.key === 'ArrowDown') cycleUp();
            if (event.key === 'Tab') event.preventDefault();
        }

        if (isOpen && (event.key === 'Enter' || event.key === ' ') && optionPointer !== -1) {
            handleChange(filterOptions()[optionPointer].value);
        }
    };

    /** If the select becomes disabled while being open, close the select */
    useEffect(() => {
        if (isOpen && props.disabled) {
            setOpen(false);
        }
    }, [isOpen, props.disabled]);

    /** Focus the input field when the field gets opened */
    useEffect(() => {
        if (isOpen) {
            inputRef.current?.focus();
        } else {
            wrapperRef.current?.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const selectedOption = props.options.reduce(
        (found, option) => {
            return option.value === props.value ? option : found;
        },
        { value: '', label: '' },
    );

    return (
        <StyledWrapper
            ref={wrapperRef}
            disabled={props.disabled}
            open={isOpen}
            onKeyDownCapture={handleKeyPress}
            onChange={handleChangeEvent}
            onFocus={handleFocus}
            onBlur={handleBlur}
            tabIndex={props.disabled ? -1 : 0}
            role="combobox"
            aria-label={'select'}
            aria-expanded={isOpen}
            data-testid={props['data-testid']}
        >
            <StyledInput
                open={isOpen}
                focus={hasFocus}
                disabled={props.disabled}
                ref={inputWrapperRef}
                role="searchbox"
                aria-autocomplete="list"
                aria-controls={isOpen ? 'select-window' : undefined}
                data-testid={props['data-testid'] ? `${props['data-testid']}-input` : undefined}
                onClick={!isOpen ? open : undefined}
            >
                <Box alignItems="stretch">
                    {(isOpen && !props.disabled && (
                        // 1px less padding to compensate for the border
                        <Box alignItems="center" padding={[5 as OffsetType, 11 as OffsetType]} grow={1}>
                            <Box alignItems="center" margin={trbl(0, 6, 0, 0)}>
                                <Icon icon={<SearchIcon />} size="small" color={colors.grey400} />
                            </Box>
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder={props.placeholder}
                                value={input}
                                data-testid={props['data-testid'] ? `${props['data-testid']}-input-field` : undefined}
                                onChange={(event: ChangeEvent<HTMLInputElement>): void => {
                                    event.stopPropagation();
                                    handleInput(event.target.value);
                                }}
                            />
                        </Box>
                    )) ||
                        (props.renderSelected !== undefined && selectedOption.value !== '' && (
                            // 1px less padding to compensate for the border
                            <Box padding={[5 as OffsetType, 11 as OffsetType]} alignItems="center" grow={1}>
                                {props.renderSelected(selectedOption as GenericOptionType)}
                            </Box>
                        )) || (
                            // 1px less padding to compensate for the border
                            <Box alignItems="center" padding={[5 as OffsetType, 11 as OffsetType]} grow={1}>
                                {(props.value !== '' && (
                                    <StyledSelection
                                        data-testid={
                                            props['data-testid'] ? `${props['data-testid']}-input-selection` : undefined
                                        }
                                        disabled={props.disabled}
                                    >
                                        {selectedOption.label}
                                    </StyledSelection>
                                )) || (
                                    <StyledPlaceholder
                                        disabled={props.disabled}
                                        data-testid={
                                            props['data-testid'] ? `${props['data-testid']}-placeholder` : undefined
                                        }
                                    >
                                        {props.placeholder}
                                    </StyledPlaceholder>
                                )}
                            </Box>
                        )}
                    <StyledCaret>
                        <Icon
                            icon={isOpen ? <CaretUpIcon /> : <CaretDownIcon />}
                            size="medium"
                            color={
                                props.disabled
                                    ? props.theme.Select.select.disabled.caretColor
                                    : props.theme.Select.select.idle.caretColor
                            }
                            title={isOpen ? 'close' : 'open'}
                        />
                    </StyledCaret>
                </Box>
            </StyledInput>
            {createPortal(
                <StyledWindow
                    id={'select-window'}
                    ref={windowRef}
                    open={isOpen}
                    rect={wrapperRef.current !== null ? wrapperRef.current.getBoundingClientRect() : undefined}
                    inputHeight={inputHeight}
                    role="listbox"
                    data-testid={
                        props['data-testid']
                            ? `${props['data-testid']}-window${isOpen ? '-open' : '-closed'}`
                            : undefined
                    }
                >
                    <ScrollBox autoHideScrollBar={false} showInsetShadow={false}>
                        <div style={{ overflow: 'hidden', display: isOpen ? 'block' : 'none' }}>
                            {(filterOptions().length === 0 && (
                                <Box padding={trbl(12, 18)}>
                                    <Text>{props.emptyText}</Text>
                                </Box>
                            )) ||
                                filterOptions().map((option, index) => {
                                    const optionState = { isSelected: option.value === props.value };
                                    const isTargeted = index === optionPointer;

                                    return (
                                        <Option
                                            label={option.label}
                                            isSelected={optionState.isSelected}
                                            isTargeted={isTargeted}
                                            key={`${option.value}-${option.label}`}
                                            onMouseEnter={(): void => cycleTo(index)}
                                            onClick={(): void => {
                                                handleChange(option.value);
                                            }}
                                            data-testid={
                                                props['data-testid']
                                                    ? `${props['data-testid']}-option-${option.value}${
                                                          isTargeted ? '-targeted' : ''
                                                      }`
                                                    : undefined
                                            }
                                            content={
                                                props.renderOption !== undefined
                                                    ? props.renderOption(option, optionState)
                                                    : undefined
                                            }
                                        />
                                    );
                                })}
                        </div>
                    </ScrollBox>
                </StyledWindow>,
                document.body,
            )}
        </StyledWrapper>
    );
};

export default withTheme(Select);
export { PropsType, OptionBaseType, OptionStateType };
