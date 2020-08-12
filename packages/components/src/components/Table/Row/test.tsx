import React from 'react';
import Rows from '.';
import { mountWithTheme } from '../../../utility/styled/testing';
import StyledCell from '../Cell/style';
import StyledRow from './style';
import { mosTheme } from '../../../themes/MosTheme';
import { ContrastThemeProvider } from '../../Contrast';
import 'jest-styled-components';
import Checkbox from '../../Checkbox';

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
                        selected={false}
                        selectable
                        draggable
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

        expect(component.find(StyledRow)).toHaveStyleRule(
            'outline',
            `solid 4px ${mosTheme.Table.row.focus.borderColor}`,
        );

        component
            .find(StyledCell)
            .first()
            .simulate('blur');

        expect(component.find(StyledRow)).not.toHaveStyleRule('outline', expect.any(String));
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
                        selected={false}
                        selectable
                        draggable
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

    it('should be able to toggle the checkbox', () => {
        const onSelectionMock = jest.fn();

        const component = mountWithTheme(
            <table>
                <tbody>
                    <Rows
                        row={{ id: '61651320', price: 19.12, name: 'foo0', image: 'imageurl', disabled: false }}
                        columns={{
                            id: { header: 'Product ID' },
                            name: { header: 'name' },
                            price: { header: 'Price' },
                        }}
                        selected={false}
                        selectable
                        draggable
                        index={1}
                        onSelection={onSelectionMock}
                    />
                </tbody>
            </table>,
        );

        component.find(Checkbox).simulate('click');
        expect(onSelectionMock).toHaveBeenCalledTimes(1);
    });

    it('should not be able to toggle the checkbox when disabled', () => {
        const onSelectionMock = jest.fn();

        const component = mountWithTheme(
            <table>
                <tbody>
                    <Rows
                        row={{ id: '61651320', price: 19.12, name: 'foo0', image: 'imageurl', disabled: true }}
                        columns={{
                            id: { header: 'Product ID' },
                            name: { header: 'name' },
                            price: { header: 'Price' },
                        }}
                        selected={false}
                        selectable
                        draggable
                        index={1}
                        onSelection={onSelectionMock}
                    />
                </tbody>
            </table>,
        );

        component.find(Checkbox).simulate('click');
        expect(onSelectionMock).not.toHaveBeenCalled();
    });
});
