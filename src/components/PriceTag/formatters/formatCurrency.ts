import { PropsType } from '..';

export default (value: string, isFree: boolean, { hideCurrency }: PropsType): string | JSX.Element => {
    return isFree || hideCurrency === true ? '' : value;
};
