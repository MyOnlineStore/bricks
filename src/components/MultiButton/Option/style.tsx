import styled from '../../../../src/utility/_styled';
import _T from '../../../types/ThemeType';

type PropsType = {
    isSelected: boolean;
};

const StyledOption = styled.div<PropsType>`
    cursor: pointer;
    background: ${({ theme, isSelected }): string => (isSelected ? theme.MultiButton.window.secondaryColor : '')};

    &:hover {
        background: ${({ theme }): string => theme.MultiButton.window.secondaryColor};
    }
`;

export default StyledOption;
