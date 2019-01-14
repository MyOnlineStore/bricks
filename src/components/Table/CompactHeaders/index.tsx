import React, { Component } from 'react';
import Box from '../../Box';
import Checkbox from '../../Checkbox';
import { ColumnType, SortDirectionType } from '..';
import Select from '../../Select';

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
    currentSorting: string;
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

    const getCurrentSorting = (columns: StateType['columns']) => {
        const active = Object.keys(columns).filter(key => {
            return columns[key].sorting !== undefined && columns[key].sorting !== 'none';
        });

        return active[0] === undefined ? '' : active[0];
    };

    Object.keys(props.columns).forEach(column => {
        columns[column] = { sorting: mapColumn(column) };
    });

    return {
        ...state,
        columns,
        currentSorting: getCurrentSorting(columns),
    };
};

class Headers extends Component<PropsType, StateType> {
    public constructor(props: PropsType) {
        super(props);

        this.state = mapPropsToState(props, undefined);
    }

    private cycleSorting = (key: string, direction: SortDirectionType): void => {
        const columns: StateType['columns'] = {};

        (this.props.onSort as Required<PropsType>['onSort'])(key, direction);

        Object.keys(this.state.columns).forEach(column => {
            const currentColumn = this.state.columns[column];

            columns[column] = {
                ...currentColumn,
                sorting: column === key ? direction : 'none',
            };
        });

        this.setState({
            currentSorting: key,
            columns,
        });
    };

    public handleChange = (key: string): void => {
        if (this.props.onSort !== undefined && this.state.columns[key].sorting !== undefined) {
            this.cycleSorting(key, 'ascending');
        }
    };

    public componentDidUpdate(prevProps: PropsType, prevState: StateType) {
        const newState = mapPropsToState(this.props, this.state);

        if (JSON.stringify(newState) !== JSON.stringify(mapPropsToState(prevProps, prevState))) {
            this.setState(mapPropsToState(this.props, this.state));
        }
    }

    public render() {
        const headers = Object.keys(this.props.columns)
            .sort((a, b) => {
                if (this.props.columns[a].order === undefined || this.props.columns[b].order === undefined) {
                    return -1;
                }

                return (this.props.columns[a].order as number) - (this.props.columns[b].order as number);
            })
            .filter((key: string) => {
                return this.props.columns[key].header !== undefined && this.state.columns[key].sorting !== undefined;
            })
            .map((key: string) => {
                return {
                    value: key,
                    label: this.props.columns[key].header,
                };
            });

        return (
            <Box padding={[12, 0]} alignItems="center" justifyContent="space-between">
                <Box>
                    <Select
                        placeholder="Sort by..."
                        value={this.state.currentSorting}
                        emptyText=""
                        options={headers}
                        onChange={this.handleChange}
                    />
                </Box>
                {this.props.selectable && (
                    <Box padding={[0, 18]}>
                        <Checkbox
                            checked={this.props.checked}
                            name=""
                            value=""
                            onChange={({ checked }): void => this.props.onCheck(checked as boolean)}
                        />
                    </Box>
                )}
            </Box>
        );
    }
}

export default Headers;
export { PropsType };
