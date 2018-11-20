import React from 'react';
import { mountWithTheme } from '../../utility/styled/testing';
import Toaster from './';
import Button from '../Button';

jest.useFakeTimers();

describe('Toaster', () => {
    it('should be possible to close the toaster using the close button', () => {
        const clickMock = jest.fn();

        const component = mountWithTheme(
            <Toaster isOpen={true} severity="success" buttonTitle="Bar?" title="Foo" closeAction={clickMock} />,
        );

        const closeButton = component.find(Button).at(1);

        closeButton.simulate('click');

        expect(clickMock).toHaveBeenCalled();
    });

    it('should be possible to automatically dismis', () => {
        const closeMock = jest.fn();

        mountWithTheme(
            <Toaster
                autoDismiss
                isOpen={true}
                severity="success"
                buttonTitle="Bar?"
                title="Foo"
                closeAction={closeMock}
            />,
        );

        jest.advanceTimersByTime(5999);
        expect(closeMock).not.toHaveBeenCalled();
        jest.advanceTimersByTime(1);
        expect(closeMock).toHaveBeenCalled();
    });

    it('should not break when no close is provided', () => {
        const component = mountWithTheme(<Toaster isOpen={true} severity={'info'} title="Foo" />);
        const closeButton = component.find(Button).first();

        const fn = (): void => {
            closeButton.simulate('click');
        };

        expect(fn).not.toThrow();
    });

    it('should not break when no action is provided', () => {
        const component = mountWithTheme(
            <Toaster
                isOpen={true}
                severity={'warning'}
                buttonSeverity={'destructive'}
                buttonTitle="Bar?"
                action={undefined}
                title="Foo"
            />,
        );

        const closeButton = component.find(Button).first();

        const fn = (): void => {
            closeButton.simulate('click');
        };

        expect(fn).not.toThrow();
    });

    it('should be possible to trigger the button', () => {
        const clickMock = jest.fn();

        const component = mountWithTheme(
            <Toaster
                isOpen={true}
                severity="warning"
                title="Foo"
                buttonTitle="Bar?"
                closeAction={undefined}
                action={clickMock}
            />,
        );

        const closeButton = component.find(Button).first();
        closeButton.simulate('click');

        expect(clickMock).toHaveBeenCalled();
    });
});
