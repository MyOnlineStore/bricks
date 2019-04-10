import { storiesOf } from '@storybook/react';
import React, { FC, useState } from 'react';
import Checkbox from '../Checkbox';
import FormRow from '.';
import RadioButton from '../RadioButton';
import Text from '../Text';
import Box from '../Box';
import TextField from '../TextField';
import Toggle from '../Toggle';
import Separated from '../Separated';

type PropsType = {
    descriptions: boolean;
};

const Demo: FC<PropsType> = props => {
    const [selected, setSelected] = useState('1');
    const [initials, setInitials] = useState('');
    const [firstname, setFirstname] = useState('');
    const [surname, setSurname] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [toggled, setToggled] = useState(false);
    const [bacon, setBacon] = useState(true);
    const [cheese, setCheese] = useState(true);
    const [checked, setChecked] = useState(false);

    return props.descriptions ? (
        <form>
            <FormRow
                label={
                    <label>
                        <Box>
                            <Text>What is your name?</Text>
                        </Box>
                        <Text severity="info">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti non quasi similique sint
                            quae exercitationem molestiae aspernatur cum. Necessitatibus, corrupti veritatis. Placeat,
                            tempora! Vitae rem, nobis rerum natus odit debitis.
                        </Text>
                    </label>
                }
                field={
                    <Box wrap width="100%">
                        <Box>
                            <Box margin={[0, 9, 18, 0]} justifyContent="stretch" grow={1} width="40%">
                                <TextField
                                    prefix="Initials"
                                    name="Initials"
                                    value={initials}
                                    onChange={initials => setInitials(initials)}
                                />
                            </Box>
                            <Box margin={[0, 9, 18, 0]} justifyContent="stretch" grow={1} width="60%">
                                <TextField
                                    prefix="First name"
                                    name="First name"
                                    value={firstname}
                                    onChange={firstname => setFirstname(firstname)}
                                />
                            </Box>
                        </Box>
                        <Box margin={[0, 9, 18, 0]} justifyContent="stretch" grow={1}>
                            <TextField
                                prefix="Surname"
                                name="Surname"
                                value={surname}
                                onChange={surname => setSurname(surname)}
                            />
                        </Box>
                    </Box>
                }
            />
            <FormRow
                label={
                    <label>
                        <Box>
                            <Text>Where do you live?</Text>
                        </Box>
                        <Text severity="info">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti non quasi similique sint
                            quae exercitationem molestiae aspernatur cum. Necessitatibus, corrupti veritatis. Placeat,
                            tempora! Vitae rem, nobis rerum natus odit debitis.
                        </Text>
                    </label>
                }
                field={
                    <Box wrap width="100%">
                        <Box margin={[0, 9, 18, 0]} justifyContent="stretch" grow={1}>
                            <TextField
                                name="Country"
                                prefix="Country"
                                value={country}
                                onChange={country => setCountry(country)}
                            />
                        </Box>
                        <Box margin={[0, 9, 18, 0]} justifyContent="stretch" grow={1}>
                            <TextField name="City" prefix="City" value={city} onChange={city => setCity(city)} />
                        </Box>
                    </Box>
                }
            />
            <FormRow
                label={
                    <label>
                        <Box>
                            <Text>Can a boolean only be either true or false?</Text>
                        </Box>
                        <Text severity="info">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti non quasi similique sint
                            quae exercitationem molestiae aspernatur cum. Necessitatibus, corrupti veritatis. Placeat,
                            tempora! Vitae rem, nobis rerum natus odit debitis.
                        </Text>
                    </label>
                }
                field={
                    <Separated before after>
                        <RadioButton
                            name="bool"
                            label="True"
                            value="1"
                            checked={selected === '1'}
                            onChange={({ value }) => setSelected(value)}
                        />
                        <RadioButton
                            name="bool"
                            label="False"
                            value="2"
                            checked={selected === '2'}
                            onChange={({ value }) => setSelected(value)}
                        />
                        <RadioButton
                            name="bool"
                            label="Sometimes"
                            value="3"
                            checked={selected === '3'}
                            onChange={({ value }) => setSelected(value)}
                        />
                    </Separated>
                }
            />
            <FormRow
                label={
                    <>
                        <Text>Options</Text>
                        <Text severity="info">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti non quasi similique sint
                            quae exercitationem molestiae aspernatur cum. Necessitatibus, corrupti veritatis. Placeat,
                            tempora! Vitae rem, nobis rerum natus odit debitis.
                        </Text>
                    </>
                }
                field={
                    <Separated before after>
                        <Checkbox
                            name="cheese"
                            value="cheese"
                            label="Extra cheese"
                            checked={cheese}
                            onChange={({ checked }) => setCheese(checked as boolean)}
                        />
                        <Checkbox
                            name="bacon"
                            value="bacon"
                            label="Extra bacon"
                            checked={bacon}
                            onChange={({ checked }) => setBacon(checked as boolean)}
                        />
                    </Separated>
                }
            />
        </form>
    ) : (
        <form>
            <FormRow
                label={
                    <label>
                        <Text>What is your name?</Text>
                    </label>
                }
                field={
                    <Box wrap width="100%">
                        <Box margin={[0, 9, 0, 0]} width="100%" justifyContent="stretch" grow={1}>
                            <TextField
                                prefix="Name"
                                name="Name"
                                value={firstname}
                                onChange={firstname => setFirstname(firstname)}
                            />
                        </Box>
                    </Box>
                }
            />
            <FormRow
                label={
                    <label>
                        <Text>Where do you live?</Text>
                    </label>
                }
                field={
                    <Box wrap width="100%">
                        <Box margin={[0, 9, 0, 0]} width="100%" justifyContent="stretch" grow={1}>
                            <TextField
                                name="Country"
                                prefix="Country"
                                value={country}
                                onChange={country => setCountry(country)}
                            />
                        </Box>
                    </Box>
                }
            />
            <FormRow
                label={
                    <label>
                        <Text>Can a boolean only be true or false?</Text>
                    </label>
                }
                field={
                    <Separated before after>
                        <RadioButton
                            name="bool"
                            label="True"
                            value="1"
                            checked={selected === '1'}
                            onChange={({ value }) => setSelected(value)}
                        />
                        <RadioButton
                            name="bool"
                            label="False"
                            value="2"
                            checked={selected === '2'}
                            onChange={({ value }) => setSelected(value)}
                        />
                        <RadioButton
                            name="bool"
                            label="Sometimes"
                            value="3"
                            checked={selected === '3'}
                            onChange={({ value }) => setSelected(value)}
                        />
                    </Separated>
                }
            />
            <FormRow
                label={
                    <label>
                        <Text>Do you like toggles?</Text>
                    </label>
                }
                field={
                    <Toggle
                        name="toggle"
                        value="toggle"
                        id="toggle"
                        label={'Toggle to indicate your preference!'}
                        checked={toggled}
                        onChange={({ checked }) => setToggled(checked as boolean)}
                    />
                }
            />
            <FormRow
                label={
                    <label>
                        <Text>Do you like checkboxes</Text>
                    </label>
                }
                field={
                    <Separated before after>
                        <Checkbox onChange={() => setChecked(!checked)} value="bar" checked={checked} name="foo" />
                    </Separated>
                }
            />
        </form>
    );
};

storiesOf('FormRow', module)
    .add('Default', () => <Demo descriptions={true} />)
    .add('No Descriptions', () => <Demo descriptions={false} />);
