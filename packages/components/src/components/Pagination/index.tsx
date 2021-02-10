import { ChevronLeftIcon, ChevronRightIcon } from '@myonlinestore/bricks-assets';
import React, { FC } from 'react';
import Box from '../Box';
import Icon from '../Icon';
import Text from '../Text';
import { StyledPageButton, StyledEllipsis } from './style';

type PropsType = {
    totalPages: number;
    currentPage: number;
    onNavigate(pageNumer: number): void;
};

const Pagination: FC<PropsType> = props => {
    /**
     * Number of pages around the current page in the center
     */
    const pagePadding = 1;

    const navigate = (page: number) => {
        if (props.onNavigate && props.currentPage !== page) {
            props.onNavigate(page);
        }
    };

    const leftButtons = [
        <StyledPageButton
            key="page-first"
            aria-label={`Page 1`}
            aria-current={props.currentPage === 1 ? 'page' : undefined}
            onClick={() => navigate(1)}
            current={props.currentPage === 1}
        >
            <Text as="span">1</Text>
        </StyledPageButton>,
    ];

    if (props.currentPage !== 1) {
        leftButtons.unshift(
            <StyledPageButton
                key="page-prev"
                aria-label="Previous page"
                onClick={() => navigate(props.currentPage - 1)}
            >
                <Icon icon={<ChevronLeftIcon />} size="medium" />
            </StyledPageButton>,
        );
    }

    const centerButtons = [];

    const start =
        props.currentPage - pagePadding > 1
            ? props.currentPage === props.totalPages && pagePadding === 1 && props.totalPages > 3
                ? props.currentPage - pagePadding - 1
                : props.currentPage - pagePadding
            : 2;

    const end =
        props.currentPage + pagePadding < props.totalPages
            ? props.currentPage === 1 && pagePadding === 1 && props.totalPages > 3
                ? props.currentPage + pagePadding + 1
                : props.currentPage + pagePadding
            : props.totalPages - 1;

    for (let page = start; page <= end; page++) {
        centerButtons.push(
            <StyledPageButton
                key={`page-${page}`}
                current={props.currentPage === page}
                aria-label={`Page ${page}`}
                aria-current={props.currentPage === page ? 'page' : undefined}
                onClick={() => navigate(page)}
            >
                <Text as="span">{page}</Text>
            </StyledPageButton>,
        );
    }

    const rightButtons = [];

    if (props.totalPages > 1) {
        rightButtons.push(
            <StyledPageButton
                key="page-last"
                current={props.currentPage === props.totalPages}
                aria-label={`Page ${props.totalPages}`}
                aria-current={props.currentPage === props.totalPages ? 'page' : undefined}
                onClick={() => navigate(props.totalPages)}
            >
                <Text as="span">{props.totalPages}</Text>
            </StyledPageButton>,
        );
    }

    if (props.currentPage !== props.totalPages) {
        rightButtons.push(
            <StyledPageButton key="page-next" aria-label="Next page" onClick={() => navigate(props.currentPage + 1)}>
                <Icon icon={<ChevronRightIcon />} size="medium" />
            </StyledPageButton>,
        );
    }

    return (
        <nav aria-label="Pagination">
            <Box margin={[-3]} wrap>
                {leftButtons}
                {props.currentPage > pagePadding + 2 && props.totalPages > pagePadding * 2 && props.totalPages > 4 && (
                    <StyledEllipsis aria-hidden>
                        <Text>...</Text>
                    </StyledEllipsis>
                )}
                {centerButtons}
                {props.currentPage < props.totalPages - pagePadding - 1 &&
                    props.totalPages > pagePadding * 2 &&
                    props.totalPages > 4 && (
                        <StyledEllipsis aria-hidden>
                            <Text>...</Text>
                        </StyledEllipsis>
                    )}
                {rightButtons}
            </Box>
        </nav>
    );
};

export default Pagination;
