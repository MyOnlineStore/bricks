import styled, { css } from '../../utility/styled';
import ThemeTools from '../../themes/CustomTheme/ThemeTools';
import chroma from 'chroma-js';
import Box from '../Box';

/* tslint:disable */
const styles = require('react-input-range/lib/css/index.css').toString();
/* tslint:enable */

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
    box-sizing: border-box;

    & {
        .input-range__track,
        .input-range__slider-container {
            ${({ focus }:PropsType): string => (!focus ? 'transition: none;' : '')}
        }

        .input-range__track {
            background: ${({ theme }): string => theme.Slider.default.track.background};
            border: ${({ theme, disabled }): string =>
                disabled ? theme.Slider.disabled.track.border : theme.Slider.default.track.border};
            height: 8px;
        }

        .input-range__track--active {
            background: ${({ theme }): string => theme.Slider.default.active.background};
            margin-top: -1px;
            border: ${({ theme, disabled }): string =>
                disabled ? theme.Slider.disabled.track.border : theme.Slider.default.active.border};
        }

        .input-range__slider {
            background: ${({ theme }): string => theme.Slider.default.slider.background};
            border: ${({ theme }): string => theme.Slider.default.slider.border};
            margin-top: -14px;
            width: 16px;
            height: 16px;
            transition: none;
        }

        .input-range__slider:active, .input-range__slider:focus {
            transform: none;
            ${({ theme, disabled }): string => (!disabled ? `box-shadow: ${theme.Slider.default.active.boxShadow}` : '')}
        }

        .input-range__label-container {
            display: none;
        }
    }
`;

const composeSliderTheme = (themeTools: ThemeTools): SliderThemeType => {
    const { colors, forms } = themeTools.themeSettings;

    return {
        default: {
            track: {
                background: colors.silver.base,
                border: `solid 1px ${forms.borderColor}`,
            },
            active: {
                background: colors.primary.base,
                border: `solid 1px ${forms.borderColor}`,
                boxShadow: `0 0 0 rgba(0, 0, 0, 0) inset, 0 0 0 4px ${chroma(colors.primary.base).alpha(0.4)}`,
            },
            slider: {
                background: colors.silver.lighter1,
                border: `solid 1px ${forms.borderColor}`,
            },
        },
        disabled: {
            track: {
                background: colors.silver.base,
                border: `solid 1px ${forms.borderColor}`,
            },
            slider: {
                background: colors.silver.lighter1,
                border: `solid 1px ${forms.borderColor}`,
            },
        },
    };
};

export default StyledWrapper;
export { SliderThemeType, composeSliderTheme };
