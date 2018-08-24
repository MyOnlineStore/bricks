import _R from 'react';
import styled, { withProps } from '../../../../src/utility/styled';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../../types/ThemeType';

type OptionPropsType = {
    isSelected: boolean;
};

const StyledOption = withProps<OptionPropsType, HTMLDivElement>(styled.div)`
    cursor: pointer;
    background: ${({ theme, isSelected }): string => (isSelected ? theme.MultiButton.secondaryColor : '')};
    &:hover {
        background: ${({ theme }): string => theme.MultiButton.secondaryColor};
    }
`;

export default StyledOption;
