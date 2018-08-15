import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';

type RaisedLevelThemeType = {
    boxShadow: string;
};

type RaisedThemeType = {
    level0: RaisedLevelThemeType;
    level1: RaisedLevelThemeType;
    level2: RaisedLevelThemeType;
    [key: string]: RaisedLevelThemeType;
};

type RaisedPropsType = {
    level: 0 | 1 | 2;
};

const StyledRaised = withProps<RaisedPropsType>(styled.div)`
    box-shadow: ${({ level, theme }): string => (level ? theme.Raised[`level${level}`].boxShadow : 'none')};
    transition: box-shadow 300ms;
    border-radius: 3px 3px 3px 3px;
    padding: 36px;
    width: 100%
`;

export default StyledRaised;
export { RaisedLevelThemeType, RaisedThemeType, RaisedPropsType };
