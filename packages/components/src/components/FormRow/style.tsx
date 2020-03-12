import styled from '../../utility/styled';
import Text, { PropsType as TextPropsType } from '../Text';
import ThemeTools from '../../themes/CustomTheme/ThemeTools';

type FormRowThemeType = {
    disabled: {
        color: string;
    };
};

type StyledDisabledTextType = TextPropsType & {
    disabled?: boolean;
};

const StyledDisabledText = styled(Text)<StyledDisabledTextType>`
    ${({ theme, disabled }): string => (disabled ? `color: ${theme.FormRow.disabled.color}` : '')}
`;

const StyledFormRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
`;

const composeFormRowTheme = (themeTools: ThemeTools): FormRowThemeType => {
    const { colors } = themeTools.themeSettings;

    return {
        disabled: {
            color: colors.silver.darker1,
        },
    };
};

export { StyledFormRow, StyledDisabledText, FormRowThemeType, composeFormRowTheme };
