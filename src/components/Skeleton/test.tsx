import React from 'react';
import { mountWithTheme } from '../../utility/styled';
import Skeleton from '.';
import StyledTextSkeleton from './Text/style';

describe('Skeleton', () => {
    it('should not crash when no baseWidth is set', () => {
        const fn = (): void => {
            mountWithTheme(<Skeleton.Text lines={1} />);
        };

        expect(fn).not.toThrow();
    });

    it('should not render placeholders less than 6px wide', () => {
        const component = mountWithTheme(<Skeleton.Text baseWidth={3} lines={1} />);

        expect(component.find(StyledTextSkeleton).prop('baseWidth')).toBe(6);
    });
});
