import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';

type StyledFormRowType = {
    small?: boolean;
    valign?: boolean;
};

const StyledRowDescription = withProps<StyledFormRowType, HTMLLabelElement>(styled.div)`
width: 100%;
max-width: ${({ small }): string => (small ? '100%' : '421px')};
margin-bottom: ${({ small }): string => (small ? '6px' : '12px')};
flex-grow: 1;
flex-shrink: 1;
display: flex;
margin-right: 18px;
flex-wrap: no-wrap;
flex-direction: column;

${({ valign }): string => (valign !== false ? '&:first-child{ padding-top: 0.7em; }' : '')};
`;

const StyledField = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 12px;
    align-items: center;
`;

export { StyledField, StyledRowDescription };
