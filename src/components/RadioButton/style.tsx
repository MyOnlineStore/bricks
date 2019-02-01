import styled from '../../utility/_styled';

type RadioButtonPropsType = {
    checked: boolean;
};

type RadioButtonSkinPropsType = {
    checked: boolean;
    disabled?: boolean;
    error?: boolean;
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
        background: string;
    };
    activeDisabled: {
        boxShadow: string;
        background: string;
    };
    focus: {
        boxShadow: string;
    };
    error: {
        borderColor: string;
    };
};

const StyledRadioWrapper = styled.div`
    display: flex;
`;

const StyledRadioButton = styled.input<RadioButtonPropsType>`
    position: relative;
    opacity: 0;
    height: 0;
    width: 0;
`;

const StyledRadioButtonSkin = styled.div<RadioButtonSkinPropsType>`
    width: 16px;
    height: 16px;
    border-radius: 100%;
    transition: box-shadow 100ms, border 100ms;
    background-color: ${({ theme }): string => theme.RadioButton.idle.backgroundColor};
    background: ${({ theme, checked, disabled }): string => {
        if (checked && disabled) {
            return theme.RadioButton.activeDisabled.background;
        } else if (!checked && disabled) {
            return theme.RadioButton.idleDisabled.background;
        } else if (checked) {
            return theme.RadioButton.active.background;
        }

        return '';
    }};
    border: 1px solid
        ${({ theme, checked, error }): string =>
            error
                ? theme.RadioButton.error.borderColor
                : checked
                    ? theme.RadioButton.active.borderColor
                    : theme.RadioButton.idle.borderColor};

    box-shadow: ${({ theme, elementFocus }): string =>
        `
        ${elementFocus ? theme.RadioButton.focus.boxShadow : theme.RadioButton.idle.boxShadow}
    `};
    position: relative;

    ${({ theme, checked }): string =>
        checked
            ? `&::after {
                    border-radius: 100%;
                    width: 6px;
                    height: 6px;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%,-50%);
                    content: '';
                    background-color: ${theme.RadioButton.idle.backgroundColor};
                }`
            : ''}
`;

export default StyledRadioButton;
export { StyledRadioButton, StyledRadioButtonSkin, StyledRadioWrapper, RadioButtonThemeType };
