import { FunctionComponent, ReactNode } from 'react';
import { Illustrations } from '../Illustration';
declare type PropsType = {
    illustration?: keyof typeof Illustrations | ReactNode;
    title: string | ReactNode;
    message: string | ReactNode;
    horizontal?: boolean;
    button?: ReactNode;
};
declare const EmptyState: FunctionComponent<PropsType>;
export default EmptyState;
export { PropsType };
