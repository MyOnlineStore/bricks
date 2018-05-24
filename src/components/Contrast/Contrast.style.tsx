import { ClassAttributes as _C, HTMLAttributes as _H } from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import RecursivePartial from '../../types/RecursivePartial';
import ThemeType from '../../types/ThemeType';
import styled from '../../utility/styled';

type ContrastThemeType = {
    overides: RecursivePartial<ThemeType>;
    default: {
        background: string;
    };
};

const StyledContrast = styled.div`
    background: ${({ theme }): string => theme.Contrast.default.background};
`;

export default StyledContrast;
export { ContrastThemeType };
