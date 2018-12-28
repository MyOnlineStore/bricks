import { PropsType } from '../';

const formatDecimalSeperator = (value: string, { fractionFormat }: PropsType, isRound: boolean): string => {
    return fractionFormat === 'none' && isRound ? '' : value;
};

export default formatDecimalSeperator;
