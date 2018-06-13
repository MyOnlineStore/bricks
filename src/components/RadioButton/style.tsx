import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';

type RadioButtonPropsType = {
    checked: boolean;
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
    hover: {
        boxShadow: string;
    };
};

const StyledRadioWrapper = styled.div`
    display: flex;
`;

const StyledRadioButton = withProps<RadioButtonPropsType, HTMLInputElement>(styled.input)`
    position: relative;
    display: none;
`;

const StyledRadioButtonSkin = withProps<RadioButtonPropsType, HTMLDivElement>(styled.div)`
    width: 17px;
    height: 17px;
    border-radius: 100%;
    transition: box-shadow 300ms ease, border 300ms ease;
    background-color: ${({ theme }): string => theme.RadioButton.idle.backgroundColor};

    border: 1px solid ${({ theme, checked }): string =>
        checked ? theme.RadioButton.active.borderColor : theme.RadioButton.idle.borderColor};

    box-shadow: ${({ theme, checked }): string =>
        checked ? theme.RadioButton.active.boxShadow : theme.RadioButton.idle.boxShadow};

    &:hover{
        box-shadow: ${({ theme }): string => `inset 0 0 0 0 transparent, ${theme.RadioButton.hover.boxShadow}`};
        box-shadow: ${({ theme, checked }): string =>
            checked
                ? `${theme.RadioButton.active.boxShadow}, ${theme.RadioButton.hover.boxShadow}`
                : `${theme.RadioButton.idle.boxShadow}, ${theme.RadioButton.hover.boxShadow}`};
    };
`;

export default StyledRadioButton;
export { StyledRadioButton, StyledRadioButtonSkin, StyledRadioWrapper, RadioButtonThemeType };
