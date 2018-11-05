import { boolean } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';
import { DropResult } from 'react-beautiful-dnd';
import Table from '.';
import Icon from '../Icon';
import Button from '../Button';

type RowType = { id: string; price: number; name: string; image: string };

type StateType = {
    hover: boolean;
    rows: Array<RowType>;
};

type PropsType = {
    draggable: boolean;
    selectable: boolean;
};

const actions = (
    <>
        <Button.Flat title="edit" variant="primary">
            <Icon icon="pencil" size="medium" />
        </Button.Flat>
        <Button.Flat title="delete" variant="destructive">
            <Icon icon="trash" size="medium" />
        </Button.Flat>
    </>
);

class Demo extends Component<PropsType, StateType> {
    public constructor(props: PropsType) {
        super(props);

        this.state = {
            hover: false,
            rows: [
                { id: '61651320', price: 19.12, name: 'foo0', image: 'imageurl' },
                { id: '61651321', price: 19.2, name: 'foo1', image: 'imageurl' },
                { id: '61651322', price: 21.12, name: 'foo2', image: 'imageurl' },
                { id: '61651323', price: 22.12, name: 'foo3', image: 'imageurl' },
            ],
        };
    }

    private reorder = (list: StateType['rows'], startIndex: number, endIndex: number): StateType['rows'] => {
        const [removed] = list.splice(startIndex, 1);
        list.splice(endIndex, 0, removed);

        return list;
    };

    public render(): JSX.Element {
        return (
            <Table<RowType>
                columns={[
                    { key: 'id', header: 'Product ID' },
                    { key: 'name', header: 'name' },
                    { key: 'price', header: 'Price' },
                ]}
                rows={this.state.rows}
                onDragEnd={(rows): void => this.setState({ rows })}
                onSelection={(rows): void => this.setState({ rows })}
            />
        );
    }
}

storiesOf('Table', module).add('Default', () => {
    return <Demo selectable={boolean('selectable', false)} draggable={boolean('draggable', true)} />;
});
