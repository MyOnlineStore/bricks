import React from 'react';
import Badge from '.';
import { shallowWithTheme } from '../../utility/_styled/testing';
import 'jest-styled-components';

describe('Badge', () => {
    it('should render the variety of severities and use error when no severity is chosen', () => {
        const badge = shallowWithTheme(<Badge />);

        expect(badge).toHaveStyleRule('background', '#ed2157');
    });

    it('should render the Badge with different colors according to severities', () => {
        const successBadge = shallowWithTheme(<Badge severity="success" />);
        const warningBadge = shallowWithTheme(<Badge severity="warning" />);
        const errorBadge = shallowWithTheme(<Badge severity="error" />);
        const infoBadge = shallowWithTheme(<Badge severity="info" />);

        expect(successBadge).toHaveStyleRule('background', '#5bd16a');
        expect(warningBadge).toHaveStyleRule('background', '#fcc200');
        expect(errorBadge).toHaveStyleRule('background', '#ed2157');
        expect(infoBadge).toHaveStyleRule('background', '#88979d');
    });
});
