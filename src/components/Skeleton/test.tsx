import React from 'react';
import { mountWithTheme } from '../../utility/styled';
import Skeleton from '.';

describe('Skeleton', () => {
    it('should not crash when no baseWidth is set', () => {
        const fn = (): void => {
            mountWithTheme(<Skeleton.Text lines={1} />);
        };

        expect(fn).not.toThrow();
    });
});
