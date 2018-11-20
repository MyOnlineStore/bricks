/// <reference path="../../_declarations/global.d.ts" />
import { SFC } from 'react';
declare type PropsType = {
    hideCurrency?: boolean;
    superScriptFraction?: boolean;
    value: number;
    freeLabel?: string;
    strikethrough?: boolean;
    fractionFormat?: 'none' | 'dash';
    locale: string;
    currency: string;
};
declare const PriceTag: SFC<PropsType>;
export default PriceTag;
export { PropsType };
