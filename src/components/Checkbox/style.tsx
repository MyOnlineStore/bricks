import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';

type StyledCheckboxType = {
    checked: boolean;
};

type StyledCheckboxSkinType = {
    checked: boolean;
    elementFocus: boolean;
};

type CheckboxThemeType = {
    idle: {
        backgroundColor: string;
        borderColor: string;
        borderRadius: string;
    };
    focus: {
        boxShadow: string;
    };
    checked: {
        backgroundColor: string;
        borderColor: string;
    };
};

const StyledCheckbox = withProps<StyledCheckboxType, HTMLInputElement>(styled.input)`
    opacity: 0;
    height: 0;
    width: 0;
`;

const StyledCheckboxSkin = withProps<StyledCheckboxSkinType, HTMLDivElement>(styled.div)`
    width: 16px;
    height: 16px;
    margin-top: 1px;
    border-radius: ${({ theme }): string => theme.Checkbox.idle.borderRadius};
    position: relative;
    outline: none;
    transition: box-shadow 100ms, border 100ms, background-color 100ms;

    ${({ theme, elementFocus }): string => (elementFocus ? `box-shadow: ${theme.Checkbox.focus.boxShadow};` : '')}

    ${({ theme, checked }): string =>
        checked
            ? `
                background-color: ${theme.Checkbox.checked.backgroundColor};
                border: 1px solid ${theme.Checkbox.checked.borderColor}
            `
            : `
                background-color: ${theme.Checkbox.idle.backgroundColor};
                border: 1px solid ${theme.Checkbox.idle.borderColor}
            `}
    `;

const StyledIcon = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -6px;
    margin-top: -12px;
`;

export default StyledCheckbox;
export { StyledCheckboxSkin, StyledIcon, StyledCheckboxType, CheckboxThemeType };
