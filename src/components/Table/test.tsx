import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Table from '.';
import { mountWithTheme } from '../../utility/styled/testing';
import Cell from './Cell';
import { SubscriptionConsumer, SubscriptionProvider } from '../../utility/SubscriptionContext';
import Checkbox from '../Checkbox';

jest.mock('../../utility/SubscriptionContext', () => ({
    SubscriptionProvider: jest.fn(props => props.children),
    SubscriptionConsumer: jest.fn(props => {
        return props.children({
            items: [],
            update: (): void => undefined,
            remove: (): void => undefined,
            getPayload: (): void => undefined,
        });
    }),
}));

describe('Table', () => {
    const rows = [{ id: 'row-1', cells: ['Test A1', 'Test B1', 'Test C1', 'Test D1'] }];

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

    it('should render without draghandler', () => {
        /* tslint:disable */
        (DragDropContext as any).mockImplementationOnce(({ onDragEnd }: any) => {
            onDragEnd();

            return <div />;
        });
        /* tslint:enable */

        const fn = (): void => {
            mountWithTheme(<Table rows={rows} />);
        };

        expect(fn).not.toThrow();
    });

    it('should render the correct amount of cells', () => {
        const component = mountWithTheme(<Table rows={rows} />);

        expect(component.find(Cell).length).toBe(4);
    });

    it('should handle a selection', () => {
        /* tslint:disable */
        const updateMock = jest.fn();
        const getPayloadMock = jest.fn();

        (SubscriptionProvider as any).mockImplementationOnce((props: any) => {
            props.onUpdate([{ id: 'row-1', payload: true }, { id: 'row-2', payload: false }]);

            return <div />;
        });
        /* tslint:enable */

        let selection: Array<string> = [];

        mountWithTheme(
            <Table
                selectable
                onSelection={(ids): void => {
                    selection = ids;
                }}
                rows={rows}
            />,
        );

        expect(selection).toEqual(['row-1']);
    });

    it('should not break when no onSelection is provided', () => {
        const fn = (): void => {
            mountWithTheme(<Table selectable rows={rows} />);
        };

        expect(fn).not.toThrow();
    });

    it('should select multiple checkboxes when shift-select from top to bottom', () => {
        const selectedRows: Array<Object> = [];

        const updateMock = jest.fn((id, payload) => {
            if (payload) {
                selectedRows.push({ id, payload });
            }
        });

        const rows = [
            { id: 'row-1', cells: ['Test A1', 'Test B1', 'Test C1', 'Test D1'] },
            { id: 'row-2', cells: ['Test A2', 'Test B2', 'Test C2', 'Test D2'] },
            { id: 'row-3', cells: ['Test A3', 'Test B3', 'Test C3', 'Test D3'] },
            { id: 'row-4', cells: ['Test A4', 'Test B4', 'Test C4', 'Test D4'] },
        ];

        /* tslint:disable */
        (SubscriptionConsumer as any).mockImplementation((props: any) => {
            return props.children({
                items: [],
                update: updateMock,
                remove: (): void => undefined,
                getPayload: (): void => undefined,
            });
        });
        /* tslint:enable */

        const mount = mountWithTheme(<Table selectable rows={rows} />);

        mount
            .find(Checkbox)
            .first()
            .simulate('click');
        mount
            .find(Checkbox)
            .last()
            .simulate('click', { shiftKey: true });

        expect(selectedRows.length).toEqual(4);

        /* tslint:disable */
        expect(global.getSelection().removeAllRanges).toHaveBeenCalled();
        /* tslint:enable */
    });

    it('should select multiple checkboxes when shift-select from bottom to top', () => {
        const selectedRows: Array<Object> = [];

        const updateMock = jest.fn((id, payload) => {
            if (payload) {
                selectedRows.push({ id, payload });
            }
        });

        const rows = [
            { id: 'row-1', cells: ['Test A1', 'Test B1', 'Test C1', 'Test D1'] },
            { id: 'row-2', cells: ['Test A2', 'Test B2', 'Test C2', 'Test D2'] },
            { id: 'row-3', cells: ['Test A3', 'Test B3', 'Test C3', 'Test D3'] },
            { id: 'row-4', cells: ['Test A4', 'Test B4', 'Test C4', 'Test D4'] },
        ];

        /* tslint:disable */
        (SubscriptionConsumer as any).mockImplementation((props: any) => {
            return props.children({
                items: [],
                update: updateMock,
                remove: (): void => undefined,
                getPayload: (): void => undefined,
            });
        });
        /* tslint:enable */

        const mount = mountWithTheme(<Table selectable rows={rows} />);

        mount
            .find(Checkbox)
            .last()
            .simulate('click');
        mount
            .find(Checkbox)
            .first()
            .simulate('click', { shiftKey: true });

        expect(selectedRows.length).toEqual(4);

        /* tslint:disable */
        expect(global.getSelection().removeAllRanges).toHaveBeenCalled();
        /* tslint:enable */
    });

    it('should not render onSelection when it is undefined', () => {
        /* tslint:disable */
        (SubscriptionProvider as any).mockImplementationOnce((props: any) => {
            props.onUpdate();

            return <div />;
        });
        /* tslint:enable */

        const fn = (): void => {
            mountWithTheme(<Table rows={rows} />);
        };

        expect(fn).not.toThrow();
    });
});
