import { mount } from 'enzyme';
import React from 'react';
import Button from '.';
import MosTheme from '../../themes/MosTheme';
import 'jest-styled-components';

describe('Button', () => {
    it('should have less side padding when compact is true', () => {
        const component = mount(
            <MosTheme>
                <Button title="button title" variant="primary" compact />
            </MosTheme>,
        );

        expect(component.find(Button)).toHaveStyleRule('padding', '11px 12px');
    });
});
