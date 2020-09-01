import React, { useState, FC } from 'react';
import { select, text, boolean, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import TextField from '.';
import CurrencyField from '../CurrencyField';
import NumberField from '../NumberField';

type PropsType = {
    withClearButton?: boolean;
    withFeedback?: boolean;
    isNumber?: boolean;
    isCurrency?: boolean;
};

const Demo: FC<PropsType> = (props): JSX.Element => {
    const [stringValue, setStringValue] = useState('');
    const [numberValue, setNumberValue] = useState(19.12);
    const locale = select('locale', ['nl-NL', 'en-GB', 'de-DE'], 'nl-NL');

    const sharedProps = {
        prefix: text('Prefix', 'Username'),
        suffix: !props.withClearButton ? text('Suffix', '$') : undefined,
        placeholder: text('Placeholder', 'This is a placeholder'),
        name: 'fieldname',
        disabled: boolean('disabled', false),
        onClear: props.withClearButton
            ? () => {
                  setStringValue('');
              }
            : undefined,
        feedback: props.withFeedback
            ? {
                  message: text('feedback message', 'This is a feedback message'),
                  severity: select('feedback severity', ['error', 'success', 'info', 'warning'], 'error'),
              }
            : undefined,
    };

    const numberProps = {
        value: numberValue,
        onChange: setNumberValue,
        disableNegative: boolean('disable negative numbers', false),
        allowDecimals: boolean('allowDecimals', false),
        minimumFractionDigits: number('minimumFractionDigits', 0),
        maximumFractionDigits: number('maximumFractionDigits', 2),
        characterLimit: number('characterLimit', 10),
        maximumValue: number('maximumValue', 1000000),
        locale,
    };

    const currencyProps = {
        value: numberValue,
        onChange: setNumberValue,
        disableNegative: boolean('disable negative numbers', false),
        allowDecimals: boolean('allowDecimals', false),
        characterLimit: number('characterLimit', 10),
        maximumValue: number('maximumValue', 1000000),
        locale,
    };

    const textProps = {
        value: stringValue,
        onChange: setStringValue,
    };

    if (props.isCurrency) {
        return (
            <CurrencyField
                {...sharedProps}
                {...currencyProps}
                currency={select('currency', ['USD', 'EUR', 'JPY', 'GBP', 'AUD'], 'EUR')}
                minor={boolean('minor', false)}
                feedback={{
                    severity: 'info',
                    message: `${numberValue}`,
                }}
            />
        );
    }

    if (props.isNumber) {
        return <NumberField {...sharedProps} {...numberProps} />;
    }

    return <TextField {...sharedProps} {...textProps} />;
};

storiesOf('TextField', module).add('Default', () => <Demo />);

storiesOf('TextField', module).add('With clear button', () => <Demo withClearButton />);

storiesOf('TextField', module).add('With Feedback', () => <Demo withFeedback />);

storiesOf('TextField', module).add('With Number formatting', () => <Demo isNumber />);

storiesOf('TextField', module).add('With Currency formatting', () => <Demo isCurrency />);
