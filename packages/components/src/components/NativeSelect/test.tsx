import React from 'react';
import NativeSelect from '.';
import { mountWithTheme } from '../../utility/styled/testing';

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
    it('should be testable with a test-id', () => {
        const component = mountWithTheme(
            <NativeSelect onChange={() => {}} value="A" options={options} data-testid="foo" />,
        );

        expect(component.find('[data-testid="foo"]').hostNodes().length).toBe(1);
    });

    it('should render all provided options', () => {
        const changeMock = jest.fn();
        const component = mountWithTheme(<NativeSelect onChange={changeMock} value="A" options={options} />);

        expect(component.find('select').children().length).toBe(options.length);
    });

    it('should handle a change', () => {
        let clickEvent: any = {};

        const clickMock = jest.fn((_value, event) => {
            clickEvent = event;
        });

        const component = mountWithTheme(<NativeSelect onChange={clickMock} value="A" options={options} />);

        component.find('select').simulate('change', { target: { value: 'B' }, stopPropagation: () => {} });

        expect(clickMock).toHaveBeenCalledWith('B', clickEvent);
    });
});
