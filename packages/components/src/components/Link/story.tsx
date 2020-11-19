import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Link, { LinkSeverityType, PropsType } from '.';
import Text from '../Text';

const targetOptions = ['_self', '_blank'];
const severityOptions: Array<LinkSeverityType> = ['default', 'error', 'warning', 'success', 'info'];

storiesOf('Buttons/Link', module)
    .add('Default', () => (
        <Text>
            <Link
                target={select('target', targetOptions, targetOptions[0]) as PropsType['target']}
                href=""
                title="Google search"
                severity={select('severity', severityOptions, severityOptions[0])}
            />
        </Text>
    ))
    .add('Action with child element', () => (
        <Text>
            <Link
                title="Google search"
                severity={select('severity', severityOptions, severityOptions[0])}
                onClick={(): void => {
                    /**/
                }}
            >
                <span>Click me!</span>
            </Link>
        </Text>
    ));
