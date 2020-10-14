import { storiesOf } from '@storybook/react';
import React, { useState, FC } from 'react';
import FoldOut from '.';
import trbl from '../../utility/trbl';
import Button from '../Button';
import Box from '../Box';
import Text from '../Text';
import IconButton from '../IconButton';
import { ChevronDownSmallIcon, ChevronUpSmallIcon } from '@myonlinestore/bricks-assets';

type PropsType = {
    isOpen?: boolean;
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

const Demo: FC<PropsType> = () => {
    const [isOpen, toggleOpen] = useState(false);

    return (
        <div>
            <FoldOut open={isOpen}>
                <Box padding={trbl(0, 0, 12)}>
                    <Text>{demoContent}</Text>
                </Box>
            </FoldOut>
            <Button
                onClick={() => {
                    toggleOpen(!isOpen);
                }}
                title="open FoldOut"
                variant="secondary"
            >
                Toggle
            </Button>
        </div>
    );
};

const ExcerptDemo: FC<PropsType> = () => {
    const [isOpen, toggleOpen] = useState(false);

    return (
        <Box direction="column" alignContent="center" padding={[24]} style={{ backgroundColor: '#d3d5d9' }}>
            <FoldOut open={isOpen} previewHeight={70} backgroundColor="#d3d5d9">
                <Box padding={trbl(0, 0, 12)}>
                    <Text>{demoContent}</Text>
                </Box>
            </FoldOut>
            <IconButton
                onClick={() => {
                    toggleOpen(!isOpen);
                }}
                title="open FoldOut"
                variant="primary"
                iconSize="small"
                icon={isOpen ? <ChevronUpSmallIcon /> : <ChevronDownSmallIcon />}
            />
        </Box>
    );
};

storiesOf('FoldOut', module)
    .add('With a button toggle', () => <Demo />)
    .add('With excerpt preview', () => <ExcerptDemo />);
