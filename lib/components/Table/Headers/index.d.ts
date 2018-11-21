import { Component } from 'react';
import { ColumnType, SortDirectionType } from '..';
declare type PropsType = {
    columns: {
        [key: string]: ColumnType<any, any>;
    };
    checked: boolean | 'indeterminate';
    draggable: boolean;
    selectable: boolean;
    onCheck(checked: boolean): void;
    onSort?(column: string, direction: SortDirectionType): void;
};
declare type ColumnStateType = {
    sorting?: SortDirectionType;
};
declare type StateType = {
    columns: {
        [key: string]: ColumnStateType;
    };
};
declare class Headers extends Component<PropsType, StateType> {
    constructor(props: PropsType);
    private cycleSorting;
    private renderHeader;
    componentDidUpdate(prevProps: PropsType, prevState: StateType): void;
    render(): JSX.Element;
}
export default Headers;
export { PropsType };
