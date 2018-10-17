import React from 'react';
import Textarea from '.';
import { mountWithTheme } from '../../utility/styled/testing';
import { StyledTextarea } from './style';

describe('Textarea', () => {
    it('should not change value when disabled', () => {
        const changeMock = jest.fn();

        const component = mountWithTheme(<Textarea value="John" disabled name="firstName" onChange={changeMock} />);

        component.find(StyledTextarea).simulate('change');

        expect(changeMock).not.toHaveBeenCalled();
    });

    it('should handle a change', () => {
        const changeMock = jest.fn();

        const component = mountWithTheme(<Textarea value="John" resizeable feedback={{severity: 'info', message: 'hi'}} name="firstName" onChange={changeMock} />);

        component.find(StyledTextarea).simulate('focus');
        component.find(StyledTextarea).simulate('change');

        expect(changeMock).toHaveBeenCalled();
    });
});
