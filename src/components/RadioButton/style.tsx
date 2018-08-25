import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';

type RadioButtonPropsType = {
    checked: boolean;
};

type RadioButtonSkinPropsType = {
    checked: boolean;
    elementFocus: boolean;
};

type RadioButtonThemeType = {
    idle: {
        boxShadow: string;
        borderColor: string;
        backgroundColor: string;
    };
    active: {
        boxShadow: string;
        borderColor: string;
        backgroundColor: string;
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
    width: 16px;
    height: 16px;
    border-radius: 100%;
    transition: box-shadow 100ms, border 100ms;
    background-color: ${({ theme }): string => theme.RadioButton.idle.backgroundColor};
    border: 1px solid ${({ theme, checked }): string =>
        checked ? theme.RadioButton.active.borderColor : theme.RadioButton.idle.borderColor};

    box-shadow: ${({ theme, elementFocus, checked }): string => `
        ${elementFocus ? theme.RadioButton.focus.boxShadow : theme.RadioButton.idle.boxShadow},
        inset ${checked ? theme.RadioButton.active.boxShadow : theme.RadioButton.idle.boxShadow}
    `};
`;

export default StyledRadioButton;
export { StyledRadioButton, StyledRadioButtonSkin, StyledRadioWrapper, RadioButtonThemeType };
