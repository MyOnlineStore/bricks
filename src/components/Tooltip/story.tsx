import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Tooltip from '.';
import Box from '../Box';
import Text from '../Text';
import Icon from '../Icon';
import { InfoCircleIcon } from '../../assets';

storiesOf('Tooltip', module).add('Default', () => (
    <Box height="90vh" justifyContent="center" alignItems="center">
        <Text>
            <Box justifyContent="center" alignItems="center">
                Hover over the icon
                <Box inline margin={[0, 6, 0, 0]} />
                <Tooltip text={text('text', 'I provide brief information')}>
                    <Icon size="medium" icon={InfoCircleIcon} />
                </Tooltip>
            </Box>
        </Text>
    </Box>
));
