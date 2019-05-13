import styled from '../../utility/styled';
import Button from '../Button';
import ThemeTools from '../../themes/ExperimentalCustomTheme/ThemeTools';
import chroma from 'chroma-js';

type MultiButtonThemeType = {
    window: {
        backgroundColor: string;
        secondaryColor: string;
        borderColor: string;
        borderRadius: string;
        boxShadow: string;
    };
    button: {
        common: {
            active: {
                boxShadow: string;
            };
            borderRadius: string;
        };
        primary: {
            dividerColor: string;
        };
        secondary: {
            dividerColor: string;
        };
        warning: {
            dividerColor: string;
        };
        destructive: {
            dividerColor: string;
        };
        plain: {
            dividerColor: string;
        };
        disabled: {
            dividerColor: string;
        };
    };
};

type PropsType = {
    open: boolean;
};

const StyledMultiButton = styled(Button)`
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-right: solid 0px transparent;
    margin: 0px;

    &:focus {
        z-index: 2;
    }

    &:active {
        transform: translateY(0px);
    }
`;

const StyledChevronButton = styled(Button)`
    border-left: solid 1px ${({ theme, variant }): string => theme.MultiButton.button[variant].dividerColor};
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    margin: 0px;

    &:active {
        transform: translateY(0px);
        border-left-color: ${({ theme, variant }): string => theme.MultiButton.button[variant].dividerColor};
    }

    &:hover {
        border-left-color: ${({ theme, variant }): string => theme.MultiButton.button[variant].dividerColor};
    }

    &:focus {
        border-left-color: ${({ theme, variant }): string => theme.MultiButton.button[variant].dividerColor};
    }
`;

const StyledWrapper = styled.div<PropsType>`
    border-radius: ${({ theme }): string => theme.MultiButton.window.borderRadius}
    box-shadow: ${({ open, theme }): string => (open ? theme.MultiButton.button.common.active.boxShadow : '')};
    transform: translateZ(0) translate3d(0, 0, 0);
    transition: transform 0.1s, background 0.3s, color 0.3s, box-shadow 0.1s, border 0.3s;
    outline: none;

    &:focus {
        outline: none;
    }

    &:active {
        transform: translateY(2px);
    }
`;

const StyledWindow = styled.div<PropsType>`
    box-sizing: border-box;
    background: ${({ theme }): string => theme.MultiButton.window.backgroundColor}
    overflow: hidden;
    max-width: 360px;
    border: ${({ theme }): string => `solid 1px ${theme.MultiButton.window.borderColor}`};
    border-radius: ${({ theme }): string => theme.MultiButton.window.borderRadius};
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    box-shadow: ${({ theme }): string => theme.MultiButton.window.boxShadow};
    z-index: 1000;
`;

const composeMultiButtonTheme = (themeTools: ThemeTools): MultiButtonThemeType => {
    const { colors } = themeTools.themeSettings;

    return {
        window: {
            backgroundColor: colors.silver.lighter1,
            secondaryColor: colors.silver.base,
            borderColor: colors.silver.darker3,
            borderRadius: themeTools.calculateRoundness(20),
            boxShadow: '0 2px 6px 0 rgba(0,0,0,0.10)',
        },
        button: {
            common: {
                active: {
                    boxShadow: `inset 0 -2px 0 0 rgba(0,0,0,0.20), 0 0 0 2px ${chroma(colors.grey.lighter2).alpha(
                        0.2,
                    )}`,
                },
                borderRadius: themeTools.calculateRoundness(20),
            },
            primary: {
                dividerColor: colors.primary.darker2,
            },
            secondary: {
                dividerColor: chroma(colors.contrastBackground)
                    .darken(0.4)
                    .hex(),
            },
            warning: {
                dividerColor: colors.severity.warning,
            },
            destructive: {
                dividerColor: colors.severity.error,
            },
            plain: {
                dividerColor: colors.silver.darker3,
            },
            disabled: {
                dividerColor: colors.silver.darker3,
            },
        },
    };
};

export default StyledMultiButton;
export {
    StyledMultiButton,
    StyledWrapper,
    StyledWindow,
    StyledChevronButton,
    MultiButtonThemeType,
    composeMultiButtonTheme,
};
