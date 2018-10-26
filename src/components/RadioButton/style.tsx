import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';

type RadioButtonPropsType = {
    checked: boolean;
};

type RadioButtonSkinPropsType = {
    checked: boolean;
    disabled: boolean | undefined;
    elementFocus: boolean;
};

type RadioButtonThemeType = {
    idle: {
        boxShadow: string;
        borderColor: string;
        backgroundColor: string;
    };
    idleDisabled: {
        background: string;
    };
    active: {
        boxShadow: string;
        borderColor: string;
        backgroundColor: string;
    };
    activeDisabled: {
        boxShadow: string;
    };
    focus: {
        boxShadow: string;
    };
};

const StyledRadioWrapper = styled.div`
    display: flex;
`;

const StyledRadioButton = withProps<RadioButtonPropsType, HTMLInputElement>(styled.input)`
    position: relative;
    opacity: 0;
    height: 0;
    width: 0;
`;

const StyledRadioButtonSkin = withProps<RadioButtonSkinPropsType, HTMLDivElement>(styled.div)`
    width: 18px;
    height: 18px;
    border-radius: 100%;
    transition: box-shadow 100ms, border 100ms;
    background-color: ${({ theme }): string => theme.RadioButton.idle.backgroundColor};
    background: ${({ theme, checked, disabled }): string =>
        disabled ? 'repeating-linear-gradient( -45deg,#ccc,#ccc 5px,#f8f9fb 5px,#f8f9fb 10px )' : ''};
    border: 1px solid ${({ theme, checked }): string =>
        checked ? theme.RadioButton.active.borderColor : theme.RadioButton.idle.borderColor};

    box-shadow: ${({ theme, elementFocus, checked }): string => `
        ${elementFocus ? theme.RadioButton.focus.boxShadow : theme.RadioButton.idle.boxShadow},
        inset ${checked ? '0px 0px 0px 5.5px rgba(107,222,120,0.50)' : theme.RadioButton.idle.boxShadow}
    `};
    position: relative;

    ${({ theme, checked, disabled }): string =>
        checked && disabled
            ? `&::after {
        border-radius: 100%;
        width: 8px;
        height: 8px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        content: '';
        background-color: ${theme.RadioButton.idle.backgroundColor};
        z-index: 99999;
    }`
            : ''}
`;

export default StyledRadioButton;
export { StyledRadioButton, StyledRadioButtonSkin, StyledRadioWrapper, RadioButtonThemeType };
