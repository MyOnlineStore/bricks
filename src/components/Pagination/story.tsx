import { storiesOf } from '@storybook/react';
import React from 'react';
import Pagination from '.';
import { number } from '@storybook/addon-knobs';
import Box from '../Box';

storiesOf('Pagination', module).add('Default', () => {
    const pageCount = number('Number of pages', 12);

    return (
        <>
            {Array.from(Array(pageCount).keys()).map(e => (
                <Box margin={[24]}>
                    <Pagination pageCount={pageCount} activePage={e + 1} />
                </Box>
            ))}
        </>
    );
});
