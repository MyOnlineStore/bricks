import React, { ReactNode, Component } from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import Checkbox from '../Checkbox';
import { Tile } from '../..';

type RowType = { id: string; checked?: boolean; cells: Array<ReactNode> };

type DataCardPropsType = {
    rows: Array<RowType>;
    headers?: Array<ReactNode>;
};

type DataCardStateType = {
    selectionStart: number;
    toggleAction: boolean;
};

class DataCard extends Component<DataCardPropsType, DataCardStateType> {
    public constructor(props: DataCardPropsType) {
        super(props);

        this.state = {
            selectionStart: -1,
            toggleAction: true,
        };
    }

    public render(): JSX.Element {
        const { rows, headers } = this.props;

        return (
            <div>
                {rows.map(({ id, checked, cells }, rowIndex) => (
                    <Tile
                        style={{
                            boxSizing: 'border-box',
                            padding: '10px',
                            marginBottom: '20px',
                            display: 'flex',
                            flexFlow: 'column no-wrap',
                        }}
                    >
                        <table
                            style={{
                                flex: '1 1 auto',
                            }}
                        >
                            {cells.map((cellValue, index) => {
                                if (cellValue !== undefined && cellValue !== null) {
                                    return (
                                        <tr
                                            key={`cell-${index}`}
                                            style={{
                                                verticalAlign: 'top',
                                                border: '1px solid red',
                                                padding: '8px',
                                            }}
                                        >
                                            <td style={{ width: '100px' }}>
                                                {headers !== undefined ? headers[index] : '&nbsp;'}
                                            </td>
                                            <td>{cellValue}</td>
                                        </tr>
                                    );
                                }
                            })}
                        </table>
                        <div
                            style={{
                                flex: '0 0',
                                paddingLeft: '12px',
                            }}
                        >
                            <Checkbox
                                checked={checked !== undefined ? checked : false}
                                name={`row-${id}`}
                                value="Row-Checked"
                                onChange={(): void => undefined}
                            />
                        </div>
                    </Tile>
                ))}
            </div>
        );
    }
}

export default DataCard;
export { DataCardPropsType };
