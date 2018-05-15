import React, { StatelessComponent } from 'react';
import { StyledType } from '../../utility/styled';
import trbl from '../../utility/trbl';
import Box from '../Box';
import Button from '../Button';
import { PropsType as ButtonPropsType } from '../Button/Button.template';
import Spacer from '../Spacer';
import Text from '../Text';

type PropsType = StyledType & {
    severity:'success'|'info'|'warning'|'error';
    title:string;
    message:string;
    buttonLabel?:string;
    date?:string;
    read?:boolean;
    action?():void;
};

const Message:StatelessComponent<PropsType> = (props):JSX.Element => {
    const mapVariant = (severity:PropsType['severity']):ButtonPropsType['variant'] => {
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
                    <Box direction="column" grow={1} basis={'300px'} margin={trbl(0, 12, 0, 0)}>
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

export default Message;
export {
    PropsType,
};
