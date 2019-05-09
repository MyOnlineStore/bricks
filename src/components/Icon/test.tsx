import React from 'react';
import { mountWithTheme } from '../../utility/styled/testing';
import Icon from '../Icon';
import StyledIcon from './style';
import 'jest-styled-components';

describe('Icon', () => {
    it('should have a custom fill', () => {
        const color = '#fff';
        const icon = mountWithTheme(<Icon color={color} size="large" icon="desert" />);

        expect(icon.find(StyledIcon)).toHaveStyleRule('fill', color, {
            modifier: 'svg',
        });
    });

    it('should have the correct size', () => {
        const icon = mountWithTheme(<Icon size="small" icon="checkmark" />);

        expect(icon.find(StyledIcon)).toHaveStyleRule('height', '12px');
        expect(icon.find(StyledIcon)).toHaveStyleRule('width', '12px');
    });
});
