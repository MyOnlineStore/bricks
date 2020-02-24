import React from 'react';
import Toaster from '.';
import Toast from '../Toast';
import { mountWithTheme } from '../../utility/styled/testing';
import IconButton from '../IconButton';

// tslint:disable-next-line
(console as any).error.mockImplementationOnce(() => undefined);

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
            .find(IconButton)
            .simulate('click');

        component.update();

        expect(component.find(Toast).prop('isOpen')).toBe(false);
    });

    it('should fire the onNotify callback when window.notify gets called', () => {
        const notifyMock = jest.fn();
        const meta = 'some type of meta-data';

        const toast = {
            title: 'foo',
            severity: 'error' as 'error',
        };

        mountWithTheme(<Toaster onNotify={notifyMock} />);

        window.toaster.notify(toast, meta);

        expect(notifyMock).toHaveBeenCalledWith(toast, meta);
    });
});
