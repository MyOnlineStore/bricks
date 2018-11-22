import React, { FunctionComponent } from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import StyledRaised, { RaisedPropsType } from './style';

const RaisedElement: FunctionComponent<RaisedPropsType> = (props): JSX.Element => (
    <StyledRaised level={props.level}>
        {props.children}
    </StyledRaised>
);

export default RaisedElement;
