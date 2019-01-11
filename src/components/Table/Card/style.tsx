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

    ${({ selected }): string => {
        if (selected) {
            // the background-color must remain a solid color, to improve legabilty while dragging
            return `
                background-color: #EFFBF1;
                border: 1px solid #5BD16A;
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
