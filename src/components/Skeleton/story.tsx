import { storiesOf } from '@storybook/react';
import React, { SFC } from 'react';
import Skeleton from '.';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import Text from '../Text';
import Button from '../Button';
import trbl, { PxCoordinateType } from '../../utility/trbl';
import { RectPropsType } from './Rect';
type DemoPropsType = {
    loading?: boolean;
    element: string;
};

const positionOptions = ['absolute', 'fixed', 'relative', 'static'];

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
    } else if (element === 'Button') {
        if (loading) {
            return <Skeleton.Button width={number('width', 139)} />;
        }

        return <Button title="The button has loaded" variant="primary" />;
    } else {
        return (
            <Skeleton.Rect
                width={text('width', '800px')}
                height={text('height', '600px')}
                minWidth={text('minWidth', '')}
                maxWidth={text('maxWidth', '')}
                minHeight={text('minHeight', '')}
                maxHeight={text('maxHeight', '')}
                borderRadius={text('radius', '3px')}
                position={select('position', positionOptions, positionOptions[0]) as RectPropsType['position']}
                left={text('left', '')}
                right={text('right', '')}
                top={text('top', '')}
                bottom={text('bottom', '')}
                margin={trbl(select('margin', [0, 6, 12], 0) as PxCoordinateType)}
            />
        );
    }
};

storiesOf('Skeleton', module).add('Text', () => <Demo element="Text" loading={boolean('loading', true)} />);
storiesOf('Skeleton', module).add('Button ⚠️', () => <Demo element="Button" loading={boolean('loading', true)} />);
storiesOf('Skeleton', module).add('Rect', () => <Demo element="Rect" />);
