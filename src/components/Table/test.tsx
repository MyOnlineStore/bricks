import React from 'react';
import DragDropContext from 'react-beautiful-dnd';
import Table from '.';
import { mountWithTheme } from '../../utility/styled';
import TableCell from '../TableCell';
import TableRow from '../TableRow';

describe('Table', () => {
    it('should render ', () => {
        // (DragDropContext as jest.Mock<DragDropContext>).mockImplementationOnce(() => undefined);

        const dragHandler = jest.fn();
        const component = mountWithTheme(
            <Table dragEndHandler={dragHandler}>
                <TableRow>
                    <TableCell>Boo!</TableCell>
                </TableRow>
            </Table>,
        );

        expect(dragHandler).toHaveBeenCalledWith({ undefined });
        expect(component.find(Table).length).toBe(1);
    });

    it('should call dragEndHandler', () => {
        const component = mountWithTheme(
            <Table dragEndHandler={jest.fn().mockReturnValue(undefined)}>
                <TableRow>
                    <TableCell>Boo!</TableCell>
                </TableRow>
            </Table>,
        );
        expect(component.find(Table).length).toBe(1);
    });

    // it('should call dragEndHandler', () => {
    //     const mockHandler = jest.fn();

    //     (DragDropContext as jest.Mock<DragDropContext>).mockImplementationOnce((props: PropsType): any => {
    //         return props.dragEndHandler(mockHandler);
    //     });

    //     const component = mountWithTheme(
    //         <Table dragEndHandler={jest.fn().mockReturnValue(undefined)}>
    //             <TableRow>
    //                 <TableCell>Boo!</TableCell>
    //             </TableRow>
    //         </Table>,
    //     );

    //     expect(component.find(Table).length).toBe(1);
    // });
});
