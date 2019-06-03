import styled from '../../utility/styled';

type IllustrationThemeType = {
    size: string;
};

const StyledIllustration = styled.div`
    svg {
        height: 100%;
        width: 100%;
        max-height: ${({ theme }): string => theme.Illustration.size};
        max-width: ${({ theme }): string => theme.Illustration.size};
    }
`;

const composeIllustrationTheme = (): IllustrationThemeType => {
    return {
        size: '186px',
    };
};

export { IllustrationThemeType, StyledIllustration, composeIllustrationTheme };
