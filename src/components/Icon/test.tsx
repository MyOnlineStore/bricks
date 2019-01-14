import React from 'react';
import { shallowWithTheme } from '../../utility/_styled/testing';
import Icon from '../Icon';
import StyledIcon from './style';
import 'jest-styled-components';

describe('Icon', () => {
    it('should have a custom fill', () => {
        const color = '#fff';
        const icon = shallowWithTheme(<Icon color={color} size="large" icon="desert" />);

        expect(icon.find(StyledIcon)).toHaveStyleRule('fill', color, {
            modifier: 'svg',
        });
    });

    it('should have the correct size', () => {
        const icon = shallowWithTheme(<Icon size="small" icon="checkmark" />);

        expect(icon.find(StyledIcon)).toHaveStyleRule('height', '12px');
        expect(icon.find(StyledIcon)).toHaveStyleRule('width', '12px');
    });
});
