import styled, { StyledComponentClass } from 'styled-components';
import ThemeType from '../../themes/types/ThemeType';
import SpacerTemplate, { PropsType } from './Spacer.template';

const Spacer:StyledComponentClass<PropsType, ThemeType> = styled(SpacerTemplate)`
    ${({ offsetType }):string => offsetType === 'inner' ? 'padding' : 'margin'}:
        ${({ offset }):string => `${offset.top} ${offset.right} ${offset.bottom} ${offset.left}`}
`;

export default Spacer;
