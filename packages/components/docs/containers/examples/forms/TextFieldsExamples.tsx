import React, { FC, useState } from 'react';
import PreviewPane from '../../../components/PreviewPane';
import { TextField, NumberField, CurrencyField, TextArea, Box } from '@myonlinestore/bricks';

const DefaultTextField = () => {
    const [fieldValue, setFieldValue] = useState('');

    return <TextField name="default" value={fieldValue} onChange={setFieldValue} placeholder="Start typing..." />;
};

const PrefixTextField = () => {
    const [fieldValue, setFieldValue] = useState('');

    return (
        <TextField
            prefix="Foo"
            name="prefix"
            value={fieldValue}
            onChange={setFieldValue}
            placeholder="Start typing..."
        />
    );
};

const SuffixTextField = () => {
    const [fieldValue, setFieldValue] = useState('');

    return (
        <TextField
            suffix="Bar"
            name="suffix"
            value={fieldValue}
            onChange={setFieldValue}
            placeholder="Start typing..."
        />
    );
};

const FeedbackField = () => {
    const [fieldValue, setFieldValue] = useState('');
    const [hasSuccess, setHasSuccess] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleInput = (value: string) => {
        setFieldValue(value);

        if (value.length > 4 && value.length <= 8) {
            setHasSuccess(true);
        } else {
            setHasSuccess(false);
        }
        if (value.length > 8) {
            setHasError(true);
        } else {
            setHasError(false);
        }
    };

    return (
        <Box direction="column" width="100%">
            <TextField
                name="feedback"
                value={fieldValue}
                onChange={handleInput}
                placeholder="Start typing..."
                feedback={
                    hasSuccess
                        ? { message: 'Great job, you typed more than 4 characters!', severity: 'success' }
                        : hasError
                        ? { message: 'Whoa there! That is way too many characters for me.', severity: 'error' }
                        : { message: 'Try typing more than 4 characters...', severity: 'info' }
                }
            />
        </Box>
    );
};

const DefaultTextArea = () => {
    const [fieldValue, setFieldValue] = useState('');

    return <TextArea name="default-text-area" value={fieldValue} onChange={setFieldValue} />;
};

const CharacterLimitTextArea = () => {
    const [fieldValue, setFieldValue] = useState('');

    return (
        <TextArea name="characterlimit-text-area" value={fieldValue} onChange={setFieldValue} characterLimit={140} />
    );
};

const DefaultNumberField = () => {
    const [fieldValue, setFieldValue] = useState(100);

    return <NumberField name="number" value={fieldValue} onChange={setFieldValue} />;
};

const DefaultCurrencyField = () => {
    const [fieldValue, setFieldValue] = useState(100);

    return <CurrencyField name="currency" currency="EUR" locale="nl-NL" value={fieldValue} onChange={setFieldValue} />;
};

const options = [
    {
        value: 'text-field',
        label: 'Text Field - Default',
    },
    {
        value: 'text-field-prefix',
        label: 'Text Field - With Prefix',
    },
    {
        value: 'text-field-suffix',
        label: 'Text Field - With Suffix',
    },
    {
        value: 'text-field-feedback',
        label: 'Text Field - With Feedback',
    },
    {
        value: 'text-area-default',
        label: 'Text Area - Default',
    },
    {
        value: 'text-area-characterlimit',
        label: 'Text Area - With Character Limit',
    },
    {
        value: 'number-field',
        label: 'Number Field',
    },
    {
        value: 'currency-field',
        label: 'Currency Field',
    },
];

const examples = [
    {
        value: 'text-field',
        component: <DefaultTextField />,
    },
    {
        value: 'text-field-prefix',
        component: <PrefixTextField />,
    },
    {
        value: 'text-field-suffix',
        component: <SuffixTextField />,
    },
    {
        value: 'text-field-feedback',
        component: <FeedbackField />,
    },
    {
        value: 'text-area-default',
        component: <DefaultTextArea />,
    },
    {
        value: 'text-area-characterlimit',
        component: <CharacterLimitTextArea />,
    },
    {
        value: 'number-field',
        component: <DefaultNumberField />,
    },
    {
        value: 'currency-field',
        component: <DefaultCurrencyField />,
    },
];

const TextFieldsExamples: FC = () => {
    return <PreviewPane options={options} examples={examples} />;
};

export default TextFieldsExamples;
