import styled from 'styled-components';
import SpacerTemplate, { OffsetType } from './Spacer.template';

const Spacer = styled(SpacerTemplate)`
    display: inline-block;
    ${({ offsetType }):string => offsetType === 'inner' ? 'padding' : 'margin'}:
        ${({ top }):OffsetType => top !== undefined ? top : 0}px
        ${({ right }):OffsetType => right !== undefined ? right : 0}px
        ${({ bottom }):OffsetType => bottom !== undefined ? bottom : 0}px
        ${({ left }):OffsetType => left !== undefined ? left : 0}px;
`;

export default Spacer;
