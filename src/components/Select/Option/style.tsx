import _R from 'react';
import styled, { withProps } from '../../../../src/utility/_styled';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../../types/ThemeType';

type OptionPropsType = {
    isTargeted: boolean;
};

const StyledOption = withProps<OptionPropsType, HTMLDivElement>(styled.div)`
    cursor: pointer;
    background: ${({ theme, isTargeted }): string => (isTargeted ? theme.Select.common.secondaryColor : '')};
`;

export default StyledOption;
