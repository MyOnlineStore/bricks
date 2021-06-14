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
import SelectSearch from './SelectSearch';
import SelectOptionGroup from './SelectOptionGroup';
import SelectedOption from './SelectedOption';
import SelectList from './SelectList';
import { flexProps, boxProps, flex, box } from '../../utility/box';

type OptionBaseType = {
    value: string;
    label: string;
};

type OptionStateType = {
    isSelected: boolean;
};

type PropsType<GenericOptionType extends OptionBaseType> = typeof flex.props &
    typeof box.props & {
        children?: ReactNode;
        theme: ThemeType;
        placeholder?: string;
        value: string;
        options?: Array<GenericOptionType>;
        emptyText: string;
        disabled?: boolean;
        search?: ReactNode;
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
    options: [] as Array<OptionBaseType>,
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

/**
 * This Select component renders a non-native select component that has the option to:
 * - custom render it's options
 * - add hierarchy to it's options
 * - optionally add a search bar to filter options
 *
 * If you need none of these features, please refer to the <NativeSelect /> since it has
 * better performance on large sets and provides a better UI on mobile devices.
 */

const Select = <GenericOptionType extends OptionBaseType>(props: PropsType<GenericOptionType>): ReactElement => {
    const initialRender = useRef(true);
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const modalRef = useRef<HTMLDivElement | null>(null);
    const [hasFocus, setFocus] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const [targeted, setTarget] = useState('');
    const [filter, setFilter] = useState('');
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

    /**
     * Avoid adding any state changes to this handler since it can cause UI yank, rather
     * use the useEffect below to react to a change in `props.value`.
     */
    const handleChange = (value: string) => {
        props.onChange(value);
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
        if (!wrapperRef.current?.contains(event.target as Node) && !modalRef.current?.contains(event.target as Node)) {
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

    /**
     * Since this Select can only be used when controlled by external state, this useEffect is the
     * primary way to handle any actions that follow after a changed value. That way all logic is
     * normalized for either external state changes as well as changes triggered by the Select itself.
     */
    useEffect(() => {
        selectOption(getSelectedOption(props.value));
        setOpen(false);
        setTarget('');
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
        if (!isOpen && !initialRender.current) {
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
                options: options.current,
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
                {...flexProps(props)}
                {...boxProps(props)}
            >
                <SelectedOption
                    selected={props.renderSelected?.(selectedOption)}
                    selectedOption={selectedOption}
                    placeholder={props.placeholder || ''}
                    data-testid={props['data-testid']}
                />
                <SelectModal
                    isOpen={isOpen}
                    anchorRef={wrapperRef}
                    modalRef={modalRef}
                    data-testid={props['data-testid']}
                >
                    {props.search}
                    <SelectList isOpen={isOpen} emptyText={props.emptyText || ''} data-testid={props['data-testid']}>
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
                    </SelectList>
                </SelectModal>
            </StyledWrapper>
        </SelectContext.Provider>
    );
};

const SelectWithTheme = withTheme(Select);

SelectOption.displayName = 'Select.Option';
SelectOptionGroup.displayName = 'Select.OptionGroup';

/**
 * We cast Select here because we are unable to extend the type of
 * Select with the type argument on the definition
 */

type SelectType = typeof SelectWithTheme & {
    Search: typeof SelectSearch;
    Option: typeof SelectOption;
    OptionGroup: typeof SelectOptionGroup;
};

(SelectWithTheme as SelectType).Search = SelectSearch;
(SelectWithTheme as SelectType).Option = SelectOption;
(SelectWithTheme as SelectType).OptionGroup = SelectOptionGroup;

export default SelectWithTheme as SelectType;

export { PropsType, OptionBaseType, OptionStateType };
