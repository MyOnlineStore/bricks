import React, { FC, useState, ChangeEvent } from 'react';
import { StyledSelect } from './style';
import { CaretDownIcon, CaretUpIcon } from '@myonlinestore/bricks-assets';
import Icon from '../Icon';
import { boxProps, flexProps, flex, box } from '../../utility/box';

type OptionType = {
    value: string;
    label: string;
};

type PropsType = typeof flex.props &
    typeof box.props & {
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
        <StyledSelect
            focus={hasFocus}
            disabled={props.disabled}
            data-testid={props['data-testid']}
            {...flexProps(props)}
            {...boxProps(props)}
        >
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
            <Icon size="medium" icon={isOpen ? <CaretUpIcon /> : <CaretDownIcon />} />
        </StyledSelect>
    );
};

export default NativeSelect;
