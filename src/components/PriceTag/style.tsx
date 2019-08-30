import styled from '../../utility/styled';
import ThemeTools from '../../themes/ExperimentalCustomTheme/ThemeTools';

type PriceTagThemeType = {
    strikethroughColor: string;
    strikethroughOpactiy: string;
};

type PropsType = {
    strikethrough?: boolean;
};

const StyledPriceTag = styled.span<PropsType>`
    ${({ theme, strikethrough }): string => {
        return `
            position: relative;

            sup {
                font-size: .7em;
            }

            ${
                strikethrough === true
                    ? `&::after {
                    content: '';
                    width: 100%;
                    height: 2px;
                    left: 0;
                    top: 50%;
                    margin-top: -1px;
                    position: absolute;
                    background: ${theme.PriceTag.strikethroughColor};
                    opacity: ${theme.PriceTag.strikethroughOpactiy};
                }`
                    : ''
            }
        `;
    }};
`;

const composePriceTagTheme = (themeTools: ThemeTools): PriceTagThemeType => {
    const { colors } = themeTools.themeSettings;

    return {
        strikethroughColor: colors.grey.lighter2,
        strikethroughOpactiy: '.7',
    };
};

export default StyledPriceTag;
export { PriceTagThemeType, composePriceTagTheme };
