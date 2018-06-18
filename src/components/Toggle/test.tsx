import React from 'react';
import Toggle from '.';
import { mosTheme } from '../../themes/MosTheme';
import { mountWithTheme } from '../../utility/styled';
import Styledtoggle, { StyledToggleSkin, StyledToggleWrapper } from './style';

describe('Toggle', () => {
    it('should render a checked background when disabled', () => {
        const toggleNotChecked = mountWithTheme(
            <Toggle
                changeHandler={(): void => undefined}
                name="demo"
                error={true}
                label="foo"
                checked={false}
                disabled={true}
                value="bar"
            />,
        );

        /* tslint:disable */
        (expect(toggleNotChecked.find(StyledToggleSkin)) as any).toHaveStyleRule(
            'background',
            mosTheme.Toggle.idleDisabled.background,
        );
        /* tslint:enable */
    });

    it('should have a red border when error-state is active', () => {
        const toggleNotChecked = mountWithTheme(
            <Toggle
                changeHandler={(): void => undefined}
                name="demo"
                error={true}
                label="foo"
                checked={false}
                value="bar"
            />,
        );

        /* tslint:disable */
        (expect(toggleNotChecked.find(StyledToggleSkin)) as any).toHaveStyleRule(
            'border',
            mosTheme.Toggle.error.border,
        );
        /* tslint:enable */
    });

    it('should have a box-shadow on focus and remove the box-shadow on blur', () => {
        const toggle = mountWithTheme(
            <Toggle changeHandler={(): void => undefined} name="demo" label="foo" checked={false} value="bar" />,
        );

        toggle.find(Styledtoggle).simulate('focus');

        /* tslint:disable */
        (expect(toggle.find(StyledToggleSkin)) as any).toHaveStyleRule('box-shadow', mosTheme.Toggle.focus.boxShadow);
        /* tslint:enable */

        toggle.find(Styledtoggle).simulate('blur');

        /* tslint:disable */
        (expect(toggle.find(StyledToggleSkin)) as any).not.toHaveStyleRule(
            'box-shadow',
            mosTheme.Toggle.focus.boxShadow,
        );
        /* tslint:enable */
    });

    it('should be able to change checked value by clicking the wrapper', () => {
        const mockHandler = jest.fn();

        const toggle = mountWithTheme(
            <Toggle changeHandler={mockHandler} name="demo" label="foo" checked={false} value="bar" />,
        );

        toggle.find(StyledToggleWrapper).simulate('click');

        expect(mockHandler).toHaveBeenCalledWith({
            checked: true,
        });
    });

    it('should not be able to change checked value by clicking the wrapper when disabled', () => {
        const mockHandler = jest.fn();

        const toggle = mountWithTheme(
            <Toggle changeHandler={mockHandler} name="demo" disabled={true} label="foo" checked={true} value="bar" />,
        );

        toggle.find(StyledToggleWrapper).simulate('click');

        expect(mockHandler).toHaveBeenCalledWith({
            checked: true,
        });
    });
});
