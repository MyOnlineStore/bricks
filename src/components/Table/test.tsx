import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Table from '.';
import { mountWithTheme } from '../../utility/styled';
import TableCell from '../TableCell';
import TableRow from '../TableRow';

describe('Table', () => {
    it('Calls the handler on drag end', () => {
        /* tslint:disable */
        (DragDropContext as any).mockImplementationOnce(({ onDragEnd }: any) => {
            onDragEnd();
            return <div />;
        });
        /* tslint:enable */

        const dragHandler = jest.fn();

        const component = mountWithTheme(
            <Table dragEndHandler={dragHandler}>
                <TableRow>
                    <TableCell>Boo!</TableCell>
                </TableRow>
            </Table>,
        );

        expect(dragHandler).toHaveBeenCalled();
    });

    it('should render without draghandler', () => {
        /* tslint:disable */
        (DragDropContext as any).mockImplementationOnce(({ onDragEnd }: any) => {
            onDragEnd();
            return <div />;
        });
        /* tslint:enable */

        const dragHandler = jest.fn();

        const component = mountWithTheme(<Table />);

        expect(component.find(Table).length).toBe(1);
        expect(dragHandler).not.toHaveBeenCalledWith(undefined);
    });

    it('should render text cell', () => {
        const data = [[{ text: 'Test A' }, { text: 'Test C' }], [{ text: 'Test A' }, { text: 'Test C' }]];
        const component = mountWithTheme(<Table dragEndHandler={undefined} data={data} />);

        expect(component.find(TableCell).length).toBe(4);
    });
});
