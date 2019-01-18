import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../../types/ThemeType';
import styled, { withProps } from '../../../utility/_styled';

type StyledRowProps = {
    ref?: HTMLElement;
    dragging?: boolean;
    selected?: boolean;
    focus?: boolean;
};

const StyledCard = withProps<StyledRowProps>(styled.div)`
    transition: background-color 300ms, border 300ms;
    border-radius: 3px;
    box-shadow: 0 2px 10px 0 rgba(33, 37, 43, .15);
    margin-bottom: 24px;

    table {
        width: 100%;
    }

    tr {
        vertical-align: middle;
    }

    td {
        padding: 3px 0px;
    }

    td.label {
        padding-right: 20px;
        white-space: nowrap;
    }

    td.value {
        width: 100%;
    }

    ${({ selected, theme }): string => {
        if (selected) {
            // the background-color must remain a solid color, to improve legabilty while dragging
            return `
                background-color: ${theme.Table.row.selected.backgroundColor};
                border: 1px solid ${theme.Table.row.selected.borderColor};
            `;
        }

        return `
            background-color: #FFFFFF;
            border: 1px solid #FFFFFF;
        `;
    }}
`;

export default StyledCard;
export { StyledRowProps };
