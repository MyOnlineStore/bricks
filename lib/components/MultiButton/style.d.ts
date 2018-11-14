import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
declare type MultiButtonThemeType = {
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
declare type StyledMultiButtonPropsType = {
    isOpen: boolean;
};
declare const StyledMultiButton: _S<import("../Button").PropsType, _T, Pick<import("../Button").PropsType, "title" | "className" | "id" | "color" | "action" | "disabled" | "href" | "target" | "compact" | "flat" | "variant" | "icon" | "iconAlign"> & {
    theme?: _T | undefined;
}>;
declare const StyledChevronButton: _S<import("../Button").PropsType, _T, Pick<import("../Button").PropsType, "title" | "className" | "id" | "color" | "action" | "disabled" | "href" | "target" | "compact" | "flat" | "variant" | "icon" | "iconAlign"> & {
    theme?: _T | undefined;
}>;
declare const StyledWrapper: _S<StyledMultiButtonPropsType & _R.HTMLProps<HTMLDivElement>, _T, StyledMultiButtonPropsType & _R.HTMLProps<HTMLDivElement>>;
declare const StyledWindow: _S<StyledMultiButtonPropsType & _R.HTMLProps<HTMLDivElement>, _T, StyledMultiButtonPropsType & _R.HTMLProps<HTMLDivElement>>;
export default StyledMultiButton;
export { StyledMultiButton, StyledWrapper, StyledWindow, StyledChevronButton, MultiButtonThemeType };
