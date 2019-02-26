import React from 'react';
import Badge from '.';
import { mountWithTheme } from '../../utility/_styled/testing';
import 'jest-styled-components';

describe('Badge', () => {
    it('should render the variety of severities and use error when no severity is chosen', () => {
        const badge = mountWithTheme(<Badge />);

        expect(badge).toHaveStyleRule('background', '#ed2157');
    });

    it('should render the Badge with different colors according to severities', () => {
        const successBadge = mountWithTheme(<Badge severity="success" />);
        const warningBadge = mountWithTheme(<Badge severity="warning" />);
        const errorBadge = mountWithTheme(<Badge severity="error" />);
        const infoBadge = mountWithTheme(<Badge severity="info" />);

        expect(successBadge).toHaveStyleRule('background', '#5bd16a');
        expect(warningBadge).toHaveStyleRule('background', '#fcc200');
        expect(errorBadge).toHaveStyleRule('background', '#ed2157');
        expect(infoBadge).toHaveStyleRule('background', '#88979d');
    });

    it('should be testable with a testid', () => {
        const component = mountWithTheme(<Badge data-testid="badge" />);

        expect(component.find('[data-testid="box"]').hostNodes()).toHaveLength(1);
    });
});
