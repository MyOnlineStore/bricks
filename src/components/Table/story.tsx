import { storiesOf } from '@storybook/react';
import React, { Component, Fragment, ReactNode } from 'react';
import Table from '.';
import Text from '../Text';
import IconButton from '../IconButton';
import { boolean } from '@storybook/addon-knobs';
import { MediumIcons } from '../Icon';
import StyledBadge from '../Badge';
import SeverityType from '../../types/_SeverityType';
import BreakpointProvider from '../BreakpointProvider';
import { isString } from 'util';

type RowType = {
    selected?: boolean;
    id: string;
    price: number;
    name: string;
    image: string | ReactNode;
    badge?: string;
    extra?: string;
    buttons?: Array<ReactNode>;
    statusIcons?: Array<StatusIconType>;
    extraData?: Array<{ label: string; price: number }>;
};

type StatusIconType = {
    label: string;
    severity?: SeverityType;
    icon: keyof typeof MediumIcons;
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
    as?: 'datacard' | 'table';
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
                    name: 'Kiwi',
                    image: <img src="https://via.placeholder.com/50" width="50" />,
                    badge: 'special offer',
                    buttons: this.renderActions(1),
                },
                {
                    id: '61651320',
                    price: -3.5,
                    name: 'Pineapple',
                    image: <img src="https://via.placeholder.com/50" width="50" />,
                    badge: 'new!',
                    buttons: this.renderActions(2),
                },
                {
                    selected: true,
                    id: '61651322',
                    price: 2.45,
                    name: 'Grapes',
                    image: <img src="https://via.placeholder.com/50" width="50" />,
                },
                {
                    selected: true,
                    id: '61651321',
                    price: 1.2,
                    name: 'Banana',
                    image: <img src="https://via.placeholder.com/50" width="50" />,
                    buttons: this.renderActions(4),
                },
                {
                    id: '61651324',
                    price: -0.7,
                    name: 'Lemon',
                    image: <img src="https://via.placeholder.com/50" width="50" />,
                    buttons: this.renderActions(5),
                },
            ],
        };
    }

    private sortText = (a: string, b: string) => {
        if (!isString(a) || !isString(b)) {
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
        return <Text severity={price > 0 ? 'success' : 'error'}>€ {price.toFixed(2)}</Text>;
    };

    private renderBadge = (badge: string) => {
        if (badge) {
            return <StyledBadge severity="info">{badge}</StyledBadge>;
        }

        return <></>;
    };

    private renderImage = (image: string | ReactNode) => {
        return <>{image}</>;
    };

    private renderActions = (id: number) => {
        return [
            <IconButton icon="gear" title="edit" variant="primary" onClick={() => alert(`Edit id: ${id}`)} />,
            <IconButton icon="trash" title="delete" variant="destructive" onClick={() => alert(`Edit id: ${id}`)} />,
        ];
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
                    name: {
                        header: 'Product',
                        order: 2,
                        align: 'start',
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
                        width: '80px',
                        align: 'center',
                        order: 4,
                        sort: this.props.sortable ? this.sortText : undefined,
                        render: this.props.custom ? this.renderBadge : undefined,
                    },
                    price: {
                        header: 'Price',
                        width: '80px',
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
        <BreakpointProvider breakpoints={{ small: 0, medium: 300, large: 600 }}>
            {(breakpoint): JSX.Element => {
                return (
                    <Demo
                        draggable={boolean('draggable', true)}
                        selectable={boolean('selectable', true)}
                        sortable={boolean('sortable', true)}
                        custom={boolean('custom', true)}
                        as={breakpoint !== 'large' ? 'datacard' : 'table'}
                    />
                );
            }}
        </BreakpointProvider>
    ));
