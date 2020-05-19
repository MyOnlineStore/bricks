import React, { FC, ReactNode } from 'react';
import { StyledCardWrapper, StyledLabel, StyledFoldoutIcon } from './style';
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
    'data-testid'?: string;
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
        <StyledCardWrapper data-testid={props['data-testid']}>
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
                                data-testid={props['data-testid'] ? `${props['data-testid']}-toggle` : undefined}
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
                        <div data-testid={props['data-testid'] ? `${props['data-testid']}-label` : undefined}>
                            {props.label}
                        </div>
                        {props.description && (
                            <Text
                                variant="descriptive"
                                data-testid={props['data-testid'] ? `${props['data-testid']}-description` : undefined}
                            >
                                {props.description}
                            </Text>
                        )}
                    </StyledLabel>
                    {props.open !== undefined && props.content !== undefined && (
                        <StyledFoldoutIcon
                            open={props.open}
                            data-testid={props['data-testid'] ? `${props['data-testid']}-foldout-icon` : undefined}
                        >
                            <Icon icon={<ChevronDownSmallIcon />} size="small" />
                        </StyledFoldoutIcon>
                    )}
                </Box>
                {props.open !== undefined && props.content !== undefined && (
                    <FoldOut
                        open={props.open}
                        data-testid={props['data-testid'] ? `${props['data-testid']}-foldout` : undefined}
                    >
                        <Box
                            padding={props.checked !== undefined ? [12, 24, 18, 64 as OffsetType] : [12, 24, 18]}
                            data-testid={props['data-testid'] ? `${props['data-testid']}-content` : undefined}
                        >
                            <div>{props.content}</div>
                        </Box>
                    </FoldOut>
                )}
                {props.open === undefined && props.content !== undefined && (
                    <Box
                        padding={props.checked !== undefined ? [12, 24, 18, 64 as OffsetType] : [12, 24, 18]}
                        data-testid={props['data-testid'] ? `${props['data-testid']}-content` : undefined}
                    >
                        <div>{props.content}</div>
                    </Box>
                )}
            </Box>
        </StyledCardWrapper>
    );
};

export default Card;
