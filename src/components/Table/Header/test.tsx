import React from 'react';
import { mountWithTheme } from '../../../utility/styled';
import Header from '.';
import { SubscriptionConsumer } from '../../../utility/SubscriptionContext';
import Checkbox from '../../Checkbox';

jest.mock('../../../utility/SubscriptionContext', () => ({
    SubscriptionConsumer: jest.fn(props => {
        return props.children({
            update: (): void => undefined,
            remove: (): void => undefined,
            getPayload: (): void => undefined,
        });
    }),
}));

describe('Table Header', () => {
    it('should have an indeterminate check when not all rows are checked', () => {
        /* tslint:disable */
        (SubscriptionConsumer as any).mockImplementationOnce(
            /* tslint:enable */
            jest.fn(props => {
                return props.children({
                    items: [
                        { id: 'row-1', payload: true },
                        { id: 'row-2', payload: false },
                        { id: 'row-2', payload: true },
                    ],

                    update: (): void => undefined,
                    remove: (): void => undefined,
                    getPayload: (): void => undefined,
                });
            }),
        );

        const component = mountWithTheme(
            <table>
                <Header
                    alignments={['left', 'left', 'right']}
                    headers={['Header A', 'Header B', 'Header C']}
                    selectable
                />
            </table>,
        );

        expect(component.find(Checkbox).prop('checked')).toEqual('indeterminate');
    });

    it('should have a checked check when all rows are checked', () => {
        /* tslint:disable */
        (SubscriptionConsumer as any).mockImplementationOnce(
            /* tslint:enable */
            jest.fn(props => {
                return props.children({
                    items: [
                        { id: 'row-1', payload: true },
                        { id: 'row-2', payload: true },
                        { id: 'row-2', payload: true },
                    ],

                    update: (): void => undefined,
                    remove: (): void => undefined,
                    getPayload: (): void => undefined,
                });
            }),
        );

        const component = mountWithTheme(
            <table>
                <Header
                    alignments={['left', 'center', 'right']}
                    headers={['Header A', 'Header B', 'Header C']}
                    selectable
                />
            </table>,
        );

        expect(component.find(Checkbox).prop('checked')).toEqual(true);
    });

    it('should have an uncheck check when no rows are checked', () => {
        /* tslint:disable */
        (SubscriptionConsumer as any).mockImplementationOnce(
            /* tslint:enable */
            jest.fn(props => {
                return props.children({
                    items: [
                        { id: 'row-1', payload: false },
                        { id: 'row-2', payload: false },
                        { id: 'row-2', payload: false },
                    ],

                    update: (): void => undefined,
                    remove: (): void => undefined,
                    getPayload: (): void => undefined,
                });
            }),
        );

        const component = mountWithTheme(
            <table>
                <Header
                    alignments={['left', 'left', 'right']}
                    headers={['Header A', 'Header B', 'Header C']}
                    selectable
                />
            </table>,
        );

        expect(component.find(Checkbox).prop('checked')).toEqual(false);
    });

    it('should call the updateAll on the SubscriptionConsumer when changed', () => {
        const updateAllMock = jest.fn();

        /* tslint:disable */
        (SubscriptionConsumer as any).mockImplementationOnce(
            /* tslint:enable */
            jest.fn(props => {
                return props.children({
                    items: [],
                    update: (): void => undefined,
                    updateAll: updateAllMock,
                    remove: (): void => undefined,
                    getPayload: (): void => undefined,
                });
            }),
        );

        const component = mountWithTheme(
            <table>
                <Header
                    alignments={['left', 'left', 'right']}
                    headers={['Header A', 'Header B', 'Header C']}
                    selectable
                />
            </table>,
        );

        component.find('input').simulate('change');

        expect(updateAllMock).toHaveBeenCalledWith(true);
    });
});
