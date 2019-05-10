import React from 'react';
import { mountWithTheme } from '../../utility/styled/testing';
import Range from '.';
import InputRange from 'react-input-range';
import MosTheme from '../../themes/MosTheme';
import { mount } from 'enzyme';

describe('Range', () => {
    it('should not change value when disabled', () => {
        const changeMock = jest.fn();

        const component = mountWithTheme(
            <Range value={{ min: 2, max: 5 }} minLimit={1} disabled maxLimit={10} onChange={changeMock} />,
        );

        component
            .find('input')
            .at(0)
            .simulate('change', 1);

        expect(changeMock).not.toHaveBeenCalled();
    });

    it('should not crash when no onChange is provided', () => {
        const changeMock = jest.fn();

        const component = mountWithTheme(<Range value={{ min: 2, max: 5 }} minLimit={1} maxLimit={10} />);

        component
            .find('input')
            .at(0)
            .simulate('change', 1)
            .simulate('blur');
        expect(changeMock).not.toHaveBeenCalled();

        component
            .find('input')
            .at(1)
            .simulate('change', 1)
            .simulate('blur');

        expect(changeMock).not.toHaveBeenCalled();
    });

    it('should be able to change value with slider', () => {
        /* tslint:disable */
        const onChangeMock = jest.fn();
        (InputRange as any).mockImplementationOnce(
            (props: any): JSX.Element => {
                props.onChange({
                    min: 3,
                    max: 4,
                });

                return <div />;
            },
        );

        mountWithTheme(<Range value={{ min: 2, max: 5 }} minLimit={1} onChange={onChangeMock} maxLimit={10} />);

        expect(onChangeMock).toHaveBeenCalledWith({
            min: 3,
            max: 4,
        });
        /* tslint:enable */
    });

    it('should be able to change value with slider 2', () => {
        /* tslint:disable */
        const onChangeMock = jest.fn();
        (InputRange as any).mockImplementationOnce(
            (props: any): JSX.Element => {
                props.onChange({
                    min: 3,
                    max: 4,
                });

                return <div />;
            },
        );

        mountWithTheme(<Range value={{ min: 2, max: 5 }} minLimit={1} maxLimit={10} />);

        expect(onChangeMock).not.toHaveBeenCalledWith({
            min: 3,
            max: 4,
        });
        /* tslint:enable */
    });

    it('should not crash when no onChange is provided 2', () => {
        const fn = (): void => {
            mountWithTheme(<Range value={{ min: 4, max: 5 }} minLimit={2} maxLimit={7} onChange={undefined} />);
        };

        expect(fn).not.toThrow();
    });

    it('should be able to set high and low value within range', () => {
        const changeMock = jest.fn();
        const component = mountWithTheme(
            <Range value={{ min: 2, max: 5 }} minLimit={1} maxLimit={10} onChange={changeMock} />,
        );

        component
            .find('input')
            .first()
            .simulate('change', { target: { value: '1' } })
            .simulate('blur');

        expect(changeMock).toHaveBeenCalledWith({ min: 1, max: 5 });

        component
            .find('input')
            .at(1)
            .simulate('change', { target: { value: '7' } })
            .simulate('blur');

        expect(changeMock).toHaveBeenCalledWith({ min: 1, max: 7 });
    });

    it('should be able to handle too large and too small values', () => {
        const changeMock = jest.fn();
        const component = mountWithTheme(
            <Range value={{ min: 5, max: 8 }} minLimit={5} maxLimit={10} onChange={changeMock} />,
        );

        component
            .find('input')
            .first()
            .simulate('change', { target: { value: '2' } })
            .simulate('blur');

        expect(changeMock).toHaveBeenCalledWith({ min: 5, max: 8 });

        component
            .find('input')
            .at(1)
            .simulate('change', { target: { value: '90' } })
            .simulate('blur');

        expect(changeMock).toHaveBeenCalledWith({ min: 5, max: 10 });
    });

    it('should not surpass when the small value is larger than the maximum value', () => {
        const changeMock = jest.fn();
        const component = mountWithTheme(
            <Range value={{ min: 6, max: 8 }} minLimit={5} maxLimit={10} onChange={changeMock} />,
        );

        component
            .find('input')
            .at(0)
            .simulate('change', { target: { value: '100' } })
            .simulate('blur');

        expect(changeMock).toHaveBeenCalledWith({ min: 7, max: 8 });
    });

    it('should not break when the large value is smaller than the lower value', () => {
        const changeMock = jest.fn();
        const component = mountWithTheme(
            <Range value={{ min: 6, max: 8 }} minLimit={1} maxLimit={10} onChange={changeMock} />,
        );

        component
            .find('input')
            .at(1)
            .simulate('change', {
                target: {
                    value: '3',
                },
            })
            .simulate('blur');

        expect(changeMock).toHaveBeenCalledWith({ min: 6, max: 7 });
    });

    it('should update TextField values when props change', () => {
        const Root = (props: { value: { min: number; max: number } }) => {
            return (
                <MosTheme>
                    <Range value={props.value} minLimit={1} maxLimit={10} onChange={(): void => undefined} />
                </MosTheme>
            );
        };

        const component = mount(<Root value={{ min: 6, max: 8 }} />);

        const firstInputPreUpdate = component.find('input').filterWhere(item => item.prop('value') === '6').length;
        const secondInputPreUpdate = component.find('input').filterWhere(item => item.prop('value') === '8').length;

        component.setProps({ value: { min: 4, max: 7 } });
        component.update();

        const firstInputPostUpdate = component.find('input').filterWhere(item => item.prop('value') === '4').length;
        const secondInputPostUpdate = component.find('input').filterWhere(item => item.prop('value') === '7').length;

        expect(firstInputPreUpdate).toBe(1);
        expect(secondInputPreUpdate).toBe(1);
        expect(firstInputPostUpdate).toBe(1);
        expect(secondInputPostUpdate).toBe(1);
    });

    it('should floor and ceil the minLimit and maxLimit respectively', () => {
        const changeMock = jest.fn();
        const component = mountWithTheme(
            <Range value={{ min: 2, max: 5 }} minLimit={1.75} maxLimit={15.13} onChange={changeMock} />,
        );

        const rangeSlider = component.find(InputRange);

        expect(rangeSlider.props().minValue).toBe(1);
        expect(rangeSlider.props().maxValue).toBe(16);
    });
});
