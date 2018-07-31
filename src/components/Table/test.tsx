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

        mountWithTheme(
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

        const fn = (): void => {
            mountWithTheme(<Table />);
        };

        expect(fn).not.toThrow();
    });

    it('should render the correct amount of cells', () => {
        const data = [[{ text: 'Test A' }, { text: 'Test C' }], [{ text: 'Test A' }, { text: 'Test C' }]];
        const component = mountWithTheme(<Table data={data} />);
        expect(component.find(TableCell).length).toBe(4);
    });
});
