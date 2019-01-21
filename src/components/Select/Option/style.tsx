import styled from '../../../../src/utility/_styled';

type PropsType = {
    isTargeted: boolean;
};

const StyledOption = styled.div<PropsType>`
    cursor: pointer;
    background: ${({ theme, isTargeted }): string => (isTargeted ? theme.Select.common.secondaryColor : '')};
`;

export default StyledOption;
