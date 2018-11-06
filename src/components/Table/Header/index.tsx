import React, { SFC } from 'react';
import StyledHeader from './style';
import Text from '../../Text';
import Box from '../../Box';
import Checkbox from '../../Checkbox';
import { ColumnType } from '..';

type PropsType = {
    // tslint:disable-next-line
    columns: Array<ColumnType<any>>;
    checked: boolean | 'indeterminate';
    draggable: boolean;
    selectable: boolean;
    onCheck(checked: boolean): void;
};

const Header: SFC<PropsType> = (props): JSX.Element => (
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
            {props.columns.map(
                (column): JSX.Element => {
                    const alignment = column.align ? column.align : 'start';

                    return (
                        <StyledHeader align={alignment} key={column.key as string}>
                            <Box
                                justifyContent={
                                    alignment !== 'center' ? (`flex-${alignment}` as 'flex-start') : alignment
                                }
                            >
                                {(typeof column.header === 'string' && <Text strong>{column.header}</Text>) ||
                                    column.header}
                            </Box>
                        </StyledHeader>
                    );
                },
            )}
        </tr>
    </thead>
);

export default Header;
export { PropsType };
