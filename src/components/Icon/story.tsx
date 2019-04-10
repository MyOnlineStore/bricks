import { color } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Icon from '.';
import Box from '../Box';
import Text from '../Text';

storiesOf('Icon', module)
    .add('small icons', () => {
        const iconColor = color('fill', '#000');

        return (
            <Box wrap margin={[12]}>
                {ICON_FILES.filter(icon => icon.indexOf('-small') !== -1).map(icon => (
                    <Box basis={'33.333333%'} alignItems={'center'} margin={[12, 0]} key={icon}>
                        <Icon color={iconColor} size="small" icon={require(`../../assets/icons/${icon}`)} />
                        <Box margin={[0, 0, 0, 24]}>
                            <Text>{icon}</Text>
                        </Box>
                    </Box>
                ))}
            </Box>
        );
    })
    .add('medium icons', () => {
        const iconColor = color('fill', '#000');

        return (
            <Box wrap margin={[12]}>
                {ICON_FILES.filter(icon => icon.indexOf('-large') === -1 && icon.indexOf('-small') === -1).map(icon => (
                    <Box basis={'33.333333%'} alignItems={'center'} margin={[12, 0]} key={icon}>
                        <Icon color={iconColor} size="medium" icon={require(`../../assets/icons/${icon}`)} />
                        <Box margin={[0, 0, 0, 24]}>
                            <Text>{icon}</Text>
                        </Box>
                    </Box>
                ))}
            </Box>
        );
    });
