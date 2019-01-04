import React from 'react';
import Breadcrumbs from '.';
import { mountWithTheme } from '../../utility/styled/testing';
import { StyledBreadcrumb } from './style';

describe('Breadcrumbs', () => {
    it('renders breadcrumbs with and without urls', () => {
        const crumbs = [
            { url: 'http://www.google.com', name: 'dashboard' },
            { url: 'http://www.google.com', name: 'level 1' },
            { name: 'no url' },
        ];

        const component = mountWithTheme(<Breadcrumbs breadcrumbs={crumbs} />);

        expect(
            component
                .find('a')
                .first()
                .text(),
        ).toEqual('dashboard');

        expect(component.find(StyledBreadcrumb).length).toBe(3);
    });

    it('should not render an anchor tag if no url is provided', () => {
        const crumbs = [{ name: 'no url' }];
        const component = mountWithTheme(<Breadcrumbs breadcrumbs={crumbs} />);

        expect(component.find(StyledBreadcrumb).exists()).toEqual(true);
        expect(component.find('a').exists()).toEqual(false);
    });
});
