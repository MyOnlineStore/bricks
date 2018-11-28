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
        /* tslint:disable */
        const changeMock = jest.fn(() => {
            component.setProps({ value: 123 });
        });
        /*tslint:enable */
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

    it('should save the input on every change', () => {
        /* tslint:disable */
        const changeMock = jest.fn(value => {
            component.setProps({ value });
        });
        /*tslint:enable */
        const NumberField = withNumberFormatting(TextField);
        const component = mountWithTheme(
            <NumberField
                name=""
                value={123}
                onChange={(value: number): void => {
                    changeMock(value);
                }}
            />,
        );

        component.find('input').simulate('change', { target: { value: '12' } });
        expect(component.state('savedValue')).toEqual(12);

        component.find('input').simulate('change', { target: { value: '1' } });
        expect(component.state('savedValue')).toEqual(1);
    });
});
