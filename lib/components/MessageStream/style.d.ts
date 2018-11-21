import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import SeverityType from '../../types/_SeverityType';
import _T from '../../types/ThemeType';
declare type VariantStyleType = {
    borderColor: string;
};
declare type MessageStreamThemeType = {
    common: {
        backgroundColor: string;
        borderColor: string;
    };
    read: {
        backgroundColor: string;
    };
    error: VariantStyleType;
    info: VariantStyleType;
    success: VariantStyleType;
    warning: VariantStyleType;
};
declare const StyledMessageStream: _S<_R.DetailedHTMLProps<_R.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, _T, _R.DetailedHTMLProps<_R.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
declare const MessageSeparator: _S<_R.DetailedHTMLProps<_R.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, _T, _R.DetailedHTMLProps<_R.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
declare type MessagePropsType = {
    severity: SeverityType;
};
declare const StyledMessage: _S<MessagePropsType & _R.HTMLProps<HTMLDivElement>, _T, MessagePropsType & _R.HTMLProps<HTMLDivElement>>;
export default StyledMessageStream;
export { StyledMessage, MessageSeparator, MessageStreamThemeType, VariantStyleType };
