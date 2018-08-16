import React from 'react';
import Row from '.';
import { mountWithTheme } from '../../../utility/styled';
import StyledCell from '../Cell/style';
import StyledRow from './style';
import { mosTheme } from '../../../themes/MosTheme';
import { ContrastThemeProvider } from '../../Contrast';
import { SubscriptionConsumer } from '../../../utility/SubscriptionContext';

jest.mock('../../../utility/SubscriptionContext', () => ({
    SubscriptionConsumer: jest.fn(props => {
        return props.children({
            update: (): void => undefined,
            remove: (): void => undefined,
            getPayload: (): void => undefined,
        });
    }),
}));

describe('Table Row', () => {
    it('should handle mouse focus and blur when draggable', () => {
        const component = mountWithTheme(
            <table>
                <tbody>
                    <Row identifier="row-1" selectable draggable alignments={[]} cells={['A1', 'B1', 'C1']} index={1} />
                </tbody>
            </table>,
        );

        component
            .find(StyledCell)
            .first()
            .simulate('focus');

        /* tslint:disable */
        (expect(component.find(StyledRow)) as any).toHaveStyleRule(
            'outline',
            `solid 4px ${mosTheme.Table.row.focus.borderColor}`,
        );
        /* tslint:enable */

        component
            .find(StyledCell)
            .first()
            .simulate('blur');

        /* tslint:disable */
        (expect(component.find(StyledRow)) as any).not.toHaveStyleRule('outline');
        /* tslint:enable */
    });

    it('should handle mouse enter and leave', () => {
        const component = mountWithTheme(
            <table>
                <tbody>
                    <Row identifier="row-1" selectable alignments={[]} cells={['A1', 'B1', 'C1']} draggable index={1} />
                </tbody>
            </table>,
        );

        component.find(StyledRow).simulate('mouseEnter');
        expect(component.find(ContrastThemeProvider).prop('enable')).toBe(true);

        component.find(StyledRow).simulate('mouseLeave');
        expect(component.find(ContrastThemeProvider).prop('enable')).toBe(false);
    });

    it('should update the SubscriptionContext when the Checkbox is clicked', () => {
        const updateMock = jest.fn();

        /* tslint:disable */
        (SubscriptionConsumer as any).mockImplementationOnce(
            /* tslint:enable */
            jest.fn(props => {
                return props.children({
                    update: updateMock,
                    remove: (): void => undefined,
                    getPayload: (): void => undefined,
                });
            }),
        );

        const component = mountWithTheme(
            <table>
                <tbody>
                    <Row identifier="row-1" selectable alignments={[]} cells={['A1', 'B1', 'C1']} draggable index={1} />
                </tbody>
            </table>,
        );

        component.find('input').simulate('change');

        expect(updateMock).toHaveBeenCalledWith('row-1', false);
        expect(updateMock).toHaveBeenCalledWith('row-1', true);
    });

    it('should unsubscrive from the SubscriptionContext when unmounted', () => {
        const removeMock = jest.fn();

        /* tslint:disable */
        (SubscriptionConsumer as any).mockImplementationOnce(
            /* tslint:enable */
            jest.fn(props => {
                return props.children({
                    update: (): void => undefined,
                    remove: removeMock,
                    getPayload: (): void => undefined,
                });
            }),
        );

        const component = mountWithTheme(
            <table>
                <tbody>
                    <Row identifier="row-1" selectable alignments={[]} cells={['A1', 'B1', 'C1']} draggable index={1} />
                </tbody>
            </table>,
        );

        component.unmount();

        expect(removeMock).toHaveBeenCalled();
    });
});
