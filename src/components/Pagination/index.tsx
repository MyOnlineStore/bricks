import React, { FC } from 'react';
import { ChevronRightIcon, ChevronLeftIcon } from '../../assets';
import Icon from '../Icon';
import Text from '../Text';
import { StyledPaginationDots, StyledPaginationButton } from './style';
import { Box } from '../..';

type PropsType = {
    /** the amount of pages that has to be displayed */
    total: number;
    /** the page number that is currently active and should be highlighted */
    current: number;
    /** the threshold for splitting the pages into groups */
    maxPagesWithoutSplitting?: number;
    /** when splitting the pages into groups, this is the max size of the group. please use odd numbers for symmetry sake */
    maxPageGroupSize?: number;
    /** this is the character(s) shown between groups when pages are split */
    groupingSpacer?: string;
    /** wrap the clickable elements in this functional component, which recieves a prop pageNumber to built a link with, for example */
    LinkWrapper: FC<{ pageNumber: number }>;
};

const Pagination: FC<PropsType> = ({
    total: pageCount = 12,
    current: activePage,
    LinkWrapper,
    maxPagesWithoutSplitting: maxPagesWithoutConcat = 5,
    maxPageGroupSize = 3,
    groupingSpacer = '...',
}): JSX.Element => {
    let pageArray: Array<string | number> = Array.from(Array(pageCount), (_, index) => index + 1);

    if (pageCount > maxPagesWithoutConcat) {
        if (activePage <= maxPageGroupSize) {
            pageArray = [...Array.from(Array(maxPageGroupSize), (_, index) => index + 1), groupingSpacer, pageCount];
        } else if (activePage > maxPageGroupSize && activePage <= pageCount - maxPageGroupSize) {
            pageArray = [
                1,
                groupingSpacer,
                ...Array.from(
                    Array(maxPageGroupSize),
                    (_, index) => activePage - Math.floor(maxPageGroupSize / 2) + index,
                ),
                groupingSpacer,
                pageCount,
            ];
        } else if (activePage > pageCount - maxPageGroupSize) {
            pageArray = [
                1,
                groupingSpacer,
                ...Array.from(Array(maxPageGroupSize), (_, index) => pageCount - index).reverse(),
            ];
        }
    }

    return (
        <Box alignItems="center" justifyContent="center">
            {activePage > 1 && (
                <StyledPaginationButton isArrow data-testid="previous-page-button">
                    <LinkWrapper pageNumber={activePage - 1}>
                        <Icon icon={ChevronLeftIcon} size="medium" />
                    </LinkWrapper>
                </StyledPaginationButton>
            )}
            {Array.from(pageArray, (e, i) => {
                if (e === groupingSpacer) {
                    return (
                        <Text key={i} as="span">
                            <StyledPaginationDots data-testid="pages-spacer">{e}</StyledPaginationDots>
                        </Text>
                    );
                }

                return (
                    <Text key={i} as="span">
                        <StyledPaginationButton active={activePage === e} data-testid="page-button">
                            <LinkWrapper pageNumber={e as number}>{e}</LinkWrapper>
                        </StyledPaginationButton>
                    </Text>
                );
            })}
            {activePage < pageCount && (
                <StyledPaginationButton isArrow data-testid="next-page-button">
                    <LinkWrapper pageNumber={activePage + 1}>
                        <Icon icon={ChevronRightIcon} size="medium" />
                    </LinkWrapper>
                </StyledPaginationButton>
            )}
        </Box>
    );
};

export default Pagination;
export { PropsType };
