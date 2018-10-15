import { ComponentClass } from 'react';
import { PropsType as BareButtonPropsType } from '../BareButton';

type OmittedKeys = 'onChange' | 'value' | 'action';

type withDefaultStylingType = ComponentClass<PropsType>;
type PropsType = Pick<BareButtonPropsType, Exclude<keyof BareButtonPropsType, OmittedKeys>> & {
    variant: 'primary' | 'destructive' | 'warning' | 'secondary' | 'plain';
    // compact?: boolean;
};

export { withDefaultStylingType, PropsType };
