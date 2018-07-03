import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import { PropsType } from '.';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';

type TextVariantStyleType = {
    fontSize: string;
};

type TextThemeType = {
    default: {
        color: string;
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
    };
    descriptive: {
        color: string;
    };
    strong: {
        fontWeight: string;
    };
    small: TextVariantStyleType;
    base: TextVariantStyleType;
    large: TextVariantStyleType;
};

type TextPropsType = {
    compact?: boolean;
    descriptive?: boolean;
    strong?: boolean;
    variant?: 'small' | 'base' | 'large';
};

const StyledText = withProps<TextPropsType>(styled.p)`
    color: ${({ descriptive, theme }): string =>
        descriptive ? theme.Text.descriptive.color : theme.Text.default.color};
    font-family: ${({ theme }): string => theme.Text.default.fontFamily};
    font-size: ${({ variant, theme }): string => variant !== undefined ? theme.Text[variant].fontSize : theme.Text.base.fontSize };
    font-weight: ${({ strong, theme }): string =>
        strong ? theme.Text.strong.fontWeight : theme.Text.default.fontWeight};
    line-height: ${({ compact }): string => (compact ? '1.25' : '1.5')};
    margin: 0;
`;

export default StyledText;
export { TextThemeType, TextVariantStyleType };
