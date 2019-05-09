import React from 'react';
import withNumberFormatting from './';
import TextField from '../..';
import { mountWithTheme } from '../../../../utility/styled/testing';

describe('withNumberFormatting', () => {
    it('should handle change', () => {
        const changeMock = jest.fn();
        const NumberField = withNumberFormatting(TextField);
        const component = mountWithTheme(<NumberField name="" value={19} onChange={changeMock} />);

        component.find('input').simulate('change', { target: { value: 20 } });

        expect(changeMock).toHaveBeenCalledWith(20);
    });

    it('should restore the savedValue on blur when the input is not numeric', () => {
        const changeMock = jest.fn();

        const NumberField = withNumberFormatting(TextField);
        const component = mountWithTheme(<NumberField name="" value={123} onChange={changeMock} />);

        component.find('input').simulate('change', { target: { value: 'abcd' } });
        component.find('input').simulate('blur');

        expect(component.find('input').prop('value')).toEqual('123');
    });

    it('should not allow negative numbers when negativeDisabled is true', () => {
        const changeMock = jest.fn();
        const NumberField = withNumberFormatting(TextField);
        const component = mountWithTheme(<NumberField name="" value={19} disableNegative onChange={changeMock} />);

        component.find('input').simulate('change', { target: { value: -5 } });
        component.find('input').simulate('blur');

        expect(changeMock).toHaveBeenCalledWith(0);
    });
});
