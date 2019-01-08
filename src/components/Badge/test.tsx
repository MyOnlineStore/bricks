import React from 'react';
import Badge from '.';
import { shallowWithTheme } from '../../utility/styled/testing';

describe('Badge', () => {
    it('should render the variety of severities and use error when no severity is chosen', () => {
        const badge = shallowWithTheme(<Badge />);

        /* tslint:disable */
        (expect(badge) as any).toHaveStyleRule('background', '#ed2157');
        /* tslint:enable */
    });

    it('should render the Badge with different colors according to severities', () => {
        const successBadge = shallowWithTheme(<Badge severity="success" />);
        const warningBadge = shallowWithTheme(<Badge severity="warning" />);
        const errorBadge = shallowWithTheme(<Badge severity="error" />);
        const infoBadge = shallowWithTheme(<Badge severity="info" />);

        /* tslint:disable */
        (expect(successBadge) as any).toHaveStyleRule('background', '#5bd16a');
        (expect(warningBadge) as any).toHaveStyleRule('background', '#fcc200');
        (expect(errorBadge) as any).toHaveStyleRule('background', '#ed2157');
        (expect(infoBadge) as any).toHaveStyleRule('background', '#88979d');
        /* tslint:enable */
    });
});
