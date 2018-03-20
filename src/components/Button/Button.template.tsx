import React, { StatelessComponent } from 'react';

type PropsType = {
    className?:string;
    title:string;
    variant:'primary' | 'secondary' | 'destructive' | 'warning';
    target?:HTMLAnchorElement['target'];
    href?:string;
    action?():void;
};

const Button:StatelessComponent<PropsType> = (props):JSX.Element => {
    const isLink = props.href !== undefined;

    const Element = isLink
        ? 'a'
        : 'button';

    const clickAction = ():void => {
        if (props.action !== undefined) {
            props.action();
        }
    };

    return (
        <Element
            title={props.title}
            className={props.className}
            href={props.href}
            target={props.target}
            onClick={clickAction}
            type={!isLink ? 'button' : undefined}
        >
            {props.children}
        </Element>
    );
};

export default Button;
export { PropsType };
