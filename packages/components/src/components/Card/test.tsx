import React from 'react';
import Card from '.';
import { mountWithTheme } from '../../utility/styled/testing';
import Text from '../Text';

describe('Card', () => {
    it('should render with just a label and content', () => {
        const component = mountWithTheme(<Card label={<Text strong>Label</Text>} data-testid="Card" />);

        const label = component.find('[data-testid="Card-label"]').hostNodes();
        const content = component.find('[data-testid="Card-label"]').hostNodes();

        expect(label).toHaveLength(1);
        expect(content).toHaveLength(1);
    });
});
