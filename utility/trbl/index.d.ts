import { OffsetType } from '../../types/OffsetType';
declare type TrblType = {
    top: string;
    right: string;
    bottom: string;
    left: string;
};
declare const trbl: (...coordinates: OffsetType[]) => TrblType;
export default trbl;
export { TrblType };
