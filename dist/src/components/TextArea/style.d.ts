import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import SeverityType from '../../types/SeverityType';
declare type TextAreaWrapperPropsType = {
    disabled?: boolean;
    severity: SeverityType;
};
declare type TextAreaPropsType = {
    resizeable?: boolean;
    disabled?: boolean;
};
declare type TextAreaThemeType = {
    idle: {
        common: {
            borderRadius: string;
            borderColor: string;
            fontSize: string;
            fontFamily: string;
            background: string;
        };
    };
    severity: {
        error: {
            boxShadow: string;
        };
        success: {
            boxShadow: string;
        };
        info: {
            boxShadow: string;
        };
        warning: {
            boxShadow: string;
        };
    };
    disabled: {
        color: string;
        background: string;
    };
};
declare const StyledTextAreaWrapper: _S<TextAreaWrapperPropsType & _R.HTMLProps<HTMLElement>, _T, TextAreaWrapperPropsType & _R.HTMLProps<HTMLElement>>;
declare const StyledTextArea: _S<TextAreaPropsType & _R.HTMLProps<HTMLElement>, _T, TextAreaPropsType & _R.HTMLProps<HTMLElement>>;
export default StyledTextArea;
export { TextAreaPropsType, StyledTextArea, StyledTextAreaWrapper, TextAreaThemeType };
