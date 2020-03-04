import React, { FC, useState } from 'react';
import PreviewPane from '../../../components/PreviewPane';
import { Button, Modal, Text } from '@myonlinestore/bricks';
import { AddressIllustration } from '@myonlinestore/bricks-assets';

const demoContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut mi ligula. Phasellus tellus nulla,
cursus sit amet dolor eu, sodales facilisis tortor. Maecenas sed arcu quis est pharetra molestie sed
eu leo. Mauris consequat mauris et eros gravida vestibulum. Phasellus convallis ipsum quis nisl lacinia,
a pulvinar est porta. Nunc tempus vulputate dapibus. In eget venenatis orci. Pellentesque habitant morbi
tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas finibus lorem et quam imperdiet,
id vestibulum odio molestie.`;

const SmallModal = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <Modal
                title="A Small Modal"
                show={show}
                size="small"
                onClose={() => setShow(false)}
                media={<AddressIllustration height="300px" />}
                mediaBleed={true}
                buttons={[
                    <Button key="activate" variant="primary" title="Activate" />,
                    <Button key="close" variant="plain" title="Close" onClick={() => setShow(false)} />,
                ]}
            >
                <Text>{demoContent}</Text>
            </Modal>
            <Button variant="primary" title="Show Modal" onClick={() => setShow(true)} />
        </>
    );
};

const MediumModal = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <Modal
                title="A Medium Modal"
                show={show}
                size="medium"
                onClose={() => setShow(false)}
                media={<AddressIllustration height="400px" />}
                buttons={[
                    <Button key="activate" variant="primary" title="Activate" />,
                    <Button key="close" variant="plain" title="Close" onClick={() => setShow(false)} />,
                ]}
            >
                <Text>{demoContent}</Text>
            </Modal>{' '}
            <Button variant="primary" title="Show Modal" onClick={() => setShow(true)} />
        </>
    );
};

const LargeModal = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <Modal
                title="A Large Modal"
                show={show}
                size="large"
                onClose={() => setShow(false)}
                media={<AddressIllustration height="400px" />}
                buttons={[
                    <Button key="activate" variant="primary" title="Activate" />,
                    <Button key="close" variant="plain" title="Close" onClick={() => setShow(false)} />,
                ]}
            >
                <Text>{demoContent}</Text>
            </Modal>
            <Button variant="primary" title="Show Modal" onClick={() => setShow(true)} />
        </>
    );
};

const options = [
    {
        value: 'modal-small',
        label: 'Modal with Illustration - Small',
    },
    {
        value: 'modal-medium',
        label: 'Modal with Illustration - Medium',
    },
    {
        value: 'modal-large',
        label: 'Modal with Illustration - Large',
    },
];

const examples = [
    {
        value: 'modal-small',
        component: <SmallModal />,
    },
    {
        value: 'modal-medium',
        component: <MediumModal />,
    },
    {
        value: 'modal-large',
        component: <LargeModal />,
    },
];

const ModalWithIllustrationExamples: FC = () => {
    return <PreviewPane options={options} examples={examples} />;
};

export default ModalWithIllustrationExamples;
