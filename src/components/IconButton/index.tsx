import React from 'react';
import styled from '../../utility/_styled';
import BareButton, { PropsType as BareButtonPropsType } from '../Button/base';
import ThemeType from '../../types/ThemeType';
import Icon from '../Icon';
import Spinner from '../Spinner';
import Box from '../Box';
import { MediumIcons } from '../Icon/types';
import { withTheme } from 'styled-components';

type IconButtonThemeType = {
    primary: {
        color: string;
        backgroundColor: string;
    };
    destructive: {
        color: string;
    };
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
    padding: 9px;
    color: ${({ theme }) => theme.IconButton.primary.color};
    background-color: ${({ theme }) => theme.IconButton.primary.backgroundColor};
    transform: none;

    &:hover {
        ${({ loading }) => (!loading ? 'transform: scale(1.1);' : '')};
        ${({ variant, theme, loading }) =>
            variant === 'destructive' && !loading ? `color: ${theme.IconButton.destructive.color}` : ''};
    }

    &:active {
        ${({ loading }) => (!loading ? 'transform: scale(0.9);' : '')};
    }
`;

export default withTheme(IconButton);
export { PropsType, IconButtonThemeType };
