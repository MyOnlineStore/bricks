import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled from '../../utility/styled';

type IllustrationThemeType = {
    size: string;
};

const StyledIllustration = styled.div`
    display: inline-block;
    position: relative;
    svg {
        height: ${({ theme }): string => theme.Illustration.size};
        width: ${({ theme }): string => theme.Illustration.size};
        z-index: 1;
        position: relative;
    }
`;

export { IllustrationThemeType, StyledIllustration };
