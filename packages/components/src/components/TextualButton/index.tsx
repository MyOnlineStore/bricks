import React, { FC, Children, useState, ReactNode } from 'react';
import Base, { PropsType as BasePropsType } from '../Button/base';
import styled from '../../utility/styled';
import ThemeTools from '../../themes/CustomTheme/ThemeTools';
import Icon from '../Icon';

export type PropsType = BasePropsType & {
    variant: 'primary' | 'secondary';
    icon?: ReactNode;
    alignIcon?: 'left' | 'right';
};

type VariantType = {
    color: string;
    fontWeight: number;
    hoverColor: string;
};

export type TextualButtonThemeType = {
    primary: VariantType;
    secondary: VariantType;
};

const StyledTextualButton = styled(Base)<PropsType>`
    color: ${({ theme, variant }) => theme.TextualButton[variant].color};
    font-weight: ${({ theme, variant }) => theme.TextualButton[variant].fontWeight};
    background-color: transparent;

    &:hover {
        background-color: transparent;
        color: ${({ theme, variant }) => theme.TextualButton[variant].hoverColor};
    }

    &:focus {
        background-color: transparent;
        color: ${({ theme, variant }) => theme.TextualButton[variant].hoverColor};
    }
`;

const StyledTextContainer = styled.span<Pick<PropsType, 'variant'> & { hover: boolean }>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
        content: '';
        position: absolute;
        bottom: 1px;
        left: 0;
        width: 100%;
        height: 1px;
        background: ${({ theme, variant, hover }) => (hover ? theme.TextualButton[variant].hoverColor : 'transparent')};
    }
`;

const Spacer = styled.span`
    width: 6px;
    display: inline-block;
`;

const TextualButton: FC<PropsType> = props => {
    const [isHovering, setHovering] = useState(false);
    const alignIcon = props.alignIcon || 'right';

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
            <StyledTextContainer variant={props.variant} hover={isHovering}>
                {props.icon && alignIcon === 'left' && (
                    <>
                        <Icon size="small" icon={props.icon} />
                        <Spacer />
                    </>
                )}
                <span>{Children.count(props.children) > 0 ? props.children : props.title}</span>
                {props.icon && alignIcon === 'right' && (
                    <>
                        <Spacer />
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
            hoverColor: tools.themeSettings.colors.primary.darker2,
        },
        secondary: {
            color: tools.calculateContrastTextColor(tools.themeSettings.colors.background),
            fontWeight: 600,
            hoverColor: tools.calculateContrastTextColor(tools.themeSettings.colors.background),
        },
    };
};

export default TextualButton;
