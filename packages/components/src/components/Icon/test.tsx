import React from 'react';
import { mountWithTheme } from '../../utility/styled/testing';
import Icon from '../Icon';
import StyledIcon from './style';
import 'jest-styled-components';

describe('Icon', () => {
    it('should have a custom fill', () => {
        const color = '#fff';
        const icon = mountWithTheme(<Icon color={color} size="large" icon="desert-large" />);

        expect(icon.find(StyledIcon)).toHaveStyleRule('fill', color, {
            modifier: 'svg',
        });
    });

    it('should have the correct size', () => {
        const icon = mountWithTheme(<Icon size="small" icon="checkmark" />);

        expect(icon.find(StyledIcon)).toHaveStyleRule('height', '12px');
        expect(icon.find(StyledIcon)).toHaveStyleRule('width', '12px');
    });

    it('should fetch the icon', () => {
        (fetch as jest.Mock).mockResolvedValueOnce({ body: 'icon result' });

        const icon = mountWithTheme(<Icon size="small" icon="checkmark" />);

        expect(fetch).toHaveBeenCalledWith(expect.stringContaining('checkmark'));
        expect(icon.text()).toContain('icon result');
    });

    it('should not throw when fetching fails', () => {
        (fetch as jest.Mock).mockRejectedValueOnce('icon not found');

        expect(() => mountWithTheme(<Icon size="small" icon="checkmark" />)).not.toThrow();
    });

    it('should render an empty span when fetching fails', () => {
        (fetch as jest.Mock).mockRejectedValueOnce('icon not found');
        const icon = mountWithTheme(<Icon size="small" icon="checkmark" />);

        expect(icon.find('span')).toHaveLength(1);
    });
});
