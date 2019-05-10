import React from 'react';
import ButtonGroup from '.';
import Button from '../Button';
import { mountWithTheme } from '../../utility/styled/testing';

describe('ButtonGroup', () => {
    it('renders the correct amount of Buttons', () => {
        const component = mountWithTheme(
            <ButtonGroup>
                <Button title="Test" variant="primary" />
                <Button title="Test" variant="secondary" />
            </ButtonGroup>,
        );

        expect(component.find(Button).length).toBe(2);
    });

    it('renders the correct amount of Buttons when stacked', () => {
        const component = mountWithTheme(
            <ButtonGroup stacked>
                <Button title="Test" variant="primary" />
            </ButtonGroup>,
        );

        expect(component.find(Button).length).toBe(1);
    });

    it('should be testable with a testid', () => {
        const component = mountWithTheme(<ButtonGroup data-testid="buttongroup" />);

        expect(component.find('[data-testid="buttongroup"]').hostNodes()).toHaveLength(1);
    });
});
