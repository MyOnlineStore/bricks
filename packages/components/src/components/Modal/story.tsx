import { boolean, text, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Modal from '.';
import Button from '../Button';
import Text from '../Text';
import { AddressIllustration } from '@myonlinestore/bricks-assets';
import Box from '../Box';

const demoContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut mi ligula. Phasellus tellus nulla,
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
eu leo. Mauris consequat mauris et eros gravida vestibulum.`;

storiesOf('Modal', module)
    .add('Default', () => {
        return (
            <Modal
                show={boolean('show', true)}
                size={select('size', ['small', 'medium', 'large'], 'large')}
                title={text('title', 'Would you like me to be your role modal?')}
                onClose={(): boolean => confirm('You are now closing this modal, do you wish to continue?')}
                buttons={[
                    <Button key="activate" variant="primary" title="Activate" />,
                    <Button key="close" variant="plain" title="Close" />,
                ]}
            >
                <Text>{text('contents', demoContent)}</Text>
            </Modal>
        );
    })
    .add('Centered', () => {
        return (
            <Modal
                centered
                show={boolean('show', true)}
                size={select('size', ['small', 'medium', 'large'], 'large')}
                title={text('title', 'Would you like me to be your role modal?')}
                onClose={(): boolean => confirm('You are now closing this modal, do you wish to continue?')}
                buttons={[<Button key="activate" variant="primary" title="Activate" />]}
            >
                <Text textAlign="center">{text('contents', demoContent)}</Text>
            </Modal>
        );
    })
    .add('Without onClose', () => {
        return (
            <Modal
                show={boolean('show', true)}
                size={select('size', ['small', 'medium', 'large'], 'large')}
                title={text('title', 'Would you like me to be your role modal?')}
                buttons={[
                    <Button key="activate" variant="primary" title="Activate" />,
                    <Button key="close" variant="plain" title="Close" />,
                ]}
            >
                <Text>{text('contents', demoContent)}</Text>
            </Modal>
        );
    })
    .add('With Media', () => {
        return (
            <Modal
                onClose={() => {
                    alert('Closing');
                }}
                show={boolean('show', true)}
                size={select('size', ['small', 'medium', 'large'], 'large')}
                title={text('title', 'Would you like me to be your role modal?')}
                buttons={[
                    <Button key="activate" variant="primary" title="Activate" />,
                    <Button key="close" variant="plain" title="Close" />,
                ]}
                media={<AddressIllustration height="auto" width="100%" />}
                mediaBleed={boolean('bleed media', true)}
                mediaOverlap={select('media overlap', [0, 12, 24, 36, 48, 72], 48)}
            >
                <Text>{text('contents', demoContent)}</Text>
            </Modal>
        );
    })
    .add('With useLockBodyScroll', () => {
        return (
            <Box justifyContent="center">
                <Box maxWidth="400px">
                    <Text>
                        {demoContent}
                        {demoContent}
                        {demoContent}
                    </Text>
                </Box>
                <Modal
                    show={boolean('show', true)}
                    lockBodyScroll={boolean('Lock Body Scroll', true)}
                    size={select('size', ['small', 'medium', 'large'], 'large')}
                    title={text('title', 'Would you like me to be your role modal?')}
                    onClose={(): boolean => confirm('You are now closing this modal, do you wish to continue?')}
                    buttons={[
                        <Button key="activate" variant="primary" title="Activate" />,
                        <Button key="close" variant="plain" title="Close" />,
                    ]}
                >
                    <Text>{text('contents', demoContent)}</Text>
                </Modal>
            </Box>
        );
    });
