import React from 'react';
import { mountWithTheme } from '../../utility/styled';
import Skeleton from '.';
<<<<<<< HEAD
import StyledTextSkeleton from './Text/style';
=======
>>>>>>> 65d0195... Added text skeleton

describe('Skeleton', () => {
    it('should not crash when no baseWidth is set', () => {
        const fn = (): void => {
            mountWithTheme(<Skeleton.Text lines={1} />);
        };

        expect(fn).not.toThrow();
    });
<<<<<<< HEAD

    it('should not render placeholders less than 6px wide', () => {
        const component = mountWithTheme(<Skeleton.Text baseWidth={3} lines={1} />);

        expect(component.find(StyledTextSkeleton).prop('baseWidth')).toBe(6);
    });
=======
>>>>>>> 65d0195... Added text skeleton
});
