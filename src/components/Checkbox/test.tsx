import React from 'react';
import Checkbox from '.';
import { mosTheme } from '../../themes/MosTheme';
import { mountWithTheme } from '../../utility/styled';
import Styledcheckbox, { StyledCheckboxSkin } from './style';

describe('Checkbox', () => {
    it('should have theme background when checked', () => {
        const checkbox = mountWithTheme(
            <Checkbox onChange={(): void => undefined} name="demo" checked={true} value="bar" />,
        );

        /* tslint:disable */
        (expect(checkbox.find(StyledCheckboxSkin)) as any).toHaveStyleRule(
            'background-color',
            mosTheme.Checkbox.checked.backgroundColor,
        );
        /* tslint:enable */
    });

    it('should show a box-shadow on focus', () => {
        const checkbox = mountWithTheme(
            <Checkbox onChange={(): void => undefined} name="demo" checked={false} value="bar" />,
        );

        checkbox.find(Styledcheckbox).simulate('focus');

        /* tslint:disable */
        (expect(checkbox.find(StyledCheckboxSkin)) as any).toHaveStyleRule(
            'box-shadow',
            mosTheme.Checkbox.focus.boxShadow,
        );
        /* tslint:enable */
    });

    it('should be able to change checked value', () => {
        const mockHandler = jest.fn();

        const checkbox = mountWithTheme(<Checkbox onChange={mockHandler} name="demo" checked={false} value="bar" />);

        checkbox.find(StyledCheckboxSkin).simulate('click');

        expect(mockHandler).toHaveBeenCalledWith({
            checked: true,
        });
    });
});
