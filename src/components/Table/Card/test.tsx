import React from 'react';
import Card from '.';
import { mountWithTheme } from '../../../utility/_styled/testing';
import StyledRow from './style';
import { ContrastThemeProvider } from '../../Contrast';

describe('Cards', () => {
    it('should handle mouse enter and leave', () => {
        const component = mountWithTheme(
            <div>
                <Card
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
            </div>,
        );

        component.find(StyledRow).simulate('mouseEnter');
        expect(component.find(ContrastThemeProvider).prop('enable')).toBe(true);

        component.find(StyledRow).simulate('mouseLeave');
        expect(component.find(ContrastThemeProvider).prop('enable')).toBe(false);
    });
});
