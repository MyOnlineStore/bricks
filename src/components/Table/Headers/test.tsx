import React from 'react';
import { mountWithTheme } from '../../../utility/styled/testing';
import Headers from '.';
import Checkbox from '../../Checkbox';

describe('Table Headers', () => {
    it('should not break when onCheck is undefined', () => {
        const component = mountWithTheme(
            <table>
                <Headers
                    columns={{
                        id: { header: 'Product ID' },
                        name: { header: 'name' },
                        price: { header: 'Price' },
                    }}
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
