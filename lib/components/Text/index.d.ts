import { FunctionComponent } from 'react';
import { StyledType } from '../../utility/_styled';
import SeverityType from '../../types/_SeverityType';
declare type PropsType = StyledType & {
    compact?: boolean;
    descriptive?: boolean;
    strong?: boolean;
    inline?: boolean;
    variant?: 'small' | 'base' | 'large';
    textAlign?: 'left' | 'right' | 'center' | 'justify';
    severity?: SeverityType;
};
declare const Text: FunctionComponent<PropsType>;
export default Text;
export { PropsType };
