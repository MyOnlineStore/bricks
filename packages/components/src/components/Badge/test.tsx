import React from 'react';
import Badge from '.';
import { mountWithTheme } from '../../utility/styled/testing';
import 'jest-styled-components';
import colors from '../../themes/MosTheme/colors';

describe('Badge', () => {
    it('should render the variety of severities and use error when no severity is chosen', () => {
        const badge = mountWithTheme(<Badge />);

        expect(badge).toHaveStyleRule('background', colors.red500);
    });

    it('should render the Badge with different colors according to severities', () => {
        const successBadge = mountWithTheme(<Badge severity="success" />);
        const warningBadge = mountWithTheme(<Badge severity="warning" />);
        const errorBadge = mountWithTheme(<Badge severity="error" />);
        const infoBadge = mountWithTheme(<Badge severity="info" />);

        expect(successBadge).toHaveStyleRule('background', colors.green400);
        expect(warningBadge).toHaveStyleRule('background', colors.yellow500);
        expect(errorBadge).toHaveStyleRule('background', colors.red500);
        expect(infoBadge).toHaveStyleRule('background', colors.grey500);
    });

    it('should be testable with a testid', () => {
        const component = mountWithTheme(<Badge data-testid="badge" />);

        expect(component.find('[data-testid="badge"]').hostNodes()).toHaveLength(1);
    });
});
