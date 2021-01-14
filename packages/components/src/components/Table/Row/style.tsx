import styled from '../../../utility/styled';
import StyledCell from '../Cell/style';

type PropsType = {
    hover?: boolean;
    dragging?: boolean;
    selected?: boolean;
    focus?: boolean;
    error?: boolean;
};

const StyledRow = styled.tr<PropsType>`
    background-color: ${({ theme, error, dragging }): string =>
        error && !dragging ? theme.Table.row.error.backgroundColor : theme.Table.row.default.backgroundColor};
    transition: background-color 300ms;
    text-align: left;
    border-spacing: 0 1px;
    box-sizing: border-box;
    position: relative;
    box-shadow: ${({ dragging, theme }): string =>
        dragging ? theme.Table.row.dragging.boxShadow : '0 0 0 rgba(0,0,0,0)'};
    outline: ${({ focus, theme }): string => (focus ? `solid 4px ${theme.Table.row.focus.borderColor}` : '')};

    &:hover {
        background-color: ${({ hover, theme }): string =>
            hover !== false ? theme.Table.row.hover.backgroundColor : theme.Table.row.default.backgroundColor};
    }

    ${StyledCell} {
        ${({ dragging }): string => {
            // this is a hack to force (IE11 mostly) td's to wrap text in combination with flex-box
            return dragging !== true ? 'max-width: 100%' : '';
        }}
    }
`;

export default StyledRow;
export { PropsType };
