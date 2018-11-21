import { SFC } from 'react';
import { StyledType } from '../../utility/_styled';
import { Illustrations } from './types';
declare type IllustrationPropsType = StyledType & {
    illustration: keyof typeof Illustrations;
};
declare const IllustrationElement: SFC<IllustrationPropsType>;
export default IllustrationElement;
export { IllustrationPropsType, Illustrations };
