import React from 'react';
import Rows from '.';
import { mountWithTheme } from '../../../utility/_styled/testing';
import StyledCell from '../DataCardCell/style';
import StyledRow from './style';
import { mosTheme } from '../../../themes/MosTheme';
import { ContrastThemeProvider } from '../../Contrast';

describe('Table Rows', () => {
    it('should handle mouse focus and blur when draggable', () => {
        const component = mountWithTheme(
            <table>
                <tbody>
                    <Rows
                        row={{ id: '61651320', price: 19.12, name: 'foo0', image: 'imageurl' }}
                        columns={{
                            id: { header: 'Product ID' },
                            name: { header: 'name' },
                            price: { header: 'Price' },
                        }}
                        draggable
                        selectable
                        selected={true}
                        index={1}
                        onSelection={(): void => undefined}
                    />
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
                    <Rows
                        row={{ id: '61651320', price: 19.12, name: 'foo0', image: 'imageurl' }}
                        columns={{
                            id: { header: 'Product ID' },
                            name: { header: 'name' },
                            price: { header: 'Price' },
                        }}
                        draggable
                        selectable
                        selected={true}
                        index={1}
                        onSelection={(): void => undefined}
                    />
                </tbody>
            </table>,
        );

        component.find(StyledRow).simulate('mouseEnter');
        expect(component.find(ContrastThemeProvider).prop('enable')).toBe(true);

        component.find(StyledRow).simulate('mouseLeave');
        expect(component.find(ContrastThemeProvider).prop('enable')).toBe(false);
    });
});
