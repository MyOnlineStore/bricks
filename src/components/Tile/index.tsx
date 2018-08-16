import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled from '../../utility/styled';

type TileThemeType = {
    borderColor: string;
}

const StyledTile = styled.div`
    background: #ffffff;
    border-radius: 3px 3px 3px 3px;
    border: ${({ theme }):string => `1px solid ${theme.Tile.borderColor}`};
    padding: 36px;
    width: 100%;
`;

export default StyledTile;
export { TileThemeType };
