import React, { FC } from 'react';
import { ChevronRightIcon, ChevronLeftIcon } from '../../assets';
import Icon from '../Icon';
import Text from '../Text';
import { StyledPaginationItem } from './style';
import { Box } from '../..';

type PropsType = {
    pageCount: number;
    activePage: number;
};

const Pagination: FC<PropsType> = ({ pageCount, activePage }): JSX.Element => {
    const maxPagesWithoutConcat = 5;
    const maxPageGroupSize = 3;

    let pageArray: Array<string | number> = Array.from(Array(pageCount), (_, x) => x + 1);

    if (pageCount > maxPagesWithoutConcat) {
        if (activePage <= maxPageGroupSize) {
            pageArray = [...Array.from(Array(maxPageGroupSize), (_, x) => x + 1), '...', pageCount];
        } else if (activePage >= 4 && activePage <= pageCount - 3) {
            pageArray = [
                1,
                '...',
                ...Array.from(Array(maxPageGroupSize), (_, x) => activePage - Math.floor(maxPageGroupSize / 2) + x),
                '...',
                pageCount,
            ];
        } else if (activePage > pageCount - 3) {
            pageArray = [1, '...', ...Array.from(Array(maxPageGroupSize), (_, x) => pageCount - x).reverse()];
        }
    }

    return (
        <Box>
            {activePage > 1 && (
                <StyledPaginationItem isArrow>
                    <Icon icon={ChevronLeftIcon} size="medium" />
                </StyledPaginationItem>
            )}
            {Array.from(pageArray, (e, i) => {
                return (
                    <StyledPaginationItem key={i} active={activePage === e}>
                        <Text>{e}</Text>
                    </StyledPaginationItem>
                );
            })}
            {activePage < pageCount && (
                <StyledPaginationItem isArrow>
                    <Icon icon={ChevronRightIcon} size="medium" />
                </StyledPaginationItem>
            )}
        </Box>
    );
};

export default Pagination;
export { PropsType };
