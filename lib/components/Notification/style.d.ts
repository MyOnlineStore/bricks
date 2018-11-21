import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import SeverityType from '../../types/_SeverityType';
import _T from '../../types/ThemeType';
declare type VariantStyleType = {
    backgroundColor: string;
    borderColor: string;
    color: string;
};
declare type NotificationThemeType = {
    common: {
        fontFamily: string;
        fontSize: string;
    };
    error: VariantStyleType;
    info: VariantStyleType;
    success: VariantStyleType;
    warning: VariantStyleType;
};
declare type NotificationPropsType = {
    severity: SeverityType;
};
declare const StyledNotification: _S<NotificationPropsType & _R.HTMLProps<HTMLDivElement>, _T, NotificationPropsType & _R.HTMLProps<HTMLDivElement>>;
export default StyledNotification;
export { NotificationThemeType, VariantStyleType };
