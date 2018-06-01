import React from 'react';
import TextField from '.';
import { Icon } from '../../index';
import { mountWithTheme } from '../../utility/styled';
import { StyledInput, StyledWrapper } from './style';

describe('TextField', () => {
    it('should render an idle state', () => {
        const component = mountWithTheme(
            <TextField
                value=""
                name="firstName"
                label="First name"
                handleChange={jest.fn()}
            />,
        );

        expect(component.find(StyledWrapper).prop('active')).toBe(false);
    });

    it('should render an active state with a value', () => {
        const component = mountWithTheme(
            <TextField
                value="Jane"
                name="firstName"
                label="First name"
                handleChange={jest.fn()}
            />,
        );

        expect(component.find(StyledWrapper).prop('active')).toBe(true);
    });

    it('should render an active state when focussed', () => {
        const component = mountWithTheme(
            <TextField
                value=""
                name="firstName"
                label="First name"
                handleChange={jest.fn()}
            />,
        );

        component.find(StyledInput).simulate('focus');

        expect(component.find(StyledWrapper).prop('active')).toBe(true);
    });

    it('should retain active state with a value on blur', () => {
        const component = mountWithTheme(
            <TextField
                value="John"
                name="firstName"
                label="First name"
                handleChange={jest.fn()}
            />,
        );

        component.find(StyledInput).simulate('blur');

        expect(component.find(StyledWrapper).prop('active')).toBe(true);
    });

    it('should handle a change', () => {
        const changeMock = jest.fn();

        const component = mountWithTheme(
            <TextField
                value="John"
                name="firstName"
                label="First name"
                handleChange={changeMock}
            />,
        );

        component.find(StyledInput).simulate('change');

        expect(changeMock).toHaveBeenCalled();
    });

    it('should not render a different icon and have straight corners when the feedback is of severity info', () => {
        const component = mountWithTheme(
            <TextField
                value="John"
                name="firstName"
                label="First name"
                handleChange={(): void => {
                    /**/
                }}
                feedback={{
                    severity: 'info',
                    message: 'Hey, listen',
                }}
            />,
        );
        /* tslint:disable */
        (expect(component.find(StyledWrapper)).not as any).toHaveStyleRule(
            'border-bottom-right-radius',
        );
        /* tslint:enable */
        expect(component.find(Icon).prop('icon')).toEqual('questionCircle');
    });
});
