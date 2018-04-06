import React, { StatelessComponent } from 'react';
import ThemeType from '../../types/ThemeType';
import { LargeIcons, SmallIcons } from './Icon.types';

type BasePropsType = {
    theme?:ThemeType;
    className?:string;
    color?:string;
};

type SmallPropsType = BasePropsType & {
    size:'small';
    icon:keyof typeof SmallIcons;
};

type LargePropsType = BasePropsType & {
    size:'large';
    icon:keyof typeof LargeIcons;
};

type PropsType = SmallPropsType | LargePropsType;

const Icon:StatelessComponent<PropsType> = (props):JSX.Element => {
    const icon = props.size === 'large'
        ? LargeIcons[props.icon]
        : SmallIcons[props.icon];

    return (
        <span
            aria-hidden
            role="img"
            className={props.className}
            /* tslint:disable */
            dangerouslySetInnerHTML={{ __html: icon as any }}
            /* tslint:enable */
        />
    );
};

export default Icon;
export {
    PropsType,
    SmallIcons,
    LargeIcons,
    BasePropsType,
    SmallPropsType,
    LargePropsType,
};
