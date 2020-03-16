import React from 'react';
import Counter from '.';
import { mountWithTheme } from '../../utility/styled/testing';
import 'jest-styled-components';
import { colors } from '../../themes/MosTheme/colors';

describe('Counter', () => {
    it('should render the variety of severities and use error when no severity is chosen', () => {
        const component = mountWithTheme(<Counter />);

        expect(component).toHaveStyleRule('background', colors.red500);
    });

    it('should render the Counter with different colors according to severities', () => {
        const successCounter = mountWithTheme(<Counter severity="success" />);
        const warningCounter = mountWithTheme(<Counter severity="warning" />);
        const errorCounter = mountWithTheme(<Counter severity="error" />);
        const infoCounter = mountWithTheme(<Counter severity="info" />);

        expect(successCounter).toHaveStyleRule('background', colors.green400);
        expect(warningCounter).toHaveStyleRule('background', colors.yellow500);
        expect(errorCounter).toHaveStyleRule('background', colors.red500);
        expect(infoCounter).toHaveStyleRule('background', colors.grey500);
    });

    it('should be testable with a testid', () => {
        const component = mountWithTheme(<Counter data-testid="counter" />);

        expect(component.find('[data-testid="counter"]').hostNodes()).toHaveLength(1);
    });
});
