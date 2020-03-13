import RecursivePartialType from '../../types/RecursivePartialType';
import ThemeType from '../../types/ThemeType';
import styled from '../../utility/styled';
import ThemeTools from '../../themes/CustomTheme/ThemeTools';

type ContrastThemeType = {
    overides: RecursivePartialType<ThemeType>;
    default: {
        background: string;
    };
};

const StyledContrast = styled.div`
    background: ${({ theme }): string => theme.Contrast.default.background};
`;

const composeContrastTheme = (themeTools: ThemeTools): ContrastThemeType => {
    const { colors } = themeTools.themeSettings;

    return {
        default: {
            background: colors.contrastBackground,
        },
        overides: {},
    };
};

export default StyledContrast;
export { ContrastThemeType, composeContrastTheme };
