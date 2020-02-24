import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Tooltip from '.';
import Box from '../Box';
import Text from '../Text';
import Icon from '../Icon';
import { InfoCircleIcon, CopyIcon } from '@myonlinestore/bricks-assets';
import IconButton from '../IconButton';

storiesOf('Tooltip', module)
    .add('Internal state on hover', () => (
        <Box height="90vh" direction="column" justifyContent="center" alignItems="center">
            <Text>
                <Box justifyContent="center" alignItems="center">
                    Hover over the icon
                    <Box inline margin={[0, 6, 0, 0]} />
                    <Tooltip text={text('text', 'I provide brief information')}>
                        <Icon size="medium" icon={<InfoCircleIcon />} />
                    </Tooltip>
                </Box>
            </Text>
        </Box>
    ))
    .add('Internal state on click', () => (
        <Box height="90vh" direction="column" justifyContent="center" alignItems="center">
            <Text>
                <Box justifyContent="center" alignItems="center">
                    Copy
                    <Tooltip triggerOn="click" text={text('text', 'Copied!')}>
                        <IconButton icon={<CopyIcon />} title="Copy" />
                    </Tooltip>
                </Box>
            </Text>
        </Box>
    ))
    .add('External state', () => (
        <Box height="90vh" direction="column" justifyContent="center" alignItems="center">
            <Text>
                <Box justifyContent="center" alignItems="center">
                    Copy
                    <Tooltip
                        show={boolean('show', true)}
                        onClickOutside={() => {
                            alert('Clicked outside');
                        }}
                        text="Copied!"
                    >
                        <IconButton icon={<CopyIcon />} title="Copy" />
                    </Tooltip>
                </Box>
            </Text>
        </Box>
    ));
