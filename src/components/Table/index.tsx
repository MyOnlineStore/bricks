import React, { Component } from 'react';
import Box from '../Box';
import StyledTable from './style';

class Table extends Component {
    public onDragStart = (): void => {
        this.setState({
            isDragging: true,
        });
    };

    public onDragEnd = (): void => {
        this.setState({
            isDragging: false,
        });
    };

    public render(): JSX.Element {
        return (
            <Box>
                <StyledTable>
                    <tbody>{this.props.children}</tbody>
                </StyledTable>
            </Box>
        );
    }
}

export default Table;
