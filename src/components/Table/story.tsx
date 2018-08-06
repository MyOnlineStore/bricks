import { boolean } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React, { Component, ReactNode } from 'react';
import { DropResult } from 'react-beautiful-dnd';
import Table from '.';
import Icon from '../Icon';
import Button from '../Button';
import Text from '../Text';

type StateType = {
    rows: Array<Array<ReactNode>>;
    hover: boolean;
};

type PropsType = {
    draggable: boolean;
    selectable: boolean;
};

class Demo extends Component<PropsType, StateType> {
    public constructor(props: PropsType) {
        super(props);

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

        this.state = {
            hover: false,
            rows: [['A1', 'B1', 'C1', actions], ['A2', 'B2', 'C2', actions], ['A3', 'B3', 'C3', actions]],
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
                draggable={this.props.draggable}
                rows={this.state.rows}
            />
        );
    }
}

storiesOf('Table', module).add('Default', () => {
    return <Demo selectable={boolean('selectable', false)} draggable={boolean('draggable', true)} />;
});
