import styled, { StyledComponentClass } from 'styled-components';
import { ThemeType } from '../../themes';
import SpacerTemplate, { OffsetType, PropsType } from './Spacer.template';

const Spacer:StyledComponentClass<PropsType, ThemeType> = styled(SpacerTemplate)`
    ${({ offsetType }):string => offsetType === 'inner' ? 'padding' : 'margin'}:
        ${({ top }):OffsetType => top !== undefined ? top : 0}px
        ${({ right }):OffsetType => right !== undefined ? right : 0}px
        ${({ bottom }):OffsetType => bottom !== undefined ? bottom : 0}px
        ${({ left }):OffsetType => left !== undefined ? left : 0}px;
`;

export default Spacer;
