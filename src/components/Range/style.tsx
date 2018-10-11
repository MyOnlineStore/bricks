import { default as _R } from 'react';
import { StyledComponentClass as _S, css } from 'styled-components';
import styled, { withProps } from '../../utility/styled';

/* tslint:disable */
const styles = require('react-input-range/lib/css/index.css').toString();
/* tslint:enable */

// prettier-ignore
const rangeStyles = css`
    ${styles}
`;

type RangeThemeType = {
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

type wrapperProps = {
    disabled: boolean;
    focus: boolean;
};

// prettier-ignore
const StyledWrapper = withProps<wrapperProps, HTMLDivElement>(styled.div)`
    ${rangeStyles} padding: 0;
    box-sizing: border-box;

    & {
        .input-range__track,
        .input-range__slider-container {
            ${({ focus }): string => (!focus ? 'transition: none;' : '')})
        }

        .input-range__track {
            background: ${({ theme }): string => theme.Range.default.track.background};
            border: ${({ theme, disabled }): string =>
                disabled ? theme.Range.disabled.track.border : theme.Range.default.track.border};
            height: 8px;
        }

        .input-range__track--active {
            background: ${({ theme }): string => theme.Range.default.active.background};
            margin-top: -1px;
            border: ${({ theme, disabled }): string =>
                disabled ? theme.Range.disabled.track.border : theme.Range.default.active.border};
        }

        .input-range__slider {
            background: ${({ theme }): string => theme.Range.default.slider.background};
            border: ${({ theme }): string => theme.Range.default.slider.border};
            margin-top: -14px;
            transition: none;
        }

        .input-range__slider:active, .input-range__slider:focus {
            transform: none;
            ${({ theme, disabled }): string => (!disabled ? `box-shadow: ${theme.Range.default.active.boxShadow}` : '')}
        }

        .input-range__label-container {
            display: none;
        }
    }
`;

export default StyledWrapper;
export { RangeThemeType };
