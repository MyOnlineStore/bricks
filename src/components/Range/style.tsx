import { default as _R } from 'react';
import { StyledComponentClass as _S, css } from 'styled-components';
import styled from '../../utility/styled';

/* tslint:disable */
const styles = require('react-input-range/lib/css/index.css').toString();
/* tslint:enable */

// prettier-ignore
const rangeStyles = css`
    ${styles}
`;

type RangeThemeType = {
    track: {
        background: string;
        border: string;
    };
    trackActive: {
        background: string;
        border: string;
    };
    slider: {
        background: string;
        border: string;
    };
}

// prettier-ignore
const StyledWrapper = styled.div`
    ${rangeStyles}
    padding: 15px 0;
    box-sizing: border-box;

    & {
        .input-range__track {
            background: ${({ theme }): string => theme.Range.track.background};
            border: ${({ theme }): string => theme.Range.track.border};
            height: 8px;
        }

        .input-range__track--active {
            background: ${({ theme }): string => theme.Range.trackActive.background};
            border: ${({ theme }): string => theme.Range.trackActive.border};
            margin-top: -1px;
        }

        .input-range__slider {
            background: ${({ theme }): string => theme.Range.slider.background};
            border: ${({ theme }): string => theme.Range.slider.border};
            margin-top: -14px;
        }

        .input-range__label-container {
            display: none;
        }
    }
`;

export default StyledWrapper;
export { RangeThemeType };
