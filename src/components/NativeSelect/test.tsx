import React from 'react';
import NativeSelect from '.';
import { mountWithTheme } from '../../utility/styled/testing';
// import MosTheme, { mosTheme } from '../../themes/MosTheme';
import 'jest-styled-components';
// import { mount } from 'enzyme';

const options = [
    {
        value: 'A',
        label: 'Bar A',
    },
    {
        value: 'B',
        label: 'Foo B',
    },
    {
        value: 'C',
        label: 'Bar C',
    },
    {
        value: 'D',
        label: 'Foo D',
    },
    {
        value: 'E',
        label: 'Bar E',
    },
    {
        value: 'F',
        label: 'Bar F',
    },
];

describe('Native Select', () => {
    it('Renders all provided options', () => {
        const changeMock = jest.fn();
        const component = mountWithTheme(<NativeSelect onChange={changeMock} value="A" options={options} />);

        expect(component.find('select').children().length).toBe(options.length);
    });

    it('should handle a change', () => {
        let clickEvent: any = {};

        const clickMock = jest.fn((_value, event) => {
            clickEvent = event;
        });

        const component = mountWithTheme(
            <NativeSelect onChange={clickMock} value="A" options={options} data-testid="nativeselect" />,
        );

        component.find('select').simulate('change', { target: { value: 'B' }, stopPropagation: () => {} });

        expect(clickMock).toHaveBeenCalledWith('B', clickEvent);
    });
});
