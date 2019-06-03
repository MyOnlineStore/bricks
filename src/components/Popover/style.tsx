import { PlacementType } from '.';
import styled from '../../utility/styled';
import ThemeTools from '../../themes/ExperimentalCustomTheme/ThemeTools';

type PopoverThemeType = {
    background: string;
    borderRadius: string;
};

type PopoverAnchorPropsType = {
    stretch?: boolean;
};

const PopoverAnchor = styled.div<PopoverAnchorPropsType>`
    ${({ stretch }): string =>
        stretch
            ? `
            display: block;
            flex-grow: 1;
            height: 100%;
        `
            : `
            display: inline-block;
        `}
`;

const PopoverBackground = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    box-shadow: 0 3px 48px rgba(0, 0, 0, 0.3);
    background: ${({ theme }): string => theme.Popover.background};
    border-radius: ${({ theme }): string => theme.Popover.borderRadius};
`;

const PopoverContent = styled.div`
    position: relative;
    z-index: 4;
`;

const PopoverWindow = styled.div`
    max-width: 500px;
`;

type PopoverArrowPropsType = {
    placement: PlacementType;
    shadow?: boolean;
};

const PopoverArrow = styled.div<PopoverArrowPropsType>`
    position: absolute;
    width: 16px;
    height: 16px;
    background: ${({ theme }): string => theme.Popover.background};

    ${({ placement }): string => {
        const pointerSize: number = 16;

        switch (placement) {
            case 'left':
            case 'left-start':
            case 'left-end':
                return `
                    right: ${-pointerSize / 2}px;
                    transform: scaleX(.75) rotate(45deg);
                `;
            case 'right':
            case 'right-start':
            case 'right-end':
                return `
                    left: ${-pointerSize / 2}px;
                    transform: scaleX(.75) rotate(45deg);
                `;
            case 'top':
            case 'top-start':
            case 'top-end':
                return `
                    bottom: ${-pointerSize / 2}px;
                    transform: scaleY(.75) rotate(45deg);
                `;
            default:
                return `
                    top: ${-pointerSize / 2}px;
                    transform: scaleY(.75) rotate(45deg);
                `;
        }
    }} ${({ theme, shadow }): string =>
        shadow
            ? `
            box-shadow: 0 1px 12px rgba(0 , 0, 0, .2);
            z-index: 1;
        `
            : `
            background: ${theme.Popover.background};
            z-index: 3;
        `};
`;

const composePopoverTheme = (themeTools: ThemeTools): PopoverThemeType => {
    const { colors } = themeTools.themeSettings;

    return {
        background: colors.silver.lighter1,
        borderRadius: themeTools.calculateRoundness(20),
    };
};

export {
    PopoverAnchor,
    PopoverArrow,
    PopoverBackground,
    PopoverContent,
    PopoverWindow,
    PopoverThemeType,
    composePopoverTheme,
};
