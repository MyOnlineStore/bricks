import React from 'react';
import { mountWithTheme } from '../../utility/styled/testing';
import Skeleton from '.';
import StyledTextSkeleton from './Text/style';
import { blockElements } from '../../__fixtures__/html';

describe('Skeleton', () => {
    it('should not crash when no baseWidth is set on the Text variant', () => {
        const fn = (): void => {
            mountWithTheme(<Skeleton.Text lines={1} />);
        };

        expect(fn).not.toThrow();
    });

    it('should not crash when no props are set on the Rect variant', () => {
        const fn = (): void => {
            mountWithTheme(<Skeleton.Rect />);
        };

        expect(fn).not.toThrow();
    });

    it('should not render placeholders less than 6px wide', () => {
        const component = mountWithTheme(<Skeleton.Text baseWidth={3} lines={1} />);

        expect(component.find(StyledTextSkeleton).prop('baseWidth')).toBe(6);
    });

    it('should not render a block element when using a Text skeleton', () => {
        const component = mountWithTheme(<Skeleton.Text baseWidth={3} lines={1} />);

        expect(component.find('span').hostNodes().length).toBe(1);

        blockElements.forEach(tag => {
            expect(component.find(tag).hostNodes().length).toBe(0);
        });
    });
});
