import { select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Link, { PropsType } from '.';
import Text from '../Text';

const targetOptions = ['_self', '_blank'];

storiesOf('Link', module)
    .add('Default', () => (
        <Text>
            <Link
                target={select('target', targetOptions, targetOptions[0]) as PropsType['target']}
                href="http://www.google.com"
                title="Google search"
            />
        </Text>
    ))
    .add('Action with child element', () => (
        <Text>
            <Link
                title="Google search"
                onClick={(): void => {
                    /**/
                }}
            >
                <span>Click me!</span>
            </Link>
        </Text>
    ))
    .add(
        'Props',
        withInfo({ inline: true })(() => {
            return (
                <Link
                    title="title"
                    onClick={(): void => {
                        /* */
                    }}
                />
            );
        }),
    );
