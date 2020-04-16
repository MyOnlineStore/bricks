import React, { ReactNode, FC, Children } from 'react';
import styled from '../../utility/styled';
import Icon from '../Icon';
import Base, { PropsType as BasePropsType } from './base';
import Box from '../Box';
import Spinner from '../Spinner';
import ThemeTools from '../../themes/CustomTheme/ThemeTools';
import chroma from 'chroma-js';

type CommonType = {
    backgroundColor: string;
    color: string;
    boxShadow: string;
};

type ComponentStateTypes = {
    idle: CommonType;
    hover: CommonType;
    focus: CommonType;
    active: CommonType;
};

type ButtonThemeType = {
    common: {
        borderRadius: string;
        borderWidth: string;
        fontWeight: string;
        fontFamily: string;
        fontSize: string;
        textDecoration: string;
    };
    primary: ComponentStateTypes;
    secondary: ComponentStateTypes;
    warning: ComponentStateTypes;
    destructive: ComponentStateTypes;
    info: ComponentStateTypes;
    plain: {
        hover: CommonType;
        focus: CommonType;
        active: CommonType;
        idle: {
            backgroundColor: string;
            color: string;
            boxShadow: string;
            border: string;
        };
    };
    disabled: {
        primary: {
            backgroundColor: string;
            color: string;
            boxShadow: string;
        };
        secondary: {
            backgroundColor: string;
            color: string;
            boxShadow: string;
        };
        plain: {
            backgroundColor: string;
            color: string;
            boxShadow: string;
            border: string;
        };
    };
};

type PropsType = BasePropsType & {
    loading?: boolean;
    variant: 'primary' | 'destructive' | 'warning' | 'secondary' | 'info' | 'plain';
    compact?: boolean;
    disabled?: boolean;
    icon?: ReactNode;
    children?: ReactNode;
};

const StyledButton = styled(Base)<PropsType>`
    ${({ theme, variant, disabled, loading }): string => {
        const idle = `
            background-color: ${theme.Button[variant].idle.backgroundColor};
            box-shadow: ${theme.Button[variant].idle.boxShadow};
            color: ${theme.Button[variant].idle.color};
        `;

        const hover = `
            background-color: ${theme.Button[variant].hover.backgroundColor};
            box-shadow: ${theme.Button[variant].hover.boxShadow};
            color: ${theme.Button[variant].hover.color};
        `;

        const active = `
            transform: translateY(2px);
            background-color: ${theme.Button[variant].active.backgroundColor};
            box-shadow: ${theme.Button[variant].active.boxShadow};
            color: ${theme.Button[variant].active.color};
        `;

        const focus = `
            background-color: ${theme.Button[variant].focus.backgroundColor};
            box-shadow: ${theme.Button[variant].focus.boxShadow};
            color: ${theme.Button[variant].focus.color};
        `;

        return `
            ${idle}
            border-radius: ${theme.Button.common.borderRadius};
            ${variant === 'plain' ? `border: ${theme.Button.plain.idle.border};` : ''}

            &:hover {
                ${!loading && !disabled ? hover : idle}
            }

            &:focus {
                ${!loading && !disabled ? focus : idle}

                &:hover {
                    ${
                        !loading && !disabled
                            ? `
                            background-color: ${theme.Button[variant].hover.backgroundColor};
                            color: ${theme.Button[variant].hover.color};
                    `
                            : ''
                    }
                }
            }

            &:active {
                ${!loading && !disabled ? active : idle}
            }

            &:disabled {
                ${variant === 'plain' ? `border: ${theme.Button.disabled.plain.border};` : ''}

                transform: none;
                cursor: not-allowed;
            }
        `;
    }};

    ${({ theme, variant, compact }): string => {
        if (variant === 'plain') {
            return `
                padding: 5px ${compact ? '11px' : '23px'};
                transform: translateX(0);

                &:disabled {
                    color: ${theme.Button.disabled.plain.color};
                    background: ${theme.Button.disabled.plain.backgroundColor};
                }
            `;
        }

        if (variant === 'secondary') {
            return `
                padding: 6px ${compact ? ' 12px' : '24px'};


                &:disabled {
                    color: ${theme.Button.disabled.secondary.color};
                    background: ${theme.Button.disabled.secondary.backgroundColor};
                }
            `;
        }

        return `
            padding: 6px ${compact ? ' 12px' : '24px'};

            &:disabled {
                color: ${theme.Button.disabled.primary.color};
                background: ${theme.Button.disabled.primary.backgroundColor};
            }
        `;
    }};
`;

const Button: FC<PropsType> = props => {
    const color = props.loading ? 'transparent' : undefined;

    return (
        <StyledButton {...props}>
            {props.loading && (
                <Box
                    justifyContent="center"
                    alignItems="center"
                    position="absolute"
                    left="0"
                    top="0"
                    right="0"
                    bottom="0"
                    padding={[6]}
                >
                    <Spinner />
                </Box>
            )}
            {props.icon && (
                <Box inline padding={[0, 6, 0, 0]}>
                    <Icon size="medium" icon={props.icon} color={color} />
                </Box>
            )}
            <span style={{ color }}>{Children.count(props.children) > 0 ? props.children : props.title}</span>
        </StyledButton>
    );
};

const composeButtonTheme = (themeTools: ThemeTools): ButtonThemeType => {
    const { colors, text } = themeTools.themeSettings;

    return {
        common: {
            borderRadius: themeTools.calculateRoundness(20),
            borderWidth: '0',
            fontWeight: '400',
            fontFamily: text.primaryFont,
            fontSize: text.fontSize.base,
            textDecoration: 'none',
        },
        primary: {
            idle: {
                backgroundColor: colors.primary.base,
                color: themeTools.calculateContrastTextColor(colors.primary.base),
                boxShadow: themeTools.themeSettings.buttonShadow,
            },
            hover: {
                backgroundColor: themeTools.calculateOffsetColor(colors.primary.base, 0.3, 0.6),
                color: themeTools.calculateContrastTextColor(colors.primary.base),
                boxShadow: themeTools.themeSettings.buttonShadow,
            },
            focus: {
                backgroundColor: colors.primary.base,
                color: colors.silver.lighter1,
                boxShadow: `${themeTools.themeSettings.buttonShadow}${
                    themeTools.themeSettings.buttonStyle === 'flat' ? '' : ','
                }0 0 0 4px ${chroma(colors.primary.base).alpha(0.4)}`,
            },
            active: {
                backgroundColor: colors.primary.base,
                color: colors.silver.lighter1,
                boxShadow: 'none',
            },
        },
        secondary: {
            idle: {
                backgroundColor: colors.contrastBackground,
                color: themeTools.calculateContrastTextColor(colors.contrastBackground),
                boxShadow: themeTools.themeSettings.buttonShadow,
            },
            hover: {
                backgroundColor: themeTools.calculateOffsetColor(colors.contrastBackground, 0.18, 0.4),
                color: themeTools.calculateContrastTextColor(colors.contrastBackground),
                boxShadow: themeTools.themeSettings.buttonShadow,
            },
            focus: {
                backgroundColor: colors.silver.base,
                color: colors.grey.lighter1,
                boxShadow: `${themeTools.themeSettings.buttonShadow}${
                    themeTools.themeSettings.buttonStyle === 'flat' ? '' : ','
                }0 0 0 4px ${chroma(colors.grey.base).alpha(0.08)}`,
            },
            active: {
                backgroundColor: colors.silver.darker1,
                color: colors.grey.lighter1,
                boxShadow: 'none',
            },
        },
        info: {
            idle: {
                backgroundColor: colors.contrastBackground,
                color: themeTools.calculateContrastTextColor(colors.contrastBackground),
                boxShadow: themeTools.themeSettings.buttonShadow,
            },
            hover: {
                backgroundColor: themeTools.calculateOffsetColor(colors.contrastBackground, 0.18, 0.4),
                color: themeTools.calculateContrastTextColor(colors.contrastBackground),
                boxShadow: themeTools.themeSettings.buttonShadow,
            },
            focus: {
                backgroundColor: colors.silver.base,
                color: colors.grey.lighter1,
                boxShadow: `${themeTools.themeSettings.buttonShadow}${
                    themeTools.themeSettings.buttonStyle === 'flat' ? '' : ','
                }0 0 0 4px ${chroma(colors.grey.base).alpha(0.08)}`,
            },
            active: {
                backgroundColor: colors.silver.darker1,
                color: colors.grey.lighter1,
                boxShadow: 'none',
            },
        },
        warning: {
            idle: {
                backgroundColor: colors.severity.warning,
                color: themeTools.calculateContrastTextColor(colors.severity.warning),
                boxShadow: themeTools.themeSettings.buttonShadow,
            },
            hover: {
                backgroundColor: chroma(colors.severity.warning)
                    .darken(0.2)
                    .hex(),
                color: themeTools.calculateContrastTextColor(colors.severity.warning),
                boxShadow: themeTools.themeSettings.buttonShadow,
            },
            focus: {
                backgroundColor: chroma(colors.severity.warning)
                    .darken(0.2)
                    .hex(),
                color: themeTools.calculateContrastTextColor(colors.severity.warning),
                boxShadow: `${themeTools.themeSettings.buttonShadow}${
                    themeTools.themeSettings.buttonStyle === 'flat' ? '' : ','
                }0 0 0 4px ${chroma(colors.severity.warning).alpha(0.25)}`,
            },
            active: {
                backgroundColor: chroma(colors.severity.warning)
                    .darken(0.4)
                    .hex(),
                color: themeTools.calculateContrastTextColor(colors.severity.warning),
                boxShadow: 'none',
            },
        },
        destructive: {
            idle: {
                backgroundColor: colors.severity.error,
                color: themeTools.calculateContrastTextColor(colors.severity.error),
                boxShadow: themeTools.themeSettings.buttonShadow,
            },
            hover: {
                backgroundColor: chroma(colors.severity.error)
                    .darken(0.2)
                    .hex(),
                color: themeTools.calculateContrastTextColor(colors.severity.error),
                boxShadow: themeTools.themeSettings.buttonShadow,
            },
            focus: {
                backgroundColor: chroma(colors.severity.error)
                    .darken(0.4)
                    .hex(),
                color: themeTools.calculateContrastTextColor(colors.severity.error),
                boxShadow: `${themeTools.themeSettings.buttonShadow}${
                    themeTools.themeSettings.buttonStyle === 'flat' ? '' : ','
                }0 0 0 4px ${chroma(colors.severity.error).alpha(0.25)}`,
            },
            active: {
                backgroundColor: chroma(colors.severity.error)
                    .darken(0.2)
                    .hex(),
                color: themeTools.calculateContrastTextColor(colors.severity.error),
                boxShadow: 'none',
            },
        },
        plain: {
            idle: {
                backgroundColor: 'transparent',
                color: themeTools.calculateContrastTextColor(colors.background),
                boxShadow: 'none',
                border: `1px solid ${colors.silver.darker2}`,
            },
            hover: {
                backgroundColor: 'transparent',
                color: themeTools.calculateContrastTextColor(colors.background),
                boxShadow: 'none',
            },
            focus: {
                backgroundColor: 'transparent',
                color: themeTools.calculateContrastTextColor(colors.background),
                boxShadow: `${themeTools.themeSettings.buttonShadow}${
                    themeTools.themeSettings.buttonStyle === 'flat' ? '' : ','
                }0 0 0 4px ${chroma(colors.grey.base).alpha(0.08)}`,
            },
            active: {
                backgroundColor: colors.silver.base,
                color: colors.grey.base,
                boxShadow: 'none',
            },
        },
        disabled: {
            primary: {
                color: themeTools.calculateContrastTextColor(colors.contrastBackground),
                backgroundColor: colors.contrastBackground,
                boxShadow: themeTools.themeSettings.buttonShadow,
            },
            secondary: {
                color: themeTools.calculateContrastTextColor(colors.contrastBackground),
                backgroundColor: colors.contrastBackground,
                boxShadow: themeTools.themeSettings.buttonShadow,
            },
            plain: {
                color: themeTools.calculateContrastTextColor(colors.contrastBackground),
                backgroundColor: colors.contrastBackground,
                boxShadow: 'none',
                border: `1px solid ${colors.silver.lighter1}`,
            },
        },
    };
};

export default Button;
export { PropsType, ButtonThemeType, composeButtonTheme };
