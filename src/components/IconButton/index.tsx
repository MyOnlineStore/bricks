import React, { FC } from 'react';
import styled from '../../utility/styled';
import BareButton, { PropsType as BareButtonPropsType } from '../Button/base';
import ThemeType from '../../types/ThemeType';
import Icon from '../Icon';
import Spinner from '../Spinner';
import Box from '../Box';
import { withTheme } from 'styled-components';
import ThemeTools from '../../themes/ExperimentalCustomTheme/ThemeTools';

type CommonType = {
    color: string;
};

type ComponentStateTypes = {
    idle: CommonType;
    hover: CommonType;
};

type IconButtonThemeType = {
    primary: ComponentStateTypes;
    destructive: ComponentStateTypes;
};

type PropsType = BareButtonPropsType & {
    theme?: ThemeType;
    icon: string;
    iconSize?: 'small' | 'medium';
    variant?: 'primary' | 'destructive';
};

const StyledIconButton = styled(BareButton)<Pick<PropsType, 'variant'>>`
    ${({ theme, variant, loading, disabled }): string => {
        const buttonVariant = variant ? variant : 'primary';

        const idle = `
            transform: none;
            background-color: transparent;
            color: ${theme.IconButton[buttonVariant].idle.color};
        `;

        const hover = `
            transform: scale(1.1);
            background-color: transparent;
            color: ${theme.IconButton[buttonVariant].hover.color};
        `;

        const active = `
            transform: scale(0.9);
            background-color: transparent;
            color: ${theme.IconButton[buttonVariant].hover.color};
        `;

        const focus = `
            transform: scale(1.1);
            background-color: transparent;
            color: ${theme.IconButton[buttonVariant].hover.color};
        `;

        return `
            ${idle}
            padding: 9px;

            &:hover {
                ${!loading && !disabled ? hover : idle}
            }

            &:focus {
                ${!loading && !disabled ? focus : idle}
            }

            &:active {
                ${!loading && !disabled ? active : idle}
            }
    `;
    }}
`;

const IconButton: FC<PropsType> = props => {
    return (
        <StyledIconButton {...props}>
            {props.loading && (
                <Box
                    justifyContent="center"
                    alignItems="center"
                    position="absolute"
                    left="0"
                    top="0"
                    right="0"
                    bottom="0"
                    padding={[9]}
                >
                    <Spinner />
                </Box>
            )}
            <Icon
                color={props.loading ? 'transparent' : undefined}
                size={props.iconSize ? props.iconSize : 'medium'}
                icon={props.icon}
            />
        </StyledIconButton>
    );
};

const composeIconButtonTheme = (themeTools: ThemeTools): IconButtonThemeType => {
    const { colors } = themeTools.themeSettings;

    return {
        primary: {
            idle: {
                color: colors.grey.lighter1,
            },
            hover: {
                color: colors.grey.base,
            },
        },
        destructive: {
            idle: {
                color: colors.grey.lighter1,
            },
            hover: {
                color: colors.secondary.base,
            },
        },
    };
};

export default withTheme(IconButton);
export { PropsType, IconButtonThemeType, composeIconButtonTheme };
