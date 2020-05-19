import styled from 'styled-components';
import Box from '../Box';
import StyledIcon from '../Icon/style';
import ThemeTools from '../../themes/CustomTheme/ThemeTools';

type CardThemeType = {
    background: string;
    borderColor: string;
    borderRadius: string;
    toggleColor: string;
};

const StyledCardWrapper = styled.div`
    position: relative;
    background: ${({ theme }) => theme.Card.background};
    border: 1px solid ${({ theme }) => theme.Card.borderColor};
    border-radius: ${({ theme }) => theme.Card.borderRadius};
    flex: 1 1 auto;
`;

const StyledLabel = styled(Box)<{ foldable: boolean }>`
    cursor: ${({ foldable }) => (foldable ? 'pointer' : 'default')};
`;

const StyledFoldoutIcon = styled.div<{ open: boolean }>`
    position: absolute;
    right: 24px;
    top: 24px;
    transform: ${({ open }) => (open ? `rotate(180deg)` : '')};
    transform-origin: 50% 50%;
    transition: transform 200ms;
    pointer-events: none;

    ${StyledIcon} {
        display: block;
        color: ${({ theme }) => theme.Card.toggleColor};
    }
`;

const composeCardTheme = (themeTools: ThemeTools): CardThemeType => {
    const { forms } = themeTools.themeSettings;

    return {
        background: forms.background,
        borderColor: forms.borderColor,
        borderRadius: themeTools.calculateRoundness(5),
        toggleColor: forms.color,
    };
};

export { StyledCardWrapper, StyledLabel, StyledFoldoutIcon, CardThemeType, composeCardTheme };
