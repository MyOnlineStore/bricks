import React, { FC, ReactNode, MouseEvent } from 'react';
import { StyledContent, StyledFoldoutIcon, StyledClickArea, StyledLabel } from './style';
import FoldOut from '../FoldOut';
import Box from '../Box';
import { ChevronDownSmallIcon } from '@myonlinestore/bricks-assets';
import Icon from '../Icon';

export type PropsType = {
    label: ReactNode;
    open: boolean;
    'data-testid'?: string;
    onClick?(): void;
};

/**
 * Accordion component for structuring content and fold if necessary
 *
 * @param label
 * Required ReactNode
 * @param open
 * Determines Foldout state. Must be used in combination with the content prop to make it foldable
 * @param onClick
 * Callback for the label click area.
 */

const Accordion: FC<PropsType> = props => {
    const onClick = (event: MouseEvent): void => {
        event.stopPropagation();

        if (props.onClick) {
            props.onClick();
        }
    };

    return (
        <div data-testid={props['data-testid']}>
            <Box direction="column">
                <Box direction="row" position="relative" alignItems="flex-start">
                    <StyledClickArea
                        onClick={onClick}
                        data-testid={props['data-testid'] ? `${props['data-testid']}-click-area` : undefined}
                    />
                    <StyledLabel data-testid={props['data-testid'] ? `${props['data-testid']}-label` : undefined}>
                        {props.label}
                    </StyledLabel>
                    <StyledFoldoutIcon
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
        </div>
    );
};

export default Accordion;
