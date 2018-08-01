import { boolean } from '@storybook/addon-knobs/react';
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

type CellType = {
    text?: string;
    alignment?: 'center' | 'right' | 'left';
    id?: number;
    icon?: string;
    type?: 'actions' | 'list' | 'range';
};

type RowType = [CellType, CellType, CellType];

type DemoPropsType = {
    draggable: boolean;
    verbose?: boolean;
};

type DemoStateType = {
    headings: RowType;
    data: Array<RowType>;
    hover: boolean;
};

const headings: RowType = [{ text: 'filter' }, { text: 'Filter type' }, { text: 'Filter type' }];

const data: Array<RowType> = [
    [{ text: 'Test A', type: 'actions' }, { text: 'Test C' }, { text: 'Test D' }],
    [{ text: 'Test A' }, { text: 'Test B' }, { text: 'Test C' }],
    [{ text: 'Test A' }, { text: 'Test B' }, { text: 'Test C' }],
    [{ text: 'Test A' }, { text: 'Test B' }, { text: 'Test C' }],
    [{ text: 'Test A' }, { text: 'Test B' }, { text: 'Test C' }],
];

class Demo extends Component<DemoPropsType, DemoStateType> {
    public constructor(props: DemoPropsType) {
        super(props);

        this.state = {
            hover: false,
            headings,
            data,
        };
    }

    private reorder = (list: DemoStateType['data'], startIndex: number, endIndex: number): DemoStateType['data'] => {
        const [removed] = list.splice(startIndex, 1);
        list.splice(endIndex, 0, removed);

        return list;
    };

    public dragEndHandler = (result: DropResult): void => {
        if (result.destination) {
            const items = this.reorder(this.state.data, result.source.index, result.destination.index);
            this.setState({ data: items });
        }
    };

    public render(): JSX.Element {
        if (this.props.verbose) {
            return (
                <Table dragEndHandler={this.dragEndHandler}>
                    <TableRow>
                        {this.props.draggable && <TableCell />}
                        {this.state.headings.map((cell, i) => (
                            <TableCell key={`cell-${i}`} header>
                                <Text strong>{cell.text}</Text>
                            </TableCell>
                        ))}
                        <TableCell header />
                    </TableRow>

                    {this.state.data.map((row, i) => (
                        <TableRow draggable={this.props.draggable} key={`row-${i}`} index={i}>
                            {row.map(({ text, type }, j: number) => (
                                <TableCell key={`cell-${j}`}>
                                    {type === 'range' && (
                                        <Box>
                                            <Spacer offset={trbl(0, 6, 0, 0)}>
                                                <Icon color="#31353D" size="medium" icon="sliders" />
                                            </Spacer>
                                            <Text>Range</Text>
                                        </Box>
                                    )}
                                    <Text>{text}</Text>
                                </TableCell>
                            ))}
                            <TableCell width="18px" align="right">
                                <Box justifyContent="flex-end">
                                    <Button title="delete" compact flat={true} variant="destructive">
                                        <Icon size="medium" icon="trash" />
                                    </Button>
                                </Box>
                            </TableCell>
                        </TableRow>
                    ))}
                </Table>
            );
        }

        return (
            <Table
                dragEndHandler={this.dragEndHandler}
                draggable={boolean('draggable', true)}
                data={this.state.data}
                renderCell={({ text, type }): JSX.Element => {
                    return type === 'actions' ? (
                        <Button title="foo" variant="secondary" action={undefined} />
                    ) : (
                        <Text>{text}</Text>
                    );
                }}
            />
        );
    }
}

storiesOf('Table', module).add('Default', () => {
    return <Demo draggable={false} />;
});

storiesOf('Table', module).add('Verbose', () => {
    return <Demo verbose draggable={boolean('draggable', false)} />;
});
