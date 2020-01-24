import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Progress from '.';
import Box from '../Box';
import { IconButton } from '../..';
import { ChevronLeftIcon, ChevronRightIcon } from '../../../../assets/src';

export const Demo = () => {
    const [current, setCurrent] = useState(0);
    const total = 20;

    return (
        <>
            <Progress current={current} total={total} paginateBy={7} />
            <Box margin={[12, 0, 0, 0]}>
                <IconButton
                    icon={ChevronLeftIcon}
                    title="previous slide"
                    disabled={current === 0}
                    onClick={() => {
                        setCurrent(current - 1);
                    }}
                />
                <IconButton
                    icon={ChevronRightIcon}
                    title="next slide"
                    disabled={current === total - 1}
                    onClick={() => {
                        setCurrent(current + 1);
                    }}
                />
            </Box>
        </>
    );
};

storiesOf('Progress', module).add('Default', () => {
    return <Demo />;
});
