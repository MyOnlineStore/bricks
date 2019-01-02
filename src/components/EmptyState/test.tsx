import React from 'react';
import EmptyState from '.';
import { mountWithTheme } from '../../utility/styled/testing';

describe('EmptyState', () => {
    it('should render its children', () => {
        const component = mountWithTheme(
            <EmptyState title="Foo" message="Bar">
                <div data-testid="foo" />
            </EmptyState>,
        );

        expect(component.find('[data-testid="foo"]').length).toBe(1);
    });
});
