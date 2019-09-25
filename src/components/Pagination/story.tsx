import { storiesOf } from '@storybook/react';
import React, { FC } from 'react';
import Pagination from '.';
import { number, text } from '@storybook/addon-knobs';
import Box from '../Box';

storiesOf('Pagination', module).add('Default', () => {
    const pageCount = number('Number of pages', 12);

    const LinkWrapper: FC<{ pageNumber: number }> = props => (
        <a href={`#/goto/page/${props.pageNumber}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            {props.children}
        </a>
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
