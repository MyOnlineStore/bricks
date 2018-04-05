import { storiesOf } from '@storybook/react';
import React from 'react';
import FlatButton from '../FlatButton';

storiesOf('FlatButton', module)
    .add('default', () => {
        return (
            <FlatButton
                title="Click me!"
                action={():void => { alert('clicked!'); }}
            >
                Click me
            </FlatButton>
        );
    });
