import React from 'react';
import Box from '../Box';
import Text from '../Text';
import FormRow from './';
import TextField from '../TextField';
import { mountWithTheme } from '../../utility/_styled/testing';
import 'jest-styled-components';

describe('FormRow', () => {
    it('should render', () => {
        const component = mountWithTheme(
            <FormRow
                label={
                    <label>
                        <Box>
                            <Text>What is your name?</Text>
                        </Box>
                    </label>
                }
                field={
                    <Box wrap width="100%">
                        <Box>
                            <Box grow={1} width="40%">
                                <TextField
                                    prefix="Initials"
                                    name="Initials"
                                    value={'initials'}
                                    onChange={() => undefined}
                                />
                            </Box>
                            <Box grow={1} width="60%">
                                <TextField
                                    prefix="First name"
                                    name="First name"
                                    value="firstname"
                                    onChange={() => undefined}
                                />
                            </Box>
                        </Box>
                        <Box grow={1}>
                            <TextField prefix="Surname" name="Surname" value={'surname'} onChange={() => undefined} />
                        </Box>
                    </Box>
                }
            />,
        );
    });
});
