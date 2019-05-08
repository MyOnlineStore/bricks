import React from 'react';
import MultiButton from '.';
import Option from './Option';
import { Popper } from 'react-popper';
import { mountWithTheme } from '../../utility/_styled/testing';
import { StyledChevronButton, StyledMultiButton, StyledWindow } from './style';

const options = [
    {
        value: 'Option 1',
        label: 'Default action',
        default: true,
        description: 'Unparalleled step-changes dynamically enable senior industry leaders for our market foci.',
        onClick: (): void => {
            alert('Default action');
        },
    },
    {
        value: 'Option 2',
        label: 'Alternative action 1',
        description: 'In the deliverable space, industry is virtually impacting its holistic verticals.',
        onClick: (): void => {
            alert('Alternative action 1');
        },
    },
    {
        value: 'Option 3',
        label: 'Alternative action 2',
        description:
            'Key players will take ownership of their big datas by iteratively integrating long-term capabilities.',
        onClick: (): void => {
            alert('Alternative action 2');
        },
    },
];

describe('MultiButton', () => {
    it('should toggle the window', () => {
        const component = mountWithTheme(<MultiButton variant={'secondary'} options={options} />);
        const arrowButton = component.find(StyledChevronButton);

        arrowButton.simulate('click');

        expect(component.find(StyledWindow).prop('open')).toEqual(true);
        expect(component.find(StyledWindow).length).toBe(1);

        arrowButton.simulate('click');

        expect(component.find(StyledWindow).length).toBe(0);
    });

    it('should close on click outside', () => {
        const callbackMap: any = {};

        document.addEventListener = jest.fn((event, callback) => (callbackMap[event] = callback));

        const component = mountWithTheme(<MultiButton variant={'secondary'} options={options} />);
        const arrowButton = component.find(StyledChevronButton);

        arrowButton.simulate('click');

        expect(component.find(StyledWindow).prop('open')).toEqual(true);

        callbackMap.mousedown({
            target: component.first().getDOMNode(),
        });

        component.update();

        // click inside
        expect(component.find(StyledWindow).prop('open')).toBe(true);

        // click outside
        callbackMap.mousedown({
            target: document.createElement('div'),
        });

        component.update();

        expect(component.find(StyledWindow).length).toBe(0);
    });

    it('adds and removes eventListeners', () => {
        const component = mountWithTheme(<MultiButton variant={'secondary'} options={options} />);

        component.unmount();

        /* tslint:disable */
        expect((global as any).addEventListener).toBeCalled();
        expect((global as any).removeEventListener).toBeCalled();
        /* tslint:enable */
    });

    it('should render options', () => {
        const component = mountWithTheme(<MultiButton variant={'secondary'} options={options} />);
        const arrowButton = component.find(StyledChevronButton);

        arrowButton.simulate('click');

        expect(component.find(StyledWindow).prop('open')).toEqual(true);

        expect(component.find(Option)).toHaveLength(3);
    });

    it('should render with the correct placement', () => {
        const component = mountWithTheme(<MultiButton variant={'secondary'} options={options} placement={'top'} />);
        const arrowButton = component.find(StyledChevronButton);

        arrowButton.simulate('click');

        const popper = component.find(Popper);

        expect(popper.prop('placement')).toEqual('top');
    });

    it('should execute the default action when pressing the default button', () => {
        const actionMock1 = jest.fn();
        const actionMock2 = jest.fn();

        const optionsMock = [
            {
                value: 'Optionmock',
                label: 'Optionmock',
                description: '',
                default: true,
                onClick: actionMock1,
            },
            {
                value: 'Optionmock 2',
                label: '',
                description: '',
                onClick: actionMock2,
            },
        ];

        const component = mountWithTheme(<MultiButton variant={'secondary'} options={optionsMock} />);
        const defaultButton = component.find(StyledMultiButton);

        defaultButton.simulate('click');

        expect(actionMock1).toHaveBeenCalled();
        expect(actionMock2).not.toHaveBeenCalled();
    });

    it('should not break when no default option is set', () => {
        const actionMock1 = jest.fn();

        const optionsMock = [
            {
                value: 'Optionmock',
                label: 'Optionmock',
                description: '',
                onClick: actionMock1,
            },
        ];

        const component = mountWithTheme(<MultiButton variant={'secondary'} options={optionsMock} />);
        const arrowButton = component.find(StyledChevronButton);
        const defaultButton = component.find(StyledMultiButton);

        arrowButton.simulate('click');
        defaultButton.simulate('click');

        expect(component.find(Option)).toHaveLength(1);

        expect(actionMock1).toHaveBeenCalled();
    });

    it('should execute an action when an option is clicked', () => {
        const actionMock1 = jest.fn();
        const actionMock2 = jest.fn();

        const optionsMock = [
            {
                value: 'Optionmock',
                label: 'Optionmock',
                description: '',
                default: true,
                onClick: actionMock1,
            },
            {
                value: 'Optionmock 2',
                label: '',
                description: '',
                onClick: actionMock2,
            },
        ];

        const component = mountWithTheme(<MultiButton variant={'secondary'} options={optionsMock} />);
        const arrowButton = component.find(StyledChevronButton);

        arrowButton.simulate('click');

        expect(component.find(StyledWindow).prop('open')).toEqual(true);
        const option = component.find(Option).at(1);

        option.simulate('click');

        expect(actionMock1).not.toHaveBeenCalled();
        expect(actionMock2).toHaveBeenCalled();
    });

    it('should render with a custom distance and offset', () => {
        const component = mountWithTheme(
            <MultiButton variant={'secondary'} options={options} offset={20} distance={6} />,
        );

        const arrowButton = component.find(StyledChevronButton);

        arrowButton.simulate('click');

        const popper = component.find(Popper);

        expect(popper.prop('modifiers')).toEqual({
            offset: {
                offset: '20px, 6px',
            },
        });
    });

    it('should render with only a custom offset', () => {
        const component = mountWithTheme(<MultiButton variant={'secondary'} options={options} offset={20} />);
        const arrowButton = component.find(StyledChevronButton);

        arrowButton.simulate('click');

        const popper = component.find(Popper);

        expect(popper.prop('modifiers')).toEqual({
            offset: {
                offset: '20px, 0px',
            },
        });
    });

    it('should render with only a custom distance', () => {
        const component = mountWithTheme(<MultiButton variant={'secondary'} options={options} distance={6} />);
        const arrowButton = component.find(StyledChevronButton);

        arrowButton.simulate('click');

        const popper = component.find(Popper);

        expect(popper.prop('modifiers')).toEqual({
            offset: {
                offset: '0, 6px',
            },
        });
    });
});
