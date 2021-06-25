import React from 'react';
import TextualButton, { PropsType } from '.';
import { select } from '@storybook/addon-knobs';

export default {
    title: 'Button/TextualButton',
    component: TextualButton,
};

export const Default = () => {
    return (
        <TextualButton
            icon="chevron-right"
            variant={select('variant', ['primary', 'secondary'], 'primary') as PropsType['variant']}
            title="Click me"
        >
            Click me
        </TextualButton>
    );
};

export const AsAnAnchor = () => {
    return (
        <TextualButton
            icon="chevron-right"
            href=""
            variant={select('variant', ['primary', 'secondary'], 'primary') as PropsType['variant']}
            title="Click me"
        >
            Click me
        </TextualButton>
    );
};

export const WithIconLeft = () => {
    return (
        <TextualButton
            icon="arrow-left"
            alignIcon="left"
            href=""
            variant={select('variant', ['primary', 'secondary'], 'primary') as PropsType['variant']}
            title="Click me"
        >
            Text
        </TextualButton>
    );
};
