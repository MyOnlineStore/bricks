import React from 'react';
import Tag from '.';
import { mountWithTheme } from '../../utility/styled/testing';
import 'jest-styled-components';

describe('Tag', () => {
    it('should render a label', () => {
        const component = mountWithTheme(<Tag label="Label" />);

        expect(component.text()).toBe('Label');
    });

    it('should render a remove button and execute the callback if passed as onClick', () => {
        const mockOnClose = jest.fn();
        const component = mountWithTheme(<Tag label="Label" onClick={mockOnClose} />);
        const button = component.findByTestId('tag-remove-button');

        button.simulate('click');

        expect(button).toHaveLength(1);
        expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

    it('should be testable with a testid', () => {
        const component = mountWithTheme(<Tag label="Label" data-testid="tag-test-id" />);

        expect(component.findByTestId('tag-test-id')).toHaveLength(1);
    });
});
