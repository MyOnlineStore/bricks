import React, { FC, RefObject, Children } from 'react';
import ScrollBox from '../ScrollBox';
import Box from '../Box';
import { createPortal } from 'react-dom';
import Text from '../Text';
import styled from 'styled-components';
import { INNER_OFFSET } from './style';

type ContainerPropsType = {
    open: boolean;
    rect?: ClientRect;
    inputHeight?: number;
};

const SelectModalContainer = styled.div<ContainerPropsType>`
    box-sizing: border-box;
    position: fixed;
    max-height: 240px;
    top: ${({ rect, inputHeight }) =>
        rect !== undefined && inputHeight !== undefined ? `${rect.top + INNER_OFFSET + inputHeight}px` : ''};
    left: ${({ rect }) => (rect !== undefined ? `${rect.left - INNER_OFFSET}px` : '')};
    width: ${({ rect }) => (rect !== undefined ? `${rect.width + INNER_OFFSET + 6}px` : '')};
    padding-top: ${({ open }) => (open ? '6px' : '0')};
    background: ${({ theme }) => theme.Select.common.background};
    border: ${({ theme, open }) => (open ? `solid 1px ${theme.Select.common.borderColor}` : 'solid 0px transparent')};
    border-top: none;
    border-radius: ${({ theme }) => theme.Select.common.borderRadius};
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    ${({ open }) => (!open ? 'cursor: pointer' : '')};
    z-index: 1000;
`;

const SelectModal: FC<{
    isOpen: boolean;
    'data-testid'?: string;
    emptyText: string;
    inputHeight: number;
    anchorRef: RefObject<HTMLDivElement | null>;
    modalRef: RefObject<HTMLDivElement>;
}> = props => {
    return createPortal(
        <SelectModalContainer
            id="select-window"
            ref={props.modalRef}
            open={props.isOpen}
            rect={props.anchorRef.current?.getBoundingClientRect()}
            inputHeight={props.inputHeight}
            role="listbox"
            data-testid={
                props['data-testid'] ? `${props['data-testid']}-window${props.isOpen ? '-open' : '-closed'}` : undefined
            }
        >
            <ScrollBox autoHideScrollBar={false} showInsetShadow={false}>
                <div style={{ overflow: 'hidden', display: props.isOpen ? 'block' : 'none' }}>
                    {(Children.count(props.children) === 0 && (
                        <Box padding={[12, 18]}>
                            <Text
                                data-testid={props['data-testid'] ? `${props['data-testid']}-window-empty` : undefined}
                            >
                                {props.emptyText}
                            </Text>
                        </Box>
                    )) ||
                        props.children}
                </div>
            </ScrollBox>
        </SelectModalContainer>,
        document.body,
    );
};

export default SelectModal;
