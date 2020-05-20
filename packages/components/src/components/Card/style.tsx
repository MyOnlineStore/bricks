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
    'data-testid'?: string;
};

const StyledClickArea = styled.button<ClickAreaProps>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0 0 18px;
    z-index: 1;
    display: block;
    box-sizing: content-box;
    background: none;
    border: none;
    appearance: none;
    cursor: pointer;
`;

type LabelProps = {
    foldable: boolean;
    hasToggle: boolean;
    'data-testid'?: string;
};

const StyledLabel = styled.div<LabelProps>`
    position: relative;
    z-index: 2;
    flex: 1 1 100%;
    margin-top: 18px;
    margin-right: ${({ foldable }) => (foldable ? '54px' : '24px')};
    margin-bottom: 0};
    margin-left: ${({ hasToggle }) => (hasToggle ? '0' : '24px')};
    cursor: ${({ foldable }) => (foldable ? 'pointer' : 'unset')};
`;

type ContentProps = {
    hasToggle: boolean;
    'data-testid'?: string;
};

const StyledContent = styled.div<ContentProps>`
    flex: 1 1 100%;
    padding: ${({ hasToggle }) => (hasToggle ? '0 24px 6px 64px' : '0 24px 6px')};
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
