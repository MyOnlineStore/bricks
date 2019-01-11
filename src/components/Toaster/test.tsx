import React from 'react';
import Toaster from '.';
import Toast from '../Toast';
import { mountWithTheme } from '../../utility/styled/testing';
import Button from '../Button';

describe('Toaster', () => {
    it('should render a Toast when notified', () => {
        const component = mountWithTheme(<Toaster />);

        window.toaster.notify({
            title: 'foo',
            severity: 'success',
        });

        component.update();

        expect(component.find(Toast).length).toBe(1);
    });

    it('should render a Toast when notified', () => {
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

        expect(component.find(Toast).length).toBe(0);
    });
});
