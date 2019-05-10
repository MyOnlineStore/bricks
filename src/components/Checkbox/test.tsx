import React from 'react';
import Checkbox from '.';
import { mosTheme } from '../../themes/MosTheme';
import { mountWithTheme } from '../../utility/styled/testing';
import { StyledCheckbox, StyledCheckboxSkin } from './style';
import 'jest-styled-components';

describe('Checkbox', () => {
    it('should have theme background when checked', () => {
        const checkbox = mountWithTheme(
            <Checkbox onChange={(): void => undefined} name="demo" checked={true} value="bar" />,
        );

        expect(checkbox.find(StyledCheckboxSkin)).toHaveStyleRule(
            'background-color',
            mosTheme.Checkbox.checked.backgroundColor,
        );
    });

    it('should show a box-shadow on focus', () => {
        const checkbox = mountWithTheme(
            <Checkbox onChange={(): void => undefined} name="demo" checked={false} value="bar" />,
        );

        checkbox.find(StyledCheckbox).simulate('focus');

        expect(checkbox.find(StyledCheckboxSkin)).toHaveStyleRule('box-shadow', mosTheme.Checkbox.focus.boxShadow);
    });

    it('should be able to change checked value', () => {
        let mockEvent;

        const mockHandler = jest.fn(({ event }) => {
            mockEvent = event;
        });

        const checkbox = mountWithTheme(<Checkbox onChange={mockHandler} name="demo" checked={false} value="bar" />);

        checkbox.simulate('click');

        expect(mockHandler).toHaveBeenCalledWith({
            checked: true,
            event: mockEvent,
        });
    });

    it('should show a checked and disabled state', () => {
        const checkbox = mountWithTheme(
            <Checkbox onChange={(): void => undefined} name="demo" disabled={true} checked={true} value="bar" />,
        );

        expect(checkbox.find(StyledCheckboxSkin)).toHaveStyleRule(
            'background',
            mosTheme.Checkbox.checkedDisabled.background,
        );
    });

    it('should show an unchecked and disabled state', () => {
        const checkbox = mountWithTheme(
            <Checkbox onChange={(): void => undefined} name="demo" disabled={true} checked={false} value="bar" />,
        );

        expect(checkbox.find(StyledCheckboxSkin)).toHaveStyleRule(
            'background',
            mosTheme.Checkbox.idleDisabled.background,
        );
    });

    it('should show an error state', () => {
        const checkbox = mountWithTheme(
            <Checkbox onChange={(): void => undefined} name="demo" error={true} checked={false} value="bar" />,
        );

        expect(checkbox.find(StyledCheckboxSkin)).toHaveStyleRule(
            'border',
            `1px solid ${mosTheme.Checkbox.error.borderColor}`,
        );
    });

    it('should be testable with a testid', () => {
        const component = mountWithTheme(
            <Checkbox checked onChange={jest.fn()} name="demo" value="A" data-testid="checkbox" />,
        );

        expect(component.find('[data-testid="checkbox"]').hostNodes()).toHaveLength(1);
    });
});
