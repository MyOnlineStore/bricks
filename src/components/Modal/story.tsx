import { boolean, text, select } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Modal from '.';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import Text from '../Text';
import MultiButton from '../MultiButton';

const demoContent = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut mi ligula. Phasellus tellus nulla,
cursus sit amet dolor eu, sodales facilisis tortor. Maecenas sed arcu quis est pharetra molestie sed
eu leo. Mauris consequat mauris et eros gravida vestibulum. Phasellus convallis ipsum quis nisl lacinia,
a pulvinar est porta. Nunc tempus vulputate dapibus. In eget venenatis orci. Pellentesque habitant morbi
tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas finibus lorem et quam imperdiet,
id vestibulum odio molestie. Curabitur euismod sit amet tortor et imperdiet. Nam a nisl quis lorem porta
pharetra. Duis sed magna vel odio ullamcorper gravida eu et nibh. Mauris tempor libero purus, vitae lacinia
felis hendrerit in. Vestibulum rhoncus vitae ipsum vel placerat.
eu leo. Mauris consequat mauris et eros gravida vestibulum. Phasellus convallis ipsum quis nisl lacinia,
a pulvinar est porta. Nunc tempus vulputate dapibus. In eget venenatis orci. Pellentesque habitant morbi
tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas finibus lorem et quam imperdiet,
id vestibulum odio molestie. Curabitur euismod sit amet tortor et imperdiet. Nam a nisl quis lorem porta
pharetra. Duis sed magna vel odio ullamcorper gravida eu et nibh. Mauris tempor libero purus, vitae lacinia
felis hendrerit in. Vestibulum rhoncus vitae ipsum vel placerat.
eu leo. Mauris consequat mauris et eros gravida vestibulum. Phasellus convallis ipsum quis nisl lacinia,
a pulvinar est porta. Nunc tempus vulputate dapibus. In eget venenatis orci. Pellentesque habitant morbi
tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas finibus lorem et quam imperdiet,
id vestibulum odio molestie. Curabitur euismod sit amet tortor et imperdiet. Nam a nisl quis lorem porta
pharetra. Duis sed magna vel odio ullamcorper gravida eu et nibh.`;

const options = [
    {
        value: 'Option 1',
        label: 'Default action',
        description: 'Unparalleled step-changes dynamically enable senior industry leaders for our market foci.',
    },
    {
        value: 'Option 2',
        label: 'Alternative action 2',
        description: 'In the deliverable space, industry is virtually impacting its holistic verticals.',
    },
    {
        value: 'Option 3',
        label: 'Alternative action 3',
        description:
            'Key players will take ownership of their big datas by iteratively integrating long-term capabilities.',
    },
];

storiesOf('Modal', module).add('Default', () => {
    return (
        <Modal
            show={boolean('show', true)}
            size={select('size', ['small', 'medium', 'large'], 'large')}
            title="Would you like me to be your role modal?"
            closeAction={(): boolean => confirm('You are now closing this modal, do you wish to continue?')}
            renderFixed={(): JSX.Element => (
                <ButtonGroup>
                    <Button variant="primary" title="Activate" />
                    <Button variant="plain" title="Close" />
                </ButtonGroup>
            )}
        >
            <Text>{text('contents', demoContent)}</Text>
            <MultiButton options={options} placement={'bottom-end'} variant={'secondary'} />
        </Modal>
    );
});
