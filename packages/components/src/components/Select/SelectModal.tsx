import React, { FC, RefObject } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { INNER_OFFSET } from './style';

type ContainerPropsType = {
    open: boolean;
    rect?: ClientRect;
};

const SelectModalContainer = styled.div<ContainerPropsType>`
    box-sizing: border-box;
    position: fixed;
    top: ${({ rect }) => (rect !== undefined ? `${rect.top - INNER_OFFSET}px` : '')};
    left: ${({ rect }) => (rect !== undefined ? `${rect.left - INNER_OFFSET}px` : '')};
    width: ${({ rect }) => (rect !== undefined ? `${rect.width + INNER_OFFSET * 2}px` : '')};
    background: ${({ theme }) => theme.Select.common.background};
    border: ${({ theme, open }) => (open ? `solid 1px ${theme.Select.common.borderColor}` : 'solid 0px transparent')};
    border-radius: ${({ theme }) => theme.Select.common.borderRadius};
    ${({ open }) => (!open ? 'cursor: pointer' : '')};
    z-index: 1000;
`;

const SelectModal: FC<{
    isOpen: boolean;
    anchorRef: RefObject<HTMLDivElement | null>;
    modalRef: RefObject<HTMLDivElement>;
    'data-testid'?: string;
}> = props => {
    return createPortal(
        <SelectModalContainer
            id="select-window"
            ref={props.modalRef}
            open={props.isOpen}
            rect={props.anchorRef.current?.getBoundingClientRect()}
            role="listbox"
            data-testid={
                props['data-testid'] ? `${props['data-testid']}-window${props.isOpen ? '-open' : '-closed'}` : undefined
            }
        >
            {props.children}
        </SelectModalContainer>,
        document.body,
    );
};

export default SelectModal;
