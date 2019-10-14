import React from 'react';
import TextField from '.';
import { mountWithTheme } from '../../utility/styled/testing';
import { StyledInput, StyledWrapper, StyledAffixWrapper } from './style';
import { Box } from '../..';

describe('TextField', () => {
    it('should not change value when disabled', () => {
        const changeMock = jest.fn();

        const component = mountWithTheme(
            <TextField value="John" suffix={'firstname'} disabled name="firstName" onChange={changeMock} />,
        );

        component.find(StyledInput).simulate('change');

        expect(changeMock).not.toHaveBeenCalled();
    });

    it('should not break when no onBlur is provided', () => {
        const component = mountWithTheme(
            <TextField value="John" suffix={'firstname'} disabled name="firstName" onChange={(): void => undefined} />,
        );

        const fn = (): void => {
            component.find(StyledInput).simulate('blur');
        };

        expect(fn).not.toThrow();
    });

    it('should render an active state when focussed', () => {
        const component = mountWithTheme(<TextField value="" name="firstName" onChange={jest.fn()} />);

        component.find(StyledInput).simulate('focus');

        expect(component.find(StyledWrapper).prop('focus')).toBe(true);
    });

    it('should render a focus state after clicking an affix', () => {
        const component = mountWithTheme(<TextField value="" suffix="hi" name="firstName" onChange={jest.fn()} />);

        component.find(StyledAffixWrapper).simulate('click');

        expect(component.find(StyledWrapper).prop('focus')).toBe(true);
    });

    it('should handle a change', () => {
        const changeMock = jest.fn();

        const component = mountWithTheme(<TextField value="John" name="firstName" onChange={changeMock} />);

        component.find(StyledInput).simulate('change');

        expect(changeMock).toHaveBeenCalled();
    });

    it('should show a placeholder', () => {
        const component = mountWithTheme(
            <TextField value="" suffix="hi" name="firstName" placeholder="foo" onChange={jest.fn()} />,
        );
        expect(component.find(StyledInput).prop('placeholder')).toEqual('foo');
    });

    it('should be testable with a test-id', () => {
        const component = mountWithTheme(<TextField data-testid="foo" value="" name="foo" onChange={jest.fn()} />);

        expect(component.find('[data-testid="foo"]').hostNodes().length).toBe(1);
    });

    it('should accept a React Node as pre- and suffix', () => {
        const component = mountWithTheme(
            <TextField
                data-testid="foo"
                prefix={<Box>Foo</Box>}
                suffix={<Box>Bar</Box>}
                value=""
                name="foo"
                onChange={jest.fn()}
            />,
        );

        expect(component.find('[data-testid="foo"]').hostNodes().length).toBe(1);
    });

    it('should return an empty string in the onChange callback when the clear button is clicked', () => {
        const changeMock = jest.fn();

        const component = mountWithTheme(
            <TextField data-testid="foo" value="not-empty-value" name="foo" onChange={changeMock} showClearButton />,
        );

        component
            .find('[data-testid="foo-clear-button"]')
            .hostNodes()
            .simulate('click');

        expect(changeMock).toHaveBeenCalledWith('');
    });
});
