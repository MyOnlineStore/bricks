import { PlacementType } from '.';
import styled from '../../utility/styled';
import ThemeTools from '../../themes/CustomTheme/ThemeTools';

type TooltipThemeType = {
    background: string;
    borderRadius: string;
    color: string;
};

const TooltipAnchor = styled.div`
    display: flex;
    cursor: pointer;
`;

const TooltipWindow = styled.div`
    postion: relative;
    z-index: 9999;
`;

const TooltipBackground = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
    background: ${({ theme }): string => theme.Tooltip.background};
    border-radius: ${({ theme }): string => theme.Tooltip.borderRadius};
`;

const TooltipContent = styled.div`
    position: relative;
    z-index: 4;
    padding: 6px 9px;

    p {
        color: ${({ theme }): string => theme.Tooltip.color};
    }
`;

type TooltipArrowPropsType = {
    placement: PlacementType;
    shadow?: boolean;
};

const TooltipArrow = styled.div<TooltipArrowPropsType>`
    position: absolute;
    width: 12px;
    height: 12px;
    color: ${({ theme }): string => theme.Tooltip.color};
    background: ${({ theme }): string => theme.Tooltip.background};
    transform: rotate(45deg);

    ${({ placement }): string => {
        const pointerSize: number = 12;

        switch (placement) {
            case 'left':
            case 'left-start':
            case 'left-end':
                return `
                    right: ${-pointerSize / 2}px;
                    transform: rotate(45deg);
                `;
            case 'right':
            case 'right-start':
            case 'right-end':
                return `
                    left: ${-pointerSize / 2}px;
                    transform: rotate(45deg);
                `;
            case 'top':
            case 'top-start':
            case 'top-end':
                return `
                    bottom: ${-pointerSize / 2}px;
                    transform: rotate(45deg);
                `;
            default:
                return `
                    top: ${-pointerSize / 2}px;
                    transform: rotate(45deg);
                `;
        }
    }}

    ${({ theme, shadow }): string =>
        shadow
            ? `
            box-shadow: 0 1px 4px rgba(0, 0, 0, .25);
            z-index: 1;
        `
            : `
            background: ${theme.Tooltip.background};
            z-index: 3;
        `};
`;

const composeTooltipTheme = (themeTools: ThemeTools): TooltipThemeType => {
    const { colors } = themeTools.themeSettings;

    return {
        background: colors.grey.darker1,
        borderRadius: themeTools.calculateRoundness(20),
        color: colors.silver.lighter1,
    };
};

export {
    TooltipAnchor,
    TooltipArrow,
    TooltipWindow,
    TooltipBackground,
    TooltipContent,
    TooltipThemeType,
    composeTooltipTheme,
};
