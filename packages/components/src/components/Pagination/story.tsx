import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Pagination from '.';
import Box from '../Box';
import { number } from '@storybook/addon-knobs';

storiesOf('Pagination', module).add('Default', () => {
    const totalPages = number('totalPages', 5);
    const [currentPage, setCurrentPage] = useState(1);

    const navigate = (newPage: number) => {
        setCurrentPage(newPage);
    };

    return (
        <Box justifyContent="center">
            <Pagination totalPages={totalPages} currentPage={currentPage} onNavigate={navigate} />
        </Box>
    );
});
