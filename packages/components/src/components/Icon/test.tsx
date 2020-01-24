import React from 'react';
import { mountWithTheme } from '../../utility/styled/testing';
import Icon from '../Icon';
import StyledIcon from './style';
import 'jest-styled-components';
import checkmarkIcon from '../../../../assets/icons/checkmark.svg';
import desertIcon from '../../../../assets/icons/desert-large.svg';

describe('Icon', () => {
    it('should have a custom fill', () => {
        const color = '#fff';
        const icon = mountWithTheme(<Icon color={color} size="large" icon={desertIcon} />);

        expect(icon.find(StyledIcon)).toHaveStyleRule('fill', color, {
            modifier: 'svg',
        });
    });

    it('should have the correct size', () => {
        const icon = mountWithTheme(<Icon size="small" icon={checkmarkIcon} />);

        expect(icon.find(StyledIcon)).toHaveStyleRule('height', '12px');
        expect(icon.find(StyledIcon)).toHaveStyleRule('width', '12px');
    });
});
