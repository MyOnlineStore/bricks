type SpreadType<T1, T2, TExclude> = { [K in Exclude<keyof T1, TExclude | keyof T2>]: T1[K] } &
    { [K in Exclude<keyof T2, TExclude>]: T2[K] };

export default SpreadType;
