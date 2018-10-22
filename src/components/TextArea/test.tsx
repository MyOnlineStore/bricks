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
});
