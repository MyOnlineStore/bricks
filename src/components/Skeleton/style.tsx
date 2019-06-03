import { keyframes } from 'styled-components';
import ThemeType from '../../types/ThemeType';
import { css } from '../../utility/styled';
import ThemeTools from '../../themes/ExperimentalCustomTheme/ThemeTools';

type SkeletonThemeType = {
    common: {
        backgroundColor: string;
        borderRadius: string;
    };
    Text: {
        fontSize: string;
    };
};

const wipe = keyframes`
    0% {
        background-position: top left -200px;
    }

    100% {
        background-position: top right -200px;
    }
`;

const getSkeletonStyles = (theme: ThemeType) => css`
    user-select: none;
    color: transparent;
    background-color: ${theme.Skeleton.common.backgroundColor};
    background-image: linear-gradient(100deg, transparent, rgba(0, 0, 0, 0.02), transparent);
    background-repeat: no-repeat;
    background-size: 200px 100%;
    animation: 3s infinite ${wipe};
    border-radius: ${theme.Skeleton.common.borderRadius};
`;

const composeSkeletonTheme = (themeTools: ThemeTools): SkeletonThemeType => {
    const { colors, text } = themeTools.themeSettings;

    return {
        common: {
            backgroundColor: colors.contrastBackground,
            borderRadius: themeTools.calculateRoundness(5),
        },
        Text: {
            fontSize: text.fontSize.base,
        },
    };
};

export default getSkeletonStyles;
export { SkeletonThemeType, composeSkeletonTheme };
