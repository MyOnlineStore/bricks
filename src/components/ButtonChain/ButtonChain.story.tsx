import { storiesOf } from '@storybook/react';
import React from 'react';
import ButtonChain from '.';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';

storiesOf('ButtonChain', module).add('Default', () => {
    return (
        <ButtonGroup>
            <ButtonChain>
                <Button
                    variant="primary"
                    title="Do something dangerous"
                    action={(): void => {
                        /**/
                    }}
                />
                <Button
                    variant="destructive"
                    title="Are you sure?!"
                    action={(): void => {
                        alert('Done');
                    }}
                />
            </ButtonChain>
            <Button
                variant="secondary"
                title="Back"
                action={(): void => {
                    /**/
                }}
            />
        </ButtonGroup>
    );
});
