import React, { StatelessComponent } from 'react';
import { StyledType } from '../../utility/styled';
import trbl from '../../utility/trbl';
import Box from '../Box';
import Button from '../Button';
import { PropsType as ButtonPropsType } from '../Button/Button.template';
import Spacer from '../Spacer';
import Text from '../Text';
import { MessageSeparator, StyledMessage } from './MessageStream.style';

export type MessagePropsType = StyledType & {
    severity:'success'|'info'|'warning'|'error';
    title:string;
    message:string;
    buttonLabel?:string;
    date?:string;
    read?:boolean;
    action?():void;
};

type PropsType = StyledType & {
    messages:Array<MessagePropsType>;
};

const Message:StatelessComponent<MessagePropsType> = (props):JSX.Element => {
    const mapVariant = (severity:MessagePropsType['severity']):ButtonPropsType['variant'] => {
        switch (severity) {
            case 'warning':
                return 'warning';
            case 'error':
                return 'destructive';
            case 'info':
                return 'secondary';
            case 'success':
            default:
                return 'primary';
        }
    };

    return (
        <div className={props.className}>
            <Spacer
                offset={trbl(12, 24)}
                offsetType="inner"
            >
                <Box wrap alignItems="center" alignContent="flex-start">
                    <Box direction="column" grow={1} basis={'250px'} margin={trbl(0, 24, 0, 0)}>
                        <Text strong>{props.title}</Text>
                        <Text>{props.message}</Text>
                        <Text descriptive>{props.date}</Text>
                    </Box>
                    {props.action !== undefined && props.buttonLabel !== undefined && props.buttonLabel.length > 0 &&
                    <Box direction="column" basis="auto" justifyContent="center" alignItems="flex-end" margin={trbl(6, 0)}>
                        <Button title={props.buttonLabel} variant={mapVariant(props.severity)} action={props.action}>{props.buttonLabel}</Button>
                    </Box>
                    }
                </Box>
            </Spacer>
        </div>
    );
};

const MessageStream:StatelessComponent<PropsType> = (props):JSX.Element => {

    const messages = props.messages.map((message:MessagePropsType, index:number):JSX.Element => (
        <div key={index}>
            <StyledMessage {...message} />
            {index < props.messages.length - 1 &&
                <MessageSeparator />
            }
        </div>
    ));

    return (
        <div className={props.className}>
            {messages}
        </div>
    );
};

export default MessageStream;
export {
    PropsType,
    Message,
};
