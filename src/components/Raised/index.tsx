import React, { StatelessComponent } from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import StyledRaised, { RaisedPropsType } from './style';

const RaisedElement: StatelessComponent<RaisedPropsType> = (props): JSX.Element => (
    <StyledRaised level={props.level}>
        {props.children}
    </StyledRaised>
);

export default RaisedElement;
