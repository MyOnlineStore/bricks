import React, { FC } from 'react';
import { storiesOf } from '@storybook/react';
import { button } from '@storybook/addon-knobs';
import ModalManager from '.';
import Box from '../Box';
import Text from '../Text';

const DemoContent1: FC = () => (
    <Box>
        <Text>Foo</Text>
    </Box>
);

const DemoContent2: FC = () => (
    <Box>
        <Text>Barf</Text>
    </Box>
);

storiesOf('ModalManager', module).add('Trigger ModalManager remotely', () => {
    button('Trigger sample modal 1', () => {
        window.modal.render({
            show: true,
            title: 'This is triggered remotely',
            onClose: (): boolean => confirm('You are now closing this modal, do you wish to continue?'),
            renderContent: () => <DemoContent1 />,
        });
    });

    button('Trigger sample modal 2', () => {
        window.modal.render({
            show: true,
            title: 'This is also triggered remotely',
            onClose: (): boolean => confirm('You are now closing this modal, do you wish to continue?'),
            renderContent: () => <DemoContent2 />,
        });
    });

    button('Dismiss the modal', () => {
        window.modal.toggle(false);
    });

    return <ModalManager />;
});
