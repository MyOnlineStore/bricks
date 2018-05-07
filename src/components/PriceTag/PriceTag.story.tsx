import { boolean, number, select, text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';
import PriceTag from '.';

storiesOf('PriceTag', module)
    .add('Default', () => (
        <PriceTag
            parts={[
                { type: 'currency' , value: '€' },
                { type: 'literal' , value: ' ' },
                { type: 'integer', value: number('integer', 12) },
                { type: 'decimal', value: select(
                    'decimal',
                    [',', '.'],
                    ',',
                )},
                { type: 'fraction', value: select(
                    'fraction',
                    ['00', '34'],
                    '00',
                )},
            ]}
            hideCurrency={boolean('hideCurrency', false)}
            superScriptFraction={boolean('superScriptFraction', false)}
            showDash={boolean('showDash', false)}
            hideZeros={boolean('hideZeros', false)}
            displayType={select(
                'displayType',
                ['action', 'base', 'default'],
                'default',
            )}
            freeLabel={text('freeLabel', 'free!')}
        />
    ));
