import React, { StatelessComponent } from 'react';
import { StyledType } from '../../utility/styled';
import trbl from '../../utility/trbl';
import Spacer from '../Spacer';
import Text from '../Text';

type PropsType = StyledType & {
    severity:'success'|'info'|'warning'|'error';
    title:string;
    message:string;
    date?:string;
    action?:Function;
    read?:boolean;
};

const Message:StatelessComponent<PropsType> = (props):JSX.Element => {
    return (
        <div className={props.className}>
            <Spacer
                offset={trbl(12, 24)}
                offsetType="inner"
            >
                <Text strong>{props.title}</Text>
                <Text>{props.message}</Text>
                <Text descriptive>{props.date}</Text>
            </Spacer>
        </div>
    );
};

export default Message;
export {
    PropsType,
};
