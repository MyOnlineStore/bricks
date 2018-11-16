import { default as _R } from 'react';
import { StyledComponentClass as _S } from 'styled-components';
declare type RangeThemeType = {
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
declare type wrapperProps = {
    disabled: boolean;
    focus: boolean;
};
declare const StyledWrapper: _S<wrapperProps & _R.HTMLProps<HTMLDivElement>, import("../../../../../../../Users/nicokoelewijn/www/bricks/src/types/ThemeType").default, wrapperProps & _R.HTMLProps<HTMLDivElement>>;
export default StyledWrapper;
export { RangeThemeType };
