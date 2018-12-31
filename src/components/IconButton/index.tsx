import React from 'react';
import { StyledComponentClass as _S, withTheme } from 'styled-components';
import styled, { withProps } from '../../utility/_styled';
import BareButton, { PropsType as BareButtonPropsType } from '../Button/base';
import ThemeType from '../../types/ThemeType';
import Icon from '../Icon';
import Spinner from '../Spinner';
import Box from '../Box';
import { MediumIcons } from '../Icon/types';

type PropsType = BareButtonPropsType & {
    theme?: ThemeType;
    icon: keyof typeof MediumIcons;
    variant: 'primary' | 'destructive';
};

const IconButton = withProps<PropsType>(styled(BareButton)).attrs({
    children: (props: PropsType): JSX.Element => {
        return (
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
    },
})`
    padding: 9px;
    color: ${({ theme }) => theme.Button.Flat.primary.color};
    background-color: ${({ theme }) => theme.Button.Flat.primary.backgroundColor};
    transform: none;

    &:hover {
        ${({ loading }) => (!loading ? 'transform: scale(1.1);' : '')};
        ${({ variant, theme, loading }) =>
            variant === 'destructive' && !loading ? `color: ${theme.Button.Flat.destructive.color}` : ''};
    }

    &:active {
        ${({ loading }) => (!loading ? 'transform: scale(0.9);' : '')};
    }
`;

export default withTheme(IconButton);
export { PropsType };
