import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import SeverityType from '../../types/_SeverityType';
declare type ToasterPropsType = {
    severity: SeverityType;
};
declare type ToasterThemeType = {
    borderRadius: string;
    backgroundColor: string;
    severity: {
        error: string;
        success: string;
        info: string;
        warning: string;
    };
};
declare const StyledToasterWrapper: _S<_R.DetailedHTMLProps<_R.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, _T, _R.DetailedHTMLProps<_R.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
declare const StyledToaster: _S<ToasterPropsType & _R.HTMLProps<HTMLDivElement>, _T, ToasterPropsType & _R.HTMLProps<HTMLDivElement>>;
export default StyledToaster;
export { ToasterPropsType, StyledToasterWrapper, ToasterThemeType };
