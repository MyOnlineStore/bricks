import React, { useState, FC } from 'react';
import { select, text, boolean, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import TextField from '.';
import SeverityType from '../../types/SeverityType';
import { Checkbox, IconButton, Box } from '../..';
import { SearchIcon } from '@myonlinestore/bricks-assets';
import CurrencyField from '../CurrencyField';
import NumberField from '../NumberField';

type PropsType = {
    withClearButton?: boolean;
    withFeedback?: boolean;
    isNumber?: boolean;
    isCurrency?: boolean;
    hasComponentPrefix?: boolean;
};

const Demo: FC<PropsType> = (props): JSX.Element => {
    const [stringValue, setStringValue] = useState('');
    const [numberValue, setNumberValue] = useState(19.12);
    const [isChecked, setChecked] = useState(true);
    const locale = select('locale', ['nl-NL', 'en-GB', 'de-DE'], 'nl-NL');

    const sharedProps = {
        prefix: props.hasComponentPrefix ? (
            <Box padding={[0, 12]}>
                <Checkbox
                    checked={isChecked}
                    value={'1'}
                    name="TextfieldCheckbox"
                    onChange={() => {
                        setChecked(!isChecked);
                    }}
                />
            </Box>
        ) : (
            text('Prefix', 'Username')
        ),
        suffix: !props.withClearButton ? (
            props.hasComponentPrefix ? (
                <IconButton
                    title="search"
                    icon={<SearchIcon />}
                    onClick={() => {
                        alert(`Search for "${stringValue}"`);
                    }}
                />
            ) : (
                text('Suffix', '$')
            )
        ) : (
            undefined
        ),
        palceholder: text('Placeholder', 'This is a placeholder'),
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
                  severity: select('feedback type', ['success', 'warning', 'error', 'info'], 'error') as SeverityType,
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
                {...numberProps}
                currency={select('currency', ['USD', 'EUR', 'JPY', 'GBP', 'AUD'], 'EUR')}
                feedback={{
                    severity: 'info',
                    message: `The reported value of this field is: ${numberValue}`,
                }}
                locale={locale}
                minor={boolean('minor', false)}
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

storiesOf('TextField', module).add('With checkbox prefix', () => <Demo hasComponentPrefix />);
