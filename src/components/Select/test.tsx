import React from 'react';
import Select from '.';
import { mountWithTheme, shallowWithTheme } from '../../utility/styled/testing';
import { StyledInput, StyledWindow } from './style';
import Box from '../Box';
import Option from './Option';
import FoldOut from '../FoldOut';
import Text from '../Text';

const options = [
    {
        image: 'http://via.placeholder.com/40x40',
        value: 'A',
        label: 'Bar A',
        description: 'Lorem ipsum dolor sit amet.',
    },
    {
        image: 'http://via.placeholder.com/40x40',
        value: 'B',
        label: 'Foo B',
        description: 'Lorem ipsum dolor sit amet.',
    },
    {
        image: 'http://via.placeholder.com/40x40',
        value: 'C',
        label: 'Bar C',
        description: 'Lorem ipsum dolor sit amet.',
    },
    {
        image: 'http://via.placeholder.com/40x40',
        value: 'D',
        label: 'Foo D',
        description: 'Lorem ipsum dolor sit amet.',
    },
    {
        image: 'http://via.placeholder.com/40x40',
        value: 'E',
        label: 'Bar E',
        description: 'Lorem ipsum dolor sit amet.',
    },
    {
        image: 'http://via.placeholder.com/40x40',
        value: 'F',
        label: 'Bar F',
        description: 'Lorem ipsum dolor sit amet.',
    },
];

/* tslint:disable:max-file-line-count */

describe('Select', () => {
    it('should open when the spacebar is pressed', () => {
        const preventDefaultMock = jest.fn();
        const component = mountWithTheme(
            <Select onChange={(): void => undefined} value="" emptyText="empty" options={options} />,
        );

        component.simulate('keyDown', {
            key: ' ',
        });

        expect(component.find(FoldOut).prop('isOpen')).toBe(true);

        component.simulate('keyDown', {
            key: 'Tab',
            preventDefault: preventDefaultMock,
        });
    });

    it('should open the arrowDown or arrowUp is pressed and close when escape is pressed', () => {
        const component = mountWithTheme(
            <Select onChange={(): void => undefined} value="" emptyText="empty" options={options} />,
        );

        component.simulate('keyDown', { key: 'ArrowDown' });
        expect(component.find(FoldOut).prop('isOpen')).toBe(true);

        component.simulate('keyDown', { key: 'Escape' });
        expect(component.find(FoldOut).prop('isOpen')).toBe(false);

        component.simulate('keyDown', { key: 'ArrowUp' });
        expect(component.find(FoldOut).prop('isOpen')).toBe(true);
    });

    it('should show an input and options on click', () => {
        const component = mountWithTheme(
            <Select onChange={(): void => undefined} value="" emptyText="empty" options={options} />,
        );

        component.simulate('keyDown', {
            key: ' ',
        });

        expect(component.find('input').length).toBe(1);
        expect(component.find(Option).length).toBe(options.length);
    });

    it('should show an input and options on click', () => {
        const component = mountWithTheme(
            <Select onChange={(): void => undefined} value="" emptyText="empty" options={options} />,
        );

        component.simulate('keyDown', {
            key: ' ',
        });

        expect(component.find('input').length).toBe(1);
        expect(component.find(Option).length).toBe(options.length);
    });

    it('should filter options on input', () => {
        const component = mountWithTheme(
            <Select
                onChange={(): void => undefined}
                value=""
                emptyText="empty"
                options={[
                    {
                        value: 'A',
                        label: 'A',
                    },
                    {
                        value: 'B',
                        label: 'B',
                    },
                ]}
            />,
        );

        component.simulate('keyDown', {
            key: ' ',
        });

        component.find('input').simulate('change', {
            target: {
                value: 'A',
            },
        });

        expect(component.find(Option).length).toBe(1);
    });

    it('should tear down event listeners on unmount', () => {
        const spy = jest.spyOn(document, 'removeEventListener');

        const component = mountWithTheme(
            <Select onChange={(): void => undefined} value="" emptyText="empty" options={options} />,
        );

        component.unmount();

        expect(spy).toHaveBeenCalled();
    });

    it('should close when clicked outside of window', () => {
        const callbackMap: { [key: string]: Function } = {};

        document.addEventListener = jest.fn((event, callback) => (callbackMap[event] = callback));

        const component = mountWithTheme(
            <Select onChange={(): void => undefined} value="" emptyText="empty" options={options} />,
        );

        component
            .find(StyledInput)
            .find(Box)
            .at(1)
            .simulate('click');

        expect(component.find(FoldOut).prop('isOpen')).toBe(true);

        callbackMap.mousedown({
            target: component.first().getDOMNode(),
        });

        component.update();

        // click inside
        expect(component.find(FoldOut).prop('isOpen')).toBe(true);

        // click outside
        callbackMap.mousedown({
            target: document.createElement('div'),
        });

        component.update();

        expect(component.find(FoldOut).prop('isOpen')).toBe(false);
    });

    it('should handle a change', () => {
        const changeHandler = jest.fn();

        const component = mountWithTheme(
            <Select onChange={changeHandler} value="" emptyText="empty" options={options} />,
        );

        component.simulate('keyDown', {
            key: ' ',
        });

        component
            .find(Option)
            .first()
            .simulate('click');

        expect(changeHandler).toHaveBeenCalledWith(options[0].value);
    });

    it('should target next option when arrow down is pressed and reset after last option', () => {
        const options = [{ value: 'A', label: 'A' }, { value: 'B', label: 'B' }];

        const component = mountWithTheme(
            <Select onChange={(): void => undefined} value="" emptyText="empty" options={options} />,
        );

        component.simulate('keyDown', {
            key: ' ',
        });

        component.simulate('keyDown', {
            key: 'ArrowDown',
        });

        component.simulate('keyDown', {
            key: 'ArrowDown',
        });

        expect(
            component
                .find(Option)
                .at(options.length - 1)
                .prop('isTargeted'),
        ).toBe(true);

        component.simulate('keyDown', {
            key: 'ArrowDown',
        });

        expect(
            component
                .find(Option)
                .at(0)
                .prop('isTargeted'),
        ).toBe(true);
    });

    it('should target the previous option when arrow up is pressed and target last item on first option', () => {
        const options = [{ value: 'A', label: 'A' }, { value: 'B', label: 'B' }];

        const component = mountWithTheme(
            <Select onChange={(): void => undefined} value="" emptyText="empty" options={options} />,
        );

        component.simulate('keyDown', {
            key: ' ',
        });

        component.simulate('keyDown', {
            key: 'ArrowDown',
        });

        component.simulate('keyDown', {
            key: 'ArrowDown',
        });

        component.simulate('keyDown', {
            key: 'ArrowUp',
        });

        expect(
            component
                .find(Option)
                .at(0)
                .prop('isTargeted'),
        ).toBe(true);

        component.simulate('keyDown', {
            key: 'ArrowUp',
        });

        expect(
            component
                .find(Option)
                .at(options.length - 1)
                .prop('isTargeted'),
        ).toBe(true);
    });

    it('should set the value of the target option when enter is pressed on a targeted option', () => {
        const changeHandler = jest.fn();

        const component = mountWithTheme(
            <Select onChange={changeHandler} value="" emptyText="empty" options={options} />,
        );

        component.simulate('keyDown', {
            key: ' ',
        });

        component.simulate('keyDown', {
            key: 'ArrowDown',
        });

        component.simulate('keyDown', {
            key: 'Enter',
        });

        expect(changeHandler).toHaveBeenCalledWith(options[0].value);
    });

    it('should handle a selected option', () => {
        const component = shallowWithTheme(
            <Select onChange={(): void => undefined} value={options[1].value} emptyText="empty" options={options} />,
        ).dive();

        expect(component.find(StyledInput).findWhere(node => node.text() === options[1].label).length).toBe(1);
    });

    it('should render an alternative option rendering', () => {
        const renderOption = jest.fn();

        mountWithTheme(
            <Select
                onChange={(): void => undefined}
                value=""
                emptyText="empty"
                options={options}
                renderOption={renderOption}
            />,
        );

        expect(renderOption).toHaveBeenCalledTimes(options.length);
    });

    it('should render an alternative input rendering', () => {
        const renderInput = jest.fn();

        mountWithTheme(
            <Select
                onChange={(): void => undefined}
                value=""
                emptyText="empty"
                options={options}
                renderInput={renderInput}
            />,
        );

        expect(renderInput).toHaveBeenCalledTimes(1);
    });

    it('should show an empty state', () => {
        const emptyText = 'mock empty text';

        const component = mountWithTheme(
            <Select onChange={(): void => undefined} value="" emptyText={emptyText} options={[]} />,
        );

        component
            .find(StyledInput)
            .find(Box)
            .at(1)
            .simulate('click');

        expect(
            component
                .find(StyledWindow)
                .find(Text)
                .text(),
        ).toEqual(emptyText);
    });

    it('should target an Option when mouse enters', () => {
        const component = mountWithTheme(
            <Select onChange={(): void => undefined} value="" emptyText="" options={options} />,
        );

        component
            .find(StyledInput)
            .find(Box)
            .at(1)
            .simulate('click');

        component
            .find(Option)
            .at(2)
            .simulate('mouseEnter');

        expect(
            component
                .find(Option)
                .at(2)
                .prop('isTargeted'),
        ).toBe(true);
    });

    it('should not open the Option-Select window when the component is disabled', () => {
        const component = mountWithTheme(
            <Select onChange={(): void => undefined} value="" emptyText="" options={options} disabled />,
        );

        component
            .find(StyledInput)
            .find(Box)
            .at(1)
            .simulate('click');

        expect(component.find(StyledWindow).prop('isOpen')).toEqual(false);
    });

    it('should close the Option-Select window when the component gets disabled', () => {
        const component = mountWithTheme(
            <Select onChange={(): void => undefined} value="" emptyText="" options={options} />,
        );

        component
            .find(StyledInput)
            .find(Box)
            .at(1)
            .simulate('click');

        component.setProps({ disabled: true });
        component.update();

        expect(component.find(StyledWindow).prop('isOpen')).toEqual(false);
    });
});
