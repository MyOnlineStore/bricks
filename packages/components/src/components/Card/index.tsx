import React, { FC, ReactNode } from 'react';
import { StyledCard, StyledLabel, StyledContent, StyledFoldoutIcon, StyledClickArea } from './style';
import FoldOut from '../FoldOut';
import Text from '../Text';
import Box from '../Box';
import Toggle from '../Toggle';
import { ChevronDownSmallIcon } from '@myonlinestore/bricks-assets';
import Icon from '../Icon';

export type PropsType = {
    label: ReactNode;
    description?: ReactNode;
    content?: ReactNode;
    open?: boolean;
    checked?: boolean;
    disabled?: boolean;
    'data-testid'?: string;
    onClick?(): void;
    onChange?(value: boolean): void;
};

/**
 * Card component for structuring content and fold if necessary
 *
 * @param label
 * Required ReactNode
 * @param description
 * Optional ReactNode to display below the label in descriptive text style
 * @param content
 * Optional ReactNode
 * @param open
 * Determines Foldout state. Must be used in combination with the content prop to make it foldable
 * @param checked
 * Determines the Toggle checked state.
 * @param disabled
 * Disables the Toggle
 * @param onClick
 * Callback for the label click area.
 * @param onChange
 * Callback for the Toggle. Must be used in combination with the checked prop to show the Toggle.
 */

const Card: FC<PropsType> = props => {
    const onClick = (): void => {
        if (props.onClick) {
            props.onClick();
        }
    };

    const toggle = ({ checked }: { checked: boolean }): void => {
        if (props.onChange) {
            props.onChange(checked);
        }
    };

    return (
        <StyledCard data-testid={props['data-testid']}>
            <Box direction="column">
                <Box direction="row">
                    {props.checked !== undefined && (
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
                    <StyledClickArea
                        onClick={onClick}
                        switchable={props.checked !== undefined}
                        foldable={props.open !== undefined && props.content !== undefined}
                        data-testid={props['data-testid'] ? `${props['data-testid']}-click-area` : undefined}
                    >
                        <StyledLabel data-testid={props['data-testid'] ? `${props['data-testid']}-label` : undefined}>
                            {props.label}
                        </StyledLabel>
                        {props.description && (
                            <Text
                                variant="descriptive"
                                data-testid={props['data-testid'] ? `${props['data-testid']}-description` : undefined}
                            >
                                {props.description}
                            </Text>
                        )}
                    </StyledClickArea>
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
                        <StyledContent
                            switchable={props.checked !== undefined}
                            data-testid={props['data-testid'] ? `${props['data-testid']}-content` : undefined}
                        >
                            {props.content}
                        </StyledContent>
                    </FoldOut>
                )}
                {props.open === undefined && props.content !== undefined && (
                    <StyledContent
                        switchable={props.checked !== undefined}
                        data-testid={props['data-testid'] ? `${props['data-testid']}-content` : undefined}
                    >
                        {props.content}
                    </StyledContent>
                )}
            </Box>
        </StyledCard>
    );
};

export default Card;
