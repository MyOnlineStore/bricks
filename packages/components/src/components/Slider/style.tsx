import styled, { css } from '../../utility/styled';
import ThemeTools from '../../themes/CustomTheme/ThemeTools';
import chroma from 'chroma-js';
import Box from '../Box';
import styles from 'react-input-range/lib/css/index.css';

// prettier-ignore
const sliderStyles = css`
    ${styles}
`;

type SliderThemeType = {
    default: {
        track: {
            background: string;
            border: string;
        };
        active: {
            background: string;
            border: string;
            boxShadow: string;
        };
        slider: {
            background: string;
            border: string;
        };
    };
    disabled: {
        track: {
            background: string;
            border: string;
        };
        active: {
            background: string;
            border: string;
        };
        slider: {
            background: string;
            border: string;
        };
    };
};

type PropsType = {
    disabled: boolean;
    focus: boolean;
};

// prettier-ignore
const StyledWrapper = styled(Box)`
    ${sliderStyles} padding: 0;

    & {
        .input-range__track,
        .input-range__slider-container {
            ${({ focus }:PropsType): string => (!focus ? 'transition: none;' : '')}
            box-sizing: unset;
        }

        .input-range__track {
            background: ${({ theme }): string => theme.Slider.default.track.background};
            border: ${({ theme }): string => theme.Slider.default.track.border};
            height: 4px;
        }

        .input-range__track--active {
            background: ${({ theme }): string => theme.Slider.default.active.background};
            margin-top: -1px;
            border: ${({ theme }): string => theme.Slider.default.active.border};
        }

        .input-range__slider {
            background: ${({ theme }): string => theme.Slider.default.slider.background};
            border: ${({ theme }): string => theme.Slider.default.slider.border};
            margin-top: -12px;
            width: 16px;
            height: 16px;
            transition: none;
            box-sizing: unset;
        }

        .input-range__slider:active, .input-range__slider:focus {
            transform: none;
            ${({ theme, disabled }): string => (!disabled ? `box-shadow: ${theme.Slider.default.active.boxShadow}` : '')}
        }

        .input-range__label-container {
            display: none;
        }

        .input-range--disabled {
            .input-range__track {
                cursor: not-allowed;
                border: ${({ theme }) => theme.Slider.disabled.track.border};
                background: ${({ theme }) => theme.Slider.disabled.track.background};
            }

            .input-range__track--active {
                cursor: not-allowed;
                background: ${({ theme }): string => theme.Slider.disabled.active.background};
                border: ${({ theme }): string =>
                    theme.Slider.disabled.active.border};
            }

            .input-range__slider {
                cursor: not-allowed;
                border: ${({ theme }) => theme.Slider.disabled.slider.border};
                background: ${({ theme }) => theme.Slider.disabled.slider.background};
            }
        }
    }
`;

const composeSliderTheme = (themeTools: ThemeTools): SliderThemeType => {
    const { colors, forms } = themeTools.themeSettings;

    return {
        default: {
            track: {
                background: colors.silver.base,
                border: `1px solid ${forms.borderColor}`,
            },
            active: {
                background: colors.primary.base,
                border: `1px solid ${forms.borderColor}`,
                boxShadow: `0 0 0 rgba(0, 0, 0, 0) inset, 0 0 0 4px ${chroma(colors.primary.base).alpha(0.4)}`,
            },
            slider: {
                background: colors.silver.lighter1,
                border: `1px solid ${forms.borderColor}`,
            },
        },
        disabled: {
            track: {
                background: colors.silver.base,
                border: `1px solid ${forms.borderColor}`,
            },
            active: {
                background: colors.silver.darker1,
                border: `1px solid ${forms.borderColor}`,
            },
            slider: {
                background: colors.silver.lighter1,
                border: `1px solid ${forms.borderColor}`,
            },
        },
    };
};

export default StyledWrapper;
export { SliderThemeType, composeSliderTheme };
