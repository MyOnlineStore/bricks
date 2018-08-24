import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import { PropsType } from '.';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';
import Button from '../Button';

// type MultiButtonVariantStylesType = {
//     backgroundColor: string;
//     borderColor: string;
//     color: string;
//     boxShadow: string;
//     textDecoration: string;
// };

type MultiButtonThemeType = {
    backgroundColor: string;
    secondaryColor: string;
    borderRadius: string;
};

type MultiButtonPropsType = {};

const StyledMultiButton = styled(Button)`
    padding-right: 0px;
`;

const INNER_OFFSET: number = 6;

type WindowProps = {
    isOpen: boolean;
    rect?: ClientRect;
};

const StyledChevron = styled.div`
    display: flex;
    align-items: center;
    padding: 0 12px;
    margin: -11px 0 -11px 24px;
    max-width: 40%;
    border-left: solid 1px #dbdfe6;
`;

const StyledWrapper = styled.div``;

const StyledWindow = withProps<WindowProps, HTMLDivElement>(styled.div)`
    box-sizing: border-box;
    background: ${({ theme }): string => theme.MultiButton.backgroundColor}
    position: absolute;
    overflow: hidden;
    ${({ isOpen }): string => (!isOpen ? 'cursor: pointer' : '')};
    z-index: 1000;
    top: ${({ rect }): string => (rect !== undefined ? `${rect.top + rect.height + INNER_OFFSET}px` : '')};
    left: ${({ rect }): string => (rect !== undefined ? `${rect.left - INNER_OFFSET}px` : '')};
    width: 350px;
    padding-top: 0;    
    border: ${({ isOpen }): string => (isOpen ? 'solid 1px #DBDFE6' : 'solid 0px transparent')}
    border-radius: ${({ theme }): string => theme.MultiButton.borderRadius};
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    ${({ isOpen }): string => (!isOpen ? 'cursor: pointer' : '')};
    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.10);
`;

export default StyledMultiButton;
export { StyledMultiButton, StyledWrapper, StyledWindow, StyledChevron, MultiButtonThemeType };
