import React from 'react';
import { mountWithTheme } from '../../utility/styled/testing';
import Slider from '.';
import InputSlider from 'react-input-range';

describe('Slider', () => {
    it('should not change value when disabled', () => {
        const changeMock = jest.fn();
        const component = mountWithTheme(
            <Slider value={5} minLimit={1} disabled maxLimit={10} onChange={changeMock} />,
        );

        component
            .find('input')
            .at(0)
            .simulate('change', 1);

        expect(changeMock).not.toHaveBeenCalled();
    });

    it('should not crash when no onChange is provided', () => {
        const changeMock = jest.fn();
        const component = mountWithTheme(<Slider value={5} minLimit={1} maxLimit={10} />);

        component
            .find('input')
            .at(0)
            .simulate('change', 1)
            .simulate('blur');
        expect(changeMock).not.toHaveBeenCalled();
    });

    it('should be able to change value with slider', () => {
        const onChangeMock = jest.fn();
        (InputSlider as any).mockImplementationOnce(
            (props: any): JSX.Element => {
                props.onChange(3);

                return <div />;
            },
        );

        mountWithTheme(<Slider value={5} minLimit={1} onChange={onChangeMock} maxLimit={10} />);

        expect(onChangeMock).toHaveBeenCalledWith(3);
    });

    it('should be able to change value with slider 2', () => {
        const onChangeMock = jest.fn();
        (InputSlider as any).mockImplementationOnce(
            (props: any): JSX.Element => {
                props.onChange(3);

                return <div />;
            },
        );

        mountWithTheme(<Slider value={5} minLimit={1} maxLimit={10} />);

        expect(onChangeMock).not.toHaveBeenCalledWith(3);
    });

    it('should be able to handle too large and too small values', () => {
        const changeMock = jest.fn();
        const component = mountWithTheme(<Slider value={10} minLimit={5} maxLimit={15} onChange={changeMock} />);

        component
            .find('input')
            .first()
            .simulate('change', { target: { value: '2' } })
            .simulate('blur');

        expect(component.find(InputSlider).props().value).toBe(5);

        component
            .find('input')
            .first()
            .simulate('change', { target: { value: '90' } })
            .simulate('blur');

        expect(component.find(InputSlider).props().value).toBe(15);
    });

    it('should not crash when no onChange is provided 2', () => {
        const fn = (): void => {
            mountWithTheme(<Slider value={5} minLimit={2} maxLimit={7} onChange={() => undefined} />);
        };

        expect(fn).not.toThrow();
    });

    it('should floor and ceil the minLimit and maxLimit respectively', () => {
        const changeMock = jest.fn();
        const component = mountWithTheme(<Slider value={5} minLimit={1.75} maxLimit={15.13} onChange={changeMock} />);
        const slider = component.find(InputSlider);

        expect(slider.props().minValue).toBe(1);
        expect(slider.props().maxValue).toBe(16);
    });
});
