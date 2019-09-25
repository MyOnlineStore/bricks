import React, { FC } from 'react';
import { ChevronRightIcon, ChevronLeftIcon } from '../../assets';
import Icon from '../Icon';
import Text from '../Text';
import { StyledPaginationDots, StyledPaginationButton } from './style';
import { Box } from '../..';

type PropsType = {
    pageCount: number;
    activePage: number;
    maxPagesWithoutSplitting?: number;
    maxPageGroupSize?: number;
    groupingSpacer?: string;
    LinkWrapper: FC<{ pageNumber: number }>;
};

const Pagination: FC<PropsType> = ({
    pageCount = 12,
    activePage,
    LinkWrapper,
    maxPagesWithoutSplitting: maxPagesWithoutConcat = 5,
    maxPageGroupSize = 3,
    groupingSpacer = '...',
}): JSX.Element => {
    let pageArray: Array<string | number> = Array.from(Array(pageCount), (_, x) => x + 1);

    if (pageCount > maxPagesWithoutConcat) {
        if (activePage <= maxPageGroupSize) {
            pageArray = [...Array.from(Array(maxPageGroupSize), (_, x) => x + 1), groupingSpacer, pageCount];
        } else if (activePage >= 4 && activePage <= pageCount - 3) {
            pageArray = [
                1,
                groupingSpacer,
                ...Array.from(Array(maxPageGroupSize), (_, x) => activePage - Math.floor(maxPageGroupSize / 2) + x),
                groupingSpacer,
                pageCount,
            ];
        } else if (activePage > pageCount - 3) {
            pageArray = [1, groupingSpacer, ...Array.from(Array(maxPageGroupSize), (_, x) => pageCount - x).reverse()];
        }
    }

    return (
        <Box alignItems="center" justifyContent="center">
            {activePage > 1 && (
                <StyledPaginationButton isArrow>
                    <LinkWrapper pageNumber={activePage - 1}>
                        <Icon icon={ChevronLeftIcon} size="medium" />
                    </LinkWrapper>
                </StyledPaginationButton>
            )}
            {Array.from(pageArray, (e, i) => {
                if (e === groupingSpacer) {
                    return (
                        <Text>
                            <StyledPaginationDots key={i}>{e}</StyledPaginationDots>
                        </Text>
                    );
                }

                return (
                    <Text>
                        <StyledPaginationButton active={activePage === e}>
                            <LinkWrapper pageNumber={e as number}>{e}</LinkWrapper>
                        </StyledPaginationButton>
                    </Text>
                );
            })}
            {activePage < pageCount && (
                <StyledPaginationButton isArrow>
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
