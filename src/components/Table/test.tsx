/// <reference path="../../declarations/global.d.ts" />
import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Table from '.';
import { mountWithTheme } from '../../utility/styled/testing';
import Cell from './Cell';
import Checkbox from '../Checkbox';

describe('Table', () => {
    it('should render the correct amount of cells', () => {
        const component = mountWithTheme(
            <Table
                columns={[
                    { key: 'id', header: 'Product ID' },
                    { key: 'name', header: 'name' },
                    { key: 'price', header: 'Price' },
                ]}
                rows={[
                    { id: '61651320', price: 19.12, name: 'foo0', image: 'imageurl' },
                    { id: '61651321', price: 19.2, name: 'foo1', image: 'imageurl' },
                    { id: '61651322', price: 21.12, name: 'foo2', image: 'imageurl' },
                    { id: '61651323', price: 22.12, name: 'foo3', image: 'imageurl' },
                ]}
            />,
        );

        expect(component.find(Cell).length).toBe(12);
    });

    it('should render without onDrag', () => {
        const fn = (): void => {
            mountWithTheme(
                <Table
                    columns={[
                        { key: 'id', header: 'Product ID' },
                        { key: 'name', header: 'name' },
                        { key: 'price', header: 'Price' },
                    ]}
                    rows={[{ id: '61651320', price: 19.12, name: 'foo', image: 'imageurl' }]}
                />,
            );
        };

        expect(fn).not.toThrow();
    });

    it('should not break when no drag result destination is provided', () => {
        /* tslint:disable */
        const onDragEnd = jest.fn();

        (DragDropContext as any).mockImplementationOnce(({ onDragEnd }: any) => {
            onDragEnd({
                source: {
                    index: 0,
                },
            });

            return <div />;
        });
        /* tslint:enable */

        const fn = (): void => {
            mountWithTheme(
                <Table
                    columns={[
                        { key: 'id', header: 'Product ID' },
                        { key: 'name', header: 'name' },
                        { key: 'price', header: 'Price' },
                    ]}
                    rows={[{ id: '61651320', price: 19.12, name: 'foo', image: 'imageurl' }]}
                    onDragEnd={onDragEnd}
                />,
            );
        };

        expect(fn).not.toThrow();
    });

    it('should render without onSelection', () => {
        const fn = (): void => {
            mountWithTheme(
                <Table
                    columns={[
                        { key: 'id', header: 'Product ID' },
                        { key: 'name', header: 'name' },
                        { key: 'price', header: 'Price' },
                    ]}
                    rows={[
                        { id: '61651320', price: 19.12, name: 'foo0', image: 'imageurl' },
                        { id: '61651321', price: 19.2, name: 'foo1', image: 'imageurl' },
                        { id: '61651322', price: 21.12, name: 'foo2', image: 'imageurl' },
                        { id: '61651323', price: 22.12, name: 'foo3', image: 'imageurl' },
                    ]}
                />,
            );
        };

        expect(fn).not.toThrow();
    });

    it('should call the handler on drag end', () => {
        /* tslint:disable */
        const dragHandler = jest.fn();

        (DragDropContext as any).mockImplementationOnce(({ onDragEnd }: any) => {
            onDragEnd({
                source: {
                    index: 0,
                },
                destination: 1,
            });

            return <div />;
        });
        /* tslint:enable */

        mountWithTheme(
            <Table
                columns={[
                    { key: 'id', header: 'Product ID' },
                    { key: 'name', header: 'name' },
                    { key: 'price', header: 'Price' },
                ]}
                rows={[
                    { id: '61651320', price: 19.12, name: 'foo0', image: 'imageurl' },
                    { id: '61651321', price: 19.2, name: 'foo1', image: 'imageurl' },
                    { id: '61651322', price: 21.12, name: 'foo2', image: 'imageurl' },
                    { id: '61651323', price: 22.12, name: 'foo3', image: 'imageurl' },
                ]}
                onDragEnd={dragHandler}
            />,
        );

        expect(dragHandler).toHaveBeenCalled();
    });

    it('should select multiple checkboxes when shift-select from top to bottom', () => {
        let selectedRows: Array<Object> = [];

        const selectionMock = jest.fn(rows => {
            // tslint:disable-next-line
            selectedRows = rows.filter((row: any): any => row.selected);
        });

        const component = mountWithTheme(
            <Table
                columns={[
                    { key: 'id', header: 'Product ID' },
                    { key: 'name', header: 'name' },
                    { key: 'price', header: 'Price' },
                ]}
                rows={[
                    { id: '61651320', selected: false, price: 19.12, name: 'foo0', image: 'imageurl' },
                    { id: '61651321', selected: false, price: 19.2, name: 'foo1', image: 'imageurl' },
                    { id: '61651322', selected: false, price: 19.12, name: 'foo0', image: 'imageurl' },
                    { id: '61651323', selected: false, price: 19.2, name: 'foo1', image: 'imageurl' },
                    { id: '61651324', selected: false, price: 19.12, name: 'foo0', image: 'imageurl' },
                    { id: '61651325', selected: false, price: 19.2, name: 'foo1', image: 'imageurl' },
                ]}
                onSelection={selectionMock}
            />,
        );

        component
            .find(Checkbox)
            .at(2)
            .simulate('click');

        component
            .find(Checkbox)
            .at(4)
            .simulate('click', { shiftKey: true });

        expect(selectedRows.length).toEqual(3);
        expect(global.getSelection().removeAllRanges).toHaveBeenCalled();
    });

    it('should select multiple checkboxes when shift-select from bottom to top', () => {
        let selectedRows: Array<Object> = [];

        const selectionMock = jest.fn(rows => {
            // tslint:disable-next-line
            selectedRows = rows.filter((row: any): any => row.selected);
        });

        const component = mountWithTheme(
            <Table
                columns={[
                    { key: 'id', header: 'Product ID' },
                    { key: 'name', header: 'name' },
                    { key: 'price', header: 'Price' },
                ]}
                rows={[
                    { id: '61651320', selected: false, price: 19.12, name: 'foo0', image: 'imageurl' },
                    { id: '61651321', selected: false, price: 19.2, name: 'foo1', image: 'imageurl' },
                    { id: '61651322', selected: false, price: 19.12, name: 'foo0', image: 'imageurl' },
                    { id: '61651323', selected: false, price: 19.2, name: 'foo1', image: 'imageurl' },
                    { id: '61651324', selected: false, price: 19.12, name: 'foo0', image: 'imageurl' },
                    { id: '61651325', selected: false, price: 19.2, name: 'foo1', image: 'imageurl' },
                ]}
                onSelection={selectionMock}
            />,
        );

        component
            .find(Checkbox)
            .last()
            .simulate('click');

        component.update();

        component
            .find(Checkbox)
            .at(1)
            .simulate('click', { shiftKey: true });

        expect(selectedRows.length).toEqual(6);
        expect(global.getSelection().removeAllRanges).toHaveBeenCalled();
    });

    it('should have an indeterminate check when not all rows are selected', () => {
        const component = mountWithTheme(
            <Table
                columns={[
                    { key: 'id', header: 'Product ID' },
                    { key: 'name', header: 'name' },
                    { key: 'price', header: 'Price' },
                ]}
                rows={[
                    { id: '61651320', selected: false, price: 19.12, name: 'foo0', image: 'imageurl' },
                    { id: '61651321', selected: true, price: 19.2, name: 'foo1', image: 'imageurl' },
                    { id: '61651322', selected: false, price: 21.12, name: 'foo2', image: 'imageurl' },
                    { id: '61651323', selected: false, price: 22.12, name: 'foo3', image: 'imageurl' },
                ]}
                onSelection={(): void => undefined}
            />,
        );

        expect(
            component
                .find(Checkbox)
                .first()
                .prop('checked'),
        ).toEqual('indeterminate');
    });

    it('should not break when not selectable', () => {
        const fn = (): void => {
            mountWithTheme(
                <Table
                    columns={[
                        { key: 'id', header: 'Product ID' },
                        { key: 'name', header: 'name' },
                        { key: 'price', header: 'Price' },
                    ]}
                    rows={[
                        { id: '61651320', selected: false, price: 19.12, name: 'foo0', image: 'imageurl' },
                        { id: '61651321', selected: true, price: 19.2, name: 'foo1', image: 'imageurl' },
                        { id: '61651322', selected: false, price: 21.12, name: 'foo2', image: 'imageurl' },
                        { id: '61651323', selected: false, price: 22.12, name: 'foo3', image: 'imageurl' },
                    ]}
                />,
            );
        };

        expect(fn).not.toThrow();
    });

    it('should have a checked header checkbox when all rows are selected', () => {
        const component = mountWithTheme(
            <Table
                columns={[
                    { key: 'id', header: 'Product ID' },
                    { key: 'name', header: 'name' },
                    { key: 'price', header: 'Price' },
                ]}
                rows={[
                    { id: '61651320', selected: true, price: 19.12, name: 'foo0', image: 'imageurl' },
                    { id: '61651321', selected: true, price: 19.2, name: 'foo1', image: 'imageurl' },
                    { id: '61651322', selected: true, price: 21.12, name: 'foo2', image: 'imageurl' },
                    { id: '61651323', selected: true, price: 22.12, name: 'foo3', image: 'imageurl' },
                ]}
                onSelection={(): void => undefined}
            />,
        );

        expect(
            component
                .find(Checkbox)
                .first()
                .prop('checked'),
        ).toEqual(true);
    });

    it('should have an unchecked check when no rows are selected', () => {
        const component = mountWithTheme(
            <Table
                columns={[
                    { key: 'id', header: 'Product ID' },
                    { key: 'name', header: 'name' },
                    { key: 'price', header: 'Price' },
                ]}
                rows={[
                    { id: '61651320', selected: false, price: 19.12, name: 'foo0', image: 'imageurl' },
                    { id: '61651321', selected: false, price: 19.2, name: 'foo1', image: 'imageurl' },
                    { id: '61651322', selected: false, price: 21.12, name: 'foo2', image: 'imageurl' },
                    { id: '61651323', selected: false, price: 22.12, name: 'foo3', image: 'imageurl' },
                ]}
                onSelection={(): void => undefined}
            />,
        );

        expect(
            component
                .find(Checkbox)
                .first()
                .prop('checked'),
        ).toEqual(false);
    });

    it('should select all rows when the header checkbox is checked', () => {
        const mockHandler = jest.fn();

        const rows = [
            { id: '61651320', selected: true, price: 19.12, name: 'foo0', image: 'imageurl' },
            { id: '61651321', selected: true, price: 19.2, name: 'foo1', image: 'imageurl' },
            { id: '61651322', selected: true, price: 21.12, name: 'foo2', image: 'imageurl' },
            { id: '61651323', selected: true, price: 22.12, name: 'foo3', image: 'imageurl' },
        ];

        const component = mountWithTheme(
            <Table
                columns={[
                    { key: 'id', header: 'Product ID' },
                    { key: 'name', header: 'name' },
                    { key: 'price', header: 'Price' },
                ]}
                rows={rows}
                onSelection={mockHandler}
            />,
        );

        component
            .find(Checkbox)
            .first()
            .simulate('click');

        // tslint:disable-next-line
        const checkedRows = mockHandler.mock.calls[0].filter(row => (row as any).checked);

        expect(checkedRows.length).toBe(0);
    });
});
