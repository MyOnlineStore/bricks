import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';
import FoldOut from '.';
import trbl from '../../utility/trbl';
import Button from '../Button';
import Box from '../Box';
import Text from '../Text';

type StateType = {
    isOpen: boolean;
};

const demoContent = `
    Now this is the story all about how
    My life got flipped, turned upside down
    And I'd like to take a minute just sit right there
    I'll tell you how I became the prince of a town called Bel-air

    In west Philadelphia born and raised
    On the playground where I spent most of my days
    Chilling out, maxing, relaxing all cool
    And all shooting some b-ball outside of the school
    When a couple of guys, they were up to no good
    Started making trouble in my neighbourhood
    I got in one little fight and my mom got scared
    And said "You're moving with your auntie and uncle in Bel-air"

    I whistled for a cab and when it came near the
    License plate said "fresh" and had a dice in the mirror
    If anything I could say that this cab was rare
    But I thought nah, forget it, yo homes to Bel-air!

    I pulled up to a house about seven or eight
    And I yelled to the cabby "Yo, homes smell you later!"
    Looked at my kingdom I was finally there
    To sit on my throne as the prince of Bel-air
`;

class DemoComponent extends Component<{}, StateType> {
    public constructor(props: {}) {
        super(props);

        this.state = {
            isOpen: false,
        };
    }

    public render(): JSX.Element {
        return (
            <div>
                <FoldOut open={this.state.isOpen}>
                    <Box padding={trbl(0, 0, 12)}>
                        <Text>{demoContent}</Text>
                    </Box>
                </FoldOut>
                <Button
                    onClick={(): void =>
                        this.setState({
                            isOpen: !this.state.isOpen,
                        })
                    }
                    title="open FoldOut"
                    variant="secondary"
                >
                    Toggle
                </Button>
            </div>
        );
    }
}

storiesOf('FoldOut', module).add('With a toggle', () => <DemoComponent />);
