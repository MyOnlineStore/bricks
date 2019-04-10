import React, { useState, MouseEvent, FC } from 'react';
import Icon from '../Icon';
import { StyledCheckbox, StyledCheckboxSkin } from './style';
import Box from '../Box';
import checkmark from '../../assets/icons/checkmark-small.svg';
import minus from '../../assets/icons/minus.svg';
import Text from '../Text';

type StateType = {
    focus: boolean;
};

type PropsType = {
    checked: boolean | 'indeterminate';
    disabled?: boolean;
    error?: boolean;
    value: string;
    name: string;
    label?: string;
    id?: string;
    'data-testid'?: string;
    onChange(change: { checked: boolean | 'indeterminate'; event: MouseEvent<HTMLDivElement> }): void;
};

const Checkbox: FC<PropsType> = props => {
    const htmlChecked = props.checked === true;
    const [focus, setFocus] = useState(false);

    const toggleFocus = (): void => {
        setFocus(!focus);
    };

    const changeHandler = (event: MouseEvent<HTMLDivElement>): void => {
        props.onChange({
            checked: !(props.checked === true),
            event,
        });
    };

    return (
        <Box onClick={changeHandler} data-testid={props['data-testid']}>
            <Box shrink={0}>
                <StyledCheckboxSkin
                    checkedState={props.checked}
                    elementFocus={focus}
                    disabled={props.disabled}
                    error={props.error}
                >
                    <Box justifyContent="center" alignItems="center" height="100%">
                        {props.checked === true && <Icon size="small" color="#fff" icon={checkmark} />}
                        {props.checked === 'indeterminate' && <Icon size="small" color="#fff" icon={minus} />}
                    </Box>
                    <StyledCheckbox
                        onFocus={toggleFocus}
                        onBlur={toggleFocus}
                        readOnly
                        name={props.name}
                        value={props.value}
                        id={props.id}
                        checked={htmlChecked}
                        type="checkbox"
                    />
                </StyledCheckboxSkin>
            </Box>
            {props.label !== undefined && (
                <Box margin={[-3, 0, 0, 12]}>
                    <Text>
                        <label htmlFor={props.name}>{props.label}</label>
                    </Text>
                </Box>
            )}
        </Box>
    );
};

export default Checkbox;
export { PropsType, StateType };
