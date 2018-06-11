import { PropsType } from '../';

const formatCurrency = (value: string, { hideCurrency }: PropsType): string => {
    return hideCurrency !== undefined && hideCurrency ? '' : value;
};

export default formatCurrency;
