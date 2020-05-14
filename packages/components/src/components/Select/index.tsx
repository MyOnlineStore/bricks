import React, {
    KeyboardEvent,
    useRef,
    FormEvent,
    useState,
    useEffect,
    ReactElement,
    createContext,
    ReactNode,
} from 'react';
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
    children?: ReactNode;
    theme: ThemeType;
    placeholder?: string;
    value: string;
    options?: Array<GenericOptionType>;
    emptyText: string;
    disabled?: boolean;
    'data-testid'?: string;
    onChange(value: string): void;
    renderOption?(option: GenericOptionType, state: OptionStateType): JSX.Element;
    renderSelected?(option: GenericOptionType): JSX.Element;
};

const PROVIDER_WARNING = 'SelectContext was not yet intialized';

export const SelectContext = createContext({
    filter: '',
    isOpen: false,
    isDisabled: false,
    hasFocus: false,
    targeted: '',
    selectedOption: { value: '', label: '' },
    setTarget(value: string) {
        console.warn(`${PROVIDER_WARNING}, could not set target to value: "${value}"`);
    },
    addOption(option: { value: string; label: string }) {
        console.warn(`${PROVIDER_WARNING}, could not add option with value: "${option.value}"`);
    },
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
    const [targeted, setTarget] = useState('');
    const [filter, setFilter] = useState('');
    const inputHeight = inputWrapperRef.current?.getBoundingClientRect().height || 0;
    const options = useRef<Array<OptionBaseType>>([]);

    const getSelectedOption = (value: string) => {
        const selectedOption =
            props.options?.reduce(
                (found, option) => {
                    return option.value === value ? option : found;
                },
                // tslint:disable-next-line:no-object-literal-type-assertion
                { value: '', label: '' } as GenericOptionType,
            ) ||
            ((options.current.find(option => option.value === value) || {
                value: '',
                label: '',
            }) as GenericOptionType);

        return selectedOption;
    };

    const [selectedOption, selectOption] = useState(getSelectedOption(props.value));

    const handleChange = (value: string) => {
        props.onChange(value);
        selectOption(getSelectedOption(value));
        setOpen(false);
        setTarget('');
    };

    const handleChangeEvent = (event: FormEvent<HTMLDivElement>) => {
        // tslint:disable-next-line
        handleChange((event as any).target.value);
    };

    const handleFilter = (filter: string) => {
        options.current = [];
        setTarget('');
        setFilter(filter);
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
        const currentIndex = options.current.findIndex(option => targeted === option.value);

        if (currentIndex > 0) {
            setTarget(options.current[currentIndex - 1].value);
        }
    };

    const cycleDown = () => {
        const currentIndex = options.current.findIndex(option => targeted === option.value);

        if (currentIndex < options.current.length - 1) {
            setTarget(options.current[currentIndex + 1].value);
        }
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
            if (event.key === 'ArrowUp') cycleUp();
            if (event.key === 'ArrowDown') cycleDown();
            if (event.key === 'Tab') event.preventDefault();
        }

        if (isOpen && (event.key === 'Enter' || event.key === ' ') && targeted !== '') {
            handleChange(targeted);
        }
    };

    const addOption = (newOption: OptionBaseType) => {
        if (options.current.findIndex(option => option.value === newOption.value) === -1) {
            options.current.push(newOption);
        }
    };

    useEffect(() => {
        selectOption(getSelectedOption(props.value));
    }, [props.value]);

    /**
     * Reset the targets when the options or children change
     */
    useEffect(() => {
        options.current = [];
    }, [props.children, props.options]);

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

    useEffect(() => {
        initialRender.current = false;
    }, []);

    return (
        <SelectContext.Provider
            value={{
                selectedOption,
                filter,
                isOpen,
                isDisabled: props.disabled || false,
                hasFocus,
                targeted,
                setOpen,
                setFilter: handleFilter,
                setValue: handleChange,
                setTarget,
                addOption,
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
                    {props.options?.map(option => {
                        const optionState = { isSelected: option.value === props.value };

                        return (
                            <SelectOption
                                label={option.label}
                                value={option.value}
                                key={`${option.value}-${option.label}`}
                                data-testid={
                                    props['data-testid']
                                        ? `${props['data-testid']}-option-${option.value}${
                                              option.value === targeted ? '-targeted' : ''
                                          }`
                                        : undefined
                                }
                            >
                                {props.renderOption?.(option, optionState)}
                            </SelectOption>
                        );
                    }) || props.children}
                </SelectModal>
            </StyledWrapper>
        </SelectContext.Provider>
    );
};

const SelectWithTheme = withTheme(Select);

SelectOption.displayName = 'Select.Option';

/**
 * We cast Select here because we are unable to extend the type of
 * Select with the type argument on the definition
 */
(SelectWithTheme as typeof SelectWithTheme & { Option: typeof SelectOption }).Option = SelectOption;

export default SelectWithTheme as typeof SelectWithTheme & { Option: typeof SelectOption };

export { PropsType, OptionBaseType, OptionStateType };
