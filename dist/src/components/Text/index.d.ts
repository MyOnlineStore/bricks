import { SFC } from 'react';
import { StyledType } from '../../utility/_styled';
import SeverityType from '../../types/SeverityType';
declare type PropsType = StyledType & {
    variant?: 'small' | 'regular' | 'large' | 'extraLarge' | 'display';
    severity?: SeverityType;
    textAlign?: 'left' | 'right' | 'center' | 'justify';
    compact?: boolean;
    strong?: boolean;
    inline?: boolean;
};
declare const Text: SFC<PropsType>;
export default Text;
export { PropsType };
