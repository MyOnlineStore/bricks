import { boolean, select, text, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';
import PriceTag from '.';
import Text from '../Text';

storiesOf('PriceTag', module)
    .add('Default', () => (
        <Text>
            <PriceTag
                value={number('price', 1.0)}
                freeLabel={text('freeLabel', 'free!')}
                currency={select('currency', ['USD', 'EUR', 'JPY', 'GBP', 'AUD'], 'USD')}
                locale={select('locale', ['en-US', 'nl-NL', 'de-DE', 'jp-JP'], 'en-US')}
                fractionFormat={select('fractionFormat', [undefined, 'dash', 'none'], undefined)}
                hideCurrency={boolean('hideCurrency', false)}
                superScriptFraction={boolean('superScriptFraction', false)}
                strikethrough={boolean('strikethrough', false)}
            />
        </Text>
    ))
    .add(
        'Props',
        withInfo({ inline: true })(() => {
            return <PriceTag value={1.0} locale="nl-NL" currency="EUR" />;
        }),
    );
