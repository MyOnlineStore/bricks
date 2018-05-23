import React, { Children, StatelessComponent } from 'react';

type PropsType = {
    className?:string;
    compact?:boolean;
    title:string;
    variant:'primary'|'destructive'|'warning'|'secondary'|'flat';
    target?:HTMLAnchorElement['target'];
    href?:string;
    disabled?:boolean;
    action?():void;
};

const Button:StatelessComponent<PropsType> = (props):JSX.Element => {
    const isLink = props.href !== undefined;

    const Element = isLink
        ? 'a'
        : 'button';

    const clickAction = ():void => {
        if (props.action !== undefined && props.disabled !== true) {
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
            disabled={props.disabled}
        >
            {Children.count(props.children) > 0
                ? props.children
                : props.title
            }
        </Element>
    );
};

export default Button;
export { PropsType };
