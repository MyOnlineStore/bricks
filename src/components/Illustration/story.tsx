import { storiesOf } from '@storybook/react';
import React from 'react';
import Illustration, { IllustrationPropsType } from '.';
import Box from '../Box';
import { Illustrations } from './types';

/* tslint:disable */
const IllustrationKeys = Object.keys(Illustrations).filter(key => Illustrations[key as any].match('<svg'));
/* tslint:enable */
storiesOf('Illustration', module).add('default', () => (
    <>
        {IllustrationKeys.map(illustration => (
            <Box justifyContent="space-around">
                <Illustration illustration={illustration as IllustrationPropsType['illustration']} />
            </Box>
        ))}
    </>
));
