import toJson from 'enzyme-to-json';
import React from 'react';
import Message from '.';
import mountWithTheme from '../../utility/styled/mountWithTheme';
import shallowWithTheme from '../../utility/styled/shallowWithTheme';
import Button from '../Button';
import { PropsType } from '../Button/Button.template';

jest.mock('../Button', () => (props:PropsType):string => {
    if (props.action !== undefined) {
        props.action();
    }

    return 'mockButton';
});

describe('Message',  () => {
    it('should render a primary button', () => {
        const mockAction = jest.fn();

        const component = shallowWithTheme(
            <Message
                severity="success"
                title="Wow, Great job!"
                message="This went very well."
                buttonLabel="Button label"
                action={mockAction}
            />
        ).dive();

        expect(component.find(Button).props().variant).toBe('primary');
    });

    it('should render a warning button', () => {
        const mockAction = jest.fn();

        const component = shallowWithTheme(
            <Message
                severity="warning"
                title="Careful"
                message="This might go wrong."
                buttonLabel="Button label"
                action={mockAction}
            />
        ).dive();

        expect(component.find(Button).props().variant).toBe('warning');
    });

    it('should render a destructive button', () => {
        const mockAction = jest.fn();

        const component = shallowWithTheme(
            <Message
                severity="error"
                title="Oops"
                message="Something wen't wrong. Please try again."
                buttonLabel="Button label"
                action={mockAction}
            />
        ).dive();

        expect(component.find(Button).props().variant).toBe('destructive');
    });

    it('should render a secondary button', () => {
        const mockAction = jest.fn();

        const component = shallowWithTheme(
            <Message
                severity="info"
                title="FYI"
                message="This just is happend."
                buttonLabel="Button label"
                action={mockAction}
            />
        ).dive();

        expect(component.find(Button).props().variant).toBe('secondary');
    });

    it('should excecute the action prop when Button is clicked', () => {
        const mockAction = jest.fn();

        const component = mountWithTheme(
            <Message
                severity="success"
                title="Wow, Great job!"
                message="This went very well."
                buttonLabel="Button label"
                action={mockAction}
            />
        );

        expect(mockAction).toHaveBeenCalled();
    });

    it('should render with different styling when marked as read', () => {
        const component = shallowWithTheme(
            <Message
                severity="success"
                title="Wow, Great job!"
                message="This went very well."
                read={true}
            />
        );

        /* tslint:disable */
        (expect(toJson(component)) as any).toHaveStyleRule('background', '#f8f9fb');
        /* tslint:enable */
    });
});
