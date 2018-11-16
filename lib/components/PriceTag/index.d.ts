import { FunctionComponent } from 'react';
import { StyledType } from '../../utility/_styled';
declare type PartTypeType = 'currency' | 'decimal' | 'fraction' | 'group' | 'infinity' | 'integer' | 'literal' | 'minusSign' | 'nan' | 'plusSign' | 'percentSign';
declare type PartType = {
    type: PartTypeType;
    value: string;
};
declare type PropsType = StyledType & {
    hideCurrency?: boolean;
    superScriptFraction?: boolean;
    showDash?: boolean;
    hideZeros?: boolean;
    parts: Array<PartType>;
    freeLabel?: string;
    displayType?: 'base' | 'action' | 'default';
};
declare const PriceTag: FunctionComponent<PropsType>;
export default PriceTag;
export { PropsType, PartTypeType, PartType };
