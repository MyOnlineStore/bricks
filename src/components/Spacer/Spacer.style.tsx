import styled, { StyledComponentClass as _S } from 'styled-components';
import SpacerTemplate from './Spacer.template';

const Spacer = styled(SpacerTemplate)`
    ${({ offsetType }):string => offsetType === 'inner' ? 'padding' : 'margin'}:
        ${({ offset }):string => `${offset.top} ${offset.right} ${offset.bottom} ${offset.left}`}
`;

export default Spacer;
