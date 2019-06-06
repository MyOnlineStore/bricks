import { select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';
import ErrorBoundary from '.';
import Text from '../Text';

storiesOf('ErrorBoundary', module).add(
    'Default & Props',
    withInfo({ inline: true })(() => {
        const hasError = select('hasError', ['true', 'false'], 'false');

        return (
            <ErrorBoundary
                message="This is an error"
                error={hasError === 'true'}
                reportError={(): void => {
                    // report error
                }}
            >
                <Text>This does not have an error.</Text>
            </ErrorBoundary>
        );
    }),
);
