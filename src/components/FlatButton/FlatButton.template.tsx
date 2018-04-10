import React, { StatelessComponent } from 'react';
import Button from '../Button';

type PropsType = {
    className?:string;
    title:string;
    target?:HTMLAnchorElement['target'];
    href?:string;
    action?():void;
};

const FlatButton:StatelessComponent<PropsType> = (props):JSX.Element => {
    return (
        <Button
            title={props.title}
            className={props.className}
            href={props.href}
            target={props.target}
            action={props.action}
            disabled={false}
        >
            {props.children}
        </Button>
    );
};

export default FlatButton;
export { PropsType };
