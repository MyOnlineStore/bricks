import React from 'react';
import styled from '../../utility/_styled';
import BareButton, { PropsType as BareButtonPropsType } from '../Button/base';
import ThemeType from '../../types/ThemeType';
import Icon from '../Icon';
import Spinner from '../Spinner';
import Box from '../Box';
import { MediumIcons } from '../Icon/types';
import { withTheme } from 'styled-components';

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
    icon: keyof typeof MediumIcons;
    variant?: 'primary' | 'destructive';
};

const IconButton = styled(BareButton).attrs((props: PropsType) => {
    const children = (
        <>
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
            <Icon color={props.loading ? 'transparent' : undefined} size="medium" icon={props.icon} />
        </>
    );

    return { children };
})<PropsType>`
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

export default withTheme(IconButton);
export { PropsType, IconButtonThemeType };
