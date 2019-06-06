import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import React from 'react';
import Illustration from '.';
import Box from '../Box';
import Text from '../Text';
import balloon from '../../assets/illustrations/balloon.color.svg';

const convertToExportName = (filename: string): string => {
    const stripped = filename.replace('.svg', '');

    const camelCased = stripped.replace(/(?:^\w|[A-Z]|\b\w|\s|[-_.]+)/g, (match, index) => {
        if (!/^[a-z0-9]+$/i.test(match)) return '';

        return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });

    return `${camelCased}Illustration`;
};

storiesOf('Illustration', module)
    .add('default', () => (
        <Box wrap margin={[12]}>
            {ILLUSTRATION_FILES.map(illustration => (
                <Box basis="33.33%" justifyContent="space-around" direction="column" alignItems="center">
                    <Illustration illustration={require(`../../assets/illustrations/${illustration}`)} />
                    <Text>{convertToExportName(illustration)}</Text>
                </Box>
            ))}
        </Box>
    ))
    .add(
        'Props',
        withInfo({ inline: true })(() => {
            return <Illustration illustration={balloon} />;
        }),
    );
