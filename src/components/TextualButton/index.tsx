import React, { FC, Children, useState } from 'react';
import Base, { PropsType as BasePropsType } from '../Button/base';
import styled from '../../utility/styled';
import ThemeTools from '../../themes/ExperimentalCustomTheme/ThemeTools';
import { Icon } from '../..';

export type PropsType = BasePropsType & {
    variant: 'primary' | 'secondary';
    icon?: string;
};

type VariantType = {
    color: string;
    fontWeight: number;
};

export type TextualButtonThemeType = {
    primary: VariantType;
    secondary: VariantType;
};

const StyledTextualButton = styled(Base)<PropsType>`
    color: ${({ theme, variant }) => theme.TextualButton[variant].color};
    font-weight: ${({ theme, variant }) => theme.TextualButton[variant].fontWeight};
`;

const StyledTextContainer = styled.span<PropsType & { hover: boolean }>`
    position: relative;

    &::before {
        content: '';
        transition: background 300ms;
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 100%;
        height: 1px;
        background: ${({ theme, variant, hover }) => (hover ? theme.TextualButton[variant].color : 'transparent')};
    }
`;

const TextualButton: FC<PropsType> = props => {
    const [isHovering, setHovering] = useState(false);

    return (
        <StyledTextualButton
            {...props}
            onMouseEnter={() => {
                setHovering(true);
            }}
            onMouseLeave={() => {
                setHovering(false);
            }}
        >
            <StyledTextContainer {...props} hover={isHovering}>
                {Children.count(props.children) > 0 ? props.children : props.title}
                {props.icon && (
                    <>
                        &nbsp;
                        <Icon size="small" icon={props.icon} />
                    </>
                )}
            </StyledTextContainer>
        </StyledTextualButton>
    );
};

export const composeTextualButton = (tools: ThemeTools): TextualButtonThemeType => {
    return {
        primary: {
            color: tools.themeSettings.colors.primary.darker2,
            fontWeight: 600,
        },
        secondary: {
            color: tools.calculateContrastTextColor(tools.themeSettings.colors.background),
            fontWeight: 600,
        },
    };
};

export default TextualButton;
