import styled from 'styled-components';
import ThemeTools from '../../themes/CustomTheme/ThemeTools';
import { box, BoxProps, flex, FlexProps } from '../../utility/box';

type CardThemeType = {
    background: string;
    borderColor: string;
    borderRadius: string;
};

const Card = styled.div<BoxProps & FlexProps>`
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
    position: relative;
    background: ${({ theme }) => theme.Card.background};
    border: 1px solid ${({ theme }) => theme.Card.borderColor};
    border-radius: ${({ theme }) => theme.Card.borderRadius};
    ${box}
    ${flex}
`;

const composeCardTheme = (themeTools: ThemeTools): CardThemeType => {
    const { forms } = themeTools.themeSettings;

    return {
        background: forms.background,
        borderColor: forms.borderColor,
        borderRadius: themeTools.calculateRoundness(5),
    };
};

export default Card;
export { CardThemeType, composeCardTheme };
