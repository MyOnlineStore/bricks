import {  ClassAttributes as _C, HTMLAttributes as _H } from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled from '../../utility/styled';
import { PopoverArrowPropsType } from './Popover.template';

const PopoverAnchor = styled.div`
    display: inline-block;
`;

const PopoverBackground = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    box-shadow: 0 1px 12px rgba(0,0,0,.2);
    background: ${({ theme }):string => theme.Popover.background};
    border-radius: ${({ theme }):number => theme.Popover.borderRadius}px;
`;

const PopoverContent = styled.div`
    position: relative;
    z-index: 4;
`;

const PopoverWindow = styled.div`
    max-width: 500px;
`;

const PopoverArrow = styled.div`
    position: absolute;
    width: 16px;
    height: 16px;
    background: ${({ theme }):string => theme.Popover.background};

    ${({ placement }:PopoverArrowPropsType):string => {
        const pointerSize:number = 16;

        switch (placement) {
            case 'left':
            case 'left-start':
            case 'left-end':
                return `
                    right: ${-pointerSize / 2}px;
                    transform: scaleX(.75) rotate(45deg);
                `;
            case 'right':
            case 'right-start':
            case 'right-end':
                return `
                    left: ${-pointerSize / 2}px;
                    transform: scaleX(.75) rotate(45deg);
                `;
            case 'top':
            case 'top-start':
            case 'top-end':
                return `
                    bottom: ${-pointerSize / 2}px;
                    transform: scaleY(.75) rotate(45deg);
                `;
            default:
                return `
                    top: ${-pointerSize / 2}px;
                    transform: scaleY(.75) rotate(45deg);
                `;
        }
    }}

    ${({ theme, shadow }):string => shadow
        ? `
            box-shadow: 0 1px 12px rgba(0 , 0, 0, .2);
            z-index: 1;
        ` : `
            background: ${theme.Popover.background};
            z-index: 3;
        `
    }
`;

export {
    PopoverAnchor,
    PopoverArrow,
    PopoverBackground,
    PopoverContent,
    PopoverWindow,
};
