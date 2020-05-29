import styled from 'styled-components';
import StyledIcon from '../Icon/style';
import ThemeTools from '../../themes/CustomTheme/ThemeTools';

type AccordionThemeType = {
    iconColor: string;
};

const StyledClickArea = styled.button`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: block;
    padding: 0;
    background: none;
    border: none;
    appearance: none;
    cursor: pointer;
`;

const StyledLabel = styled.div`
    position: relative;
    z-index: 2;
    flex: 1 1 100%;
    pointer-events: none;
`;

const StyledContent = styled.div`
    position: relative;
    z-index: 2;
    flex: 1 1 100%;
`;

const StyledFoldoutIcon = styled.div<{ open: boolean }>`
    position: absolute;
    right: 0;
    top: 6px;
    transform: ${({ open }) => (open ? `rotate(180deg)` : '')};
    transform-origin: 50% 50%;
    transition: transform 200ms;
    pointer-events: none;

    ${StyledIcon} {
        display: block;
        color: ${({ theme }) => theme.Accordion.iconColor};
    }
`;

const composeAccordionTheme = (themeTools: ThemeTools): AccordionThemeType => {
    const { forms } = themeTools.themeSettings;

    return {
        iconColor: forms.color,
    };
};

export { StyledClickArea, StyledLabel, StyledFoldoutIcon, StyledContent, AccordionThemeType, composeAccordionTheme };
