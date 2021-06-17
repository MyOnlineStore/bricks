import React, { FC, ReactNode } from 'react';
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
            {...flexProps(props)}
            {...boxProps(props)}
            onClick={handleChange}
            $alignItems="center"
            $grow={0}
            $direction="column"
        >
            <Box margin={[3, 12, 12, 0]}>
                <StyledImageRadioSkin checked={props.checked} disabled={props.disabled} error={props.error}>
                    {props.image}
                </StyledImageRadioSkin>
            </Box>
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
