import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Table from '.';
import { mountWithTheme } from '../../utility/styled';
import Cell from './Cell';

describe('Table', () => {
    it('should call the handler on drag end', () => {
        /* tslint:disable */
        (DragDropContext as any).mockImplementationOnce(({ onDragEnd }: any) => {
            onDragEnd();

            return <div />;
        });
        /* tslint:enable */

        const dragHandler = jest.fn();

        mountWithTheme(<Table draggable rows={[['Test A1', 'Test B1']]} onDragEnd={dragHandler} />);

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
            mountWithTheme(<Table rows={[['Test A1', 'Test B1']]} />);
        };

        expect(fn).not.toThrow();
    });

    it('should render the correct amount of cells', () => {
        const component = mountWithTheme(<Table rows={[['Test A1', 'Test B1'], ['Test A2', 'Test B2']]} />);

        expect(component.find(Cell).length).toBe(4);
    });

    it('');
});
