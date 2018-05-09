import { default as _R } from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';

type ScrollBoxThemeType = {
    scrollbar: {
        background: string;
    };
};

const StyledScrollBox = styled.div`
    position: relative;
    flex-grow: 1;
    overflow: hidden;

    .simplebar-scrollbar::before {
        background: ${({ theme }): string => theme.ScrollBox.scrollbar.background};
    }
`;

export default StyledScrollBox;
export { ScrollBoxThemeType };
