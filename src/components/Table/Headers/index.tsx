import React, { Component } from 'react';
import StyledHeader from './style';
import Text from '../../Text';
import Box from '../../Box';
import Checkbox from '../../Checkbox';
import { ColumnType, SortDirectionType } from '..';
import Icon from '../../Icon';

enum SortingIcons {
    'none' = 'caretVertical',
    'ascending' = 'caretDown',
    'descending' = 'caretUp',
}

enum SortingSteps {
    'none' = 'ascending',
    'ascending' = 'descending',
    'descending' = 'none',
}

type PropsType = {
    // tslint:disable-next-line
    columns: { [key: string]: ColumnType<any, any> };
    checked: boolean | 'indeterminate';
    draggable: boolean;
    selectable: boolean;
    onCheck(checked: boolean): void;
    onSort?(column: string, direction: SortDirectionType): void;
};

type ColumnStateType = {
    sorting?: SortDirectionType;
};

type StateType = {
    columns: {
        [key: string]: ColumnStateType;
    };
};

const mapPropsToState = (props: PropsType, state?: StateType): StateType => {
    const columns: StateType['columns'] = {};

    const mapColumn = (column: string) => {
        if (props.columns[column].sort === undefined) return undefined;

        return state !== undefined && state.columns[column].sorting !== undefined
            ? state.columns[column].sorting
            : 'none';
    };

    Object.keys(props.columns).forEach(column => {
        columns[column] = { sorting: mapColumn(column) };
    });

    return {
        ...state,
        columns,
    };
};

class Headers extends Component<PropsType, StateType> {
    public constructor(props: PropsType) {
        super(props);

        this.state = mapPropsToState(props, undefined);
    }

    private cycleSorting = (key: string): void => {
        const nextStep = SortingSteps[this.state.columns[key].sorting as SortDirectionType];
        const columns: StateType['columns'] = {};

        (this.props.onSort as Required<PropsType>['onSort'])(key, nextStep);

        Object.keys(this.state.columns).forEach(column => {
            const currentColumn = this.state.columns[column];

            const sorting = (() => {
                switch (currentColumn.sorting) {
                    case 'ascending':
                        return 'none';
                    case 'descending':
                        return 'none';
                    default:
                        return currentColumn.sorting;
                }
            })();

            columns[column] = {
                ...currentColumn,
                sorting: column === key ? nextStep : sorting,
            };
        });

        this.setState({
            columns,
        });
    };

    private renderHeader = (key: string): JSX.Element => {
        const column = this.props.columns[key];
        const alignment = column.align ? column.align : 'start';

        return (
            <StyledHeader
                align={alignment}
                key={key}
                onClick={
                    this.props.onSort !== undefined && this.state.columns[key].sorting !== undefined
                        ? () => this.cycleSorting(key)
                        : undefined
                }
            >
                <Box
                    alignItems="center"
                    justifyContent={alignment !== 'center' ? (`flex-${alignment}` as 'flex-start') : alignment}
                >
                    {(typeof column.header === 'string' && <Text strong>{column.header}</Text>) || column.header}
                    {this.state.columns[key].sorting !== undefined && (
                        <Text severity={this.state.columns[key].sorting === 'none' ? 'info' : undefined}>
                            <Icon
                                icon={SortingIcons[this.state.columns[key].sorting as SortDirectionType]}
                                size="medium"
                            />
                        </Text>
                    )}
                </Box>
            </StyledHeader>
        );
    };

    public componentDidUpdate(prevProps: PropsType, prevState: StateType) {
        const newState = mapPropsToState(this.props, this.state);

        if (JSON.stringify(newState) !== JSON.stringify(mapPropsToState(prevProps, prevState))) {
            this.setState(mapPropsToState(this.props, this.state));
        }
    }

    public render() {
        return (
            <thead>
                <tr>
                    {this.props.draggable && <StyledHeader align="start" />}
                    {this.props.selectable && (
                        <StyledHeader align="start">
                            <Checkbox
                                checked={this.props.checked}
                                name=""
                                value=""
                                onChange={({ checked }): void => this.props.onCheck(checked as boolean)}
                            />
                        </StyledHeader>
                    )}
                    {Object.keys(this.props.columns)
                        .sort((a, b) => {
                            if (
                                this.props.columns[a].order === undefined ||
                                this.props.columns[b].order === undefined
                            ) {
                                return -1;
                            }

                            return (this.props.columns[a].order as number) - (this.props.columns[b].order as number);
                        })
                        .map(this.renderHeader)}
                </tr>
            </thead>
        );
    }
}

export default Headers;
export { PropsType };
