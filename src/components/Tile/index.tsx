import styled from '../../utility/styled';

type TileThemeType = {
    borderColor: string;
};

const StyledTile = styled.div`
    background: #ffffff;
    border-radius: 3px 3px 3px 3px;
    border: ${({ theme }): string => `1px solid ${theme.Tile.borderColor}`};
    width: 100%;
`;

export default StyledTile;
export { TileThemeType };
