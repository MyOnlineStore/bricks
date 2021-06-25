import styled from '../../utility/styled';
import ThemeTools from '../../themes/CustomTheme/ThemeTools';
import React, { FC } from 'react';
import IconButton from '../IconButton';
import Box from '../Box';

type PropsType = {
    label: string;
    onClick?(): void;
    'data-testid'?: string;
};

type TagThemeType = {
    backgroundColor: string;
    color: string;
    fontFamily: string;
};

const StyledTag = styled.div`
    position: relative;
    display: inline-flex;
    flex-flow: row nowrap;
    box-sizing: border-box;
    min-width: 36px;
    min-height: 36px;
    max-width: 100%;
    padding: 0px;
    border-radius: 18px;
    background: ${({ theme }) => theme.Tag.backgroundColor};
    font-family: ${({ theme }) => theme.Tag.fontFamily};
    color: ${({ theme }) => theme.Tag.color};
    font-size: 15px;
    line-height: 1.6; //leads to 24px line-height
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
`;

const StyledTagWrap = styled.div<{ hasButton: boolean }>`
    padding: ${({ hasButton }) => (hasButton ? '6px 0px 6px 12px' : '6px 12px')};
    box-sizing: border-box;
    width: ${({ hasButton }) => (hasButton ? 'calc(100% - 36px)' : '100%')};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

const composeTagTheme = (themeTools: ThemeTools): TagThemeType => {
    const { colors, text } = themeTools.themeSettings;

    return {
        backgroundColor: colors.silver.base,
        color: themeTools.calculateContrastTextColor(colors.silver.base),
        fontFamily: text.primaryFont,
    };
};

const Tag: FC<PropsType> = props => {
    const testId = props['data-testid'] ? props['data-testid'] : 'tag';

    return (
        <StyledTag data-testid={testId}>
            <StyledTagWrap hasButton={props.onClick !== undefined}>{props.label}</StyledTagWrap>
            {props.onClick && (
                <Box padding={[3]}>
                    <IconButton
                        title="Remove"
                        iconSize="small"
                        icon="close-small"
                        onClick={props.onClick}
                        data-testid={`${testId}-remove-button`}
                    />
                </Box>
            )}
        </StyledTag>
    );
};

export default Tag;
export { PropsType, TagThemeType, composeTagTheme };
