import React, { KeyboardEvent, useRef, FormEvent, useState, useEffect, ReactElement, createContext } from 'react';
import SelectOption from './SelectOption';
import { StyledWrapper } from './style';
import { withTheme } from 'styled-components';
import ThemeType from '../../types/ThemeType';
import SelectModal from './SelectModal';
import SelectInput from './SelectInput';

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

const PROVIDER_WARNING = 'SelectContext was not yet intialized';

export const SelectContext = createContext({
    value: '',
    filter: '',
    isOpen: false,
    isDisabled: false,
    hasFocus: false,
    setValue(value: string) {
        console.warn(`${PROVIDER_WARNING}, could not set the value to "${value}"`);
    },
    setOpen(open: boolean) {
        console.warn(`${PROVIDER_WARNING}, could not ${open ? 'open' : 'close'} the Select`);
    },
    setFilter(filter: string) {
        console.warn(`${PROVIDER_WARNING}, could not apply filter: "${filter}"`);
    },
});

const Select = <GenericOptionType extends OptionBaseType>(props: PropsType<GenericOptionType>): ReactElement => {
    const initialRender = useRef(true);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const inputWrapperRef = useRef<HTMLDivElement | null>(null);
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const windowRef = useRef<HTMLDivElement | null>(null);
    const [hasFocus, setFocus] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const [optionPointer, setPointer] = useState(-1);
    const [filter, setFilter] = useState(props.value);
    const inputHeight = inputWrapperRef.current?.getBoundingClientRect().height || 0;

    const handleChange = (value: string) => {
        props.onChange(value);
        setOpen(false);
        setPointer(-1);
    };

    const handleChangeEvent = (event: FormEvent<HTMLDivElement>) => {
        // tslint:disable-next-line
        handleChange((event as any).target.value);
    };

    const handleFilter = (filter: string) => {
        setFilter(filter);
        setPointer(-1);
    };

    const handleFocus = () => {
        if (!props.disabled) {
            setFocus(true);
        }
    };

    const handleBlur = () => {
        setFocus(false);
    };

    const cycleUp = () => {
        // @todo: replace index based pointers
        const newPointer = optionPointer < props.options.length - 1 ? optionPointer + 1 : 0;

        setPointer(newPointer);
    };

    const cycleTo = (index: number) => {
        setPointer(index);
    };

    const cycleDown = () => {
        // @todo: replace index based pointers
        const newPointer = optionPointer > 0 ? optionPointer - 1 : props.options.length - 1;

        setPointer(newPointer);
    };

    const close = (): void => {
        setOpen(false);
    };

    const open = (): void => {
        if (!props.disabled) {
            handleFilter('');
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
            // @todo: replace index based pointers
            handleChange(props.options[optionPointer].value);
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
        } else if (!initialRender.current) {
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
        // tslint:disable-next-line:no-object-literal-type-assertion
        { value: '', label: '' } as GenericOptionType,
    );

    useEffect(() => {
        initialRender.current = false;
    }, []);

    return (
        <SelectContext.Provider
            value={{
                value: props.value,
                filter,
                isOpen,
                isDisabled: props.disabled || false,
                hasFocus,
                setOpen,
                setFilter: handleFilter,
                setValue: handleChange,
            }}
        >
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
                <SelectInput
                    selected={props.renderSelected?.(selectedOption)}
                    inputRef={inputRef}
                    inputWrapperRef={inputWrapperRef}
                    placeholder={props.placeholder || ''}
                    selectedOption={selectedOption}
                    data-testid={props['data-testid']}
                />
                <SelectModal
                    isOpen={isOpen}
                    emptyText={props.emptyText}
                    anchorRef={wrapperRef}
                    modalRef={windowRef}
                    inputHeight={inputHeight}
                    data-testid={props['data-testid']}
                >
                    {props.options.map((option, index) => {
                        const optionState = { isSelected: option.value === props.value };
                        const isTargeted = index === optionPointer;

                        return (
                            <SelectOption
                                label={option.label}
                                value={option.value}
                                isTargeted={isTargeted}
                                key={`${option.value}-${option.label}`}
                                onMouseEnter={() => cycleTo(index)}
                                data-testid={
                                    props['data-testid']
                                        ? `${props['data-testid']}-option-${option.value}${
                                              isTargeted ? '-targeted' : ''
                                          }`
                                        : undefined
                                }
                            >
                                {props.renderOption?.(option, optionState)}
                            </SelectOption>
                        );
                    })}
                </SelectModal>
            </StyledWrapper>
        </SelectContext.Provider>
    );
};

export default withTheme(Select);
export { PropsType, OptionBaseType, OptionStateType };
