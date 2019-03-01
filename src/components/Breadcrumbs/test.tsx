import React from 'react';
import Breadcrumbs from '.';
import { mountWithTheme } from '../../utility/_styled/testing';
import { StyledBreadcrumb } from './style';

describe('Breadcrumbs', () => {
    it('renders breadcrumbs with and without urls', () => {
        const crumbs = [
            { url: 'http://www.google.com', name: 'A' },
            { url: 'http://www.google.com', name: 'B' },
            { name: 'C' },
        ];

        const component = mountWithTheme(<Breadcrumbs breadcrumbs={crumbs} />);

        expect(
            component
                .find('a')
                .first()
                .text(),
        ).toEqual('A');

        expect(component.find(StyledBreadcrumb).length).toBe(3);
    });

    it('should not render an anchor tag if no url is provided', () => {
        const crumbs = [{ name: 'A' }];
        const component = mountWithTheme(<Breadcrumbs breadcrumbs={crumbs} />);

        expect(component.find(StyledBreadcrumb).exists()).toEqual(true);
        expect(component.find('a').exists()).toEqual(false);
    });

    it('should be testable with testids', () => {
        const crumbs = [
            { url: 'http://www.google.com', name: 'A' },
            { url: 'http://www.google.com', name: 'B' },
            { name: 'C' },
        ];

        const component = mountWithTheme(<Breadcrumbs data-testid="breadcrumbs" breadcrumbs={crumbs} />);

        expect(component.find('[data-testid="breadcrumbs"]').hostNodes()).toHaveLength(1);
        expect(component.find('[data-testid="breadcrumbs-crumb-0"]').hostNodes()).toHaveLength(1);
        expect(component.find('[data-testid="breadcrumbs-crumb-1"]').hostNodes()).toHaveLength(1);
        expect(component.find('[data-testid="breadcrumbs-crumb-2"]').hostNodes()).toHaveLength(1);
    });
});
