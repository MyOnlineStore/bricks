import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';
import styled from 'styled-components';
import RadioButtonGroup from '.';
import RadioButton from '../RadioButton';

const Wrap = styled.div`
    max-width: 640px;
    border: solid 3px rgba(255, 36, 94, 0.3);
`;

type StateType = {
    selected: string;
};

class DemoComponent extends Component<{}, StateType> {
    public constructor(props: {}) {
        super(props);

        this.state = {
            selected: '1',
        };
    }

    public render(): JSX.Element {
        return (
            <Wrap>
                <RadioButtonGroup>
                    <RadioButton
                        name="demo"
                        value="1"
                        checked={this.state.selected === '1'}
                        label="bar 1"
                        onChange={({ value }): void => {
                            this.setState({ selected: value });
                        }}
                    />

                    <RadioButton
                        name="demo"
                        value="2"
                        label="bar 2"
                        checked={this.state.selected === '2'}
                        onChange={({ value }): void => {
                            this.setState({ selected: value });
                        }}
                    />

                    <RadioButton
                        name="demo"
                        value="3"
                        label="bar 3"
                        checked={this.state.selected === '3'}
                        onChange={({ value }): void => {
                            this.setState({ selected: value });
                        }}
                    />
                </RadioButtonGroup>
            </Wrap>
        );
    }
}

storiesOf('RadioButtonGroup', module).add('Default', () => <DemoComponent />);
