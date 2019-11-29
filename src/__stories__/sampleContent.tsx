import React, { FunctionComponent, useState } from 'react';
import Box from '../components/Box';
import Heading from '../components/Heading';
import Text from '../components/Text';
import Raised from '../components/Raised';
import Button from '../components/Button';
import Contrast from '../components/Contrast';
import FormRow from '../components/FormRow';
import Toggle from '../components/Toggle';
import TextArea from '../components/TextArea';
import RadioButton from '../components/RadioButton';
import TextField from '../components/TextField';
import Link from '../components/Link';
import Separated from '../components/Separated';
import Notification from '../components/Notification';
import Badge from '../components/Badge';
import * as ThemeSettingsType from '../themes/ExperimentalCustomTheme/MerchantThemeTypes';
import TextualButton from '../components/TextualButton';
import { ChevronRightIcon } from '../assets';
import { Demo } from '../components/Progress/story';

type PropsType = {
    themeSettings: ThemeSettingsType.ThemeSettingsType;
};

const mapColors = (
    colors: {
        lighter3?: string;
        lighter2?: string;
        lighter1?: string;
        base: string;
        darker1?: string;
        darker2?: string;
        darker3?: string;
        darker4?: string;
    },
    title: string,
) => {
    return (
        <Box direction="column" width="20%">
            <Text textAlign="center">{title}</Text>
            {Object.keys(colors).map(
                (
                    color:
                        | keyof ThemeSettingsType.ThemeColorType
                        | keyof ThemeSettingsType.ThemeSilverColorType
                        | keyof ThemeSettingsType.ThemeGreyColorType,
                ) => (
                    <Box
                        key={color}
                        style={{
                            backgroundColor: colors[color],
                            border: color === 'base' ? '1px solid black' : 'none',
                            height: '40px',
                            fontSize: '12px',
                            fontFamily: 'monospace',
                        }}
                        justifyContent="center"
                        alignItems="center"
                    >
                        {colors[color]}
                    </Box>
                ),
            )}
        </Box>
    );
};

const SampleContent: FunctionComponent<PropsType> = (props): JSX.Element => {
    const [sampleForm, setSampleForm] = useState({
        initials: 'J.P.',
        firstname: 'Johan',
        lastname: 'van Tongeren',
        selected: 2,
        comments: 'Hello World',
        newsletter: true,
        fish: {
            min: 6,
            max: 22,
        },
    });

    return (
        <Box style={{ background: props.themeSettings.colors.background }} direction="column" padding={[36]}>
            <link
                href="https://fonts.googleapis.com/css?family=Anton|Indie+Flower|Margarine|Roboto+Slab|Roboto+Mono"
                rel="stylesheet"
            />
            <Box direction="column" width="100%" padding={[0, 0, 24, 0]}>
                <Raised level={2}>
                    <div style={{ backgroundColor: '#FFF', padding: '36px' }}>
                        <Box direction="row" style={{ marginBottom: '20px' }}>
                            {mapColors(props.themeSettings.colors.primary, 'Primary Color')}
                            {mapColors(props.themeSettings.colors.secondary, 'Secondary Color')}
                            {mapColors(props.themeSettings.colors.tertiary, 'Tertiary Color')}
                            {mapColors(props.themeSettings.colors.silver, 'Light')}
                            {mapColors(props.themeSettings.colors.grey, 'Dark')}
                        </Box>
                        <Box direction="column">
                            <Box
                                style={{
                                    backgroundColor: props.themeSettings.colors.background,
                                    color: props.themeSettings.text.colors.textOnBackground,
                                    height: '30px',
                                    fontSize: '12px',
                                    fontFamily: 'monospace',
                                }}
                                justifyContent="center"
                                alignItems="center"
                            >
                                text on background : {props.themeSettings.wcagContrastRatios.backgroundToText}
                                {props.themeSettings.wcagContrastRatios.backgroundToText < 4.5 && <> 👎</>}
                            </Box>
                            <Box
                                style={{
                                    backgroundColor: props.themeSettings.colors.contrastBackground,
                                    color: props.themeSettings.text.colors.textOnBackground,
                                    height: '30px',
                                    fontSize: '12px',
                                    fontFamily: 'monospace',
                                }}
                                justifyContent="center"
                                alignItems="center"
                            >
                                text on contrasting background :{' '}
                                {props.themeSettings.wcagContrastRatios.contrastBackgroundToText}
                                {props.themeSettings.wcagContrastRatios.contrastBackgroundToText < 4.5 && <> 👎</>}
                            </Box>
                            <Box
                                style={{
                                    backgroundColor: props.themeSettings.colors.background,
                                    color: props.themeSettings.colors.primary.base,
                                    height: '30px',
                                    fontSize: '12px',
                                    fontFamily: 'monospace',
                                }}
                                justifyContent="center"
                                alignItems="center"
                            >
                                primary on background : {props.themeSettings.wcagContrastRatios.backgroundToPrimary}
                                {props.themeSettings.wcagContrastRatios.backgroundToPrimary < 4.5 && <> 👎</>}
                            </Box>
                            {props.themeSettings.wcagContrastRatios.backgroundToText >= 4.5 &&
                                props.themeSettings.wcagContrastRatios.contrastBackgroundToText >= 4.5 &&
                                props.themeSettings.wcagContrastRatios.backgroundToPrimary >= 4.5 && (
                                    <Box justifyContent="center" alignItems="center" padding={[12]}>
                                        <Text style={{ color: '#000' }}>
                                            The contrasts in this theme are WCAG approved 👍
                                        </Text>
                                    </Box>
                                )}
                        </Box>
                    </div>
                </Raised>
            </Box>
            <Box direction="column" padding={[24, 0]}>
                <Text>
                    Donec id elit non mi porta gravida at <Link title="dürum">cursus commodo</Link>. Duis mollis, est
                    non commodo luctus, nisi erat <Badge severity="success">Badge</Badge> porttitor ligula, eget lacinia
                    odio sem nec elit.
                </Text>
            </Box>
            <Box direction="column" padding={[24, 0]}>
                <Heading hierarchy={1}>Heading 1</Heading>
                <Heading hierarchy={2}>Heading 2</Heading>
                <Heading hierarchy={3}>Heading 3</Heading>
                <Heading hierarchy={4}>Heading 4</Heading>
                <Heading hierarchy={5}>Heading 5</Heading>
                <Heading hierarchy={6}>Heading 6</Heading>
            </Box>
            <Box direction="column" padding={[24, 0]}>
                <Separated after>
                    <Notification severity="success" message="Wow, Great job!" />
                    <Notification severity="error" message="Oops, something went wrong. Please try again." />
                    <Notification severity="warning" message="Careful, this might go wrong." />
                    <Notification severity="info" message="Hello buddy. I am here for you." />
                </Separated>
            </Box>
            <Raised level={1}>
                <Box padding={[36]}>
                    <form>
                        <FormRow
                            label={
                                <label>
                                    <Text>What is your name?</Text>
                                </label>
                            }
                            field={
                                <Box wrap width="100%">
                                    <Box>
                                        <Box margin={[0, 9, 18, 0]} justifyContent="stretch" grow={1} width="40%">
                                            <TextField
                                                prefix="Initials"
                                                name="Initials"
                                                value={sampleForm.initials}
                                                onChange={(initials: string): void =>
                                                    setSampleForm({ ...sampleForm, initials })
                                                }
                                            />
                                        </Box>
                                        <Box margin={[0, 9, 18, 0]} justifyContent="stretch" grow={1} width="60%">
                                            <TextField
                                                prefix="First name"
                                                name="First name"
                                                value={sampleForm.firstname}
                                                onChange={(firstname: string): void =>
                                                    setSampleForm({ ...sampleForm, firstname })
                                                }
                                            />
                                        </Box>
                                    </Box>
                                    <Box margin={[0, 9, 18, 0]} justifyContent="stretch" grow={1}>
                                        <TextField
                                            prefix="Surname"
                                            name="Lastname"
                                            value={sampleForm.lastname}
                                            onChange={(lastname: string): void =>
                                                setSampleForm({ ...sampleForm, lastname })
                                            }
                                        />
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
                                    <Text severity="info">In my opinion a boolean should also be "maybe".</Text>
                                </label>
                            }
                            field={
                                <Box direction="row" wrap={true} margin={[9, 0]}>
                                    <Box padding={[0, 24, 0, 0]}>
                                        <RadioButton
                                            name="bool"
                                            label="True"
                                            value="1"
                                            checked={sampleForm.selected === 1}
                                            onChange={({ value }): void => {
                                                setSampleForm({ ...sampleForm, selected: parseInt(value, 10) });
                                            }}
                                        />
                                    </Box>
                                    <Box padding={[0, 24, 0, 0]}>
                                        <RadioButton
                                            name="bool"
                                            label="False"
                                            value="2"
                                            checked={sampleForm.selected === 2}
                                            onChange={({ value }): void => {
                                                setSampleForm({ ...sampleForm, selected: parseInt(value, 10) });
                                            }}
                                        />
                                    </Box>
                                    <Box padding={[0, 24, 0, 0]}>
                                        <RadioButton
                                            name="bool"
                                            label="Sometimes"
                                            value="3"
                                            checked={sampleForm.selected === 3}
                                            onChange={({ value }): void => {
                                                setSampleForm({ ...sampleForm, selected: parseInt(value, 10) });
                                            }}
                                        />
                                    </Box>
                                </Box>
                            }
                        />
                        <FormRow
                            label={
                                <>
                                    <Text>Comments</Text>
                                </>
                            }
                            field={
                                <TextArea
                                    value={sampleForm.comments}
                                    name="comments"
                                    onChange={(value: string): void => {
                                        setSampleForm({ ...sampleForm, comments: value });
                                    }}
                                />
                            }
                        />
                        <FormRow
                            label={
                                <>
                                    <Text>Newsletter</Text>
                                </>
                            }
                            field={
                                <Toggle
                                    onChange={({ checked }): void => {
                                        setSampleForm({ ...sampleForm, newsletter: checked });
                                    }}
                                    name="newsletter"
                                    value="newsletter"
                                    checked={sampleForm.newsletter}
                                    label={'subscribe to newsletter yes?'}
                                />
                            }
                        />
                    </form>
                </Box>
            </Raised>
            <Box direction="row" justifyContent="space-between" wrap={true} padding={[24, 0]}>
                <Button title="Primary" variant="primary" />
                <Button title="Secondary" variant="secondary" />
                <Button title="Warning" variant="warning" />
                <Button title="Destructive" variant="destructive" />
                <Button title="Plain" variant="plain" />
                <Button title="Disabled" variant="primary" disabled />
                <TextualButton icon={ChevronRightIcon} title="Primary" variant="primary" />
                <TextualButton icon={ChevronRightIcon} title="Secondary" variant="secondary" />
            </Box>
            <Demo />
            <Contrast>
                <Box padding={[24]} justifyContent="flex-end" direction="row">
                    <Button variant="plain" title="cancel">
                        Cancel
                    </Button>
                    <Button title="Button example" variant="primary">
                        On a contrast
                    </Button>
                </Box>
            </Contrast>
        </Box>
    );
};

export default SampleContent;
