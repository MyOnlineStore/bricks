import React, { StatelessComponent } from 'react';
import { StyledType } from '../../utility/styled';
import Button from '../Button/Button.template';

type PropsType = StyledType & {
    title:string;
    target?:HTMLAnchorElement['target'];
    href?:string;
    action?():void;
};

const FlatButton:StatelessComponent<PropsType> = (props):JSX.Element => {
    const action = ():void => {
        if (props.action !== undefined) {
            props.action();
        }
    };

    return (
        <Button
            title={props.title}
            className={props.className}
            href={props.href}
            target={props.target}
            action={action}
            disabled={false}
        >
            {props.children}
        </Button>
    );
};

export default FlatButton;
export { PropsType };
