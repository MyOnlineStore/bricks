import styled from '../../utility/styled';
import ThemeTools from '../../themes/ExperimentalCustomTheme/ThemeTools';

type PriceTagThemeType = {
    strikethroughColor: string;
};

type PropsType = {
    strikethrough?: boolean;
    strikethroughStyle?: 'diagonal' | 'horizontal';
};

const StyledPriceTag = styled.span<PropsType>`
    ${({ theme, strikethrough, strikethroughStyle }): string => {
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
                    margin-top: ${strikethroughStyle === 'horizontal' ? '-1px' : '-2px'};
                    position: absolute;
                    background: ${theme.PriceTag.strikethroughColor};
                    opacity: .7;
                    transform: rotate(${strikethroughStyle === 'horizontal' ? '0deg' : '-8deg'});
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
    };
};

export default StyledPriceTag;
export { PriceTagThemeType, composePriceTagTheme };
