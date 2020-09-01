import React, { ReactNode, MouseEvent } from 'react';
import { StyledContent, StyledFoldoutIcon, StyledLabel } from './style';
import FoldOut from '../FoldOut';
import Box from '../Box';
import { ChevronDownSmallIcon } from '@myonlinestore/bricks-assets';
import Icon from '../Icon';

export type PropsType = {
    label: ReactNode;
    open: boolean;
    children?: ReactNode;
    'data-testid'?: string;
    onClick?(): void;
};

/**
 * Accordion component for folding secondary content
 *
 * @param label
 * Required ReactNode
 * @param open
 * Determines Foldout state
 * @param onClick
 * Callback for the click area
 */

const Accordion = (props: PropsType) => {
    const onClick = (event: MouseEvent): void => {
        event.stopPropagation();

        if (props.onClick) {
            props.onClick();
        }
    };

    return (
        <Box direction="column" grow={1} data-testid={props['data-testid']}>
            <Box direction="row" position="relative" alignItems="flex-start">
                <StyledLabel
                    onClick={onClick}
                    data-testid={props['data-testid'] ? `${props['data-testid']}-label` : undefined}
                >
                    {props.label}
                </StyledLabel>
                <StyledFoldoutIcon
                    onClick={onClick}
                    open={props.open}
                    data-testid={props['data-testid'] ? `${props['data-testid']}-foldout-icon` : undefined}
                >
                    <Icon icon={<ChevronDownSmallIcon />} size="small" />
                </StyledFoldoutIcon>
            </Box>
            <FoldOut
                open={props.open}
                data-testid={props['data-testid'] ? `${props['data-testid']}-foldout` : undefined}
            >
                <StyledContent data-testid={props['data-testid'] ? `${props['data-testid']}-content` : undefined}>
                    {props.children}
                </StyledContent>
            </FoldOut>
        </Box>
    );
};

export default Accordion;
