import React from 'react';
import RadioButton from '.';
import { mountWithTheme } from '../../utility/styled';
import StyledRadioButton from './style';

describe('RadioButton', () => {
    it('should not have box-shadow when not checked', () => {
        const radioButton = mountWithTheme(
            <RadioButton name="demo" label="foo" checked={false} value="bar" changeHandler={(): void => undefined} />,
        );

        /* tslint:disable */
        (expect(radioButton.find(StyledRadioButton)) as any).not.toHaveStyleRule('box-shadow', '#fff');
        /* tslint:enable */
    });

    it('should be able to change checked value', () => {
        const mockHandler = jest.fn();
        const radioButton = mountWithTheme(
            <RadioButton name="demo" label="foo" checked={false} value="bar" changeHandler={mockHandler} />,
        );

        radioButton.find(StyledRadioButton).simulate('change');

        expect(mockHandler).toHaveBeenCalledWith({
            checked: true,
            value: 'bar',
        });
    });
});
