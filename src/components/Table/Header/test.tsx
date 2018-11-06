import React from 'react';
import { mountWithTheme } from '../../../utility/styled/testing';
import Header from '.';
import Checkbox from '../../Checkbox';

describe('Table Header', () => {
    it('should not break when onCheck is undefined', () => {
        const component = mountWithTheme(
            <table>
                <Header
                    columns={[
                        { key: 'id', header: 'Product ID' },
                        { key: 'name', header: 'name' },
                        { key: 'price', header: 'Price' },
                    ]}
                    checked={false}
                    selectable
                    draggable={false}
                    onCheck={(): void => undefined}
                />
            </table>,
        );

        expect(component.find(Checkbox).prop('checked')).toEqual(false);
    });
});
