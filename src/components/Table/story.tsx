import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';
import { DropResult } from 'react-beautiful-dnd';
import Table from '.';
import trbl from '../../utility/trbl';
import Box from '../Box';
import Button from '../Button';
import Icon from '../Icon';
import Spacer from '../Spacer';
import TableCell from '../TableCell';
import TableRow from '../TableRow';
import Text from '../Text';

type DemoStateType = {
    headings: Array<string>;
    contents: Array<Array<string>>;
    hover: boolean;
};

class Demo extends Component<{}, DemoStateType> {
    public constructor(props: {}) {
        super(props);

        this.state = {
            headings: ['Filter', 'Filter Type', 'Eenheden'],
            contents: [
                ['Merk', 'LIJST', '$122,500.00'],
                ['Prijs', 'BEREIK', '$122,500.00'],
                ['Lengte', 'BEREIK', '$19,090.00'],
                ['Breedte', 'BEREIK', '$122,500.00'],
                ['Hoogte', 'BEREIK', '$122,500.00'],
                ['Gewicht', 'BEREIK', '$122,500.00'],
                ['Voorraad', 'LIJST', '$122,500.00'],
            ],
            hover: false,
        };
    }

    private reorder = (
        list: DemoStateType['contents'],
        startIndex: number,
        endIndex: number,
    ): DemoStateType['contents'] => {
        const [removed] = list.splice(startIndex, 1);
        list.splice(endIndex, 0, removed);

        return list;
    };

    public dragEndHandler = (result: DropResult): void => {
        if (result.destination) {
            const items = this.reorder(this.state.contents, result.source.index, result.destination.index);
            this.setState({ contents: items });
        }
    };

    public handleMouseEnter = (): void => {
        this.setState({
            hover: true,
        });
    };

    public handleMouseLeave = (): void => {
        this.setState({
            hover: false,
        });
    };

    public render(): JSX.Element {
        return (
            <Table dragEndHandler={this.dragEndHandler}>
                <TableRow draggable>
                    {this.state.headings.map((cell, i) => (
                        <TableCell key={`cell-${i}`} tableHead>
                            <Text strong>{cell}</Text>
                        </TableCell>
                    ))}
                    <TableCell width="18px" tableHead />
                </TableRow>

                {this.state.contents.map((row, i) => (
                    <TableRow draggable key={`row-${i}`} index={i}>
                        {row.map((cell, j) => (
                            <TableCell key={`cell-${j}`}>
                                {cell === 'LIJST' && (
                                    <Box>
                                        <Spacer offset={trbl(0, 6, 0, 0)}>
                                            <Icon color="#31353D" size="medium" icon="list" />
                                        </Spacer>
                                        <Text>Lijst</Text>
                                    </Box>
                                )}
                                {cell === 'BEREIK' && (
                                    <Box>
                                        <Spacer offset={trbl(0, 6, 0, 0)}>
                                            <Icon color="#31353D" size="medium" icon="sliders" />
                                        </Spacer>
                                        <Text>Bereik</Text>
                                    </Box>
                                )}
                                {cell !== 'LIJST' && cell !== 'BEREIK' && <Text>{cell}</Text>}
                            </TableCell>
                        ))}
                        <TableCell width="18px" align="right">
                            <Box justifyContent="flex-end">
                                <div onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                                    <Button title="delete" flat={true} variant="destructive">
                                        <Icon size="medium" icon="trash" />
                                    </Button>
                                </div>
                            </Box>
                        </TableCell>
                    </TableRow>
                ))}
            </Table>
        );
    }
}

storiesOf('Table', module).add('Default', () => {
    return <Demo />;
});
