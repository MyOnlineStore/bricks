import { ComponentClass } from 'react';
import { PropsType as BareButtonPropsType } from '../BareButton';

type OmittedKeys = 'onChange' | 'value' | 'action';

type withPlainStylingType = ComponentClass<PropsType>;
type PropsType = Pick<BareButtonPropsType, Exclude<keyof BareButtonPropsType, OmittedKeys>> & {
    variant?: 'default' | 'destructive';
};

export { withPlainStylingType, PropsType };
