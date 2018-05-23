import { boolean, select, text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from '../../utility/styled';
import trbl from '../../utility/trbl';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import Contrast from '../Contrast';
import Icon from '../Icon';
import Spacer from '../Spacer';

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
    .add('On a contrast area', () => {
        return (
            <Contrast>
                <Spacer offsetType="inner" offset={trbl(12)}>
                    <ButtonGroup>
                        <Button
                            variant="secondary"
                            title={text('title', 'Click me')}
                            disabled={boolean('disabled', false)}
                            action={():void => { /* */ }}
                        />
                        <Button
                            variant="flat"
                            title={'Click me'}
                            action={():void => { /* */ }}
                            compact
                        >
                            <Icon size="small" icon="gear" />
                        </Button>
                    </ButtonGroup>
                </Spacer>
            </Contrast>
        );
    });
