import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../../types/ThemeType';
declare type CellPropsType = {
    align: 'start' | 'center' | 'end';
    elementWidth?: string;
};
declare const StyledCell: _S<CellPropsType & _R.HTMLProps<HTMLElement>, _T, CellPropsType & _R.HTMLProps<HTMLElement>>;
export default StyledCell;
export { CellPropsType };
