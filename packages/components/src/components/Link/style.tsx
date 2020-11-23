import { css } from 'styled-components';
import ThemeType from '../../types/ThemeType';
import styled from '../../utility/styled';
import ThemeTools from '../../themes/CustomTheme/ThemeTools';
import { LinkSeverityType } from '.';

type LinkThemeType = {
    common: {
        textDecoration: string;
    };
    default: {
        idle: {
            color: string;
        };
        hover: {
            color: string;
        };
    };
    success: {
        idle: {
            color: string;
        };
        hover: {
            color: string;
        };
    };
    info: {
        idle: {
            color: string;
        };
        hover: {
            color: string;
        };
    };
    warning: {
        idle: {
            color: string;
        };
        hover: {
            color: string;
        };
    };
    error: {
        idle: {
            color: string;
        };
        hover: {
            color: string;
        };
    };
};

type ThemePropsType = { theme: ThemeType; severity: LinkSeverityType };
type LinkProps = {
    severity: LinkSeverityType;
};

const LinkStyles = css`
    color: ${({ theme }: ThemePropsType): string => theme.Link.default.idle.color};
    text-decoration: ${({ theme }: ThemePropsType): string => theme.Link.common.textDecoration};
    transition: color 100ms;
    background-color: transparent;
    font-family: inherit;
    font-size: inherit;

    &:hover {
        color: ${({ theme }: ThemePropsType): string => theme.Link.default.hover.color};
        background-color: transparent;
    }

    &:focus {
        color: ${({ theme }): string => theme.Link.default.idle.color};
        background-color: transparent;

        &:hover {
            color: ${({ theme }: ThemePropsType): string => theme.Link.default.hover.color};
            background-color: transparent;
        }
    }
`;

const StyledLink = styled.a<LinkProps>`
    color: ${({ theme, severity }: ThemePropsType): string => theme.Link[severity].idle.color};
    text-decoration: ${({ theme }: ThemePropsType): string => theme.Link.common.textDecoration};
    transition: color 100ms;
    background-color: transparent;
    font-family: inherit;
    font-size: inherit;

    &:hover {
        color: ${({ theme, severity }: ThemePropsType): string => theme.Link[severity].hover.color};
        background-color: transparent;
    }

    &:focus {
        color: ${({ theme, severity }): string => theme.Link[severity].idle.color};
        background-color: transparent;

        &:hover {
            color: ${({ theme, severity }: ThemePropsType): string => theme.Link[severity].hover.color};
            background-color: transparent;
        }
    }
`;

const StyledButton = styled.button`
    color: ${({ theme, severity }: ThemePropsType): string => theme.Link[severity].idle.color};
    text-decoration: ${({ theme }: ThemePropsType): string => theme.Link.common.textDecoration};
    cursor: pointer;
    transition: color 100ms;
    display: inline;
    border: none;
    font-family: inherit;
    font-size: inherit;
    background-color: transparent;
    padding: 0;

    &:hover {
        color: ${({ theme, severity }: ThemePropsType): string => theme.Link[severity].hover.color};
        background-color: transparent;
    }

    &:focus {
        color: ${({ theme, severity }): string => theme.Link[severity].idle.color};
        background-color: transparent;

        &:hover {
            color: ${({ theme, severity }: ThemePropsType): string => theme.Link[severity].hover.color};
            background-color: transparent;
        }
    }
`;

const composeLinkTheme = (themeTools: ThemeTools): LinkThemeType => {
    const { colors } = themeTools.themeSettings;

    return {
        common: {
            textDecoration: 'underline',
        },
        default: {
            idle: {
                color: 'inherit',
            },
            hover: {
                color: colors.primary.base,
            },
        },
        success: {
            idle: {
                color: 'inherit',
            },
            hover: {
                color: colors.severity.success,
            },
        },
        info: {
            idle: {
                color: 'inherit',
            },
            hover: {
                color: colors.severity.info,
            },
        },
        warning: {
            idle: {
                color: 'inherit',
            },
            hover: {
                color: colors.severity.warning,
            },
        },
        error: {
            idle: {
                color: 'inherit',
            },
            hover: {
                color: colors.severity.error,
            },
        },
    };
};

export default StyledLink;
export { LinkThemeType, StyledButton, LinkStyles, composeLinkTheme };
