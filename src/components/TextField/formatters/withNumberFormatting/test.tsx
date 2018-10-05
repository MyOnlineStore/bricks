import React from 'react';
import withNumberFormatting from './';
import TextField from '../..';
import { mountWithTheme } from '../../../../utility/styled/testing';

describe('Range', () => {
    it('should handle change', () => {
        const changeMock = jest.fn();
        const NumberField = withNumberFormatting(TextField);
        const component = mountWithTheme(<NumberField name="" value={19} onChange={changeMock} />);

        component.find('input').simulate('change', { target: { value: 20 } });

        expect(changeMock).toHaveBeenCalledWith(20);
    });

    it('should not break on a NaN', () => {
        const changeMock = jest.fn();
        const NumberField = withNumberFormatting(TextField);
        const component = mountWithTheme(<NumberField name="" value={19.12} onChange={changeMock} />);

        component.find('input').simulate('change', { target: { value: NaN } });
        component.find('input').simulate('blur');

        expect(component.find('input').prop('value')).toEqual('0');
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
