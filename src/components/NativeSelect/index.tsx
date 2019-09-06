import React, { FC, useState, ChangeEvent } from 'react';
import { StyledSelect } from './style';
import chevronDown from '../../assets/icons/chevron-down-small.svg';
import chevronUp from '../../assets/icons/chevron-up-small.svg';
import Icon from '../Icon';

type OptionType = {
    value: string;
    label: string;
};

type PropsType = {
    options: Array<OptionType>;
    value: OptionType['value'];
    disabled?: boolean;
    'data-testid'?: string;
    onChange(value: string, event: ChangeEvent): void;
};

const NativeSelect: FC<PropsType> = (props): JSX.Element => {
    const [hasFocus, setFocus] = useState(false);
    const [isOpen, setOpen] = useState(false);

    return (
        <StyledSelect focus={hasFocus} disabled={props.disabled} data-testid={props['data-testid']}>
            <select
                onFocus={() => setFocus(true)}
                onBlur={() => {
                    setFocus(false);
                    setOpen(false);
                }}
                onClick={() => setOpen(true)}
                onChange={(event: ChangeEvent<HTMLSelectElement>): void => {
                    event.stopPropagation();
                    setOpen(false);
                    props.onChange(event.target.value, event);
                }}
                value={props.value}
                disabled={props.disabled}
            >
                {props.options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <Icon size="small" icon={isOpen ? chevronUp : chevronDown} />
        </StyledSelect>
    );
};

export default NativeSelect;
