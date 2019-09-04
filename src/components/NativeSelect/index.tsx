import React, { FC, useState, ChangeEvent } from 'react';
import { StyledSelect } from './style';
import chevronDown from '../../assets/icons/chevron-down-small.svg';
import chevronUp from '../../assets/icons/chevron-up-small.svg';
import Icon from '../Icon';

export type SimpleSelectOptionType = {
    value: string;
    label: string;
};

type PropsType = {
    options: Array<SimpleSelectOptionType>;
    value: SimpleSelectOptionType['value'];
    disabled?: boolean;
    onChange(value: string, event: ChangeEvent): void;
};

const NativeSelect: FC<PropsType> = (props): JSX.Element => {
    const [focus, setFocus] = useState(false);
    const [open, setOpen] = useState(false);

    return (
        <StyledSelect focus={focus} disabled={false}>
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
            >
                {props.options.map((option, index) => (
                    <option key={`option_${index}`} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <Icon size="small" icon={open ? chevronUp : chevronDown} />
        </StyledSelect>
    );
};

export default NativeSelect;
