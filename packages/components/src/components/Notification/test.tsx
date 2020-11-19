import React from 'react';
import Notification from '.';
import { mountWithTheme } from '../../utility/styled/testing';

describe('Native Select', () => {
    it('should be testable with a test-id', () => {
        const component = mountWithTheme(<Notification severity="info" data-testid="foo" />);

        expect(component.findByTestId('foo')).toHaveLength(1);
    });

    it('should render a message when no children are present', () => {
        const component = mountWithTheme(<Notification severity="info" message="A message via prop" />);

        expect(component.text()).toBe('A message via prop');
    });

    it('should render children instead of the message prop', () => {
        const component = mountWithTheme(
            <Notification severity="info" message="No message">
                But children
            </Notification>,
        );

        expect(component.text()).toBe('But children');
    });
});
