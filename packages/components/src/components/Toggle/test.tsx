import React from 'react';
import Toggle from '.';
import { mosTheme } from '../../themes/MosTheme';
import { mountWithTheme } from '../../utility/styled/testing';
import Styledtoggle, { StyledToggleSkin } from './style';
import 'jest-styled-components';

describe('Toggle', () => {
    it('should render the correct background styling when disabled and unchecked', () => {
        const toggleNotChecked = mountWithTheme(
            <Toggle
                onChange={(): void => undefined}
                name="demo"
                error={true}
                label="foo"
                checked={false}
                disabled={true}
                value="bar"
            />,
        );

        expect(toggleNotChecked.find(StyledToggleSkin)).toHaveStyleRule(
            'background-color',
            mosTheme.Toggle.idleDisabled.backgroundColor,
        );
    });

    it('should render the correct background styling when disabled and checked', () => {
        const toggleNotChecked = mountWithTheme(
            <Toggle
                onChange={(): void => undefined}
                name="demo"
                error={true}
                label="foo"
                checked={true}
                disabled={true}
                value="bar"
            />,
        );

        expect(toggleNotChecked.find(StyledToggleSkin)).toHaveStyleRule(
            'background-color',
            mosTheme.Toggle.checkedDisabled.backgroundColor,
        );
    });

    it('should render the correct background styling when unchecked', () => {
        const toggleNotChecked = mountWithTheme(
            <Toggle
                onChange={(): void => undefined}
                name="demo"
                error={true}
                label="foo"
                checked={false}
                disabled={false}
                value="bar"
            />,
        );

        expect(toggleNotChecked.find(StyledToggleSkin)).toHaveStyleRule(
            'background-color',
            mosTheme.Toggle.idle.backgroundColor,
        );
    });

    it('should render the correct background styling when checked', () => {
        const toggleNotChecked = mountWithTheme(
            <Toggle
                onChange={(): void => undefined}
                name="demo"
                error={true}
                label="foo"
                checked={true}
                disabled={false}
                value="bar"
            />,
        );

        expect(toggleNotChecked.find(StyledToggleSkin)).toHaveStyleRule(
            'background-color',
            mosTheme.Toggle.checked.backgroundColor,
        );
    });

    it('should have a red border when error-state is active', () => {
        const toggleNotChecked = mountWithTheme(
            <Toggle
                onChange={(): void => undefined}
                name="demo"
                error={true}
                label="foo"
                checked={false}
                value="bar"
            />,
        );

        expect(toggleNotChecked.find(StyledToggleSkin)).toHaveStyleRule(
            'border',
            `1px solid ${mosTheme.Toggle.error.borderColor}`,
        );
    });

    it('should have a box-shadow on focus and remove the box-shadow on blur', () => {
        const toggle = mountWithTheme(
            <Toggle onChange={(): void => undefined} name="demo" label="foo" checked={false} value="bar" />,
        );

        toggle.find(Styledtoggle).simulate('focus');

        expect(toggle.find(StyledToggleSkin)).toHaveStyleRule('box-shadow', mosTheme.Toggle.idle.boxShadow);

        toggle.find(Styledtoggle).simulate('blur');

        expect(toggle.find(StyledToggleSkin)).not.toHaveStyleRule('box-shadow', mosTheme.Toggle.idle.boxShadow);
    });

    it('should be able to change checked value by clicking the wrapper', () => {
        const mockHandler = jest.fn();

        const toggle = mountWithTheme(
            <Toggle onChange={mockHandler} name="demo" label="foo" checked={false} value="bar" />,
        );

        toggle.simulate('click');

        expect(mockHandler).toHaveBeenCalledWith({
            checked: true,
        });
    });

    it('should not be able to change checked value by clicking the wrapper when disabled', () => {
        const mockHandler = jest.fn();

        const toggle = mountWithTheme(
            <Toggle onChange={mockHandler} name="demo" disabled={true} label="foo" checked={true} value="bar" />,
        );

        toggle.simulate('click');

        expect(mockHandler).not.toHaveBeenCalled();
    });

    it('should render a label when a label is set', () => {
        const mockHandler = jest.fn();

        const toggle = mountWithTheme(
            <Toggle onChange={mockHandler} name="demo" disabled={true} label="foo" checked={true} value="bar" />,
        );

        expect(toggle.find('p').length).toBe(1);
    });

    it('should be testable with a testid', () => {
        const component = mountWithTheme(
            <Toggle
                onChange={(): void => undefined}
                name="demo"
                error={true}
                label="foo"
                checked={false}
                disabled={true}
                value="bar"
                data-testid="toggle"
            />,
        );

        expect(component.find('[data-testid="toggle"]').hostNodes()).toHaveLength(1);
    });
});
