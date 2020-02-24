import styled from '../../utility/styled';
import ThemeTools from '../../themes/CustomTheme/ThemeTools';

export type ProgressThemeType = {
    common: {
        dotSize: number;
    };
    active: {
        backgroundColor: string;
    };
    idle: {
        backgroundColor: string;
    };
};

type PropsType = {
    active: boolean;
    hide: boolean;
    small: boolean;
};

export const Step = styled.div<PropsType>`
    transition: all 300ms;
    width: ${({ theme, small, hide }) => {
        if (hide) return '0px';
        if (small) return `${theme.Progress.common.dotSize * 1.07}px`;

        return `${theme.Progress.common.dotSize * 1.33}px`;
    }};
    height: ${({ theme }) => theme.Progress.common.dotSize * 1.33}px;
    position: relative;

    &::before {
        transition: transform 300ms;
        content: '';
        border-radius: 50%;
        position: absolute;
        display: block;
        transform: scale(
            ${({ small, hide, active }) => {
                if (hide) return 0;
                if (small) return 0.5;
                if (active) return 1;

                return 0.8;
            }}
        );
        top: calc(50% - ${({ theme }) => theme.Progress.common.dotSize / 2}px);
        left: calc(50% - ${({ theme }) => theme.Progress.common.dotSize / 2}px);
        width: ${({ theme }) => theme.Progress.common.dotSize}px;
        height: ${({ theme }) => theme.Progress.common.dotSize}px;
        background: ${({ theme, active }) => {
            if (active) {
                return theme.Progress.active.backgroundColor;
            }

            return theme.Progress.idle.backgroundColor;
        }};
    }
`;

export const composeProgressTheme = ({ themeSettings: { colors } }: ThemeTools): ProgressThemeType => {
    return {
        common: {
            dotSize: 9,
        },
        active: {
            backgroundColor: colors.primary.base,
        },
        idle: {
            backgroundColor: colors.silver.darker4,
        },
    };
};
