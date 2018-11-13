import React from 'react';
import RadioButton from '.';
import { mosTheme } from '../../themes/MosTheme';
import { mountWithTheme } from '../../utility/_styled/testing';
import StyledRadioButton, { StyledRadioButtonSkin } from './style';

describe('RadioButton', () => {
    it('should not have box-shadow when not checked', () => {
        const radioButton = mountWithTheme(
            <RadioButton name="demo" label="foo" checked={false} value="bar" onChange={(): void => undefined} />,
        );

        /* tslint:disable */
        (expect(radioButton.find(StyledRadioButton)) as any).not.toHaveStyleRule('box-shadow', '#fff');
        /* tslint:enable */
    });

    it('should be able to change checked value', () => {
        const mockHandler = jest.fn();

        const radioButton = mountWithTheme(
            <RadioButton name="demo" label="foo" checked={false} value="bar" onChange={mockHandler} />,
        );

        radioButton.find(StyledRadioButton).simulate('change');

        expect(mockHandler).toHaveBeenCalledWith({
            checked: true,
            value: 'bar',
        });
    });

    it('should have box-shadow on focus', () => {
        const radioButton = mountWithTheme(
            <RadioButton name="demo" label="foo" checked={false} value="bar" onChange={(): void => undefined} />,
        );

        radioButton.find(StyledRadioButton).simulate('focus');

        /* tslint:disable */
        (expect(radioButton.find(StyledRadioButtonSkin)) as any).toHaveStyleRule(
            'box-shadow',
            `${mosTheme.RadioButton.focus.boxShadow}`,
        );
        /* tslint:enable */
    });

    it('should show a checked and disabled state', () => {
        const radioButton = mountWithTheme(
            <RadioButton
                name="demo"
                label="foo"
                disabled={true}
                checked={true}
                value="bar"
                onChange={(): void => undefined}
            />,
        );
        /* tslint:disable */
        (expect(radioButton.find(StyledRadioButtonSkin)) as any).toHaveStyleRule(
            'background',
            mosTheme.RadioButton.activeDisabled.background,
        );
        /* tslint:enable */
    });

    it('should show an unchecked and disabled state', () => {
        const radioButton = mountWithTheme(
            <RadioButton
                name="demo"
                label="foo"
                disabled={true}
                checked={false}
                value="bar"
                onChange={(): void => undefined}
            />,
        );
        /* tslint:disable */
        (expect(radioButton.find(StyledRadioButtonSkin)) as any).toHaveStyleRule(
            'background',
            mosTheme.RadioButton.idleDisabled.background,
        );
        /* tslint:enable */
    });

    it('should show an error state', () => {
        const radioButton = mountWithTheme(
            <RadioButton
                name="demo"
                label="foo"
                error={true}
                checked={false}
                value="bar"
                onChange={(): void => undefined}
            />,
        );
        /* tslint:disable */
        (expect(radioButton.find(StyledRadioButtonSkin)) as any).toHaveStyleRule(
            'border',
            `1px solid ${mosTheme.RadioButton.error.borderColor}`,
        );
        /* tslint:enable */
    });
});
