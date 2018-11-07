import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';
import Table from '.';
import Text from '../Text';

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
    custom: boolean;
};

class Demo extends Component<PropsType, StateType> {
    public constructor(props: PropsType) {
        super(props);

        this.state = {
            hover: false,
            rows: [
                { id: '61651323', price: 0.8, name: 'Kiwi', image: '🥝' },
                { id: '61651320', price: 3.5, name: 'Pineapple', image: '🍍' },
                { id: '61651322', price: 2.3, name: 'Grapes', image: '🍇' },
                { id: '61651321', price: 1.2, name: 'Banana', image: '🍌' },
                { id: '61651324', price: 0.7, name: 'Lemon', image: '🍋' },
            ],
        };
    }

    private sortText = (a: string, b: string) => {
        const valueA = a.toUpperCase();
        const valueB = b.toUpperCase();

        if (valueA < valueB) return -1;
        if (valueA > valueB) return 1;

        return 0;
    };

    private sortPrice = (a: number, b: number) => a - b;

    private renderPrice = (price: number) => {
        if (price < 1)
            return (
                <Text strong severity="success">
                    {price}
                </Text>
            );

        return (
            <Text strong severity="error">
                {price}
            </Text>
        );
    };

    public render() {
        return (
            <Table<RowType>
                columns={{
                    image: { header: 'Image', order: 1 },
                    name: {
                        header: 'Name',
                        order: 2,
                        align: 'start',
                        sort: this.props.sortable ? this.sortText : undefined,
                    },
                    id: {
                        header: 'Product ID',
                        order: 0,
                        sort: this.props.sortable ? this.sortText : undefined,
                    },
                    price: {
                        header: 'Price',
                        align: 'end',
                        order: 3,
                        sort: this.props.sortable ? this.sortPrice : undefined,
                        render: this.props.custom ? this.renderPrice : undefined,
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
        return <Demo draggable={false} selectable={false} sortable={false} custom={false} />;
    })
    .add('Draggable', () => {
        return <Demo draggable={true} selectable={false} sortable={false} custom={false} />;
    })
    .add('Selectable', () => {
        return <Demo draggable={false} selectable={true} sortable={false} custom={false} />;
    })
    .add('Sortable', () => {
        return <Demo draggable={false} selectable={false} sortable={true} custom={false} />;
    })
    .add('Sortable and Selectable', () => {
        return <Demo draggable={false} selectable={true} sortable={true} custom={false} />;
    })
    .add('Custom rendered cells', () => {
        return <Demo draggable={false} selectable={false} sortable={false} custom={true} />;
    });
