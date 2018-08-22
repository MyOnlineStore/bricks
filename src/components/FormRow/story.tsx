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
    firstname: string;
    surname: string;
    city: string;
    country: string;
};

class DemoComponent extends Component<{}, StateType> {
    public constructor(props: {}) {
        super(props);

        this.state = {
            selected: '1',
            initials: '',
            firstname: '',
            surname: '',
            city: '',
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
                        <Box wrap width="100%">
                            <Box margin={trbl(12, 12, 0, 0)} justifyContent="stretch" basis="100px" grow={1}>
                                <TextField
                                    prefix="Initials"
                                    name="Initials"
                                    value={this.state.initials}
                                    onChange={(initials: string): void => this.setState({ initials })}
                                />
                            </Box>
                            <Box margin={trbl(12, 12, 0, 0)} justifyContent="stretch" grow={1}>
                                <TextField
                                    prefix="First name"
                                    name="First name"
                                    value={this.state.firstname}
                                    onChange={(firstname: string): void => this.setState({ firstname })}
                                />
                            </Box>
                            <Box margin={trbl(12, 12, 0, 0)} justifyContent="stretch" grow={1}>
                                <TextField
                                    prefix="Surname"
                                    name="Surname"
                                    value={this.state.surname}
                                    onChange={(surname: string): void => this.setState({ surname })}
                                />
                            </Box>
                        </Box>
                    }
                />
                <FormRow
                    label={
                        <label>
                            <Box margin={trbl(0, 0, 6, 0)}>
                                <Text>Where do you live?</Text>
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
                            <Box margin={trbl(12, 12, 0, 0)} justifyContent="stretch" grow={1}>
                                <TextField
                                    name="Country"
                                    prefix="Country"
                                    value={this.state.country}
                                    onChange={(country: string): void => this.setState({ country })}
                                />
                            </Box>
                            <Box margin={trbl(12, 12, 0, 0)} justifyContent="stretch" grow={1}>
                                <TextField
                                    name="City"
                                    prefix="City"
                                    value={this.state.city}
                                    onChange={(city: string): void => this.setState({ city })}
                                />
                            </Box>
                        </Box>
                    }
                />
                <FormRow
                    label={
                        <label>
                            <Box margin={trbl(0, 0, 6, 0)}>
                                <Text>Can a boolean only be either true or false?</Text>
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
