import React, { FC, useState } from 'react';
import PreviewPane from '../../../components/PreviewPane';
import { IconButton, Popover, Text, Heading, Box } from '@myonlinestore/bricks';
import { InfoCircleIcon } from '@myonlinestore/bricks-assets';

const options = [
    {
        value: 'popover-default',
        label: 'Popover - Default',
    },
];

const examples = [
    {
        value: 'popover-default',
        component: (
            <Popover
                renderContent={() => (
                    <Box direction="column" padding={[24]}>
                        <Heading hierarchy={3} as="h3">
                            Popover
                        </Heading>
                        <Text>
                            A popover can contain headings and multiple lines but should be as short and concise as
                            possible.
                        </Text>
                    </Box>
                )}
                triggerOn="click"
                placement="top"
            >
                <IconButton title="popover" icon={<InfoCircleIcon />} />
            </Popover>
        ),
    },
];

const PopoverExamples: FC = () => {
    return <PreviewPane options={options} examples={examples} />;
};

export default PopoverExamples;
