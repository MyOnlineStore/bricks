import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Table from '.';
import { mountWithTheme } from '../../utility/styled/testing';
import Cell from './Cell';
import Checkbox from '../Checkbox';

describe('Table', () => {
    it('should render without draghandler', () => {
        const fn = (): void => {
            mountWithTheme(
                <Table
                    columns={[
                        { key: 'id', header: 'Product ID' },
                        { key: 'name', header: 'name' },
                        { key: 'price', header: 'Price' },
                    ]}
                    rows={[{ id: '61651320', checked: true, price: 19.12, name: 'foo', image: 'imageurl' }]}
                />,
            );
        };

        expect(fn).not.toThrow();
    });

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

        expect(component.find(Cell).length).toBe(4);
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
            onDragEnd();

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

    it('should not break when rendered without onSelection', () => {
        const headerCheckFn = (): void => {
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
            )
                .find(Checkbox)
                .first()
                .simulate('click');
        };

        expect(headerCheckFn).not.toThrow();

        const bodyCheckFn = (): void => {
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
            )
                .find(Checkbox)
                .first()
                .simulate('click');
        };

        expect(bodyCheckFn).not.toThrow();
    });

    it('should select multiple checkboxes when shift-select from top to bottom', () => {
        const selectedRows: Array<Object> = [];

        const selectionMock = jest.fn(id => {
            selectedRows.push({ id });
        });

        const component = mountWithTheme(
            <Table
                columns={[
                    { key: 'id', header: 'Product ID' },
                    { key: 'name', header: 'name' },
                    { key: 'price', header: 'Price' },
                ]}
                rows={[
                    { id: '61651320', checked: false, price: 19.12, name: 'foo0', image: 'imageurl' },
                    { id: '61651321', checked: false, price: 19.2, name: 'foo1', image: 'imageurl' },
                ]}
                onSelection={selectionMock}
            />,
        );

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

    it('should select multiple checkboxes when shift-select from bottom to top', () => {
        const selectedRows: Array<Object> = [];

        const selectionMock = jest.fn(id => {
            selectedRows.push({ id });
        });

        const component = mountWithTheme(
            <Table
                columns={[
                    { key: 'id', header: 'Product ID' },
                    { key: 'name', header: 'name' },
                    { key: 'price', header: 'Price' },
                ]}
                rows={[
                    { id: '61651320', checked: false, price: 19.12, name: 'foo0', image: 'imageurl' },
                    { id: '61651321', checked: false, price: 19.2, name: 'foo1', image: 'imageurl' },
                ]}
                onSelection={selectionMock}
            />,
        );

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
