import React, { FC } from 'react';
import { mountWithTheme } from '../../utility/styled/testing';
import Pagination from '.';

describe('Pagination', () => {
    const LinkWrapper: FC<{ pageNumber: number }> = props => <a href={`#${props.pageNumber}`}>{props.children}</a>;

    it('should render the correct amount of page links', () => {
        const component = mountWithTheme(
            <Pagination
                pageCount={12}
                activePage={6}
                maxPageGroupSize={5}
                maxPagesWithoutSplitting={5}
                LinkWrapper={LinkWrapper}
            />,
        );

        // should be 7, because it renders "1 ... 4 5 [6] 7 8 ... 12"
        expect(component.find('[data-testid="page-button"]').hostNodes().length).toBe(7);
    });

    it('should render a previous button when the active page is higher than 1', () => {
        const component = mountWithTheme(<Pagination pageCount={12} activePage={3} LinkWrapper={LinkWrapper} />);

        expect(component.find('[data-testid="previous-page-button"]').hostNodes().length).toBe(1);
    });

    it('should NOT render a previous button when the active page is the first', () => {
        const component = mountWithTheme(<Pagination pageCount={12} activePage={1} LinkWrapper={LinkWrapper} />);

        expect(component.find('[data-testid="previous-page-button"]').hostNodes().length).toBe(0);
    });

    it('should render a next button when the active page is not the last one', () => {
        const component = mountWithTheme(<Pagination pageCount={12} activePage={3} LinkWrapper={LinkWrapper} />);

        expect(component.find('[data-testid="next-page-button"]').hostNodes().length).toBe(1);
    });

    it('should NOT render a next button when the active page is the last', () => {
        const component = mountWithTheme(<Pagination pageCount={12} activePage={12} LinkWrapper={LinkWrapper} />);

        expect(component.find('[data-testid="next-page-button"]').hostNodes().length).toBe(0);
    });
});
