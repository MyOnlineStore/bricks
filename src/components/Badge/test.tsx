import React from 'react';
import Badge from '.';
import toJson from 'enzyme-to-json';
import { shallowWithTheme } from '../../utility/styled/testing';

describe('Badge', () => {
    it('should render the variety of severities and use error when no severity is chosen', () => {
        const badge = shallowWithTheme(<Badge />);

        /* tslint:disable */
        (expect(toJson(badge)) as any).toHaveStyleRule('background', '#ed2157');
        /* tslint:enable */
    });

    it('should render the Badge with different colors according to severities', () => {
        const successBadge = shallowWithTheme(<Badge severity="success" />);
        const warningBadge = shallowWithTheme(<Badge severity="warning" />);
        const errorBadge = shallowWithTheme(<Badge severity="error" />);
        const infoBadge = shallowWithTheme(<Badge severity="info" />);

        /* tslint:disable */
        (expect(toJson(successBadge)) as any).toHaveStyleRule('background', '#5bd16a');
        (expect(toJson(warningBadge)) as any).toHaveStyleRule('background', '#fcc200');
        (expect(toJson(errorBadge)) as any).toHaveStyleRule('background', '#ed2157');
        (expect(toJson(infoBadge)) as any).toHaveStyleRule('background', '#88979d');
        /* tslint:enable */
    });
});
