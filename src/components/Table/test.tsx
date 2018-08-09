import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Table from '.';
import { mountWithTheme } from '../../utility/styled/testing';
import Cell from './Cell';
import { SubscriptionConsumer } from '../../utility/SubscriptionContext';

jest.mock('../../utility/SubscriptionContext', () => ({
    SubscriptionProvider: 'div',
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
        (DragDropContext as any).mockImplementationOnce(({ onDragEnd }: any) => {
            onDragEnd();

            return <div />;
        });
        /* tslint:enable */

        const dragHandler = jest.fn();

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

        (SubscriptionConsumer as any).mockImplementationOnce((props: any) => {
            return props.children({
                items: [{ id: 'row-1', payload: true }],
                update: updateMock,
                getPayload: getPayloadMock,
                remove: (): void => undefined,
            });
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

    it('should not call onSelection when selection did not change', () => {
        const onSelectionMock = jest.fn();

        /* tslint:disable */
        (SubscriptionConsumer as any).mockImplementationOnce((props: any) => {
            return props.children({
                items: [{ id: 'row-1', payload: true }],
                update: (): void => undefined,
                getPayload: (): void => undefined,
                remove: (): void => undefined,
            });
        });
        /* tslint:enable */

        const component = mountWithTheme(<Table selectable onSelection={onSelectionMock} rows={[]} />);
        component.update();

        expect(onSelectionMock).toHaveBeenCalledTimes(1);
    });

    it('should not break when no onSelection is provided', () => {
        const fn = (): void => {
            mountWithTheme(<Table selectable rows={rows} />);
        };

        expect(fn).not.toThrow();
    });
});
