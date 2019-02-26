import React from 'react';
import EmptyState from '.';
import { mountWithTheme } from '../../utility/_styled/testing';
import Heading from '../Heading';
import Text from '../Text';
import Box from '../Box';
import Button from '../Button';

describe('EmptyState', () => {
    it('should render its children', () => {
        const component = mountWithTheme(
            <EmptyState title="Foo" message="Bar">
                <div data-testid="foo" />
            </EmptyState>,
        );

        expect(component.find('[data-testid="foo"]').length).toBe(1);
    });

    it('should render the passed through title', () => {
        const title = <Heading hierarchy={2}>test</Heading>;
        const component = mountWithTheme(<EmptyState title={title} message="bar" />);

        expect(component.find(Heading).matchesElement(title)).toBe(true);
    });

    it('should render the passed through message', () => {
        const message = <Text>test</Text>;
        const component = mountWithTheme(<EmptyState title="foo" message={message} />);

        expect(component.find(Text).matchesElement(message)).toBe(true);
    });

    it('should render the passed through button', () => {
        const button = <Button variant="primary" title="foo" href="" />;
        const component = mountWithTheme(<EmptyState title="foo" message="bar" button={button} />);

        expect(component.find(Button).matchesElement(button)).toBe(true);
    });

    it('should render in a vertical fashion', () => {
        const component = mountWithTheme(<EmptyState title="foo" message="bar" />);

        expect(
            component
                .find(Box)
                .first()
                .prop('direction'),
        ).toEqual('column');
    });

    it('should render in a horizontal fashion', () => {
        const component = mountWithTheme(<EmptyState horizontal title="foo" message="bar" />);

        expect(
            component
                .find(Box)
                .first()
                .prop('direction'),
        ).toEqual('row');
    });

    it('should be testable with a testid', () => {
        const component = mountWithTheme(<EmptyState title="foo" message="bar" data-testid="empty" />);

        expect(component.find('[data-testid="empty"]').hostNodes()).toHaveLength(1);
    });
});
