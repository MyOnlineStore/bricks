import React, { FC, ReactNode, useState } from 'react';
import Box from '../Box';
import Text from '../Text';
import { StyledImageRadioSkin, StyledLabel } from './style';
import { boxProps, flexProps, flex, box } from '../../utility/box';

export type PropsType = typeof flex.props &
    typeof box.props & {
        checked: boolean;
        image: ReactNode | HTMLImageElement;
        disabled?: boolean;
        error?: boolean;
        value: string;
        name: string;
        id?: string;
        label: ReactNode;
        'data-testid'?: string;
        onChange(change: { checked: boolean; value: string }): void;
    };

const ImageRadio: FC<PropsType> = props => {
    const [isFocussed, setFocus] = useState(false);
    const [isHovering, setHover] = useState(false);

    const toggleFocus = (): void => {
        setFocus(!isFocussed);
    };

    const handleChange = (): void => {
        if (!props.disabled) {
            props.onChange({
                checked: !props.checked,
                value: props.value,
            });
        }
    };

    return (
        <Box
            $grow={0}
            {...flexProps(props)}
            {...boxProps(props)}
            onClick={handleChange}
            onMouseOver={() => {
                setHover(true);
            }}
            onMouseLeave={() => {
                setHover(false);
            }}
            $alignItems="center"
            $direction="column"
        >
            <StyledImageRadioSkin
                elementFocus={isFocussed}
                elementHover={isHovering}
                checked={props.checked}
                disabled={props.disabled}
                error={props.error}
            >
                {props.image}

                <input
                    type="radio"
                    onFocus={toggleFocus}
                    onBlur={toggleFocus}
                    onChange={handleChange}
                    checked={props.checked}
                    disabled={props.disabled ? props.disabled : false}
                    name={props.name}
                    value={props.value}
                    id={props.id}
                    aria-labelledby={props.name}
                    data-testid={props['data-testid']}
                    style={{ position: 'absolute', width: '0', opacity: '0' }}
                />
            </StyledImageRadioSkin>
            <Text variant={props.disabled ? 'info' : undefined}>
                <Box inline direction="row" align-items="center">
                    <StyledLabel checked={props.checked} id={props.name} htmlFor={props.name}>
                        {props.label}
                    </StyledLabel>
                </Box>
            </Text>
        </Box>
    );
};

export default ImageRadio;
