import { PropsType } from '../';

export default (value: string, { fractionFormat }: PropsType, isRound: boolean): string => {
    return fractionFormat !== 'dash' && isRound ? '' : value;
};
