import styled from '../../utility/styled';

type PropsType = {
    strikethrough?: boolean;
};

const StyledPriceTag = styled.span<PropsType>`
    ${({ strikethrough }): string => {
        return `
            position: relative;

            sup {
                font-size: .7em;
            }

            ${strikethrough === true ? 'text-decoration: line-through' : ''}
        `;
    }};
`;

export default StyledPriceTag;
