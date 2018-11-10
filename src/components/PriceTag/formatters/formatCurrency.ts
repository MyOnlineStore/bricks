import { PropsType } from '..';

const formatCurrency = (value: string, isFree: boolean, { hideCurrency }: PropsType): string | JSX.Element => {
    return isFree || hideCurrency === true ? '' : value;
};

export default formatCurrency;
