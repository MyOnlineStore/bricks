import React from 'react';
import TextField from '.';
import { Icon } from '../../index';
import { mountWithTheme } from '../../utility/styled/testing';
import { StyledInput, StyledWrapper } from './style';

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

        expect(component.find(StyledInput).prop('focus')).toBe(true);
    });

    it('should handle a change', () => {
        const changeMock = jest.fn();

        const component = mountWithTheme(<TextField value="John" name="firstName" onChange={changeMock} />);

        component.find(StyledInput).simulate('change');

        expect(changeMock).toHaveBeenCalled();
    });

    it('should not render a different icon and have straight corners when the feedback is of severity info', () => {
        const component = mountWithTheme(
            <TextField
                value="John"
                name="firstName"
                onChange={(): void => undefined}
                feedback={{
                    severity: 'info',
                    message: 'Hey, listen',
                }}
            />,
        );
        /* tslint:disable */
        (expect(component.find(StyledWrapper)).not as any).toHaveStyleRule('border-bottom-right-radius');
        /* tslint:enable */
        expect(component.find(Icon).prop('icon')).toEqual('questionCircle');
    });
});
