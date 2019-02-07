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
    backgroundColor: string;
    color: string;
};

type ComponentStateTypes = {
    idle: CommonType;
    hover: CommonType;
    focus: CommonType;
    active: CommonType;
};

type IconButtonThemeType = {
    primary: ComponentStateTypes;
    destructive: ComponentStateTypes;
};

type PropsType = BareButtonPropsType & {
    theme?: ThemeType;
    icon: keyof typeof MediumIcons;
    variant: 'primary' | 'destructive';
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
    ${({ theme, variant, loading }): string => {
        const idle = `
            transform: none;
            background-color: ${theme.IconButton[variant].idle.backgroundColor};
            color: ${theme.IconButton[variant].idle.color};
        `;

        const hover = `
            transform: scale(1.1);
            background-color: ${theme.IconButton[variant].hover.backgroundColor};
            color: ${theme.IconButton[variant].hover.color};
        `;

        const active = `
            transform: scale(0.9);
            background-color: ${theme.IconButton[variant].active.backgroundColor};
            color: ${theme.IconButton[variant].active.color};
        `;

        const focus = `
            transform: scale(1.1);
            background-color: ${theme.IconButton[variant].focus.backgroundColor};
            color: ${theme.IconButton[variant].focus.color};
        `;

        return `
            ${idle}
            padding: 9px;

            &:hover {
                ${!loading ? hover : idle}
            }

            &:focus {
                ${!loading ? focus : idle}
            }

            &:active {
                ${!loading ? active : idle}
            }
    `;
    }}
`;

export default withTheme(IconButton);
export { PropsType, IconButtonThemeType };
