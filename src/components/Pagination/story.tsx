import { storiesOf } from '@storybook/react';
import React, { FC } from 'react';
import Pagination from '.';
import { number, text } from '@storybook/addon-knobs';
import Box from '../Box';
import styled from 'styled-components';

storiesOf('Pagination', module).add('Default', () => {
    const pageCount = number('Number of pages', 12);

    const StyledLink = styled.a`
        text-decoration: none;
        color: inherit;

        &:hover {
            text-decoration: underline;
            color: #6bde78;
        }
    `;

    const LinkWrapper: FC<{ pageNumber: number }> = props => (
        <StyledLink href={`#/goto/page/${props.pageNumber}`}>{props.children}</StyledLink>
    );

    return (
        <>
            {Array.from(Array(pageCount).keys()).map(e => (
                <Box margin={[24]}>
                    <Pagination
                        pageCount={pageCount}
                        activePage={e + 1}
                        LinkWrapper={LinkWrapper}
                        groupingSpacer={text('Dots string', '...')}
                        maxPagesWithoutSplitting={number('Max number of pages before splitting', 5)}
                        maxPageGroupSize={number('Max number of pages in a group', 3)}
                    />
                </Box>
            ))}
        </>
    );
});
