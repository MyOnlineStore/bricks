import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Progress from '.';

const Demo = () => {
    const [current, setCurrent] = useState(0);
    const total = 20;

    return (
        <>
            <Progress current={current} total={total} paginateBy={7} />
            <button
                disabled={current === 0}
                onClick={() => {
                    setCurrent(current - 1);
                }}
            >
                prev
            </button>
            <button
                disabled={current === total - 1}
                onClick={() => {
                    setCurrent(current + 1);
                }}
            >
                next
            </button>
        </>
    );
};

storiesOf('Progress', module).add('Default', () => {
    return <Demo />;
});
