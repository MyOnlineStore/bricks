import React, { FC, useState } from 'react';
import trbl from '../../utility/trbl';
import Box from '../Box';
import Text from '../Text';
import Icon from '../Icon';
import { LockedIcon } from '@myonlinestore/bricks-assets';
import StyledRadioButton, { StyledRadioButtonSkin, StyledRadioWrapper } from './style';

type StateType = {
    focus: boolean;
};

type PropsType = {
    checked: boolean;
    disabled?: boolean;
    error?: boolean;
    value: string;
    name: string;
    id?: string;
    label: string;
    'data-testid'?: string;
    onChange(change: { checked: boolean; value: string }): void;
};

const RadioButton: FC<PropsType> = props => {
    const [isFocussed, setFocus] = useState(false);

    const toggleFocus = (): void => {
        setFocus(!isFocussed);
    };

    const handleChange = (): void => {
        props.onChange({
            checked: !props.checked,
            value: props.value,
        });
    };

    return (
        <StyledRadioWrapper onClick={handleChange}>
            <Box margin={props.disabled ? trbl(0, 6, 0, 0) : trbl(0, 12, 0, 0)}>
                <StyledRadioButtonSkin
                    elementFocus={isFocussed}
                    checked={props.checked}
                    disabled={props.disabled}
                    error={props.error}
                >
                    <StyledRadioButton
                        onFocus={toggleFocus}
                        onBlur={toggleFocus}
                        onChange={handleChange}
                        checked={props.checked}
                        type="radio"
                        name={props.name}
                        value={props.value}
                        id={props.id}
                        aria-labelledby={props.name}
                        data-testid={props['data-testid']}
                    />
                </StyledRadioButtonSkin>
            </Box>
            <Text variant={props.disabled ? 'info' : undefined}>
                <Box inline direction="row" align-items="center">
                    {props.disabled && (
                        <Box inline margin={trbl(0, 12, 0, 0)}>
                            <Icon size="medium" icon={LockedIcon} />{' '}
                        </Box>
                    )}
                    <label id={props.name} htmlFor={props.name}>
                        {props.label}
                    </label>
                </Box>
            </Text>
        </StyledRadioWrapper>
    );
};

export default RadioButton;
export { PropsType, StateType };
