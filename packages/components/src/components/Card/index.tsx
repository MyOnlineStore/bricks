import React, { FC, ReactNode } from 'react';
import { StyledCardWrapper, StyledLabel, StyledToggleIcon } from './style';
import FoldOut from '../FoldOut';
import Text from '../Text';
import Box from '../Box';
import Toggle from '../Toggle';
import { ChevronDownSmallIcon } from '@myonlinestore/bricks-assets';
import Icon from '../Icon';
import { OffsetType } from '../../types/OffsetType';

export type PropsType = {
    checked?: boolean;
    disabled?: boolean;
    open?: boolean;
    label: ReactNode;
    description?: ReactNode;
    content?: ReactNode;
    onClick?(): void;
    onChange?(value: boolean): void;
};

const Card: FC<PropsType> = props => {
    const toggle = ({ checked }: { checked: boolean }): void => {
        if (props.onChange) {
            props.onChange(checked);
        }
    };

    return (
        <StyledCardWrapper>
            <Box direction="column">
                <Box direction="row">
                    {props.checked !== undefined && props.onChange && (
                        <Box padding={[18, 0, 18, 18]}>
                            <Toggle
                                onChange={toggle}
                                checked={props.checked}
                                disabled={props.disabled}
                                value=""
                                name={'Card toggle'}
                            />
                        </Box>
                    )}
                    <StyledLabel
                        direction="column"
                        padding={props.checked !== undefined ? [18, 24, 18, 0] : [18, 24]}
                        onClick={props.onClick}
                        grow={1}
                        basis="auto"
                        foldable={props.open !== undefined && props.content !== undefined}
                    >
                        <div>{props.label}</div>
                        {props.description && <Text variant="descriptive">{props.description}</Text>}
                    </StyledLabel>
                    {props.open !== undefined && props.content !== undefined && (
                        <StyledToggleIcon open={props.open}>
                            <Icon icon={<ChevronDownSmallIcon />} size="small" />
                        </StyledToggleIcon>
                    )}
                </Box>
                {props.open !== undefined && props.content !== undefined && (
                    <FoldOut open={props.open}>
                        <Box padding={props.checked !== undefined ? [0, 24, 18, 64 as OffsetType] : [0, 24, 18]}>
                            {props.content}
                        </Box>
                    </FoldOut>
                )}
                {props.open === undefined && props.content !== undefined && (
                    <Box padding={props.checked !== undefined ? [0, 24, 18, 64 as OffsetType] : [0, 24, 18]}>
                        {props.content}
                    </Box>
                )}
            </Box>
        </StyledCardWrapper>
    );
};

export default Card;
