import React from 'react';
import MessageStream from '.';
import { mountWithTheme } from '../../utility/styled'
import Button from '../Button';

describe('MessageStream', () => {
    it('should fire the message action on button click', () => {
        const actionMock = jest.fn();

        const component = mountWithTheme(

            <MessageStream
                messages={[{
                    message: 'foo',
                    title: 'foo bar',
                    buttonLabel: 'bar',
                    severity: 'success',
                    action: actionMock,
                }]}
            />
        );

        component.find(Button).simulate('click');

        expect(actionMock).toHaveBeenCalled();

    });
});
