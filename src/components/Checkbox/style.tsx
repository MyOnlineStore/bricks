import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';

type StyledCheckboxSkinType = {
    checkedState: boolean | 'indeterminate';
    elementFocus: boolean;
    disabled?: boolean;
    error?: boolean;
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
    idleDisabled: {
        background: string;
    };
    checkedDisabled: {
        background: string;
    };
    error: {
        borderColor: string;
    };
};

const StyledCheckbox = withProps<{}, HTMLInputElement>(styled.input)`
    opacity: 0;
    height: 0;
    width: 0;
`;

const StyledCheckboxSkin = withProps<StyledCheckboxSkinType, HTMLDivElement>(styled.div)`
    width: 16px;
    height: 16px;
    border-radius: ${({ theme }): string => theme.Checkbox.idle.borderRadius};
    position: relative;
    outline: none;
    transition: box-shadow 100ms, border 100ms, background-color 100ms;

    ${({ theme, elementFocus }): string => (elementFocus ? `box-shadow: ${theme.Checkbox.focus.boxShadow};` : '')}

    ${({ theme, disabled, checkedState }): string => {
        if (checkedState === 'indeterminate' || checkedState) {
            if (disabled && checkedState) {
                return `background: ${theme.Checkbox.checkedDisabled.background};`;
            }

            return `background-color: ${theme.Checkbox.checked.backgroundColor};`;
        }

        if (disabled) {
            return `background: ${theme.Checkbox.idleDisabled.background};`;
        }

        return `
                background-color: ${theme.Checkbox.idle.backgroundColor};
        `;
    }}

    border: 1px solid ${({ theme, checkedState, error }): string =>
        error
            ? theme.Checkbox.error.borderColor
            : checkedState
                ? theme.Checkbox.checked.borderColor
                : theme.Checkbox.idle.borderColor};
`;

export { StyledCheckbox, StyledCheckboxSkin, CheckboxThemeType };
