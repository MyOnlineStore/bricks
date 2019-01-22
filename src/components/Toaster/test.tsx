import React from 'react';
import Toaster from '.';
import Toast from '../Toast';
import { mountWithTheme } from '../../utility/styled/testing';
import Button from '../Button';

// tslint:disable-next-line
(console as any).error.mockImplementationOnce(() => undefined);

describe('Toaster', () => {
    it('should show an error when notify is called before mount', () => {
        window.toaster.notify({
            title: 'foo',
            severity: 'success',
        });

        expect(console.error).toHaveBeenCalled();
    });

    it('should render a Toast when notified', () => {
        const component = mountWithTheme(<Toaster />);

        window.toaster.notify({
            title: 'foo',
            severity: 'success',
        });

        component.update();

        expect(component.find(Toast).length).toBe(1);
    });

    it('should close a rendered Toast', () => {
        const component = mountWithTheme(<Toaster />);

        window.toaster.notify({
            title: 'foo',
            severity: 'success',
        });

        component.update();

        expect(component.find(Toast).length).toBe(1);

        component
            .find(Toast)
            .find(Button)
            .last()
            .simulate('click');

        component.update();

        expect(component.find(Toast).prop('isOpen')).toBe(false);
    });
});
