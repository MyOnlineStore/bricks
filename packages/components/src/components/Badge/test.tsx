import React from 'react';
import Badge from '.';
import { mountWithTheme } from '../../utility/styled/testing';
import 'jest-styled-components';
import colors from '../../themes/MosTheme/colors';

describe('Badge', () => {
    it('should render the variety of severities and use error when no severity is chosen', () => {
        const badge = mountWithTheme(<Badge />);

        expect(badge).toHaveStyleRule('background', colors.red100);
    });

    it('should render the Badge with different colors according to variants', () => {
        const primaryBadge = mountWithTheme(<Badge variant="primary" />);
        const secondaryBadge = mountWithTheme(<Badge variant="secondary" />);
        const warningBadge = mountWithTheme(<Badge variant="warning" />);
        const errorBadge = mountWithTheme(<Badge variant="error" />);
        const infoBadge = mountWithTheme(<Badge variant="info" />);

        expect(primaryBadge).toHaveStyleRule('background', colors.green100);
        expect(primaryBadge).toHaveStyleRule('color', colors.green800);
        expect(secondaryBadge).toHaveStyleRule('background', colors.grey200);
        expect(secondaryBadge).toHaveStyleRule('color', colors.grey700);
        expect(warningBadge).toHaveStyleRule('background', colors.yellow100);
        expect(warningBadge).toHaveStyleRule('color', colors.yellow800);
        expect(errorBadge).toHaveStyleRule('background', colors.red100);
        expect(errorBadge).toHaveStyleRule('color', colors.red700);
        expect(infoBadge).toHaveStyleRule('background', colors.blue100);
        expect(infoBadge).toHaveStyleRule('color', colors.blue700);
    });

    it('should be testable with a testid', () => {
        const component = mountWithTheme(<Badge data-testid="badge" />);

        expect(component.find('[data-testid="badge"]').hostNodes()).toHaveLength(1);
    });
});
