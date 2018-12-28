import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/_styled';
import Button from '../Button';

type MultiButtonThemeType = {
    window: {
        backgroundColor: string;
        secondaryColor: string;
        borderColor: string;
        borderRadius: string;
        boxShadow: string;
    };
    button: {
        common: {
            active: {
                boxShadow: string;
            };
            borderRadius: string;
        };
        primary: {
            dividerColor: string;
        };
        secondary: {
            dividerColor: string;
        };
        warning: {
            dividerColor: string;
        };
        destructive: {
            dividerColor: string;
        };
        plain: {
            dividerColor: string;
        };
        disabled: {
            dividerColor: string;
        };
    };
};

type StyledMultiButtonPropsType = {
    isOpen: boolean;
};

const StyledMultiButton = styled(Button)`
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-right: solid 0px transparent;
    margin: 0px;

    &:focus {
        z-index: 2;
    }

    &:active {
        transform: translateY(0px);
    }
`;

const StyledChevronButton = styled(Button)`
    border-left: solid 1px ${({ theme, variant }): string => theme.MultiButton.button[variant].dividerColor};
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    margin: 0px;

    &:active {
        transform: translateY(0px);
        border-left-color: ${({ theme, variant }): string => theme.MultiButton.button[variant].dividerColor};
    }

    &:hover {
        border-left-color: ${({ theme, variant }): string => theme.MultiButton.button[variant].dividerColor};
    }

    &:focus {
        border-left-color: ${({ theme, variant }): string => theme.MultiButton.button[variant].dividerColor};
    }
`;

const StyledWrapper = withProps<StyledMultiButtonPropsType, HTMLDivElement>(styled.div)`
    border-radius: ${({ theme }): string => theme.MultiButton.window.borderRadius}
    box-shadow: ${({ isOpen, theme }): string => (isOpen ? theme.MultiButton.button.common.active.boxShadow : '')};
    transform: translateZ(0) translate3d(0, 0, 0);
    transition: transform 0.1s, background 0.3s, color 0.3s, box-shadow 0.1s, border 0.3s;
    outline: none;

    &:focus {
        outline: none;
    }

    &:active {
        transform: translateY(2px);
    }
`;

const StyledWindow = withProps<StyledMultiButtonPropsType, HTMLDivElement>(styled.div)`
    box-sizing: border-box;
    background: ${({ theme }): string => theme.MultiButton.window.backgroundColor}
    overflow: hidden;
    max-width: 360px;
    border: ${({ theme }): string => `solid 1px ${theme.MultiButton.window.borderColor}`};
    border-radius: ${({ theme }): string => theme.MultiButton.window.borderRadius};
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    box-shadow: ${({ theme }): string => theme.MultiButton.window.boxShadow};
    z-index: 1000;
`;

export default StyledMultiButton;
export { StyledMultiButton, StyledWrapper, StyledWindow, StyledChevronButton, MultiButtonThemeType };
