import { boolean, select, text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from '../../utility/styled';
import Button from '../Button';
import Icon from '../Icon';

const StyledBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f8f9fb;
    padding: 24px;
`;

storiesOf('Button', module)
    .add('With text', () => {
        return (
            <Button
                variant={select(
                    'variant',
                    [
                        'primary',
                        'secondary',
                        'tertiary',
                        'warning',
                        'destructive',
                        'flat'
                    ],
                    'primary'
                )}
                title={text('title', 'Click me')}
                disabled={boolean('disabled', false)}
                action={():void => { /* */ }}
                compact={boolean('compact', false)}
            />
        );
    })
    .add('With an icon', () => {
        return (
            <Button
                variant={select(
                    'variant',
                    [
                        'primary',
                        'secondary',
                        'warning',
                        'destructive',
                        'light',
                        'flat'
                    ],
                    'secondary'
                )}
                title={text('title', 'Click me')}
                disabled={boolean('disabled', false)}
                action={():void => { /* */ }}
                compact
            >
                <Icon size="small" icon="gear" />
            </Button>
        );
    })
    .add('On a darker background', () => {
        return (
            <StyledBackground>
                <Button
                    variant="tertiary"
                    title={text('title', 'Click me')}
                    disabled={boolean('disabled', false)}
                    action={():void => { /* */ }}
                />
            </StyledBackground>
        );
    });
