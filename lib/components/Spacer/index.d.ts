import { FunctionComponent } from 'react';
import { TrblType } from '../../utility/trbl';
declare type PropsType = JSX.IntrinsicElements['div'] & {
    offset: TrblType;
    offsetType?: 'inner' | 'outer';
};
declare const Spacer: FunctionComponent<PropsType>;
export { PropsType };
export default Spacer;
