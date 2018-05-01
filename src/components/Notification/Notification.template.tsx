import React, { StatelessComponent } from 'react';
import { StyledType } from '../../utility/styled';
import trbl from '../../utility/trbl';
import Icon, { SmallIcons } from '../Icon';
import Spacer from '../Spacer';

enum SeverityIcons {
    error = 'danger',
    warning = 'danger',
    info = 'infoCircle',
    success = 'checkmarkCircle',
}

type PropsType = StyledType & {
    severity:keyof typeof SeverityIcons;
    message:string;
    icon?:keyof typeof SmallIcons;
};

const Notification:StatelessComponent<PropsType> = (props):JSX.Element => {
    const icon = props.icon !== undefined
        ? props.icon
        : SeverityIcons[props.severity];

    return (
        <div className={props.className}>
            <Spacer
                offset={trbl(12)}
                offsetType="outer"
            >
                <Icon size="small" icon={icon} />
                &nbsp;&nbsp;&nbsp;
                {props.message}
            </Spacer>
        </div>
    );
};

export default Notification;
export {
    PropsType,
    SeverityIcons,
};
