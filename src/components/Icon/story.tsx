import { color } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Icon from '.';
import trbl from '../../utility/trbl';
import Box from '../Box';
import Spacer from '../Spacer';
import Text from '../Text';
import { LargeIcons, SmallIcons } from './types';

/* tslint:disable */
const smallIconKeys = Object.keys(SmallIcons).filter(key => SmallIcons[key as any].match('<svg'));
const largeIconKeys = Object.keys(LargeIcons).filter(key => LargeIcons[key as any].match('<svg'));
/* tslint:enable */

storiesOf('Icon', module)
    .add('Small icons', () => {
        const iconColor = color('fill', '#000');

        /* tslint:disable */
        return (
            <Box wrap margin={trbl(12)}>
                {smallIconKeys.map(icon => (
                    <Box basis={'33.333333%'} alignItems={'center'} margin={trbl(12, 0)} key={icon}>
                        <Icon color={iconColor} size="small" icon={icon as any} />
                        <Spacer offset={trbl(0, 0, 0, 24)}>
                            <Text>{icon}</Text>
                        </Spacer>
                    </Box>
                ))}
            </Box>
        );
        /* tslint:enable */
    })
    .add('Large icons', () => {
        const iconColor = color('fill', '#000');

        /* tslint:disable */
        return (
            <Box wrap margin={trbl(24)}>
                {largeIconKeys.map(icon => (
                    <Box basis={'50%'} alignItems={'center'} margin={trbl(12, 0)} key={icon}>
                        <Icon color={iconColor} size="large" icon={icon as any} />
                        <Spacer offset={trbl(0, 0, 0, 24)}>
                            <Text>{icon}</Text>
                        </Spacer>
                    </Box>
                ))}
            </Box>
        );
        /* tslint:enable */
    });
