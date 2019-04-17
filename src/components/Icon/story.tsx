import { color } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Icon from '.';
import trbl from '../../utility/trbl';
import Box from '../Box';
import Text from '../Text';

const convertToExportName = (filename: string): string => {
    const stripped = filename.replace('.svg', '');

    const camelCased = stripped.replace(/(?:^\w|[A-Z]|\b\w|\s|[-_]+)/g, (match, index) => {
        if (!/^[a-z0-9]+$/i.test(match)) return '';

        return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });

    return `${camelCased}Icon`;
};

storiesOf('Icon', module)
    .add('Small icons', () => {
        const iconColor = color('fill', '#000');

        return (
            <Box wrap margin={trbl(12)}>
                {ICON_FILES.filter(icon => icon.indexOf('-small') !== -1).map(icon => (
                    <Box basis={'33.333333%'} alignItems={'center'} margin={trbl(12, 0)} key={icon}>
                        <Icon color={iconColor} size="small" icon={require(`../../assets/icons/${icon}`)} />
                        <Box margin={trbl(0, 0, 0, 24)}>
                            <Text>{convertToExportName(icon)}</Text>
                        </Box>
                    </Box>
                ))}
            </Box>
        );
    })
    .add('Medium icons', () => {
        const iconColor = color('fill', '#000');

        return (
            <Box wrap margin={trbl(12)}>
                {ICON_FILES.filter(icon => icon.indexOf('-large') === -1 && icon.indexOf('-small') === -1).map(icon => (
                    <Box basis={'33.333333%'} alignItems={'center'} margin={trbl(12, 0)} key={icon}>
                        <Icon color={iconColor} size="medium" icon={require(`../../assets/icons/${icon}`)} />
                        <Box margin={trbl(0, 0, 0, 24)}>
                            <Text>{convertToExportName(icon)}</Text>
                        </Box>
                    </Box>
                ))}
            </Box>
        );
    })
    .add('Large icons', () => {
        const iconColor = color('fill', '#000');

        return (
            <Box wrap margin={trbl(12)}>
                {ICON_FILES.filter(icon => icon.indexOf('-large') !== -1).map(icon => (
                    <Box basis={'33.333333%'} alignItems={'center'} margin={trbl(12, 0)} key={icon}>
                        <Icon color={iconColor} size="large" icon={require(`../../assets/icons/${icon}`)} />
                        <Box margin={trbl(0, 0, 0, 24)}>
                            <Text>{convertToExportName(icon)}</Text>
                        </Box>
                    </Box>
                ))}
            </Box>
        );
    })
    .add('Large icons', () => {
        const iconColor = color('fill', '#000');

        return (
            <Box wrap margin={trbl(12)}>
                {ICON_FILES.filter(icon => icon.indexOf('-large') !== -1).map(icon => (
                    <Box basis={'33.333333%'} alignItems={'center'} margin={trbl(12, 0)} key={icon}>
                        <Icon color={iconColor} size="medium" icon={require(`../../assets/icons/${icon}`)} />
                        <Box margin={trbl(0, 0, 0, 24)}>
                            <Text>{convertToExportName(icon)}</Text>
                        </Box>
                    </Box>
                ))}
            </Box>
        );
    });
