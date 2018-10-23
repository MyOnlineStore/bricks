import React from 'react';
import { mountWithTheme } from '../../../utility/styled/testing';
import Table from '../';
import Header from './';
import Checkbox from '../../Checkbox';

describe('Table Header', () => {
    it('should not break when onSelection is undefined', () => {
        const component = mountWithTheme(
            <table>
                <Header
                    checked={false}
                    onCheck={(): void => undefined}
                    alignments={['left', 'left', 'right']}
                    headers={['Header A', 'Header B', 'Header C']}
                    selectable
                />
            </table>,
        );

        expect(component.find(Checkbox).prop('checked')).toEqual(false);
    });

    it('should have an indeterminate check when not all rows are checked', () => {
        const component = mountWithTheme(
            <Table
                alignments={['left', 'left', 'right']}
                headers={['Header A', 'Header B', 'Header C']}
                rows={[
                    { id: 'row-1', checked: true, cells: ['A1', 'B1', 'C1'] },
                    { id: 'row-2', checked: false, cells: ['A1', 'B1', 'C1'] },
                    { id: 'row-3', cells: ['A1', 'B1', 'C1'] },
                ]}
                selectable
            />,
        );

        expect(
            component
                .find(Checkbox)
                .first()
                .prop('checked'),
        ).toEqual('indeterminate');
    });

    it('should render without selectable', () => {
        const fn = (): void => {
            mountWithTheme(
                <Table
                    alignments={['left', 'left', 'right']}
                    headers={['Header A', 'Header B', 'Header C']}
                    rows={[{ id: 'row-3', cells: ['A1', 'B1', 'C1'] }]}
                    onSelection={undefined}
                />,
            );
        };

        expect(fn).not.toThrow();
    });

    it('should have a checked check when all rows are checked', () => {
        const component = mountWithTheme(
            <Table
                alignments={['left', 'left', 'right']}
                headers={['Header A', 'Header B', 'Header C']}
                rows={[
                    { id: 'row-1', checked: true, cells: ['A1', 'B1', 'C1'] },
                    { id: 'row-2', checked: true, cells: ['A1', 'B1', 'C1'] },
                ]}
                selectable
            />,
        );

        expect(
            component
                .find(Checkbox)
                .first()
                .prop('checked'),
        ).toEqual(true);
    });

    it('should have an uncheck check when no rows are checked', () => {
        const component = mountWithTheme(
            <Table
                alignments={['left', 'left', 'right']}
                headers={['Header A', 'Header B', 'Header C']}
                rows={[
                    { id: 'row-1', checked: false, cells: ['A1', 'B1', 'C1'] },
                    { id: 'row-2', checked: false, cells: ['A1', 'B1', 'C1'] },
                ]}
                selectable
            />,
        );

        expect(
            component
                .find(Checkbox)
                .first()
                .prop('checked'),
        ).toEqual(false);
    });

    it('should toggle all checks on header check', () => {
        const cells = [
            { id: 'row-1', checked: true, cells: ['A1', 'B1', 'C1'] },
            { id: 'row-2', checked: true, cells: ['A1', 'B1', 'C1'] },
            { id: 'row-3', checked: true, cells: ['A1', 'B1', 'C1'] },
        ];

        const mutatedCells = [
            { id: 'row-1', checked: false, cells: ['A1', 'B1', 'C1'] },
            { id: 'row-2', checked: false, cells: ['A1', 'B1', 'C1'] },
            { id: 'row-3', checked: false, cells: ['A1', 'B1', 'C1'] },
        ];

        let mockEvent;

        const mockHandler = jest.fn(rows => {
            mockEvent = rows;
        });

        const component = mountWithTheme(
            <Table
                selectable
                alignments={['left', 'left', 'right']}
                headers={['Header A', 'Header B', 'Header C']}
                rows={cells}
                onSelection={mockHandler}
            />,
        );

        component
            .find(Checkbox)
            .first()
            .simulate('click');

        expect(mockHandler).toHaveBeenCalledWith(mutatedCells);
    });
});
