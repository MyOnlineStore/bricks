import RecursivePartialType from '../../types/_RecursivePartialType';
import ThemeType from '../../types/ThemeType';
import styled from '../../utility/_styled';

type ContrastThemeType = {
    overides: RecursivePartialType<ThemeType>;
    default: {
        background: string;
    };
};

const StyledContrast = styled.div`
    background: ${({ theme }): string => theme.Contrast.default.background};
`;

export default StyledContrast;
export { ContrastThemeType };
