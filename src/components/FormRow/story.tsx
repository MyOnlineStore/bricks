import { storiesOf } from '@storybook/react';
import React from 'react';
import FormRow from '.';
import RadioButton from '../RadioButton';
import RadioButtonGroup from '../RadioButtonGroup';
import Button from '../Button';
import Text from '../Text';
import Box from '../Box';
import TextField from '../TextField';

storiesOf('FormRow', module).add('Default', () => (
    <form>
        <FormRow
            rowLabel={
                <Text>
                    <label htmlFor="thatButton">Click that button</label>
                </Text>
            }
            rowValue={<Button variant="destructive" id="thatButton" title="Click me" />}
        />

        <FormRow rowLabel={'Click that button'} rowValue={<textarea />} />

        <FormRow
            rowLabel="Fill that input"
            rowValue={
                <TextField handleChange={(): void => undefined} name="name" value="" label="What is your name?" />
            }
            rowButtons={
                <Box>
                    <Button title="" variant="destructive" flat compact icon="trash" />
                    <Button title="" variant="primary" flat compact icon="gear" />
                </Box>
            }
        />

        <FormRow
            rowLabel={<Text>That's a radiobutton</Text>}
            rowValue={
                <RadioButtonGroup>
                    <RadioButton changeHandler={(): void => undefined} label="foobar" value="foo1" name="bar" checked />
                    <RadioButton
                        changeHandler={(): void => undefined}
                        label="foobar"
                        value="foo2"
                        name="bar"
                        checked={false}
                    />
                    <RadioButton
                        changeHandler={(): void => undefined}
                        label="foobar"
                        value="foo4"
                        name="bar"
                        checked={false}
                    />
                </RadioButtonGroup>
            }
            rowButtons={
                <Box>
                    <Button title="" variant="destructive" flat compact icon="trash" />{' '}
                    <Button title="" variant="primary" flat compact icon="gear" />
                </Box>
            }
        />
    </form>
));
