import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import { PropsType } from '.';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';

// type MultiButtonVariantStylesType = {
//     backgroundColor: string;
//     borderColor: string;
//     color: string;
//     boxShadow: string;
//     textDecoration: string;
// };

type MultiButtonThemeType = {
    // common: {
    //     fontSize: string;
    //     fontFamily: string;
    //     fontWeight: string;
    //     borderWidth: string;
    //     borderRadius: string;
    // };
    // idle: MultiButtonVariantStylesType;
    // active: MultiButtonVariantStylesType;
    // focus: MultiButtonVariantStylesType;
    // hover: MultiButtonVariantStylesType;
};

type MultiButtonPropsType = {};

const StyledMultiButton = styled.button`
    // noop
`;

type WindowProps = {
    isOpen: boolean;
};

const StyledWrapper = styled.div``;

const StyledWindow = withProps<WindowProps, HTMLDivElement>(styled.div)`
    box-sizing: border-box;
    position: absolute;
    max-height: 240px;
    overflow: hidden;
    ${({ isOpen }): string => (!isOpen ? 'cursor: pointer' : '')};
    z-index: 1000;
`;

export default StyledMultiButton;
export { StyledWrapper, StyledWindow, MultiButtonThemeType };
