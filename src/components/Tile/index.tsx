import React, { StatelessComponent } from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import styled from '../../utility/styled';
import StyledTile from './style';

const Tile: StatelessComponent = (props): JSX.Element => (
    <StyledTile>
        {props.children}
    </StyledTile>
);

export default Tile;
