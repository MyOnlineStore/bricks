import styled from '../../utility/styled';

type PriceTagThemeType = {
    strikethroughColor: string;
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
                    margin-top: -2px;
                    position: absolute;
                    background: ${theme.PriceTag.strikethroughColor};
                    opacity: .7;
                    transform: rotate(-8deg);
                }`
                    : ''
            }
        `;
    }};
`;

export default StyledPriceTag;
export { PriceTagThemeType };
