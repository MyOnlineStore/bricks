import React from 'react';
import MessageStream from '.';
import { mountWithTheme } from '../../utility/styled/testing';
import Button from '../Button';

describe('MessageStream', () => {
    it('should fire the message onClick on button click', () => {
        const onClickMock = jest.fn();

        const component = mountWithTheme(
            <MessageStream
                messages={[
                    {
                        message: 'foo',
                        title: 'foo bar',
                        buttonLabel: 'bar',
                        severity: 'success',
                        onClick: onClickMock,
                    },
                ]}
            />,
        );

        component.find(Button).simulate('click');

        expect(onClickMock).toHaveBeenCalled();
    });
});
