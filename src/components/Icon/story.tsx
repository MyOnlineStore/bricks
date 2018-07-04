import { color } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Icon from '.';
import trbl from '../../utility/trbl';
import Box from '../Box';
import Spacer from '../Spacer';
import Text from '../Text';
import { LargeIcons, MediumIcons, SmallIcons } from './types';

/* tslint:disable */
const smallIconKeys = Object.keys(SmallIcons).filter(key => SmallIcons[key as any].match('<svg'));
const mediumIcons = Object.keys(MediumIcons).filter(key => MediumIcons[key as any].match('<svg'));
const largeIconKeys = Object.keys(LargeIcons).filter(key => LargeIcons[key as any].match('<svg'));
/* tslint:enable */

storiesOf('Icon', module)
<<<<<<< HEAD
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
    .add('Medium icons', () => {
        const iconColor = color('fill', '#000');

        /* tslint:disable */
        return (
            <Box wrap margin={trbl(24)}>
                {mediumIcons.map(icon => (
                    <Box basis={'50%'} alignItems={'center'} margin={trbl(12, 0)} key={icon}>
                        <Icon color={iconColor} size="medium" icon={icon as any} />
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
=======
    .add('Small icon', () => <Icon size="small" icon="checkmark" />)
    .add('Medium icon', () => <Icon size="medium" icon="heartO" />)
    .add('Large icon', () => <Icon size="large" icon="mos" />)
    .add('With overwritten fill', () => <Icon color="BlueViolet" size="large" icon="heart" />)
    .add('With some text', () => (
        <div>
            <Icon size="small" icon="checkmark" />
            <span> With some text</span>
            <Spacer offset={trbl(12, 0, 0, 0)}>
                <Icon size="medium" icon="lightbulb" />
                <span> With some other text</span>
                <Spacer offset={trbl(18, 0, 0, 0)}>
                    <Icon size="large" icon="mos" />
                    <span> With some other other text</span>
                </Spacer>
            </Spacer>
        </div>
    ));
>>>>>>> f02804f7dd5f08fa67efc61215009fef655f93af
