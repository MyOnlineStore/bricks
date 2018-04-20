import { PropsType } from '../PriceTag.template';

const formatDecimalSeperator = (
    value:string,
    { hideZeros }:PropsType,
    isRound:boolean
):string => {
    return hideZeros !== undefined && hideZeros && isRound
        ? ''
        : value;
};

export default formatDecimalSeperator;
