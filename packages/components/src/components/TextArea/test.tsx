import React from 'react';
import TextArea from '.';
import { mountWithTheme } from '../../utility/styled/testing';
import { StyledTextArea } from './style';

describe('TextArea', () => {
    it('should not change value when disabled', () => {
        const changeMock = jest.fn();

        const component = mountWithTheme(<TextArea value="John" disabled name="firstName" onChange={changeMock} />);

        component.find(StyledTextArea).simulate('change');

        expect(changeMock).not.toHaveBeenCalled();
    });

    it('should not break when no onBlur is provided', () => {
        const component = mountWithTheme(
            <TextArea value="John" name="firstName" onChange={(): void => undefined} />,
        );

        const fn = (): void => {
            component.find(StyledTextArea).simulate('blur');
        };

        expect(fn).not.toThrow();
    });

    it('should handle a change', () => {
        const changeMock = jest.fn();

        const component = mountWithTheme(
            <TextArea
                value="John"
                resizeable
                feedback={{ severity: 'info', message: 'hi' }}
                name="firstName"
                onChange={changeMock}
            />,
        );

        component.find(StyledTextArea).simulate('focus');
        component.find(StyledTextArea).simulate('change');

        expect(changeMock).toHaveBeenCalled();
    });

    it('should be able to enforce a character limit', () => {
        const changeMock = jest.fn();
        const changeString =
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a sem sollicitudin, sodales felis vel, porta est. Donec quam nulla, egestas vitae feugiat amet. ';

        const expectedString =
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a sem sollicitudin, sodales felis vel, porta est. Donec quam nulla, egestas';

        const component = mountWithTheme(
            <TextArea
                value=""
                resizeable
                feedback={{ severity: 'info', message: 'hi' }}
                name="firstName"
                onChange={changeMock}
                characterLimit={140}
            />,
        );

        component.find(StyledTextArea).simulate('focus');
        component.find(StyledTextArea).simulate('change', {
            target: {
                value: changeString,
            },
        });

        expect(changeMock).toHaveBeenCalledWith(expectedString, expect.any(Object));
    });

    it('should be able to test with a testid', () => {
        const changeMock = jest.fn();
        const component = mountWithTheme(
            <TextArea
                value="John"
                data-testid="foo"
                name="firstName"
                onChange={changeMock}
                feedback={{ severity: 'error', message: 'foo', 'data-testid': 'feedback' }}
            />,
        );

        expect(component.findByTestId('foo')).toHaveLength(1);
        expect(component.findByTestId('feedback')).toHaveLength(1);
    });
});
