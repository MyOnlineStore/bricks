import React, { SFC } from 'react';
import StyledHeader from './style';
import Text from '../../Text';
import Box from '../../Box';
import Checkbox from '../../Checkbox';
import { ColumnType } from '..';
import Icon from '../../Icon';

type SortDirectionType = 'ascending' | 'descending' | 'none';

type PropsType = {
    // tslint:disable-next-line
    columns: { [key: string]: ColumnType<any> };
    checked: boolean | 'indeterminate';
    draggable: boolean;
    selectable: boolean;
    sorting?: SortDirectionType;
    onCheck(checked: boolean): void;
    onSort?(direction: SortDirectionType): void;
};

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

const Headers: SFC<PropsType> = (props): JSX.Element => {
    const cycleSorting = (): void => {
        if (props.onSort !== undefined && props.sorting !== undefined) {
            props.onSort(SortingSteps[props.sorting]);
        }
    };

    return (
        <thead>
            <tr>
                {props.draggable && <StyledHeader align="start" />}
                {props.selectable && (
                    <StyledHeader align="start">
                        <Checkbox
                            checked={props.checked}
                            name=""
                            value=""
                            onChange={({ checked }): void => props.onCheck(checked as boolean)}
                        />
                    </StyledHeader>
                )}
                {Object.keys(props.columns)
                    .sort((a, b) => {
                        if (props.columns[a].order === undefined || props.columns[b].order === undefined) {
                            return -1;
                        }

                        return (props.columns[a].order as number) - (props.columns[b].order as number);
                    })
                    .map(
                        (key): JSX.Element => {
                            const column = props.columns[key];
                            const alignment = column.align ? column.align : 'start';

                            return (
                                <StyledHeader align={alignment} key={key} onClick={cycleSorting}>
                                    <Box
                                        alignItems="center"
                                        justifyContent={
                                            alignment !== 'center' ? (`flex-${alignment}` as 'flex-start') : alignment
                                        }
                                    >
                                        {(typeof column.header === 'string' && <Text strong>{column.header}</Text>) ||
                                            column.header}
                                        {props.sorting !== undefined && (
                                            <Icon icon={SortingIcons[props.sorting]} size="medium" />
                                        )}
                                    </Box>
                                </StyledHeader>
                            );
                        },
                    )}
            </tr>
        </thead>
    );
};

export default Headers;
export { PropsType };
