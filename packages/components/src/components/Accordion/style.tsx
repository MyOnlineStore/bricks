import styled from 'styled-components';
import StyledIcon from '../Icon/style';
import ThemeTools from '../../themes/CustomTheme/ThemeTools';

type AccordionThemeType = {
    iconColor: string;
};

const StyledLabel = styled.div`
    position: relative;
    z-index: 1;
    flex: 1 1 100%;
    cursor: pointer;
`;

const StyledContent = styled.div`
    position: relative;
    z-index: 2;
    flex: 1 1 100%;
`;

const StyledFoldoutIcon = styled.button<{ open: boolean }>`
    position: absolute;
    right: -6px;
    top: 0;
    width: 24px;
    height: 24px;
    z-index: 3;
    display: block;
    padding: 0;
    background: none;
    border: none;
    appearance: none;
    cursor: pointer;
    transform: ${({ open }) => (open ? `rotate(180deg)` : '')};
    transform-origin: 50% 50%;
    transition: transform 200ms;

    ${StyledIcon} {
        display: block;
        position: absolute;
        top: 6px;
        right: 6px;
        color: ${({ theme }) => theme.Accordion.iconColor};
    }
`;

const composeAccordionTheme = (themeTools: ThemeTools): AccordionThemeType => {
    const { forms } = themeTools.themeSettings;

    return {
        iconColor: forms.color,
    };
};

export { StyledLabel, StyledFoldoutIcon, StyledContent, AccordionThemeType, composeAccordionTheme };
