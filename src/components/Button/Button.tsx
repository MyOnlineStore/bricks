import React, { StatelessComponent } from 'react';
import { ThemeType } from '../../themes';
import styled from '../../utility/styled/styled';

type PropsType = {
    className?:string;
    title:string;
    type:'primary' | 'secondary' | 'destructive' | 'warning';
    target?:HTMLAnchorElement['target'];
    href?:string;
    action?():void;
};

const Button:StatelessComponent<PropsType> = (props):JSX.Element => {
    const Element = props.href !== undefined
        ? 'a'
        : 'button';

    const clickAction = ():void => {
        if (props.action !== undefined) {
            props.action();
        }
    };

    return (
        <Element
            type={props.type}
            title={props.title}
            className={props.className}
            href={props.href}
            target={props.target}
            onClick={clickAction}
        >
            {props.children}
        </Element>
    );
};

export default Button;
