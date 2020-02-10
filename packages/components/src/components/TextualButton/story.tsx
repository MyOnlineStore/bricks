import React from 'react';
import { storiesOf } from '@storybook/react';
import TextualButton, { PropsType } from '.';
import { ChevronRightIcon } from '@myonlinestore/bricks-assets';
import { select } from '@storybook/addon-knobs';

storiesOf('Buttons/TextualButton', module)
    .add('Default', () => {
        return (
            <TextualButton
                icon={<ChevronRightIcon />}
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
                icon={<ChevronRightIcon />}
                href=""
                variant={select('variant', ['primary', 'secondary'], 'primary') as PropsType['variant']}
                title="Click me"
            >
                Click me
            </TextualButton>
        );
    });
