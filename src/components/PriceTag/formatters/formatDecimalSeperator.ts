import { PropsType } from '../';

const formatDecimalSeperator = (value: string, { fractionFormat }: PropsType, isRound: boolean): string => {
    return fractionFormat !== 'dash' && isRound ? '' : value;
};

export default formatDecimalSeperator;
