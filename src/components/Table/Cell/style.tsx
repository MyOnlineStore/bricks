import styled from '../../../utility/_styled';

type PropsType = {
    cellAlign: 'start' | 'center' | 'end';
    elementWidth?: string;
};

enum Alignments {
    'start' = 'left',
    'center' = 'center',
    'end' = 'right',
}

const StyledCell = styled.td<PropsType>`
    width: ${({ elementWidth }): string => (elementWidth && elementWidth !== 'fit' ? elementWidth : 'inherit')};
    ${({ elementWidth }): string => (elementWidth === 'fit' ? 'white-space: nowrap;' : '')}
    border-bottom: ${({ theme }): string => `1px solid ${theme.Table.cell.default.borderColor}`};
    padding: 12px;
    text-align: ${({ cellAlign }): string => Alignments[cellAlign]}};

    &:focus {
        outline: none;
    }
`;

export default StyledCell;
