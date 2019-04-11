import React from 'react';
import InlineNotification from '.';
import { mountWithTheme } from '../../utility/_styled/testing';
import 'jest-styled-components';

describe('InlineNotification', () => {
    it('should render a child component', () => {
        const component = mountWithTheme(
            <InlineNotification severity="info" icon="cross">
                Foo
            </InlineNotification>,
        );
        expect(component.text()).toContain('Foo');
    });
    it('should default severity icon if no icon is defined', () => {
        const component = mountWithTheme(<InlineNotification severity="info">Foo</InlineNotification>);
        expect(component.text()).toContain('Foo');
    });
});
