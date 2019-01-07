import { storiesOf } from '@storybook/react';
import React, { Component, ReactNode } from 'react';
import DataCard from '.';
import Text from '../Text';
import { boolean } from '@storybook/addon-knobs';
import Button from '../Button';
import Icon from '../Icon';
import StyledBadge from '../Badge';

type RowType = {
    selected?: boolean;
    id: string;
    price: number;
    name: string;
    image: string | ReactNode;
    badge?: string;
    extra?: string;
    buttons?: Array<ReactNode>;
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
                {
                    selected: true,
                    id: '61651323',
                    price: 0.8,
                    name: 'Kiwi',
                    image: <img src="http://www.stevensegallery.com/100/100" height="80" />,
                    badge: 'special offer',
                    extra: 'value with no label/header',
                    buttons: this.renderActions(1),
                },

                {
                    id: '61651320',
                    price: 3.5,
                    name: 'Pineapple',
                    image: <img src="http://www.stevensegallery.com/105/105" height="80" />,
                    badge: 'halp?',

                    buttons: this.renderActions(2),
                },
                {
                    selected: true,
                    id: '61651322',
                    price: 2.45,
                    name: 'Grapes',
                    image: <img src="http://www.stevensegallery.com/102/102" height="80" />,
                },
                {
                    id: '61651321',
                    price: 1.2,
                    name: 'Banana',
                    image: <img src="http://www.stevensegallery.com/103/103" height="80" />,
                    buttons: this.renderActions(4),
                },
                {
                    id: '61651324',
                    price: 0.7,
                    name: 'Lemon',
                    image: <img src="http://www.stevensegallery.com/104/104" height="80" />,
                    buttons: this.renderActions(5),
                },
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
        if (price < 1) {
            return (
                <Text strong severity="success" variant="large">
                    € {price}
                </Text>
            );
        }

        return (
            <Text strong severity="error" variant="large">
                € {price}
            </Text>
        );
    };

    private renderBadge = (badge: string) => {
        return <StyledBadge severity="info">{badge}</StyledBadge>;
    };

    private renderImage = (image: string | ReactNode) => {
        return <>{image}</>;
    };

    private renderActions = (id: number) => {
        return [
            // tslint:disable:jsx-wrap-multiline
            <Button.Flat key="1" title="edit" variant="primary" onClick={() => alert(`Edit id: ${id}`)}>
                <Icon size="medium" icon="gear" />
            </Button.Flat>,
            <Button.Flat key="2" title="delete" variant="destructive" onClick={() => alert(`Delete id: ${id}`)}>
                <Icon size="medium" icon="trash" />
            </Button.Flat>,
            // tslint:enable:jsx-wrap-multiline
        ];
    };

    public render() {
        return (
            <DataCard<RowType>
                columns={{
                    image: {
                        header: 'Image',
                        order: 1,
                        render: this.renderImage,
                    },
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
                    badge: {
                        header: 'Sticker',
                        order: 3,
                        render: this.renderBadge,
                    },
                    extra: {
                        header: '',
                        order: 4,
                    },
                    buttons: {
                        order: 5,
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

storiesOf('DataCard', module).add('Default', () => (
    <Demo
        draggable={boolean('draggable', true)}
        selectable={boolean('selectable', true)}
        sortable={boolean('sortable', true)}
        custom={boolean('custom', true)}
    />
));
