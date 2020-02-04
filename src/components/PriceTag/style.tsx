import styled from '../../utility/styled';

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
                    background: ${theme.Text.default.color};
                    opacity: 0.7;
                }`
                    : ''
            }
        `;
    }};
`;

export default StyledPriceTag;
