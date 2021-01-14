import { storiesOf } from '@storybook/react';
import React, { Component, useState } from 'react';
import Table from '.';
import Text from '../Text';
import IconButton from '../IconButton';
import { boolean } from '@storybook/addon-knobs';
import StyledBadge from '../Badge';
import { TrashIcon, GearIcon } from '@myonlinestore/bricks-assets';
import Measure from 'react-measure';
import Toggle from '../Toggle';

type RowType = {
    selected?: boolean;
    disabled?: boolean;
    error?: boolean;
    id: string;
    price: number;
    name: string;
    image: string;
    badge?: string;
    buttons?: string;
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
    as?: 'card' | 'table';
};

class Demo extends Component<PropsType, StateType> {
    public constructor(props: PropsType) {
        super(props);

        this.state = {
            hover: false,
            rows: [
                {
                    id: '61651323',
                    price: 0.8,
                    name: 'Strawberry',
                    image: 'https://picsum.photos/60/60?image=1080',
                    badge: 'special offer',
                },
                {
                    id: '61651320',
                    price: -3.5,
                    name: 'Pineapple',
                    image: 'https://picsum.photos/60/60?image=824',
                    badge: 'new!',
                },
                {
                    selected: true,
                    id: '61651322',
                    price: 2.45,
                    name: 'Coffee',
                    image: 'https://picsum.photos/60/60?image=766',
                },
                {
                    selected: true,
                    id: '61651321',
                    price: 1.2,
                    name: 'Flower',
                    image: 'https://picsum.photos/60/60?image=696',
                    error: true,
                },
                {
                    id: '61651324',
                    price: -0.7,
                    name: 'Grapes',
                    image: 'https://picsum.photos/60/60?image=674',
                    disabled: true,
                    selected: false,
                },
            ],
        };
    }

    private sortText = (a: string, b: string) => {
        // tslint:disable-next-line:strict-type-predicates
        if (typeof a !== 'string' || typeof b !== 'string') {
            return 0;
        }

        const valueA = a.toUpperCase();
        const valueB = b.toUpperCase();

        if (valueA < valueB) return -1;
        if (valueA > valueB) return 1;

        return 0;
    };

    private sortPrice = (a: number, b: number) => a - b;

    private renderPrice = (price: number) => {
        return <Text variant={price > 0 ? 'success' : 'error'}>€ {price.toFixed(2)}</Text>;
    };

    private renderBadge = (badge: string) => {
        if (badge) {
            return <StyledBadge variant="info">{badge}</StyledBadge>;
        }

        return <></>;
    };

    private renderImage = (image: string) => {
        return <img src={image} width={60} height={60} />;
    };

    private renderActions = (value: string, row: RowType) => {
        return (
            <>
                {row.id !== '61651322' && (
                    <IconButton
                        icon={<GearIcon />}
                        title={`Edit ${value}`}
                        variant="primary"
                        onClick={() => alert(`Edit id: ${row.id}`)}
                    />
                )}
                <IconButton
                    icon={<TrashIcon />}
                    title={`Delete ${value}`}
                    variant="destructive"
                    onClick={() => alert(`Edit id: ${row.id}`)}
                />
            </>
        );
    };

    public render() {
        return (
            <Table<RowType>
                columns={{
                    image: {
                        header: 'Image',
                        order: 1,
                        render: this.renderImage,
                        width: '50px',
                    },
                    buttons: {
                        order: 6,
                        render: this.renderActions,
                    },
                    name: {
                        header: 'Product',
                        order: 2,
                        sort: this.props.sortable ? this.sortText : undefined,
                    },
                    id: {
                        header: 'ID',
                        order: 3,
                        width: '100px',
                        sort: this.props.sortable ? this.sortText : undefined,
                    },
                    badge: {
                        header: 'Sticker',
                        width: '90px',
                        align: 'center',
                        order: 4,
                        sort: this.props.sortable ? this.sortText : undefined,
                        render: this.props.custom ? this.renderBadge : undefined,
                    },
                    price: {
                        header: 'Price',
                        width: '90px',
                        align: 'end',
                        order: 5,
                        sort: this.props.sortable ? this.sortPrice : undefined,
                        render: this.props.custom ? this.renderPrice : undefined,
                    },
                }}
                rows={this.state.rows}
                onDragEnd={this.props.draggable ? (rows): void => this.setState({ rows }) : undefined}
                onSelection={this.props.selectable ? (rows): void => this.setState({ rows }) : undefined}
                as={this.props.as}
            />
        );
    }
}

storiesOf('Table', module)
    .add('Default', () => (
        <Demo
            draggable={boolean('draggable', true)}
            selectable={boolean('selectable', true)}
            sortable={boolean('sortable', true)}
            custom={boolean('custom', true)}
        />
    ))
    .add('Responsive', () => (
        <Measure bounds>
            {({ measureRef, contentRect }) => {
                return (
                    <div ref={measureRef}>
                        <Demo
                            draggable={boolean('draggable', true)}
                            selectable={boolean('selectable', true)}
                            sortable={boolean('sortable', true)}
                            custom={boolean('custom', true)}
                            as={contentRect.bounds && contentRect.bounds.width < 600 ? 'card' : 'table'}
                        />
                    </div>
                );
            }}
        </Measure>
    ))
    .add('Empty', () => {
        const [isDraggable, setDraggable] = useState(false);
        const [showRow, setRow] = useState(false);

        return (
            <>
                <Toggle
                    label="Draggable"
                    value=""
                    name="draggable-toggle"
                    checked={isDraggable}
                    onChange={({ checked }) => {
                        setDraggable(checked);
                    }}
                />
                <Toggle
                    label="Show row"
                    value=""
                    name="row-toggle"
                    checked={showRow}
                    onChange={({ checked }) => {
                        setRow(checked);
                    }}
                />
                <br />
                <Table<{ id: string; name: string; price: string }>
                    onDragEnd={
                        isDraggable
                            ? () => {
                                  alert('dragged');
                              }
                            : undefined
                    }
                    columns={{
                        name: {
                            order: 0,
                            header: 'Name',
                        },
                        price: {
                            order: 1,
                            header: 'Price',
                        },
                    }}
                    rows={showRow ? [{ id: '0', name: 'foo', price: '100' }] : []}
                />
            </>
        );
    });
