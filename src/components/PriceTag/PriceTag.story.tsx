import { storiesOf } from '@storybook/react';
import React from 'react';
import PriceTag from '.';

storiesOf('PriceTag', module)
    .add('default', () => (
        <PriceTag
            parts={[
                { type: 'currency' , value: '€' },
                { type: 'literal' , value: ' ' },
                { type: 'integer', value: '10' },
                { type: 'decimal', value: ',' },
                { type: 'fraction', value: '00' },
            ]}
        />
    ))
    .add('With a hidden currency', () => (
        <PriceTag
            parts={[
                { type: 'currency' , value: '€' },
                { type: 'literal' , value: ' ' },
                { type: 'integer', value: '10' },
                { type: 'decimal', value: ',' },
                { type: 'fraction', value: '20' },
            ]}
            hideCurrency
        />
    ))
    .add('With a hidden currency and superscript franction', () => (
        <PriceTag
            parts={[
                { type: 'currency' , value: '€' },
                { type: 'literal' , value: ' ' },
                { type: 'integer', value: '10' },
                { type: 'decimal', value: ',' },
                { type: 'fraction', value: '20' },
            ]}
            superScriptFraction
            hideCurrency
        />
    ))
    .add('With a dashed fraction', () => (
        <PriceTag
            parts={[
                { type: 'currency' , value: '€' },
                { type: 'literal' , value: ' ' },
                { type: 'integer', value: '10' },
                { type: 'decimal', value: ',' },
                { type: 'fraction', value: '00' },
            ]}
            showDash
        />
    ))
    .add('With a hidden fraction on a round value', () => (
        <PriceTag
            parts={[
                { type: 'currency' , value: '€' },
                { type: 'literal' , value: ' ' },
                { type: 'integer', value: '10' },
                { type: 'decimal', value: ',' },
                { type: 'fraction', value: '00' },
            ]}
            hideZeros
        />
    ))
    .add('With a fraction in superscript', () => (
        <PriceTag
            parts={[
                { type: 'currency' , value: '€' },
                { type: 'literal' , value: ' ' },
                { type: 'integer', value: '10' },
                { type: 'decimal', value: ',' },
                { type: 'fraction', value: '20' },
            ]}
            superScriptFraction
        />
    ))
    .add('With showDash and superscript on a round value', () => (
        <PriceTag
            parts={[
                { type: 'currency' , value: '€' },
                { type: 'literal' , value: ' ' },
                { type: 'integer', value: '10' },
                { type: 'decimal', value: ',' },
                { type: 'fraction', value: '00' },
            ]}
            showDash
            superScriptFraction
        />
    ));
