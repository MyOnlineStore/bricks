import styled from 'styled-components';

export type ColorDropThemeType = {
    shadowBorder: string;
    borderRadius: string;
    size: string;
    transparentStripeColor: string;
};

const ColorDrop = styled.div<{ color: string; onClick(): void }>`
    display: flex;
    width: ${({ theme }) => theme.ColorDrop.size};
    height: ${({ theme }) => theme.ColorDrop.size};
    background: ${({ theme, color }) =>
        color === 'transparent'
            ? `linear-gradient(-45deg, transparent calc(50% - 2px),${theme.ColorDrop.transparentStripeColor} calc(50% - 1px), ${theme.ColorDrop.transparentStripeColor} calc(50% + 1px), transparent calc(50% + 2px)) no-repeat 0px 0px / ${theme.ColorDrop.size} ${theme.ColorDrop.size}`
            : color};
    box-shadow: ${({ theme }) => theme.ColorDrop.shadowBorder};
    border-radius: ${({ theme }) => theme.ColorDrop.borderRadius};
    ${({ onClick }) =>
        onClick &&
        `
        cursor: pointer;
    `}
`;

export const composeColorDropTheme = (): ColorDropThemeType => {
    return {
        shadowBorder: '0 0 0 1px rgba(0, 0, 0, 0.1) inset',
        borderRadius: '100%',
        size: '24px',
        transparentStripeColor: '#d9164a',
    };
};

export default ColorDrop;
