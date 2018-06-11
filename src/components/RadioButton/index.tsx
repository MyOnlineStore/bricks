import React, { StatelessComponent } from 'react';
import trbl from '../../utility/trbl';
import Spacer from '../Spacer';
import Text from '../Text';
import StyledRadioButton, { StyledRadioButtonSkin, StyledRadioWrapper } from './style';

type PropsType = {
    checked: boolean;
    value: string;
    name: string;
    label: string;
    changeHandler(change: { checked: boolean; value: string }): void;
};

const RadioButton: StatelessComponent<PropsType> = (props): JSX.Element => {
    const handleChange = (): void => {
        props.changeHandler({
            checked: !props.checked,
            value: props.value,
        });
    };

    return (
        <StyledRadioWrapper onClick={handleChange}>
            <Spacer offset={trbl(0, 9, 0, 0)}>
                <StyledRadioButtonSkin checked={props.checked}>
                    <StyledRadioButton
                        onChange={handleChange}
                        checked={props.checked}
                        type="radio"
                        name={props.name}
                        value={props.value}
                    />
                </StyledRadioButtonSkin>
            </Spacer>
            <Text>
                <label htmlFor={props.name}>{props.label}</label>
            </Text>
        </StyledRadioWrapper>
    );
};

export default RadioButton;
export { PropsType };
