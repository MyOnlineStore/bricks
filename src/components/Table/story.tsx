import { storiesOf } from '@storybook/react';
import React, { Component, Fragment } from 'react';
import Table from '.';
import Text from '../Text';
import { boolean } from '@storybook/addon-knobs';
import IconButton from '../IconButton';

type RowType = {
    id: string;
    price: number;
    name: string;
    image: string;
    actions: boolean;
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
                { id: '61651323', price: 0.8, name: 'Kiwi', image: '🥝', actions: true },
                { id: '61651320', price: 3.5, name: 'Pineapple', image: '🍍', actions: true },
                { id: '61651322', price: 2.3, name: 'Grapes', image: '🍇', actions: true },
                { id: '61651321', price: 1.2, name: 'Banana', image: '🍌', actions: true },
                { id: '61651324', price: 0.7, name: 'Lemon', image: '🍋', actions: true },
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

    private renderActions = (actions: boolean, row: RowType) => {
        if (actions) {
            return (
                <IconButton
                    icon="trash"
                    title="delete"
                    variant="destructive"
                    onClick={() =>
                        this.setState({
                            rows: this.state.rows.filter(item => item.id !== row.id),
                        })
                    }
                />
            );
        }

        return <Fragment />;
    };

    public render() {
        return (
            <Table<RowType>
                columns={{
                    image: { header: 'Image', order: 1 },
                    name: {
                        header: 'Name',
                        order: 1,
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
                        order: 2,
                        sort: this.props.sortable ? this.sortPrice : undefined,
                        render: this.props.custom ? this.renderPrice : undefined,
                    },
                    actions: {
                        order: 3,
                        align: 'end',
                        render: this.renderActions,
                    },
                }}
                rows={this.state.rows}
                onDragEnd={this.props.draggable ? (rows): void => this.setState({ rows }) : undefined}
                onSelection={this.props.selectable ? (rows): void => this.setState({ rows }) : undefined}
            />
        );
    }
}

storiesOf('Table', module).add('Default', () => (
    <Demo
        draggable={boolean('draggable', true)}
        selectable={boolean('selectable', false)}
        sortable={boolean('sortable', true)}
        custom={boolean('custom', false)}
    />
));
