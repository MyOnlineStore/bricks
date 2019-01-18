/// <reference path="../../_declarations/global.d.ts" />
/* tslint:disable:max-file-line-count */
import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Table from '.';
import { mountWithTheme } from '../../utility/_styled/testing';
import Cell from './Cell';
import Card from './Card';
import Checkbox from '../Checkbox';
import Icon from '../Icon';
import Box from '../Box';
import Select from '../Select';
import Button from '../Button';
import Row from './Row';

describe('Table', () => {
    it('should render the correct amount of cells', () => {
        const table = mountWithTheme(
            <Table
                columns={{
                    id: { header: 'Product ID' },
                    name: { header: 'name' },
                    price: { header: 'Price' },
                }}
                rows={[
                    { id: '61651320', price: 19.12, name: 'foo0', image: 'imageurl' },
                    { id: '61651321', price: 19.2, name: 'foo1', image: 'imageurl' },
                    { id: '61651322', price: 21.12, name: 'foo2', image: 'imageurl' },
                    { id: '61651323', price: 22.12, name: 'foo3', image: 'imageurl' },
                ]}
            />,
        );

        expect(table.find(Cell).length).toBe(12);
    });

    it('should render the correct amount of cards', () => {
        const table = mountWithTheme(
            <Table
                view={'datacard'}
                columns={{
                    id: { header: 'Product ID' },
                    name: { header: 'name' },
                    price: { header: 'Price' },
                }}
                rows={[
                    { id: '61651320', price: 19.12, name: 'foo0', image: 'imageurl' },
                    { id: '61651321', price: 19.2, name: 'foo1', image: 'imageurl' },
                    { id: '61651322', price: 21.12, name: 'foo2', image: 'imageurl' },
                    { id: '61651323', price: 22.12, name: 'foo3', image: 'imageurl' },
                ]}
            />,
        );

        expect(table.find(Card).length).toBe(4);
    });

    it('should render a column with buttons when buttons are provided', () => {
        const table = mountWithTheme(
            <Table
                view={'table'}
                columns={{
                    id: { header: 'Product ID' },
                    name: { header: 'name' },
                    price: { header: 'Price' },
                }}
                rows={[
                    {
                        id: '61651320',
                        price: 19.12,
                        name: 'foo0',
                        image: 'imageurl',
                        buttons: [
                            <Button key={'button1'} title={'button1'} variant={'primary'} />,
                            <Button key={'button2'} title={'button2'} variant={'primary'} />,
                        ],
                    },
                ]}
            />,
        );

        expect(
            table
                .find(Row)
                .first()
                .find(Cell)
                .last()
                .find(Button).length,
        ).toBe(2);
    });

    it('should render a CompactHeader with a Select when there are column with sort', () => {
        const table = mountWithTheme(
            <Table
                view={'datacard'}
                columns={{
                    id: { header: 'Product ID' },
                    name: { header: 'name' },
                    price: { header: 'Price', sort: (a: number, b: number) => a - b },
                }}
                rows={[
                    { id: '61651320', price: 19.12, name: 'foo0', image: 'imageurl' },
                    { id: '61651321', price: 19.2, name: 'foo1', image: 'imageurl' },
                    { id: '61651322', price: 21.12, name: 'foo2', image: 'imageurl' },
                    { id: '61651323', price: 22.12, name: 'foo3', image: 'imageurl' },
                ]}
            />,
        );

        expect(table.find(Select).length).toBe(1);
    });

    it('should render without onDrag', () => {
        const fn = (): void => {
            mountWithTheme(
                <Table
                    columns={{
                        id: { header: 'Product ID' },
                        name: { header: 'name' },
                        price: { header: 'Price' },
                    }}
                    rows={[{ id: '61651320', price: 19.12, name: 'foo', image: 'imageurl' }]}
                />,
            );
        };

        expect(fn).not.toThrow();
    });

    it('should not break when no drag result destination is provided', () => {
        const onDragEnd = jest.fn();

        // tslint:disable-next-line
        (DragDropContext as any).mockImplementationOnce(({ onDragEnd }: any) => {
            onDragEnd({
                source: {
                    index: 0,
                },
            });

            return <div />;
        });

        const fn = (): void => {
            mountWithTheme(
                <Table
                    columns={{
                        id: { header: 'Product ID' },
                        name: { header: 'name' },
                        price: { header: 'Price' },
                    }}
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
                    columns={{
                        id: { header: 'Product ID' },
                        name: { header: 'name' },
                        price: { header: 'Price' },
                    }}
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
        const dragHandler = jest.fn();

        // tslint:disable-next-line
        (DragDropContext as any).mockImplementationOnce(({ onDragEnd }: any) => {
            onDragEnd({
                source: {
                    index: 0,
                },
                destination: 1,
            });

            return <div />;
        });

        mountWithTheme(
            <Table
                columns={{
                    id: { header: 'Product ID' },
                    name: { header: 'name' },
                    price: { header: 'Price' },
                }}
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
                columns={{
                    id: { header: 'Product ID' },
                    name: { header: 'name' },
                    price: { header: 'Price' },
                }}
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
                columns={{
                    id: { header: 'Product ID' },
                    name: { header: 'name' },
                    price: { header: 'Price' },
                }}
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
                columns={{
                    id: { header: 'Product ID' },
                    name: { header: 'name' },
                    price: { header: 'Price' },
                }}
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
                    columns={{
                        id: { header: 'Product ID' },
                        name: { header: 'name' },
                        price: { header: 'Price' },
                    }}
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
                columns={{
                    id: { header: 'Product ID' },
                    name: { header: 'name' },
                    price: { header: 'Price' },
                }}
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
                columns={{
                    id: { header: 'Product ID' },
                    name: { header: 'name' },
                    price: { header: 'Price' },
                }}
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
                columns={{
                    id: { header: 'Product ID' },
                    name: { header: 'name' },
                    price: { header: 'Price' },
                }}
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

    it('should sort rows ascendingly when a column is given a sorting function and is clicked', () => {
        const component = mountWithTheme(
            <Table
                columns={{
                    value: {
                        sort(a: number, b: number) {
                            return a - b;
                        },
                    },
                }}
                rows={[
                    { id: '1', value: 1 },
                    { id: '0', value: 0 },
                    { id: '4', value: 4 },
                    { id: '3', value: 3 },
                    { id: '2', value: 2 },
                ]}
            />,
        );

        component
            .find('thead')
            .find('th')
            .first()
            .simulate('click');

        for (let index = 0; index < component.find(Table).prop<Array<Object>>('rows').length; index++) {
            expect(
                component
                    .find('tbody')
                    .find('tr')
                    .at(index)
                    .find('p')
                    .text(),
            ).toEqual(`${index}`);
        }
    });

    it('should sort rows descendingly when a column is given a sorting function and is clicked twice', () => {
        const component = mountWithTheme(
            <Table
                columns={{
                    value: {
                        sort(a: number, b: number) {
                            return a - b;
                        },
                    },
                }}
                rows={[
                    { id: '1', value: 1 },
                    { id: '0', value: 0 },
                    { id: '4', value: 4 },
                    { id: '3', value: 3 },
                    { id: '2', value: 2 },
                ]}
            />,
        );

        component
            .find('thead')
            .find('th')
            .first()
            .simulate('click');

        component
            .find('thead')
            .find('th')
            .first()
            .simulate('click');

        const rowLength = component.find(Table).prop<Array<Object>>('rows').length;

        for (let index = 0; index < rowLength; index++) {
            expect(
                component
                    .find('tbody')
                    .find('tr')
                    .at(index)
                    .find('p')
                    .text(),
            ).toEqual(`${rowLength - index - 1}`);
        }
    });

    it('should reset row sorting when a column is given a sorting function and is clicked thrice', () => {
        const component = mountWithTheme(
            <Table
                columns={{
                    value: {
                        sort(a: number, b: number) {
                            return a - b;
                        },
                    },
                }}
                rows={[
                    { id: '1', value: 1 },
                    { id: '0', value: 0 },
                    { id: '4', value: 4 },
                    { id: '3', value: 3 },
                    { id: '2', value: 2 },
                ]}
            />,
        );

        component
            .find('thead')
            .find('th')
            .first()
            .simulate('click');

        component
            .find('thead')
            .find('th')
            .first()
            .simulate('click');

        component
            .find('thead')
            .find('th')
            .first()
            .simulate('click');

        const rows = component.find(Table).prop<Array<{ value: number }>>('rows');

        for (let index = 0; index < rows.length; index++) {
            expect(
                component
                    .find('tbody')
                    .find('tr')
                    .at(index)
                    .find('p')
                    .text(),
            ).toEqual(`${rows[index].value}`);
        }
    });

    it('should not sort a column with no sort function provided', () => {
        const component = mountWithTheme(
            <Table
                columns={{
                    value: {
                        order: 0,
                        sort(a: number, b: number) {
                            return a - b;
                        },
                    },
                    price: { order: 1 },
                }}
                rows={[
                    { id: '1', value: 1, price: 11 },
                    { id: '0', value: 0, price: 22 },
                    { id: '4', value: 4, price: 33 },
                    { id: '3', value: 3, price: 44 },
                    { id: '2', value: 2, price: 55 },
                ]}
            />,
        );

        component
            .find('thead')
            .find('th')
            .at(1)
            .simulate('click');

        const rows = component.find(Table).prop<Array<{ value: number; price: number }>>('rows');

        for (let index = 0; index < rows.length; index++) {
            expect(
                component
                    .find('tbody')
                    .find('tr')
                    .at(index)
                    .find('p')
                    .at(1)
                    .text(),
            ).toEqual(`${rows[index].price}`);
        }
    });

    it('should disable the sorting on other sortable columns after sorting a columns', () => {
        const sort = (a: number, b: number) => a - b;

        const component = mountWithTheme(
            <Table
                columns={{
                    value: { order: 0, sort },
                    price: { order: 1, sort },
                }}
                rows={[
                    { id: '1', value: 1, price: 11 },
                    { id: '0', value: 0, price: 22 },
                    { id: '4', value: 4, price: 33 },
                    { id: '3', value: 3, price: 44 },
                    { id: '2', value: 2, price: 55 },
                ]}
            />,
        );

        component
            .find('thead')
            .find('th')
            .at(0)
            .simulate('click');

        expect(
            component
                .find('thead')
                .find('th')
                .at(0)
                .find(Icon)
                .prop('icon'),
        ).toBe('caretDown');

        component
            .find('thead')
            .find('th')
            .at(1)
            .simulate('click');

        expect(
            component
                .find('thead')
                .find('th')
                .at(0)
                .find(Icon)
                .prop('icon'),
        ).toBe('caretVertical');
    });

    it('should be able to align a column in the center', () => {
        const component = mountWithTheme(
            <Table
                columns={{
                    value: { align: 'center' },
                }}
                rows={[
                    { id: '1', value: 1, price: 11 },
                    { id: '0', value: 0, price: 22 },
                    { id: '4', value: 4, price: 33 },
                    { id: '3', value: 3, price: 44 },
                    { id: '2', value: 2, price: 55 },
                ]}
            />,
        );

        expect(
            component
                .find('thead')
                .find('th')
                .at(0)
                .find(Box)
                .prop('justifyContent'),
        ).toBe('center');
    });

    it('should be able to align a column in the center', () => {
        const component = mountWithTheme(
            <Table
                columns={{
                    value: { align: 'center' },
                }}
                rows={[
                    { id: '1', value: 1, price: 11 },
                    { id: '0', value: 0, price: 22 },
                    { id: '4', value: 4, price: 33 },
                    { id: '3', value: 3, price: 44 },
                    { id: '2', value: 2, price: 55 },
                ]}
            />,
        );

        expect(
            component
                .find('thead')
                .find('th')
                .at(0)
                .find(Box)
                .prop('justifyContent'),
        ).toBe('center');
    });
});
