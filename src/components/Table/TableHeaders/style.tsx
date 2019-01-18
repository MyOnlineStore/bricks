import styled from '../../../utility/_styled';

type PropsType = {
    headerAlign: 'start' | 'center' | 'end';
    width?: string;
    onClick?(): void;
};

const StyledHeader = styled.th<PropsType>`
    ${({ width }): string => (width === 'fit' ? 'width: 1px;' : `width: ${width};`)}
    padding: 12px;
    background: ${({ theme }): string => theme.Table.cell.default.backgroundColor};
    text-align: ${({ headerAlign }): string => headerAlign}};
    border-bottom: ${({ theme }): string => `solid 1px ${theme.Table.cell.default.borderColor}`};
    cursor: ${({ onClick }): string => (onClick !== undefined ? 'pointer' : 'default')};
    user-select: ${({ onClick }): string => (onClick !== undefined ? 'none' : 'default')};
`;

export default StyledHeader;
