import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';

type StyledFormRowType = {
    small?: boolean;
};

const StyledRowDescription = withProps<StyledFormRowType, HTMLLabelElement>(styled.div)`
width: ${({ small }): string => (small ? '120px' : '156px')};
margin-bottom: ${({ small }): string => (small ? '6px' : '12px')};
flex-grow: 0;
flex-shrink: 0;
display: flex;`;

const StyledRowValue = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 12px;
`;

export { StyledRowValue, StyledRowDescription };
