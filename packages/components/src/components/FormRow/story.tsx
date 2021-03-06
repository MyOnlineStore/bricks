import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';
import Checkbox from '../Checkbox';
import FormRow from '.';
import RadioButton from '../RadioButton';
import Text from '../Text';
import Box from '../Box';
import TextField from '../TextField';
import Toggle from '../Toggle';
import Separated from '../Separated';
import { text, boolean } from '@storybook/addon-knobs';
import Skeleton from '../Skeleton';
import NativeSelect from '../NativeSelect';
import Select from '../Select';
import TextArea from '../TextArea';
import FileInput from '../FileInput';

type PropsType = {
    descriptions: boolean;
};

type StateType = {
    selected: string;
    name: string;
    story: string;
    cheese: boolean;
    checked: boolean;
    bacon: boolean;
    supersize: boolean;
    patty: string;
    sauce: string;
};

class DemoComponent extends Component<PropsType, StateType> {
    public constructor(props: PropsType) {
        super(props);

        this.state = {
            selected: '1',
            name: '',
            story: '',
            bacon: false,
            cheese: true,
            checked: false,
            supersize: false,
            patty: 'chicken',
            sauce: 'mayo',
        };
    }

    public render(): JSX.Element {
        const disabled = boolean('disabled', false);
        const description = this.props.descriptions
            ? `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti non quasi
        similique sint quae exercitationem molestiae aspernatur cum.`
            : '';

        return (
            <form>
                <FormRow
                    label={<label>What is your name?</label>}
                    disabled={disabled}
                    description={description}
                    field={
                        <Box wrap width="100%">
                            <TextField
                                name="name"
                                value={this.state.name}
                                onChange={(name: string): void => this.setState({ name })}
                                disabled={disabled}
                                placeholder="E.g. John Doe"
                            />
                        </Box>
                    }
                />
                <FormRow
                    label={<label>What is your story?</label>}
                    disabled={disabled}
                    description={description}
                    field={
                        <Box wrap width="100%">
                            <TextArea
                                name="story"
                                value={this.state.story}
                                onChange={(story: string): void => this.setState({ story })}
                                disabled={disabled}
                                placeholder="Like how did you get here?"
                            />
                        </Box>
                    }
                />
                <FormRow
                    label={<label>Can a boolean only be either true or false?</label>}
                    disabled={disabled}
                    description={description}
                    field={
                        <Separated before>
                            <RadioButton
                                name="bool"
                                label="True"
                                value="1"
                                checked={this.state.selected === '1'}
                                onChange={({ value }): void => {
                                    this.setState({ selected: value });
                                }}
                                disabled={disabled}
                            />
                            <RadioButton
                                name="bool"
                                label="False"
                                value="2"
                                checked={this.state.selected === '2'}
                                onChange={({ value }): void => {
                                    this.setState({ selected: value });
                                }}
                                disabled={disabled}
                            />
                            <RadioButton
                                name="bool"
                                label="Sometimes"
                                value="3"
                                checked={this.state.selected === '3'}
                                onChange={({ value }): void => {
                                    this.setState({ selected: value });
                                }}
                                disabled={disabled}
                            />
                        </Separated>
                    }
                />
                <FormRow
                    label={<label>What else would you like?</label>}
                    disabled={disabled}
                    description={description}
                    field={
                        <Separated before>
                            <Checkbox
                                name="cheese"
                                value="cheese"
                                label="Extra cheese"
                                checked={this.state.cheese}
                                onChange={() => this.setState({ cheese: !this.state.cheese })}
                                disabled={disabled}
                            />
                            <Checkbox
                                name="bacon"
                                value="bacon"
                                label="Extra bacon"
                                checked={this.state.bacon}
                                onChange={() => this.setState({ bacon: !this.state.bacon })}
                                disabled={disabled}
                            />
                        </Separated>
                    }
                />
                <FormRow
                    label={<label>Choose your patty</label>}
                    disabled={disabled}
                    description={description}
                    field={
                        <Separated before>
                            <Select
                                value={this.state.patty}
                                $minWidth="300px"
                                emptyText="empty"
                                onChange={patty => this.setState({ patty })}
                            >
                                <Select.Option label="Chicken" value="chicken" />
                                <Select.Option label="Veggy" value="veggy" />
                                <Select.Option label="Beef" value="beef" />
                            </Select>
                        </Separated>
                    }
                />
                <FormRow
                    label={<label>Choose your patty</label>}
                    disabled={disabled}
                    description={description}
                    field={
                        <Separated before>
                            <NativeSelect
                                value={this.state.patty}
                                onChange={sauce => this.setState({ sauce })}
                                $minWidth="300px"
                                options={[
                                    { label: 'Mayo', value: 'mayo' },
                                    { label: 'Ketchup', value: 'ketchup' },
                                    { label: 'Mustard', value: 'mustard' },
                                ]}
                            ></NativeSelect>
                        </Separated>
                    }
                />
                <FormRow
                    label={<label>Supersized?</label>}
                    disabled={disabled}
                    description={description}
                    field={
                        <Separated before>
                            <Toggle
                                name="supersize"
                                value="supersize"
                                label="Yes, supersize me!"
                                checked={this.state.supersize}
                                onChange={() => this.setState({ supersize: !this.state.supersize })}
                                disabled={disabled}
                            />
                        </Separated>
                    }
                />
                <FormRow
                    label={<label>Upload your logo</label>}
                    field={
                        <FileInput
                            accept={[]}
                            name=""
                            placeholder="Drag and drop your image"
                            dropPlaceholder="Drop your image here"
                            instance={{ current: null } as any}
                            onChange={() => {
                                return;
                            }}
                            feedback={{
                                severity: 'info',
                                message: 'Some message',
                            }}
                        />
                    }
                />
            </form>
        );
    }
}

storiesOf('FormRow', module)
    .add('Default', () => <DemoComponent descriptions={true} />)
    .add('No Descriptions', () => <DemoComponent descriptions={false} />)
    .add('With badge', () => (
        <FormRow
            label={text('label', 'Label text')}
            badge={
                <Text size="small" variant="success">
                    {text('badge', 'PRO')}
                </Text>
            }
            field={
                <Separated before>
                    <Toggle checked={true} name="storyToggle" value={'true'} onChange={(): string => 'void'} />
                </Separated>
            }
        />
    ))
    .add('With Skeletons', () => (
        <FormRow
            label={
                <Box width="100%" inline margin={[0, 12, 0, 0]}>
                    <Skeleton.Text lines={1} baseWidth={180} />
                </Box>
            }
            // 38px is the height of an TextField field
            field={<Skeleton.Rect width="100%" height="38px" />}
        />
    ));
