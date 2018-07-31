import React from 'react';
import TableRow from '.';
import { mountWithTheme } from '../../utility/styled';
import TableCell from '../TableCell';
import StyledTableCell from '../TableCell/style';
import StyledTableRow from './style';
import { mosTheme } from '../../themes/MosTheme';
import { ContrastThemeProvider } from '../Contrast';

describe('TableRow', () => {
    it('should handle mouse focus and blur', () => {
        const component = mountWithTheme(
            <table>
                <tbody>
                    <TableRow draggable index={1}>
                        <TableCell>Boo!</TableCell>
                    </TableRow>
                </tbody>
            </table>,
        );

        component
            .find(StyledTableCell)
            .first()
            .simulate('focus');

        /* tslint:disable */
        (expect(component.find(StyledTableRow)) as any).toHaveStyleRule(
            'outline',
            `solid 4px ${mosTheme.TableRow.focus.borderColor}`,
        );
        /* tslint:enable */

        component
            .find(StyledTableCell)
            .first()
            .simulate('blur');

        /* tslint:disable */
        (expect(component.find(StyledTableRow)) as any).not.toHaveStyleRule('outline');
        /* tslint:enable */
    });

    it('should handle mouse enter and leave', () => {
        const component = mountWithTheme(
            <table>
                <tbody>
                    <TableRow draggable index={1}>
                        <TableCell>Boo!</TableCell>
                    </TableRow>
                </tbody>
            </table>,
        );

        component.find(StyledTableRow).simulate('mouseEnter');
        expect(component.find(ContrastThemeProvider).prop('enable')).toBe(true);

        component.find(StyledTableRow).simulate('mouseLeave');
        expect(component.find(ContrastThemeProvider).prop('enable')).toBe(false);
    });
});
