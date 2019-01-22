import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../../types/ThemeType';
import styled, { withProps } from '../../../utility/_styled';
import StyledCell from '../Cell/style';

type StyledRowProps = {
    ref?: HTMLElement;
    dragging?: boolean;
    selected?: boolean;
    focus?: boolean;
};

const StyledCard = withProps<StyledRowProps>(styled.div)`
    transition: background-color 300ms, border 300ms;
    border-radius: ${({ theme }): string => theme.Table.card.borderRadius};
    box-shadow: ${({ theme }): string => theme.Table.card.boxShadow};
    margin-bottom: 24px;
    background-color: ${({ theme }): string => theme.Table.card.backgroundColor};

    td:first-child {
        width: 1px;
        white-space: nowrap;
        padding-right: 12px;
    }

    ${StyledCell} {
        border: none;
    }
`;

export default StyledCard;
export { StyledRowProps };
