export type OffsetType =
    | 0
    | 3
    | 6
    | 9
    | 12
    | 15
    | 18
    | 21
    | 24
    | 30
    | 36
    | 48
    | 60
    | 72
    | -3
    | -6
    | -9
    | -12
    | -15
    | -18
    | -21
    | -24
    | -30
    | -36
    | -48
    | -60
    | -72
    | 'auto';

export type OffsetShorthandType =
    | [OffsetType, OffsetType, OffsetType, OffsetType]
    | [OffsetType, OffsetType, OffsetType]
    | [OffsetType, OffsetType]
    | [OffsetType];
