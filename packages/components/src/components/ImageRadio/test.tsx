import React from 'react';
import ImageRadio, { TestIds } from '.';
import { mountWithTheme } from '../../utility/styled/testing';

const defaultProps = {
    name: 'ImageRadioTest',
    'data-testid': 'ImageRadioTest',
    value: 'ImageRadioTestValue',
    label: 'ImageRadioTestLabel',
};

const Image = (
    <svg width="181" height="63" viewBox="0 0 181 63" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M31 0H151V63H31V0Z" fill="#E6E7EB" />
    </svg>
);

describe('ImageRadio', () => {
    it('should render one (hidden) radio input', () => {
        const onChangeMock = jest.fn();

        const component = mountWithTheme(
            <ImageRadio checked image={Image} {...defaultProps} onChange={onChangeMock} {...defaultProps} />,
        );

        expect(component.findByTestId(`${defaultProps['data-testid']}-${TestIds.radio}`)).toHaveLength(1);
    });

    it('should fire the onChange prop when clicking the label', () => {
        const onChangeMock = jest.fn();

        const component = mountWithTheme(
            <ImageRadio checked image={Image} {...defaultProps} onChange={onChangeMock} {...defaultProps} />,
        );

        component.findByTestId(`${defaultProps['data-testid']}-${TestIds.label}`).simulate('click');

        expect(onChangeMock).toHaveBeenCalled();
    });
});
