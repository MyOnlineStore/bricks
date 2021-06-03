import React from 'react';
import Select from '.';
import { mountWithTheme } from '../../utility/styled/testing';
import MosTheme, { mosTheme } from '../../themes/MosTheme';
import 'jest-styled-components';
import { mount } from 'enzyme';

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

describe('Select', () => {
    it('should open when the spacebar is pressed', () => {
        const component = mountWithTheme(
            <Select
                onChange={(): void => undefined}
                value=""
                emptyText="empty"
                options={options}
                data-testid="select"
            />,
        );

        component.find(Select).simulate('keyDown', {
            key: ' ',
        });

        expect(component.findByTestId('select-window-open')).toHaveLength(1);
    });

    it('should show focus when the select is open', () => {
        const component = mountWithTheme(
            <Select
                onChange={(): void => undefined}
                value=""
                emptyText="empty"
                options={options}
                data-testid="select"
            />,
        );

        component.find(Select).simulate('focus');

        expect(component.findByTestId('select-field')).toHaveStyleRule(
            'border',
            `solid 1px ${mosTheme.Select.select.focus.borderColor}`,
        );

        component.find(Select).simulate('blur');

        expect(component.findByTestId('select-field')).toHaveStyleRule(
            'border',
            `solid 1px ${mosTheme.Select.common.borderColor}`,
        );
    });

    it('should open the arrowDown or arrowUp is pressed and close when escape is pressed', () => {
        const component = mountWithTheme(
            <Select
                onChange={(): void => undefined}
                value=""
                emptyText="empty"
                options={options}
                data-testid="select"
            />,
        );

        component.find(Select).simulate('keyDown', { key: 'ArrowDown' });
        expect(component.findByTestId('select-window-open')).toHaveLength(1);

        component.find(Select).simulate('keyDown', { key: 'Escape' });
        expect(component.findByTestId('select-window-closed')).toHaveLength(1);

        component.find(Select).simulate('keyDown', { key: 'ArrowUp' });
        expect(component.findByTestId('select-window-open')).toHaveLength(1);
    });

    it('should show an input and options on click', () => {
        const component = mountWithTheme(
            <Select
                search={<Select.Search placeholder="foo" data-testid="select-search" />}
                onChange={(): void => undefined}
                value=""
                emptyText="empty"
                options={options}
                data-testid="select"
            />,
        );

        component.find(Select).simulate('keyDown', {
            key: ' ',
        });

        expect(component.findByTestId('select-search').length).toBe(1);
        expect(component.findByTestId('select-search-input')).toHaveLength(1);
        expect(component.find('[data-testid^="select-option-"]').hostNodes().length).toBe(options.length);
    });

    it('should filter options on input', () => {
        const component = mountWithTheme(
            <Select
                search={<Select.Search placeholder="foo" data-testid="select-search" />}
                onChange={(): void => undefined}
                value=""
                emptyText="empty"
                data-testid="select"
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

        component.find(Select).simulate('keyDown', {
            key: ' ',
        });

        component.find('input').simulate('change', {
            target: {
                value: 'A',
            },
        });

        expect(component.find('[data-testid^="select-option-"]').hostNodes().length).toBe(1);
    });

    it('should tear down event listeners on unmount', () => {
        const spy = jest.spyOn(document, 'removeEventListener');

        const component = mountWithTheme(
            <Select onChange={(): void => undefined} value="" emptyText="empty" options={options} />,
        );

        component.unmount();

        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should close when clicked outside of window', () => {
        const callbackMap: any = {};

        document.addEventListener = jest.fn((event, callback) => (callbackMap[event] = callback));

        const component = mountWithTheme(
            <Select
                search={<Select.Search placeholder="foo" data-testid="select-search" />}
                onChange={(): void => undefined}
                value=""
                emptyText="empty"
                options={options}
                data-testid="select"
            />,
        );

        component.findByTestId('select-search').simulate('click');

        expect(component.findByTestId('select-window-open')).toHaveLength(1);

        // click inside
        callbackMap.mousedown({
            target: component.first().getDOMNode(),
        });

        expect(component.findByTestId('select-window-open')).toHaveLength(1);

        // click outside
        callbackMap.mousedown({
            target: document.createElement('div'),
        });

        component.update();

        expect(component.findByTestId('select-window-closed')).toHaveLength(1);
    });

    it('should handle a change', () => {
        const changeHandler = jest.fn();

        const component = mountWithTheme(
            <Select onChange={changeHandler} value="" emptyText="empty" options={options} data-testid="select" />,
        );

        component.find(Select).simulate('keyDown', {
            key: ' ',
        });

        component.findByTestId('select-option-A').simulate('click');

        expect(changeHandler).toHaveBeenCalledWith(options[0].value);
    });

    it('should target next option when arrow down is pressed', () => {
        const options = [
            { value: 'A', label: 'A' },
            { value: 'B', label: 'B' },
        ];

        const component = mountWithTheme(
            <Select
                onChange={(): void => undefined}
                value=""
                emptyText="empty"
                options={options}
                data-testid="select"
            />,
        );

        component.find(Select).simulate('keyDown', {
            key: ' ',
        });

        component.find(Select).simulate('keyDown', {
            key: 'ArrowDown',
        });

        expect(component.findByTestId('select-option-A-targeted')).toHaveLength(1);

        component.find(Select).simulate('keyDown', {
            key: 'ArrowDown',
        });

        expect(component.findByTestId('select-option-B-targeted')).toHaveLength(1);

        component.find(Select).simulate('keyDown', {
            key: 'ArrowDown',
        });

        expect(component.findByTestId('select-option-B-targeted')).toHaveLength(1);
    });

    it('should target the previous option when arrow up is pressed', () => {
        const options = [
            { value: 'A', label: 'A' },
            { value: 'B', label: 'B' },
        ];

        const component = mountWithTheme(
            <Select
                onChange={(): void => undefined}
                value=""
                emptyText="empty"
                options={options}
                data-testid="select"
            />,
        );

        component.find(Select).simulate('keyDown', {
            key: ' ',
        });

        component.find(Select).simulate('keyDown', {
            key: 'ArrowDown',
        });

        expect(component.findByTestId('select-option-A-targeted')).toHaveLength(1);

        component.find(Select).simulate('keyDown', {
            key: 'ArrowDown',
        });

        expect(component.findByTestId('select-option-B-targeted')).toHaveLength(1);

        component.find(Select).simulate('keyDown', {
            key: 'ArrowUp',
        });

        expect(component.findByTestId('select-option-A-targeted')).toHaveLength(1);

        component.find(Select).simulate('keyDown', {
            key: 'ArrowUp',
        });

        expect(component.findByTestId('select-option-A-targeted')).toHaveLength(1);
    });

    it('should set the value of the target option when enter is pressed on a targeted option', () => {
        const changeHandler = jest.fn();

        const component = mountWithTheme(
            <Select onChange={changeHandler} value="" emptyText="empty" options={options} />,
        );

        component.find(Select).simulate('keyDown', {
            key: ' ',
        });

        component.find(Select).simulate('keyDown', {
            key: 'ArrowDown',
        });

        component.find(Select).simulate('keyDown', {
            key: 'Enter',
        });

        expect(changeHandler).toHaveBeenCalledWith(options[0].value);
    });

    it('should handle a selected option', () => {
        const component = mountWithTheme(
            <Select
                onChange={(): void => undefined}
                value={options[1].value}
                emptyText="empty"
                options={options}
                data-testid="select"
            />,
        );

        const selectedOption = component.findByTestId('select-input-selection');

        expect(selectedOption.text()).toBe(options[1].label);
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

        /** Options re-render twice */
        expect(renderOption).toHaveBeenCalledTimes(options.length * 2);
    });

    it('should render an alternative input rendering when an option is selected', () => {
        const renderSelected = jest.fn();

        mountWithTheme(
            <Select
                onChange={(): void => undefined}
                value="A"
                emptyText="empty"
                options={options}
                renderSelected={renderSelected}
            />,
        );

        expect(renderSelected).toHaveBeenCalledTimes(1);
    });

    it('should show an empty state', () => {
        const emptyText = 'mock empty text';

        const component = mountWithTheme(
            <Select data-testid="foo" onChange={(): void => undefined} value="" emptyText={emptyText} options={[]} />,
        );

        component.simulate('click');

        expect(component.findByTestId('foo-list-empty').text()).toEqual(emptyText);
    });

    it('should target an Option when mouse enters', () => {
        const component = mountWithTheme(
            <Select
                search={<Select.Search placeholder="foo" data-testid="select-search" />}
                onChange={(): void => undefined}
                value=""
                emptyText=""
                options={options}
                data-testid="select"
            />,
        );

        component.findByTestId('select-search').simulate('click');

        component.findByTestId('select-option-C').simulate('mouseEnter');

        expect(component.findByTestId('select-option-C-targeted')).toHaveLength(1);
    });

    it('should not open the Option-Select window when the component is disabled', () => {
        const component = mountWithTheme(
            <Select
                search={<Select.Search placeholder="foo" data-testid="select-search" />}
                onChange={(): void => undefined}
                value=""
                emptyText=""
                options={options}
                disabled
                data-testid="select"
            />,
        );

        expect(component.findByTestId('select-window-closed')).toHaveLength(1);

        component.findByTestId('select-search').simulate('click');

        expect(component.findByTestId('select-window-closed')).toHaveLength(1);
    });

    it('should close the Option-Select window when the component gets disabled', () => {
        const Root = (props: { disabled?: boolean }) => {
            return (
                <MosTheme>
                    <Select
                        search={<Select.Search placeholder="foo" data-testid="select-search" />}
                        onChange={(): void => undefined}
                        value=""
                        emptyText=""
                        options={options}
                        disabled={props.disabled}
                        data-testid="select"
                    />
                </MosTheme>
            );
        };

        const component = mount(<Root />);

        component.findByTestId('select-search').simulate('click');

        expect(component.findByTestId('select-window-open')).toHaveLength(1);

        component.setProps({ disabled: true });
        component.update();

        expect(component.findByTestId('select-window-closed')).toHaveLength(1);
    });

    it('should handle a simulated change event', () => {
        const changeMock = jest.fn();
        const component = mountWithTheme(<Select onChange={changeMock} value="" emptyText="" options={options} />);

        component.find(Select).simulate('change', {
            target: {
                value: options[0].value,
            },
        });

        expect(changeMock).toHaveBeenCalledWith(options[0].value);
    });

    it('should not change the selected value when the input value changes', () => {
        const changeMock = jest.fn();

        const component = mountWithTheme(
            <Select
                search={<Select.Search data-testid="select-search" placeholder="foo" />}
                onChange={changeMock}
                value=""
                emptyText=""
                options={options}
                data-testid="select"
            />,
        );

        component.findByTestId('select-search').simulate('click');

        component.findByTestId('select-search-input').simulate('change', {
            target: {
                value: 'Foo',
            },
        });

        expect(changeMock).toHaveBeenCalledTimes(0);
    });

    it('should be able to find the Select by instance', () => {
        const changeMock = jest.fn();

        const component = mountWithTheme(
            <div>
                <Select onChange={changeMock} value="" emptyText="" options={options} data-testid="select" />
            </div>,
        );

        expect(component.find(Select).prop('options')).toHaveLength(options.length);
    });

    it('should display the empty text when all options are filtered out', () => {
        const component = mountWithTheme(
            <Select
                search={<Select.Search placeholder="foo" data-testid="select-search" />}
                onChange={(): void => undefined}
                value=""
                emptyText="empty"
                data-testid="select"
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

        component.find(Select).simulate('keyDown', {
            key: ' ',
        });

        component.findByTestId('select-search-input').simulate('change', {
            target: {
                value: 'AAAAAAAAAAA',
            },
        });

        expect(component.find('[data-testid^="select-option-"]').hostNodes().length).toBe(0);
        expect(component.findByTestId('select-list-empty').length).toBe(1);
    });
});
