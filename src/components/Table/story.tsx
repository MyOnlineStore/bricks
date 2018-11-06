import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';
import Table from '.';

type RowType = {
    id: string;
    price: number;
    name: string;
    image: string;
    test?: boolean;
};

type StateType = {
    hover: boolean;
    rows: Array<RowType>;
};

type PropsType = {
    draggable: boolean;
    selectable: boolean;
    sortable: boolean;
};

class Demo extends Component<PropsType, StateType> {
    public constructor(props: PropsType) {
        super(props);

        this.state = {
            hover: false,
            rows: [
                { id: '61651320', price: 3.5, name: 'Pineapple', image: '🍍' },
                { id: '61651321', price: 1.2, name: 'Banana', image: '🍌' },
                { id: '61651322', price: 2.3, name: 'Grapes', image: '🍇' },
                { id: '61651323', price: 0.8, name: 'Kiwi', image: '🥝' },
                { id: '61651324', price: 0.7, name: 'Lemon', image: '🍋' },
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
                columns={{
                    image: {
                        header: 'Image',
                    },
                    name: { header: 'Name' },
                    id: { header: 'Product ID' },
                    price: {
                        header: 'Price',
                        align: 'end',
                    },
                }}
                rows={this.state.rows}
                onDragEnd={this.props.draggable ? (rows): void => this.setState({ rows }) : undefined}
                onSelection={this.props.selectable ? (rows): void => this.setState({ rows }) : undefined}
            />
        );
    }
}

storiesOf('Table', module)
    .add('Default', () => {
        return <Demo draggable={false} selectable={false} sortable={false} />;
    })
    .add('Draggable', () => {
        return <Demo draggable={true} selectable={false} sortable={false} />;
    })
    .add('Selectable', () => {
        return <Demo draggable={false} selectable={true} sortable={false} />;
    })
    .add('Sortable', () => {
        return <Demo draggable={false} selectable={false} sortable={true} />;
    })
    .add('Sortable and Selectable', () => {
        return <Demo draggable={false} selectable={true} sortable={true} />;
    });
