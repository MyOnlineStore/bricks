import { boolean } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React, { Component, ReactNode } from 'react';
import { DropResult } from 'react-beautiful-dnd';
import Table from '.';
import Icon from '../Icon';
import Button from '../Button';
import Text from '../Text';

type StateType = {
    hover: boolean;
    rows: Array<{ id: string; cells: Array<ReactNode> }>;
};

type PropsType = {
    draggable: boolean;
    selectable: boolean;
};

const actions = (
    <>
        <Button title="edit" flat compact variant="secondary">
            <Icon icon="pencil" size="medium" />
        </Button>
        <Button title="delete" flat compact variant="destructive">
            <Icon icon="trash" size="medium" />
        </Button>
    </>
);

class Demo extends Component<PropsType, StateType> {
    public constructor(props: PropsType) {
        super(props);

        this.state = {
            hover: false,
            rows: [
                {
                    id: 'row-1',
                    cells: [
                        'A1',
                        'B1',
                        'C1',
                        actions,
                    ],
                },
                { id: 'row-2', cells: ['A2', 'B2', 'C2', actions] },
                { id: 'row-3', cells: ['A3', 'B3', 'C3', actions] },
                { id: 'row-4', cells: ['A4', 'B4', 'C4', actions] },
                { id: 'row-5', cells: ['A5', 'B5', 'C5', actions] },
                { id: 'row-6', cells: ['A6', 'B6', 'C6', actions] },
                { id: 'row-7', cells: ['A7', 'B7', 'C7', actions] },
                { id: 'row-8', cells: ['A8', 'B8', 'C8', actions] },
                { id: 'row-9', cells: ['A9', 'B9', 'C9', actions] },
                { id: 'row-10', cells: ['A10', 'B10', 'C10', actions] },
            ],
        };
    }

    private reorder = (list: StateType['rows'], startIndex: number, endIndex: number): StateType['rows'] => {
        const [removed] = list.splice(startIndex, 1);
        list.splice(endIndex, 0, removed);

        return list;
    };

    public onDragEnd = (result: DropResult): void => {
        if (result.destination) {
            const items = this.reorder(this.state.rows, result.source.index, result.destination.index);
            this.setState({ rows: items });
        }
    };

    public render(): JSX.Element {
        return (
            <Table
                alignments={['left', 'left', 'center', 'right']}
                headers={[
                    <Text key="header-a" strong>
                        <Icon icon="heartO" size="medium" />
                        &nbsp;&nbsp;Custom Header A
                    </Text>,
                    'Header B',
                    'Header C',
                    'Actions',
                ]}
                onDragEnd={this.onDragEnd}
                selectable={this.props.selectable}
                draggable={this.props.draggable}
                rows={this.state.rows}
            />
        );
    }
}

storiesOf('Table', module).add('Default', () => {
    return <Demo selectable={boolean('selectable', false)} draggable={boolean('draggable', true)} />;
});
