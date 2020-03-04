import React, { FC } from 'react';
import PreviewPane from '../../../components/PreviewPane';
import { IconButton, Tooltip } from '@myonlinestore/bricks';
import { InfoCircleIcon } from '@myonlinestore/bricks-assets';

const options = [
    {
        value: 'tooltip-default',
        label: 'Tooltip - Default',
    },
];

const examples = [
    {
        value: 'tooltip-default',
        component: (
            <Tooltip text="A concise tooltip" triggerOn="hover">
                <IconButton title="Tooltip" icon={<InfoCircleIcon />} />
            </Tooltip>
        ),
    },
];

const TooltipExamples: FC = () => {
    return <PreviewPane options={options} examples={examples} />;
};

export default TooltipExamples;
