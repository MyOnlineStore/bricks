import styled from '../../utility/styled';
import ThemeTools from '../../themes/ExperimentalCustomTheme/ThemeTools';

type TileThemeType = {
    borderColor: string;
};

const StyledTile = styled.div`
    background: #ffffff;
    border-radius: 3px 3px 3px 3px;
    border: ${({ theme }): string => `1px solid ${theme.Tile.borderColor}`};
    width: 100%;
`;

const composeTileTheme = (themeTools: ThemeTools): TileThemeType => {
    const { colors } = themeTools.themeSettings;

    return {
        borderColor: colors.silver.darker4,
    };
};

export default StyledTile;
export { TileThemeType, composeTileTheme };
