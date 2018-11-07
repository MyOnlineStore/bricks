import { boolean, select, text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';
import PriceTag from '.';
import Text from '../Text';

storiesOf('PriceTag', module).add('Default', () => (
    <Text>
        <PriceTag
            value={text('price', '1.00')}
            freeLabel={text('freeLabel', 'free!')}
            currency={select('currency', ['USD', 'EUR', 'JPY', 'GBP', 'AUD'], 'USD')}
            locale={select('locale', ['en-US', 'nl-NL', 'de-DE', 'jp-JP'], 'en-US')}
            fractionFormat={select('fractionFormat', [undefined, 'dash', 'none'], undefined)}
            hideCurrency={boolean('hideCurrency', false)}
            superScriptFraction={boolean('superScriptFraction', false)}
            strikethrough={boolean('strikethrough', false)}
        />
    </Text>
));
