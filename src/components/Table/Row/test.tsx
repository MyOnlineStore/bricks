import React from 'react';
import Row from '.';
import { mountWithTheme } from '../../../utility/styled';
import StyledCell from '../Cell/style';
import StyledRow from './style';
import { mosTheme } from '../../../themes/MosTheme';
import { ContrastThemeProvider } from '../../Contrast';

describe('Row', () => {
    it('should handle mouse focus and blur when draggable', () => {
        const component = mountWithTheme(
            <table>
                <tbody>
                    <Row selectable draggable alignments={[]} cells={['A1', 'B1', 'C1']} index={1} />
                </tbody>
            </table>,
        );

        component
            .find(StyledCell)
            .first()
            .simulate('focus');

        /* tslint:disable */
        (expect(component.find(StyledRow)) as any).toHaveStyleRule(
            'outline',
            `solid 4px ${mosTheme.Table.row.focus.borderColor}`,
        );
        /* tslint:enable */

        component
            .find(StyledCell)
            .first()
            .simulate('blur');

        /* tslint:disable */
        (expect(component.find(StyledRow)) as any).not.toHaveStyleRule('outline');
        /* tslint:enable */
    });

    it('should handle mouse enter and leave', () => {
        const component = mountWithTheme(
            <table>
                <tbody>
                    <Row selectable alignments={[]} cells={['A1', 'B1', 'C1']} draggable index={1} />
                </tbody>
            </table>,
        );

        component.find(StyledRow).simulate('mouseEnter');
        expect(component.find(ContrastThemeProvider).prop('enable')).toBe(true);

        component.find(StyledRow).simulate('mouseLeave');
        expect(component.find(ContrastThemeProvider).prop('enable')).toBe(false);
    });
});
