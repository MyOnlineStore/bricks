import { boolean, number, select } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';
import PriceTag from '.';

storiesOf('PriceTag', module)
    .add('default', () => {
        return (
            <PriceTag
                parts={[
                    { type: 'currency' , value: '€' },
                    { type: 'literal' , value: ' ' },
                    { type: 'integer', value: number('integer', 10) },
                    { type: 'decimal', value: select(
                        'decimal',
                        [',', '.'],
                        ',',
                    )},
                    { type: 'fraction', value: number('fraction', 0) },
                ]}
                hideCurrency={boolean('hideCurrency', false)}
                superScriptFraction={boolean('superScriptFraction', false)}
                showDash={boolean('showDash', false)}
                hideZeros={boolean('hideZeros', false)}
            />
        );
    });
