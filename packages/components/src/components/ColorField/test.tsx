import React from 'react';
import ColorField, { TestIds } from '.';
import { mountWithTheme } from '../../utility/styled/testing';

const defaultProps = {
    name: 'colorFieldTest',
    resetButtonTitle: 'undo',
    transparentPlaceholder: 'transparent',
};

describe('ColorField', () => {
    it('should display the Reset Button when the initial value differs from the value', () => {
        const onChangeMock = jest.fn();
        const component = mountWithTheme(
            <ColorField initialValue="#F00" value="#0F0" onChange={onChangeMock} {...defaultProps} />,
        );

        expect(component.findByTestId(TestIds.resetButton)).toHaveLength(1);
    });

    it('should NOT display the Reset Button when the initial value and value are the same', () => {
        const onChangeMock = jest.fn();
        const component = mountWithTheme(
            <ColorField initialValue="#00F" value="#00F" onChange={onChangeMock} {...defaultProps} />,
        );

        expect(component.findByTestId(TestIds.resetButton)).toHaveLength(0);
    });

    it('should have a placeholder when emptyIsTransparent is enabled and value is empty', () => {
        const onChangeMock = jest.fn();
        const component = mountWithTheme(
            <ColorField emptyIsTransparent initialValue="#00F" value="" onChange={onChangeMock} {...defaultProps} />,
        );

        expect(component.findByTestId(TestIds.colorInputField).prop('placeholder')).toEqual(
            defaultProps.transparentPlaceholder,
        );
    });

    it('should return "transparent" onChange when emptyIsTransparent is enabled and value is empty', () => {
        const onChangeMock = jest.fn();
        const component = mountWithTheme(
            <ColorField
                emptyIsTransparent
                initialValue="#0F0"
                value="#0F0"
                onChange={onChangeMock}
                {...defaultProps}
            />,
        );

        component.findByTestId(TestIds.colorInputField).simulate('change', { target: { value: '' } });

        expect(onChangeMock).toHaveBeenCalledWith('transparent');
    });
});
