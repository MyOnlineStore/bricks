import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
declare type TableThemeType = {
    default: {
        backgroundColor: string;
    };
    row: {
        default: {
            backgroundColor: string;
            borderColor: string;
        };
        hover: {
            backgroundColor: string;
        };
        focus: {
            borderColor: string;
        };
        dragging: {
            boxShadow: string;
        };
    };
    cell: {
        default: {
            backgroundColor: string;
            borderColor: string;
        };
        header: {
            backgroundColor: string;
        };
    };
};
declare const StyledTable: _S<_R.DetailedHTMLProps<_R.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, _T, _R.DetailedHTMLProps<_R.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>>;
export default StyledTable;
export { StyledTable, TableThemeType };
