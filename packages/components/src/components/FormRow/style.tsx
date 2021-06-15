import styled from '../../utility/styled';
import Text, { PropsType as TextPropsType } from '../Text';
import ThemeTools from '../../themes/CustomTheme/ThemeTools';
import { box, flex } from '../../utility/box';

type FormRowThemeType = {
    disabled: {
        color: string;
    };
};

type StyledDisabledTextType = TextPropsType & {
    disabled?: boolean;
};

const StyledDisabledText = styled(Text)<StyledDisabledTextType>`
    width: 100%;
    ${({ theme, disabled }): string => (disabled ? `color: ${theme.FormRow.disabled.color}` : '')}
`;

const StyledFormRow = styled.div<typeof flex.props & typeof box.props>`
    ${flex}
    ${box}
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
