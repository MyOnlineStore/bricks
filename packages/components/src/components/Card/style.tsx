import styled from 'styled-components';
import StyledIcon from '../Icon/style';
import ThemeTools from '../../themes/CustomTheme/ThemeTools';

type CardThemeType = {
    background: string;
    borderColor: string;
    borderRadius: string;
    toggleColor: string;
};

const StyledCard = styled.div`
    position: relative;
    background: ${({ theme }) => theme.Card.background};
    border: 1px solid ${({ theme }) => theme.Card.borderColor};
    border-radius: ${({ theme }) => theme.Card.borderRadius};
    flex: 1 1 auto;
`;

type ClickAreaProps = {
    foldable: boolean;
    switchable: boolean;
    'data-testid'?: string;
};

const StyledClickArea = styled.button<ClickAreaProps>`
    display: block;
    background: none;
    border: none;
    appearance: none;
    text-align: left;
    flex: 1 1 100%;
    padding-top: 18px;
    padding-right: ${({ foldable }) => (foldable ? '54px' : '24px')};
    padding-bottom: 18px;
    padding-left: ${({ switchable }) => (switchable ? '0' : '24px')};
    cursor: ${({ foldable }) => (foldable ? 'pointer' : 'default')};
`;

type LabelProps = {
    'data-testid'?: string;
};

const StyledLabel = styled.div<LabelProps>`
    pointer-events: none;
`;

type ContentProps = {
    switchable: boolean;
    'data-testid'?: string;
};

const StyledContent = styled.div<ContentProps>`
    flex: 1 1 100%;
    padding: ${({ switchable }) => (switchable ? '12px 24px 24px 64px' : '12px 24px 24px')};
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

export { StyledCard, StyledClickArea, StyledLabel, StyledFoldoutIcon, StyledContent, CardThemeType, composeCardTheme };
