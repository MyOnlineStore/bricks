import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import RecursivePartialType from '../../types/RecursivePartialType';
import ThemeType from '../../types/ThemeType';
import styled from '../../utility/styled';

type ContrastThemeType = {
    overides: RecursivePartialType<ThemeType>;
    default: {
        background: string;
    };
};

const StyledContrast = styled.div`
    background: ${({ theme }): string => theme.Contrast.default.background};
`;

const withContrastStyles = StyledContrast.withComponent;

export default StyledContrast;
export { ContrastThemeType, withContrastStyles };
