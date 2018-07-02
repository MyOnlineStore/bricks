import React from 'react';
import { shallowWithTheme } from '../../utility/styled';
import Icon from '../Icon';
import StyledIcon from './style';

describe('Icon', () => {
    it('should have a custom fill', () => {
        const color = '#fff';
        const icon = shallowWithTheme(<Icon color={color} size="large" icon="desert" />);

        /* tslint:disable */
        (expect(icon.find(StyledIcon)) as any).toHaveStyleRule('fill', color, {
            modifier: 'svg',
        });
        /* tslint:enable */
    });
});
