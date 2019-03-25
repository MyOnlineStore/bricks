import styled from '../../utility/styled';
import ThemeTools from '../../themes/ExperimentalCustomTheme/ThemeTools';
import rgba from '../../utility/rgba';

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

const composeRaisedTheme = (themeTools: ThemeTools): RaisedThemeType => {
    return {
        level0: {
            boxShadow: 'none',
        },
        level1: {
            boxShadow: `0 2px 10px 0 ${rgba(themeTools.themeSettings.colors.grey.darker1, 0.15)}`,
        },
        level2: {
            boxShadow: `0 6px 48px 0 ${rgba(themeTools.themeSettings.colors.grey.darker1, 0.3)}`,
        },
    };
};

export default Raised;
export { RaisedLevelThemeType, RaisedThemeType, PropsType, composeRaisedTheme };
