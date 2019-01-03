import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled from '../../utility/_styled';

type IllustrationThemeType = {
    size: string;
};

const StyledIllustration = styled.div`
    svg {
        height: 100%;
        width: 100%;
        max-height: ${({ theme }): string => theme.Illustration.size};
        max-width: ${({ theme }): string => theme.Illustration.size};
    }
`;

export { IllustrationThemeType, StyledIllustration };
