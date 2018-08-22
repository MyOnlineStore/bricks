import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';
import FormRow from '.';
import RadioButton from '../RadioButton';
import RadioButtonGroup from '../RadioButtonGroup';
import Text from '../Text';
import Box from '../Box';
import TextField from '../TextField';
import trbl from '../../utility/trbl';

type StateType = {
    selected: string;
    initials: string;
    forename: string;
    surname: string;
    username: string;
    zip: string;
    country: string;
};

class DemoComponent extends Component<{}, StateType> {
    public constructor(props: {}) {
        super(props);

        this.state = {
            selected: '1',
            initials: '',
            forename: '',
            surname: '',
            username: '',
            zip: '',
            country: '',
        };
    }

    public render(): JSX.Element {
        return (
            <form>
                <FormRow
                    label={
                        <label>
                            <Box margin={trbl(0, 0, 6, 0)}>
                                <Text>What is your name?</Text>
                            </Box>
                            <Text descriptive>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti non quasi similique
                                sint quae exercitationem molestiae aspernatur cum. Necessitatibus, corrupti veritatis.
                                Placeat, tempora! Vitae rem, nobis rerum natus odit debitis.
                            </Text>
                        </label>
                    }
                    field={
                        <TextField
                            name="Username"
                            label="Username"
                            id="Username"
                            value={this.state.username}
                            handleChange={(username: string): void => this.setState({ username })}
                        />
                    }
                />

                <FormRow
                    label={
                        <label>
                            <Box margin={trbl(0, 0, 6, 0)}>
                                <Text>What is your name?</Text>
                            </Box>
                            <Text descriptive>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti non quasi similique
                                sint quae exercitationem molestiae aspernatur cum. Necessitatibus, corrupti veritatis.
                                Placeat, tempora! Vitae rem, nobis rerum natus odit debitis.
                            </Text>
                        </label>
                    }
                    field={
                        <Box wrap width="100%">
                            <Box margin={trbl(6, 6, 0, 0)} justifyContent="stretch" grow={1}>
                                <TextField
                                    name="Country"
                                    label="Country"
                                    id="Country"
                                    value={this.state.country}
                                    handleChange={(country: string): void => this.setState({ country })}
                                />
                            </Box>
                            <Box margin={trbl(6, 6, 0, 0)} justifyContent="stretch" grow={1}>
                                <TextField
                                    name="Zip code"
                                    label="Zip code"
                                    id="Zip code"
                                    value={this.state.zip}
                                    handleChange={(zip: string): void => this.setState({ zip })}
                                />
                            </Box>
                        </Box>
                    }
                />

                <FormRow
                    label={
                        <label>
                            <Box margin={trbl(0, 0, 6, 0)}>
                                <Text>What is your name?</Text>
                            </Box>
                            <Text descriptive>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti non quasi similique
                                sint quae exercitationem molestiae aspernatur cum. Necessitatibus, corrupti veritatis.
                                Placeat, tempora! Vitae rem, nobis rerum natus odit debitis.
                            </Text>
                        </label>
                    }
                    field={
                        <Box wrap width="100%">
                            <Box margin={trbl(6, 6, 0, 0)} justifyContent="stretch" grow={1}>
                                <TextField
                                    name="Initials"
                                    label="Initials"
                                    id="Initials"
                                    value={this.state.initials}
                                    handleChange={(initials: string): void => this.setState({ initials })}
                                />
                            </Box>
                            <Box margin={trbl(6, 6, 0, 0)} justifyContent="stretch" grow={1}>
                                <TextField
                                    name="Forename"
                                    label="Forename"
                                    id="Forename"
                                    value={this.state.forename}
                                    handleChange={(forename: string): void => this.setState({ forename })}
                                />
                            </Box>
                            <Box margin={trbl(6, 6, 0, 0)} justifyContent="stretch" grow={1}>
                                <TextField
                                    name="Surname"
                                    label="Surname"
                                    id="Surname"
                                    value={this.state.surname}
                                    handleChange={(surname: string): void => this.setState({ surname })}
                                />
                            </Box>
                        </Box>
                    }
                />
                <FormRow
                    label={
                        <label>
                            <Box margin={trbl(0, 0, 6, 0)}>
                                <Text>What is your name?</Text>
                            </Box>
                            <Text descriptive>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti non quasi similique
                                sint quae exercitationem molestiae aspernatur cum. Necessitatibus, corrupti veritatis.
                                Placeat, tempora! Vitae rem, nobis rerum natus odit debitis.
                            </Text>
                        </label>
                    }
                    field={
                        <RadioButtonGroup>
                            <RadioButton
                                name="bool"
                                label="True"
                                value="1"
                                checked={this.state.selected === '1'}
                                onChange={({ value }): void => {
                                    this.setState({ selected: value });
                                }}
                            />
                            <RadioButton
                                name="bool"
                                label="False"
                                value="2"
                                checked={this.state.selected === '2'}
                                onChange={({ value }): void => {
                                    this.setState({ selected: value });
                                }}
                            />
                            <RadioButton
                                name="bool"
                                label="Sometimes"
                                value="3"
                                checked={this.state.selected === '3'}
                                onChange={({ value }): void => {
                                    this.setState({ selected: value });
                                }}
                            />
                        </RadioButtonGroup>
                    }
                />
            </form>
        );
    }
}
storiesOf('FormRow', module).add('Default', () => <DemoComponent />);
