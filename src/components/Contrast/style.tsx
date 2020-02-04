import RecursivePartialType from '../../types/RecursivePartialType';
import ThemeType from '../../types/ThemeType';
import styled from '../../utility/styled';
import ThemeTools from '../../themes/CustomTheme/ThemeTools';
import chroma from 'chroma-js';

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
        overides: {
            Button: {
                secondary: {
                    idle: {
                        backgroundColor: colors.silver.darker1,
                    },
                    active: {
                        backgroundColor: colors.silver.darker2,
                    },
                    hover: {
                        backgroundColor: colors.silver.darker2,
                    },
                    focus: {
                        backgroundColor: colors.silver.darker1,
                        boxShadow: `${themeTools.themeSettings.buttonShadow}${
                            themeTools.themeSettings.buttonStyle === 'flat' ? '' : ','
                        }0 0 0 4px ${chroma(colors.grey.base).alpha(0.08)}`,
                    },
                },
                plain: {
                    active: {
                        backgroundColor: 'transparent',
                    },
                    hover: {
                        backgroundColor: 'transparent',
                    },
                    focus: {
                        backgroundColor: 'transparent',
                        boxShadow: `${themeTools.themeSettings.buttonShadow}${
                            themeTools.themeSettings.buttonStyle === 'flat' ? '' : ','
                        }0 0 0 4px ${chroma(colors.grey.base).alpha(0.08)}${colors.silver.darker2}`,
                    },
                },
            },
        },
    };
};

export default StyledContrast;
export { ContrastThemeType, composeContrastTheme };
