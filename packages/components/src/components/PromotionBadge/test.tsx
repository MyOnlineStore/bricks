import React from 'react';
import PromotionBadge from '.';
import { mountWithTheme } from '../../utility/styled/testing';
import 'jest-styled-components';
import { colors } from '../../themes/MosTheme/colors';

describe('PromotionPromotionBadge', () => {
    it('should render the PromotionBadge with different colors according to variants', () => {
        const proPromotionBadge = mountWithTheme(<PromotionBadge variant="pro" />);
        const premiumPromotionBadge = mountWithTheme(<PromotionBadge variant="premium" />);
        const growPromotionBadge = mountWithTheme(<PromotionBadge variant="grow" />);
        const newPromotionBadge = mountWithTheme(<PromotionBadge variant="new" />);

        expect(proPromotionBadge).toHaveStyleRule('color', colors.green500);
        expect(premiumPromotionBadge).toHaveStyleRule('color', colors.grey500);
        expect(growPromotionBadge).toHaveStyleRule('color', colors.yellow500);
        expect(newPromotionBadge).toHaveStyleRule('color', colors.blue500);
    });

    it('should be testable with a testid', () => {
        const component = mountWithTheme(<PromotionBadge variant="pro" data-testid="PromotionBadge" />);

        expect(component.find('[data-testid="PromotionBadge"]').hostNodes()).toHaveLength(1);
    });
});
