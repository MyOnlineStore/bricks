/// <reference path="../../../src/_declarations/global.d.ts" />
import { FunctionComponent } from 'react';
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
declare const PriceTag: FunctionComponent<PropsType>;
export default PriceTag;
export { PropsType };
