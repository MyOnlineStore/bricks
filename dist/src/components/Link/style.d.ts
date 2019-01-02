import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
declare type LinkThemeType = {
    default: {
        color: string;
        textDecoration: string;
        fontSize: string;
    };
    hover: {
        color: string;
    };
};
declare const StyledLink: _S<_R.DetailedHTMLProps<_R.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, _T, _R.DetailedHTMLProps<_R.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>>;
declare const StyledButton: _S<_R.DetailedHTMLProps<_R.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, _T, _R.DetailedHTMLProps<_R.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>;
export default StyledLink;
export { LinkThemeType, StyledButton };
