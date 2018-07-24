import React from 'react';
import TableRow from '.';
import { mountWithTheme } from '../../utility/styled';
import TableCell from '../TableCell';
import StyledRow from './style';

describe('Table', () => {
    it('should handle mouse enter and leave', () => {
        const component = mountWithTheme(
            <table>
                <tbody>
                    <TableRow draggable index={1}>
                        <td>Boo!</td>
                    </TableRow>
                </tbody>
            </table>,
        );

        const styledRow = component.find(StyledRow);
        styledRow.simulate('focus');
        styledRow.simulate('mouseEnter');

        styledRow.simulate('blur');
        styledRow.simulate('mouseLeave');

        /* tslint:disable */
        (expect(styledRow) as any).toHaveStyleRule('background-color', '#fff');
        /* tslint:enable */
    });

    it('should handle focus and blur', () => {
        const component = mountWithTheme(
            <table>
                <tbody>
                    <TableRow draggable index={1}>
                        <TableCell>Boo!</TableCell>
                    </TableRow>
                </tbody>
            </table>,
        );

        const styledRow = component.find(StyledRow);
        styledRow.simulate('focus');
        styledRow.simulate('mouseEnter');

        styledRow.simulate('blur');
        styledRow.simulate('mouseLeave');

        /* tslint:disable */
        (expect(styledRow) as any).toHaveStyleRule('background-color', '#fff');
        /* tslint:enable */
    });
});
