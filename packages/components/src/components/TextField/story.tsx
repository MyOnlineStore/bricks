import React, { useState, FC } from 'react';
import { select, text, boolean, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import TextField from '.';
import SeverityType from '../../types/SeverityType';
import { Checkbox, IconButton, Box } from '../..';
import { SearchIcon } from '../../assets';

type PropsType = {
    withClearButton?: boolean;
    withFeedback?: boolean;
    isNumber?: boolean;
    isCurrency?: boolean;
    hasComponentPrefix?: boolean;
};

const Demo: FC<PropsType> = (props): JSX.Element => {
    const [stringValue, setStringValue] = useState('');
    const [numberValue, setNumberValue] = useState(10);
    const [isChecked, setChecked] = useState(true);

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
                    icon={SearchIcon}
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
        locale: select('locale', ['nl_NL', 'en_GB'], 'nl_NL'),
    };

    const textProps = {
        value: stringValue,
        onChange: setStringValue,
    };

    if (props.isCurrency) {
        return (
            <TextField.Currency
                {...sharedProps}
                {...numberProps}
                currency={select('currency', ['USD', 'EUR', 'JPY', 'GBP', 'AUD'], 'USD')}
                feedback={{
                    severity: 'info',
                    message: `The reported value of this field is: ${numberValue}`,
                }}
                locale={select(
                    'locale',
                    ['en-US', 'nl-NL', 'de-DE', 'jp-JP', 'en_US', 'nl_NL', 'de_DE', 'jp_JP'],
                    'en-US',
                )}
                minor={boolean('minor', false)}
            />
        );
    }

    if (props.isNumber) {
        return <TextField.Number {...sharedProps} {...numberProps} />;
    }

    return <TextField {...sharedProps} {...textProps} />;
};

storiesOf('TextField', module).add('Default', () => <Demo />);

storiesOf('TextField', module).add('With clear button', () => <Demo withClearButton />);

storiesOf('TextField', module).add('With Feedback', () => <Demo withFeedback />);

storiesOf('TextField', module).add('With Number formatting', () => <Demo isNumber />);

storiesOf('TextField', module).add('With Currency formatting', () => <Demo isCurrency />);

storiesOf('TextField', module).add('With checkbox prefix', () => <Demo hasComponentPrefix />);
