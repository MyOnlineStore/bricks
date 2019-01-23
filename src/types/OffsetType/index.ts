export type OffsetType = 0 | 6 | 9 | 12 | 18 | 24 | 36 | 48 | -6 | -9 | -12 | -18 | -24 | -36 | -48 | 'auto';

export type OffsetShorthandType =
    | [OffsetType, OffsetType, OffsetType, OffsetType]
    | [OffsetType, OffsetType, OffsetType]
    | [OffsetType, OffsetType]
    | [OffsetType];