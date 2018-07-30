import React from 'react';
import TableRow from '.';
import { mountWithTheme } from '../../utility/styled';
import TableCell from '../TableCell';
import StyledRow from './style';
import { mosTheme } from '../../themes/MosTheme';

describe('Table', () => {
    it('should handle mouse focus and blur', () => {
        const component = mountWithTheme(
            <table>
                <tbody>
                    <TableRow draggable index={1}>
                        <td>Boo!</td>
                    </TableRow>
                </tbody>
            </table>,
        );

        const tableCell = component.find(TableCell);
        const tableRow = component.find(TableRow);
        tableCell.simulate('focus');
        tableCell.simulate('blur');

        /* tslint:disable */
        (expect(tableRow) as any).toHaveStyleRule('background-color', mosTheme.TableRow.default.backgroundColor);
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

        const tableRow = component.find(TableRow);
        tableRow.simulate('mouseEnter');
        tableRow.simulate('mouseLeave');

        /* tslint:disable */
        (expect(tableRow) as any).toHaveStyleRule('background-color', mosTheme.TableRow.default.backgroundColor);
        /* tslint:enable */
    });
});
