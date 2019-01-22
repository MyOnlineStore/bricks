import { FunctionComponent } from 'react';
import { Illustrations } from './types';
declare type IllustrationPropsType = {
    illustration: keyof typeof Illustrations;
};
declare const IllustrationElement: FunctionComponent<IllustrationPropsType>;
export default IllustrationElement;
export { IllustrationPropsType, Illustrations };
