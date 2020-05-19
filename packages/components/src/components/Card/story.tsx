import { storiesOf } from '@storybook/react';
import React, { FC, useState } from 'react';
import Card from '.';
import Text from '../Text';
import Link from '../Link';
import TextField from '../TextField';
import Box from '../Box';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import { boolean } from '@storybook/addon-knobs';

const DemoDescription = () => (
    <>
        Description with a{' '}
        <Link href="#" title="link">
            link
        </Link>
    </>
);

const ImageLabel = () => (
    <img
        src="data:image/png;base64,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"
        style={{ height: '24px', display: 'block' }}
    />
);

const DemoContent = () => (
    <>
        <Text>
            Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam.
        </Text>
        <Box margin={[24, 0, 0]} direction="column" justifyContent="flex-start" maxWidth="300px">
            <Text strong>Name</Text>
            <TextField name="name" value="" onChange={() => null} />
            <Box margin={[18, 0, 0]}>
                <ButtonGroup>
                    <Button variant="plain" title="Cancel" />
                    <Button variant="primary" title="Save" />
                </ButtonGroup>
            </Box>
        </Box>
    </>
);

type PropsType = {
    foldable?: boolean;
    image?: boolean;
    description?: boolean;
    toggle?: boolean;
};

const Demo: FC<PropsType> = props => {
    const [checked, setChecked] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const onClick = () => setOpen(!open);

    return (
        <Card
            label={props.image ? <ImageLabel /> : <Text strong>Label</Text>}
            description={props.description ? <DemoDescription /> : undefined}
            content={<DemoContent />}
            open={props.foldable ? open : undefined}
            onClick={props.foldable ? onClick : undefined}
            checked={props.toggle ? checked : undefined}
            onChange={props.toggle ? setChecked : undefined}
            disabled={props.toggle ? boolean('disabled', false) : undefined}
        />
    );
};

storiesOf('Card', module)
    .add('Default', () => <Demo foldable />)
    .add('With description', () => <Demo description foldable />)
    .add('With an image as label', () => <Demo image foldable />)
    .add('With a toggle', () => <Demo toggle foldable description />)
    .add('Non-foldable', () => <Demo />);
