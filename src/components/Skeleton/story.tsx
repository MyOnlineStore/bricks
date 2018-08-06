import { storiesOf } from '@storybook/react';
import React, { SFC } from 'react';
import Skeleton from '.';
import { boolean, number } from '@storybook/addon-knobs';
import Text from '../Text';
import Button from '../Button';

type DemoPropsType = {
    loading: boolean;
    element: string;
};

const Demo: SFC<DemoPropsType> = ({ element, loading }): JSX.Element => {
    if (element === 'Text') {
        if (loading) {
            return <Skeleton.Text lines={number('lines', 3)} baseWidth={number('baseWidth', 80)} />;
        }

        return (
            <>
                <Text>Leverage agile frameworks to provide a robust synopsis for high level overviews.</Text>
                <Text>Iterative approaches to corporate strategy foster collaborative</Text>
                <Text>thinking to further the overall value proposition.</Text>
            </>
        );
    } else {
        if (loading) {
            return <Skeleton.Button width={number('width', 139)} />;
        }

        return <Button title="The button has loaded" variant="primary" />;
    }
};

storiesOf('Skeleton', module).add('Text', () => <Demo element="Text" loading={boolean('loading', true)} />);
storiesOf('Skeleton', module).add('Button', () => <Demo element="Button" loading={boolean('loading', true)} />);
