import React, { Component, ReactNode } from 'react';
import Box from '../../Box';
import Checkbox from '../../Checkbox';
import { ColumnType, SortDirectionType } from '..';
import Select from '../../Select';
import Text from '../../Text';
import Icon from '../../Icon';
import { CaretUpIcon, CaretDownIcon } from '@myonlinestore/bricks-assets';

type PropsType = {
    // tslint:disable-next-line
    columns: { [key: string]: ColumnType<any, any> };
    checked: boolean | 'indeterminate';
    draggable: boolean;
    selectable: boolean;
    preSort?: {
        column: string;
        direction: SortDirectionType;
    };
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

    private getCurrentSorting = (columns: StateType['columns']): string => {
        const active = Object.keys(columns).filter(key => {
            return columns[key].sorting !== undefined && columns[key].sorting !== 'none';
        });

        if (active.length > 0) {
            const activeKey = active[0];
            const activeDirection = columns[activeKey].sorting;

            return `${activeKey}_${activeDirection}`;
        }

        if (this.props.preSort !== undefined && this.props.preSort.direction !== 'none') {
            return `${this.props.preSort.column}_${this.props.preSort.direction}`;
        }

        return '';
    };

    private applySorting = (key: string, direction: SortDirectionType): void => {
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
            columns,
        });
    };

    public handleChange = (key: string): void => {
        const direction: SortDirectionType = key.indexOf('_ascending') > 0 ? 'ascending' : 'descending';
        const actualKey = direction === 'ascending' ? key.substr(0, key.length - 10) : key.substr(0, key.length - 11);

        if (this.props.onSort !== undefined && this.state.columns[actualKey].sorting !== undefined) {
            this.applySorting(actualKey, direction);
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
                return [
                    {
                        value: `${key}_ascending`,
                        label: `${this.props.columns[key].header}`,
                        icon: <Icon size="medium" icon={<CaretUpIcon />} />,
                    },
                    {
                        value: `${key}_descending`,
                        label: `${this.props.columns[key].header}`,
                        icon: <Icon size="medium" icon={<CaretDownIcon />} />,
                    },
                ];
            });

        return (
            <Box padding={[12, 0]} alignItems="center" justifyContent="space-between" role="columnHeader">
                {headers.length > 0 && (
                    <Box>
                        <Select
                            placeholder="Sort by..."
                            value={this.getCurrentSorting(this.state.columns)}
                            emptyText=""
                            options={headers.reduce((a, b) => a.concat(b))}
                            onChange={this.handleChange}
                            renderOption={(option: { value: string; label: string; icon: ReactNode }): JSX.Element => (
                                <Text>
                                    {option.label} {option.icon}
                                </Text>
                            )}
                        />
                    </Box>
                )}
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
