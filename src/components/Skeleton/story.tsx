import { storiesOf } from '@storybook/react';
import React, { SFC } from 'react';
import Skeleton from '.';
import { boolean, number } from '@storybook/addon-knobs';
import Text from '../Text';

type DemoPropsType = {
    loading: boolean;
};

const Demo: SFC<DemoPropsType> = ({ loading }): JSX.Element => {
    if (loading) {
        return (
            <div>
                <Skeleton.Text lines={number('lines', 3)} baseWidth={number('baseWidth', 80)} />
            </div>
        );
    }

    return (
        <div>
            <Text>Leverage agile frameworks to provide a robust synopsis for high level overviews.</Text>
            <Text> Iterative approaches to corporate strategy foster collaborative</Text>
            <Text>thinking to further the overall value proposition.</Text>
        </div>
    );
};

storiesOf('Skeleton', module).add('Text', () => <Demo loading={boolean('loading', true)} />);
