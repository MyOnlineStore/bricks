import React from 'react';
import MessageStream from '.';
import { mountWithTheme } from '../../utility/styled';
import Button from '../Button';

describe('MessageStream', () => {
    it('should trigger the action prop when clicking the button', () => {
        const action = jest.fn();

        const message = mountWithTheme(
            <MessageStream
                messages={[
                    {
                        action,
                        buttonLabel: 'label',
                        severity: 'success',
                        title: 'title',
                        message: 'message',
                    },
                ]}
            />,
        );

        message.find(Button).simulate('click');
        expect(action).toHaveBeenCalledTimes(1);
    });

    it('should not render an action when no label action is set', () => {
        const message = mountWithTheme(
            <MessageStream
                messages={[
                    {
                        severity: 'success',
                        title: 'title',
                        message: 'message',
                    },
                ]}
            />,
        );

        expect(message.find(Button).length).toBe(0);
    });
});
