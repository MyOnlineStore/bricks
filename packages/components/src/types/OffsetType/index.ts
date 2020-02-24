export type OffsetType = 0 | 3 | 6 | 9 | 12 | 18 | 24 | 36 | 48 | -3 | -6 | -9 | -12 | -18 | -24 | -36 | -48 | 'auto';

export type OffsetShorthandType =
    | [OffsetType, OffsetType, OffsetType, OffsetType]
    | [OffsetType, OffsetType, OffsetType]
    | [OffsetType, OffsetType]
    | [OffsetType];
