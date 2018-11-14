declare type TrblType = {
    top: string;
    right: string;
    bottom: string;
    left: string;
};
declare type PxCoordinateType = 0 | 6 | 9 | 12 | 18 | 24 | 36 | 48 | -6 | -9 | -12 | -18 | -24 | -36 | -48 | 'auto';
declare const trbl: (...coordinates: PxCoordinateType[]) => TrblType;
export default trbl;
export { TrblType, PxCoordinateType };
