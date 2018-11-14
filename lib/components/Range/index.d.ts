import { Component } from 'react';
import { Range as RangeType } from 'react-input-range';
declare type PropsType = {
    value: RangeType;
    minLimit: number;
    maxLimit: number;
    label?: string;
    disabled?: boolean;
    onChange?(value: RangeType): void;
};
declare type StateType = {
    inputValues: RangeType;
    inputFocus: boolean;
    hasError: {
        min: boolean;
        max: boolean;
    };
};
declare class Range extends Component<PropsType, StateType> {
    constructor(props: PropsType);
    private onChangeMinimumValue;
    private onChangeMaximumValue;
    private onBlurMinimumValue;
    private onBlurMaximumValue;
    private getMaxLowValue;
    private getMinHighValue;
    componentDidUpdate(prevProps: PropsType): void;
    render(): JSX.Element;
}
export default Range;
export { PropsType };
