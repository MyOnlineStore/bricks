import { PropsType } from '../';

const formatCurrency = (value: string, { hideCurrency }: PropsType): string => {
    return hideCurrency === true ? '' : value;
};

export default formatCurrency;
