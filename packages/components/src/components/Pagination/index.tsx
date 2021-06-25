import React, { FC } from 'react';
import Icon from '../Icon';
import Text from '../Text';
import { StyledPageButton, StyledEllipsis, StyledNav } from './style';

type PropsType = {
    totalPages: number;
    currentPage: number;
    onNavigate(pageNumer: number): void;
    'data-testid'?: string;
};

export enum TestIds {
    firstPage = 'first-page',
    centerPage = 'center-page',
    lastPage = 'last-page',
    prevPage = 'prev-page',
    nextPage = 'nex-page',
    leftDots = 'left-dots',
    rightDots = 'right-dots',
}

const Pagination: FC<PropsType> = props => {
    const testId = props['data-testid'] ? props['data-testid'] : 'pagination';

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
            current={props.currentPage === 1}
            data-testid={`${testId}-${TestIds.firstPage}`}
            onClick={() => navigate(1)}
        >
            <Text as="span">1</Text>
        </StyledPageButton>,
    ];

    if (props.currentPage !== 1) {
        leftButtons.unshift(
            <StyledPageButton
                key="page-prev"
                aria-label="Previous page"
                data-testid={`${testId}-${TestIds.prevPage}`}
                onClick={() => navigate(props.currentPage - 1)}
            >
                <Icon icon="chevron-left" size="medium" />
            </StyledPageButton>,
        );
    }

    const centerButtons = [];

    const start =
        props.currentPage - 1 > 1
            ? props.currentPage === props.totalPages && props.totalPages > 3
                ? props.currentPage - 2
                : props.currentPage - 1
            : 2;

    const end =
        props.currentPage + 1 < props.totalPages
            ? props.currentPage === 1 && props.totalPages > 3
                ? props.currentPage + 2
                : props.currentPage + 1
            : props.totalPages - 1;

    for (let page = start; page <= end; page++) {
        centerButtons.push(
            <StyledPageButton
                key={`page-${page}`}
                current={props.currentPage === page}
                aria-label={`Page ${page}`}
                aria-current={props.currentPage === page ? 'page' : undefined}
                data-testid={`${testId}-${TestIds.centerPage}`}
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
                data-testid={`${testId}-${TestIds.lastPage}`}
                onClick={() => navigate(props.totalPages)}
            >
                <Text as="span">{props.totalPages}</Text>
            </StyledPageButton>,
        );
    }

    if (props.currentPage !== props.totalPages) {
        rightButtons.push(
            <StyledPageButton
                key="page-next"
                aria-label="Next page"
                data-testid={`${testId}-${TestIds.nextPage}`}
                onClick={() => navigate(props.currentPage + 1)}
            >
                <Icon icon="chevron-right" size="medium" />
            </StyledPageButton>,
        );
    }

    return (
        <StyledNav aria-label="Pagination">
            {leftButtons}
            {props.currentPage > 3 && props.totalPages > 4 && (
                <StyledEllipsis aria-hidden data-testid={`${testId}-${TestIds.leftDots}`}>
                    <Text>...</Text>
                </StyledEllipsis>
            )}
            {centerButtons}
            {props.currentPage < props.totalPages - 2 && props.totalPages > 4 && (
                <StyledEllipsis aria-hidden data-testid={`${testId}-${TestIds.rightDots}`}>
                    <Text>...</Text>
                </StyledEllipsis>
            )}
            {rightButtons}
        </StyledNav>
    );
};

export default Pagination;
