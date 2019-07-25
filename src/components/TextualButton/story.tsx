import React from 'react';
import { storiesOf } from '@storybook/react';
import TextualButton, { PropsType } from '.';
import chevron from '../../assets/icons/chevron-right-small.svg';
import { select } from '@storybook/addon-knobs';

storiesOf('Buttons/TextualButton', module)
    .add('Default', () => {
        return (
            <TextualButton
                icon={chevron}
                variant={select('variant', ['primary', 'secondary'], 'primary') as PropsType['variant']}
                title="Click me"
            >
                Click me
            </TextualButton>
        );
    })
    .add('As an anchor', () => {
        return (
            <TextualButton
                icon={chevron}
                href=""
                variant={select('variant', ['primary', 'secondary'], 'primary') as PropsType['variant']}
                title="Click me"
            >
                Click me
            </TextualButton>
        );
    });
