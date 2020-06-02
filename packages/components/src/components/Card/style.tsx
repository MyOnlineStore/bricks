import styled from 'styled-components';
import ThemeTools from '../../themes/CustomTheme/ThemeTools';

type CardThemeType = {
    background: string;
    borderColor: string;
    borderRadius: string;
};

const StyledCard = styled.div`
    position: relative;
    background: ${({ theme }) => theme.Card.background};
    border: 1px solid ${({ theme }) => theme.Card.borderColor};
    border-radius: ${({ theme }) => theme.Card.borderRadius};
    flex: 1 1 auto;
`;

const composeCardTheme = (themeTools: ThemeTools): CardThemeType => {
    const { forms } = themeTools.themeSettings;

    return {
        background: forms.background,
        borderColor: forms.borderColor,
        borderRadius: themeTools.calculateRoundness(5),
    };
};

export { StyledCard, CardThemeType, composeCardTheme };
