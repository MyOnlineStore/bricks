import styled from '../../utility/_styled';

type RaisedLevelThemeType = {
    boxShadow: string;
};

type RaisedThemeType = {
    level0: RaisedLevelThemeType;
    level1: RaisedLevelThemeType;
    level2: RaisedLevelThemeType;
    [key: string]: RaisedLevelThemeType;
};

type PropsType = {
    level: 0 | 1 | 2;
};

const Raised = styled.div<PropsType>`
    box-shadow: ${({ level, theme }): string => (level ? theme.Raised[`level${level}`].boxShadow : 'none')};
    transition: box-shadow 300ms;
    border-radius: 3px 3px 3px 3px;
    padding: 36px;
    width: 100%;
`;

export default Raised;
export { RaisedLevelThemeType, RaisedThemeType, PropsType };
