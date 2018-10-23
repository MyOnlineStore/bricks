import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Table from '.';
import { mountWithTheme } from '../../utility/styled/testing';
import Cell from './Cell';
import Checkbox from '../Checkbox';

describe('Table', () => {
    const rows = [{ id: 'row-1', checked: true, cells: ['Test A1', 'Test B1', 'Test C1', 'Test D1'] }];

    it('should render without draghandler', () => {
        const fn = (): void => {
            mountWithTheme(<Table rows={rows} />);
        };

        expect(fn).not.toThrow();
    });

    it('should render the correct amount of cells', () => {
        const component = mountWithTheme(<Table rows={rows} />);

        expect(component.find(Cell).length).toBe(4);
    });

    it('should render without onSelection', () => {
        const fn = (): void => {
            mountWithTheme(<Table rows={rows} selectable draggable />);
        };

        expect(fn).not.toThrow();
    });

    it('should call the handler on drag end', () => {
        /* tslint:disable */
        const dragHandler = jest.fn();

        (DragDropContext as any).mockImplementationOnce(({ onDragEnd }: any) => {
            onDragEnd();

            return <div />;
        });
        /* tslint:enable */

        mountWithTheme(<Table draggable rows={rows} onDragEnd={dragHandler} />);

        expect(dragHandler).toHaveBeenCalled();
    });

    it('should select multiple checkboxes when shift-select from top to bottom', () => {
        const selectedRows: Array<Object> = [];

        const selectionMock = jest.fn(id => {
            selectedRows.push({ id });
        });

        const rows = [
            { id: 'row-1', checked: true, cells: ['Test A1', 'Test B1', 'Test C1', 'Test D1'] },
            { id: 'row-2', checked: true, cells: ['Test A2', 'Test B2', 'Test C2', 'Test D2'] },
        ];

        const component = mountWithTheme(<Table onSelection={selectionMock} selectable rows={rows} />);

        component
            .find(Checkbox)
            .first()
            .simulate('click');
        component
            .find(Checkbox)
            .last()
            .simulate('click', { shiftKey: true });

        expect(selectedRows.length).toEqual(2);
        /* tslint:disable */
        expect(global.getSelection().removeAllRanges).toHaveBeenCalled();
        /* tslint:enable */
    });

    it('should not break when checkout without onSelection', () => {
        const headers = ['Test A1', 'Test B1', 'Test C1', 'Test D1'];
        const rows = [
            { id: 'row-1', checked: false, cells: ['Test A1', 'Test B1', 'Test C1', 'Test D1'] },
            { id: 'row-2', checked: false, cells: ['Test A2', 'Test B2', 'Test C2', 'Test D2'] },
            { id: 'row-3', checked: false, cells: ['Test A3', 'Test B3', 'Test C3', 'Test D3'] },
        ];

        const headerCheckFn = (): void => {
            mountWithTheme(<Table selectable headers={headers} rows={rows} />)
                .find(Checkbox)
                .first()
                .simulate('click');
        };

        expect(headerCheckFn).not.toThrow();

        const bodyCheckFn = (): void => {
            mountWithTheme(<Table selectable rows={rows} />)
                .find(Checkbox)
                .first()
                .simulate('click');
        };

        expect(bodyCheckFn).not.toThrow();
    });

    it('should select multiple checkboxes when shift-select from bottom to top', () => {
        const selectedRows: Array<Object> = [];

        const selectionMock = jest.fn(id => {
            selectedRows.push({ id });
        });

        const rows = [
            { id: 'row-1', checked: true, cells: ['Test A1', 'Test B1', 'Test C1', 'Test D1'] },
            { id: 'row-2', checked: true, cells: ['Test A2', 'Test B2', 'Test C2', 'Test D2'] },
        ];

        const component = mountWithTheme(<Table onSelection={selectionMock} selectable rows={rows} />);

        component
            .find(Checkbox)
            .last()
            .simulate('click');
        component
            .find(Checkbox)
            .first()
            .simulate('click', { shiftKey: true });

        expect(selectedRows.length).toEqual(2);
        /* tslint:disable */
        expect(global.getSelection().removeAllRanges).toHaveBeenCalled();
        /* tslint:enable */
    });
});
